import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './components/Header'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'

const ProjectDetails = lazy(() => import('./components/ProjectDetails'))
const Certificates = lazy(() => import('./components/Certificates'))

function App() {
  return (
    <div className="app">
      <FloatingContact />
      <Header />
      <Suspense
        fallback={
          <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <span>Cargando...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/certificados" element={<Certificates />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
