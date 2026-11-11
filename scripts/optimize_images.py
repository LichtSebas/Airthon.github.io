import os
from PIL import Image, ImageDraw, ImageFont

IMG_DIR = os.path.join("src", "imagenes")
PUBLIC_DIR = "public"

def optimize_portfolio_images():
    targets = [
        ("ARCAPage.png", "ARCAPage.webp", 1600, 85),
        ("ARCANEW.png", "ARCANEW.webp", 1600, 85),
        ("AudioExtractor.png", "AudioExtractor.webp", 1400, 85),
        ("SATPresention.PNG", "SATPresention.webp", 1400, 88),
        ("1logo.png", "1logo.webp", 800, 90),
        ("sebas.jfif", "sebas.webp", 1000, 88),
    ]

    for src_name, dst_name, max_w, quality in targets:
        src_path = os.path.join(IMG_DIR, src_name)
        dst_path = os.path.join(IMG_DIR, dst_name)
        if not os.path.exists(src_path):
            print(f"Skipping {src_name} (not found)")
            continue

        with Image.open(src_path) as img:
            orig_size = os.path.getsize(src_path) / 1024
            if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")

            if img.width > max_w:
                ratio = max_w / float(img.width)
                new_h = int(float(img.height) * ratio)
                img = img.resize((max_w, new_h), Image.Resampling.LANCZOS)

            img.save(dst_path, "WEBP", quality=quality, method=6)
            new_size = os.path.getsize(dst_path) / 1024
            print(f"{src_name} ({orig_size:.1f} KB) -> {dst_name} ({new_size:.1f} KB)")

    # Also create an Open Graph preview image in public/og-preview.jpg
    sebas_path = os.path.join(IMG_DIR, "sebas.jfif")
    if os.path.exists(sebas_path):
        og_w, og_h = 1200, 630
        banner = Image.new("RGB", (og_w, og_h), (10, 10, 14))
        draw = ImageDraw.Draw(banner)

        # Subtle accent border
        draw.rectangle([20, 20, og_w - 20, og_h - 20], outline=(243, 156, 18), width=2)

        with Image.open(sebas_path) as profile:
            profile = profile.convert("RGB")
            # Crop square and resize to 420x420
            min_side = min(profile.width, profile.height)
            left = (profile.width - min_side) // 2
            top = (profile.height - min_side) // 2
            profile = profile.crop((left, top, left + min_side, top + min_side))
            profile = profile.resize((420, 420), Image.Resampling.LANCZOS)
            banner.paste(profile, (700, 105))

        og_out = os.path.join(PUBLIC_DIR, "og-preview.jpg")
        banner.save(og_out, "JPEG", quality=88)
        print(f"Generated Open Graph image: {og_out} ({os.path.getsize(og_out)/1024:.1f} KB)")

if __name__ == "__main__":
    optimize_portfolio_images()

