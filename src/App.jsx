import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectDetails from './components/ProjectDetails'
import Certificates from './components/Certificates'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'

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
      <Footer />
    </div>
  )
}

export default App
