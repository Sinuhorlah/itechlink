import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import SoftwareDevelopmentPage from './components/SoftwareDevelopmentPage'
import WebDevelopmentPage from './components/WebDevelopmentPage'
import SecurityOptimizationPage from './components/SecurityOptimizationPage'
import DigitalTransformationPage from './components/DigitalTransformationPage'
import AboutUsPage from './components/AboutUsPage'
import ServicesPage from './components/ServicesPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import ContactPage from './components/ContactPage'
import LiveChat from './components/LiveChat'

// Home page component
const HomePage = () => (
  <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <Footer />
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/security-optimization" element={<SecurityOptimizationPage />} />
        <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
      </Routes>
      <LiveChat />
    </Router>
  )
}

export default App