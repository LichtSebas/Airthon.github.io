import os
import re
import json
import sys
import hashlib
import fitz  # PyMuPDF

# Configurar codificación de consola para evitar UnicodeEncodeError en Windows
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        pass


# Rutas del proyecto
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF_DIR = os.path.join(PROJECT_ROOT, "Certificados")
PUBLIC_DIR = os.path.join(PROJECT_ROOT, "public", "certificados")
JSON_PATH = os.path.join(PROJECT_ROOT, "src", "data", "certificates.json")
MAPPINGS_PATH = os.path.join(PROJECT_ROOT, "src", "data", "logo_mappings.json")

# Asegurar que existan los directorios
os.makedirs(PDF_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(os.path.dirname(JSON_PATH), exist_ok=True)

# Cargar y guardar mapeo de logos
def load_logo_mappings():
    if os.path.exists(MAPPINGS_PATH):
        try:
            with open(MAPPINGS_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_logo_mappings(mappings):
    try:
        with open(MAPPINGS_PATH, "w", encoding="utf-8") as f:
            json.dump(mappings, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[ERROR] No se pudo guardar el mapeo de logos: {e}")

# Listas de meses para detección de fechas
MONTHS_ES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
MONTHS_EN = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

def clean_text(text):
    # Reemplazar múltiples espacios y saltos de línea por espacios simples
    return re.sub(r'\s+', ' ', text).strip()

def guess_issuer(text):
    text_lower = text.lower()
    issuers = {
        "platzi": "Platzi",
        "udemy": "Udemy",
        "coursera": "Coursera",
        "meta": "Meta",
        "google": "Google",
        "oracle": "Oracle",
        "microsoft": "Microsoft",
        "ibm": "IBM",
        "harvard": "Harvard",
        "edx": "edX",
        "crehana": "Crehana",
        "coderhouse": "Coderhouse",
        "cisco": "Cisco Networking Academy",
        "scrum": "Scrum Alliance"
    }
    for key, name in issuers.items():
        if key in text_lower:
            return name
    return "Por definir"

def guess_date(text):
    text_lower = text.lower()
    
    # Buscar patrones como "Mes Año" o "Mes de Año"
    # Buscar año de 4 dígitos entre 2018 y 2030
    year_match = re.search(r'\b(20[12][0-9])\b', text)
    year = year_match.group(1) if year_match else None
    
    if year:
        # Buscar mes en español
        for i, m in enumerate(MONTHS_ES):
            if m in text_lower:
                return f"{m.capitalize()} {year}"
        # Buscar mes en inglés
        for i, m in enumerate(MONTHS_EN):
            if m in text_lower:
                translation = MONTHS_ES[i].capitalize()
                return f"{translation} {year}"
                
    # Fallback si encontramos un formato tipo DD/MM/AAAA o DD-MM-AAAA
    date_match = re.search(r'\b(\d{1,2})[/\-.](\d{1,2})[/\-.](20[12][0-9])\b', text)
    if date_match:
        day, month_idx, year = date_match.groups()
        month_idx = int(month_idx) - 1
        if 0 <= month_idx < 12:
            return f"{MONTHS_ES[month_idx].capitalize()} {year}"
            
    return "Por definir"

def guess_title(text, filename):
    # Limpiamos el texto
    text_cleaned = clean_text(text)
    
    # Excluir nombres comunes que puedan ser del estudiante
    name_patterns = r"(sebastian|airthon|gonzales|aroni)"
    
    # Patrones comunes de certificados en español
    patterns_es = [
        r"por haber aprobado el curso (?:de |de desarrollo |en )?([^,.]+)",
        r"completo satisfactoriamente el curso (?:de )?([^,.]+)",
        r"por haber concluido el curso (?:de |de desarrollo |en )?([^,.]+)",
        r"certifica que .* aprobó el curso (?:de )?([^,.]+)",
        r"otorga el presente certificado a .* por su participación en ([^,.]+)",
        r"certificado de (?:aprobación|participación) (?:en )?([^,.]+)"
    ]
    
    # Patrones en inglés
    patterns_en = [
        r"successfully completed the course (?:in |on )?([^,.]+)",
        r"has successfully completed (?:the course |the )?([^,.]+)",
        r"certificate of completion (?:in |on |for )?([^,.]+)"
    ]
    
    all_patterns = patterns_es + patterns_en
    
    for pat in all_patterns:
        match = re.search(pat, text_cleaned, re.IGNORECASE)
        if match:
            candidate = match.group(1).strip()
            # Limpiar nombre del candidato si sale con el nombre de la persona
            candidate = re.sub(name_patterns, "", candidate, flags=re.IGNORECASE).strip()
            # Quitar preposiciones iniciales que queden sueltas
            candidate = re.sub(r'^(a|de|para|en)\s+', '', candidate, flags=re.IGNORECASE).strip()
            if len(candidate) > 3 and len(candidate) < 100:
                # Capitalizar primera letra de cada palabra
                return candidate.title()
                
    # Si falla, formatear el nombre del archivo
    name_without_ext = os.path.splitext(filename)[0]
    # Reemplazar guiones y guiones bajos por espacios
    formatted = re.sub(r'[_\-]+', ' ', name_without_ext)
    return formatted.strip().title()

def parse_certificate_template(text, filename):
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    if len(lines) >= 5 and re.match(r'^\d{1,2}/\d{1,2}/\d{2}$', lines[1]):
        title = lines[2]
        raw_date = lines[1]
        
        # Parsear fecha
        date_parts = raw_date.split('/')
        formatted_date = "Por definir"
        if len(date_parts) == 3:
            day, month, year = date_parts
            full_year = f"20{year}" if len(year) == 2 else year
            month_idx = int(month) - 1
            if 0 <= month_idx < 12:
                formatted_date = f"{MONTHS_ES[month_idx].capitalize()} {full_year}"
                
        # Por defecto asociamos a "Plataforma Educativa" si no lo dice el texto
        issuer = "Plataforma Educativa"
        
        return {
            "title": title,
            "issuer": issuer,
            "date": formatted_date,
            "description": f"Certificación obtenida al completar exitosamente el curso de {title}."
        }
    return None

def get_logo_hash(doc):
    for page in doc:
        for img_info in page.get_images():
            xref = img_info[0]
            width = img_info[2]
            height = img_info[3]
            colorspace = img_info[5]
            aspect_ratio = width / height if height > 0 else 0
            
            # Un logo suele ser cuadrado (aspect ratio ~ 1), de tamaño moderado y a color (RGB)
            if 0.8 <= aspect_ratio <= 1.2 and width < 1500 and colorspace == "DeviceRGB":
                try:
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]
                    return hashlib.md5(image_bytes).hexdigest()
                except Exception:
                    continue
    return None

def ask_user_for_issuer(title):
    if not sys.stdin.isatty():
        return "Por definir"
    try:
        print(f"\n[?] Se detectó un nuevo certificado: '{title}' con un logo no registrado.")
        issuer = input("¿Quién emitió este certificado? (Ej: Becas Grupo Romero, Udemy, Platzi): ").strip()
        return issuer if issuer else "Por definir"
    except (EOFError, Exception):
        return "Por definir"

def process_pdf(pdf_path, filename):
    cert_id = os.path.splitext(filename)[0].lower().replace(" ", "-")
    png_filename = f"{cert_id}.png"
    png_path = os.path.join(PUBLIC_DIR, png_filename)
    
    # 1. Renderizar primera página como imagen PNG
    try:
        doc = fitz.open(pdf_path)
        page = doc[0]
        
        # Ajustar resolución (zoom=2 da aprox 150 DPI, ideal para web)
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        pix.save(png_path)
        print(f"[OK] Imagen generada: {png_filename}")
        
        # 2. Extraer texto para metadatos
        text = page.get_text()
        parsed = parse_certificate_template(text, filename)
        
        if parsed:
            title = parsed["title"]
            issuer = parsed["issuer"]
            date = parsed["date"]
            description = parsed["description"]
        else:
            title = guess_title(text, filename)
            issuer = guess_issuer(text)
            date = guess_date(text)
            description = f"Certificación obtenida al completar exitosamente el curso {title} dictado por {issuer}."
            
        # 3. Detección de emisor por firma del logo (MD5)
        logo_hash = get_logo_hash(doc)
        if logo_hash:
            mappings = load_logo_mappings()
            if logo_hash in mappings:
                issuer = mappings[logo_hash]
                # Reconstruir la descripción con el emisor correcto
                if parsed:
                    description = f"Certificación obtenida al completar exitosamente el curso de {title} dictado por {issuer}."
                else:
                    description = f"Certificación obtenida al completar exitosamente el curso {title} dictado por {issuer}."
            else:
                user_issuer = ask_user_for_issuer(title)
                if user_issuer != "Por definir":
                    issuer = user_issuer
                    mappings[logo_hash] = issuer
                    save_logo_mappings(mappings)
                    if parsed:
                        description = f"Certificación obtenida al completar exitosamente el curso de {title} dictado por {issuer}."
                    else:
                        description = f"Certificación obtenida al completar exitosamente el curso {title} dictado por {issuer}."
        
        doc.close()
        
        return {
            "id": cert_id,
            "title": title,
            "issuer": issuer,
            "date": date,
            "image": f"/certificados/{png_filename}",
            "description": description,
            "skills": [issuer] if issuer != "Por definir" and issuer != "Plataforma Educativa" else [],
            "credentialUrl": ""
        }
    except Exception as e:
        print(f"[ERROR] Error procesando {filename}: {e}")
        return None

def main():
    print("Iniciando escaneo de certificados en:", PDF_DIR)
    
    # Cargar datos existentes si el archivo JSON ya existe
    existing_data = {}
    if os.path.exists(JSON_PATH):
        try:
            with open(JSON_PATH, "r", encoding="utf-8") as f:
                content = json.load(f)
                existing_data = {item["id"]: item for item in content}
                print(f"Cargados {len(existing_data)} certificados existentes del JSON.")
        except Exception as e:
            print(f"Advertencia al leer JSON existente: {e}")
            
    updated_certificates = []
    
    # Buscar archivos PDF
    pdf_files = [f for f in os.listdir(PDF_DIR) if f.endswith(".pdf")]
    
    if not pdf_files:
        print("\n--> No se encontraron archivos .pdf en la carpeta 'Certificados'.")
        print("--> Por favor, coloca tus PDFs ahí y vuelve a ejecutar el script.\n")
        # Si no hay archivos, creamos un JSON vacío o dejamos el existente
        if not existing_data:
            with open(JSON_PATH, "w", encoding="utf-8") as f:
                json.dump([], f, indent=2, ensure_ascii=False)
        return

    for filename in pdf_files:
        pdf_path = os.path.join(PDF_DIR, filename)
        cert_id = os.path.splitext(filename)[0].lower().replace(" ", "-")
        
        print(f"\nProcesando: {filename}...")
        
        # Si ya existe en el JSON, mantenemos la info manual del usuario y solo actualizamos la imagen PNG
        if cert_id in existing_data:
            print(f"-> Encontrado en JSON. Conservando metadatos existentes.")
            # Renderizar imagen de todas formas por si cambió el PDF
            try:
                doc = fitz.open(pdf_path)
                page = doc[0]
                zoom = 2.0
                mat = fitz.Matrix(zoom, zoom)
                pix = page.get_pixmap(matrix=mat)
                png_path = os.path.join(PUBLIC_DIR, f"{cert_id}.png")
                pix.save(png_path)
                doc.close()
            except Exception as e:
                print(f"   [ERROR] Error regenerando imagen: {e}")
                
            updated_certificates.append(existing_data[cert_id])
        else:
            # Nuevo certificado: extraer metadatos
            new_cert = process_pdf(pdf_path, filename)
            if new_cert:
                updated_certificates.append(new_cert)
                print(f"-> Nuevo certificado añadido al JSON.")

    # Guardar en archivo JSON ordenado
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(updated_certificates, f, indent=2, ensure_ascii=False)
        
    print(f"\nProceso finalizado. Se guardaron {len(updated_certificates)} certificados en: {JSON_PATH}")

if __name__ == "__main__":
    main()
