import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectDetails from './components/ProjectDetails'
import Certificates from './components/Certificates'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <FloatingContact />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/certificados" element={<Certificates />} />
      </Routes>
      
      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--bg-color)', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} Sebastian Gonzales. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="https://github.com/LichtSebas" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '500' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>GitHub</a>
            <a href="https://www.linkedin.com/in/sebastian-airthon-gonzales-aroni-13ba86344/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '500' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
