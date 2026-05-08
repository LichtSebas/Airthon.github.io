import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectDetails from './components/ProjectDetails'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      
      <footer className="py-12 border-t border-white/5 bg-[var(--secondary-bg)]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} Sebastian Gonzales. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/LichtSebas" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors" style={{ cursor: 'pointer' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/sebastian-airthon-gonzales-aroni-13ba86344/" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors" style={{ cursor: 'pointer' }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
