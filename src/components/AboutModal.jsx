import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import logoImage from '../assets/itech logo.jpg'

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-8 z-10 shadow-sm mt-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <h2 className="text-4xl font-bold" style={{ color: '#139BB3' }}>
                About iTech-Link Solutions – Full Story
              </h2>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
                style={{ color: '#A51725' }}
              >
                <X size={28} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">
            {/* Our Journey */}
            <section>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                Our Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2016, iTech-Link Solutions began as a small team of passionate technology enthusiasts 
                with a vision to transform how businesses approach digital solutions. What started as a modest 
                startup has evolved into one of Africa's most trusted technology partners, serving clients across 
                multiple continents and industries.
              </p>
            </section>

            {/* Early Days */}
            <section>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                Early Days
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In our early days, we focused on providing basic IT support and web development services to 
                local businesses. Our commitment to quality and customer satisfaction quickly earned us a 
                reputation for reliability and innovation. We learned that success in technology isn't just 
                about technical skills—it's about understanding business needs and delivering solutions that 
                drive real results.
              </p>
            </section>

            {/* Growth */}
            <section>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                Growth & Expansion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As technology evolved, so did we. We expanded our services to include cloud solutions, 
                cybersecurity, digital transformation consulting, and custom software development. Our team 
                grew from a handful of developers to a diverse group of experts including data scientists, 
                UX designers, project managers, and business analysts. Today, we serve clients ranging from 
                startups to Fortune 500 companies, helping them navigate the complex digital landscape.
              </p>
            </section>

            {/* Philosophy */}
            <section>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                Our Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At iTech-Link Solutions, we believe that technology should serve people, not the other way around. 
                Our approach is built on three core principles: innovation, integrity, and impact. We innovate 
                by staying ahead of technology trends and finding creative solutions to complex problems. We 
                maintain integrity by being transparent, honest, and accountable in all our dealings. We create 
                impact by ensuring our solutions deliver measurable business value and positive change.
              </p>
            </section>

            {/* Looking Ahead */}
            <section>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                Looking Ahead
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As we look to the future, we're excited about the opportunities that emerging technologies 
                like artificial intelligence, blockchain, and the Internet of Things present. We're investing 
                heavily in research and development to ensure we can help our clients leverage these technologies 
                effectively. Our goal is to continue being a trusted partner in digital transformation, helping 
                businesses not just survive, but thrive in the digital age.
              </p>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-black">
              <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <h3 className="text-4xl font-bold text-red-500">
                      Timeline
                    </h3>
                  </div>
                  <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                    From digital marketing to comprehensive IT solutions, discover how we've evolved to become your trusted technology partner.
                  </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                  {/* Central Horizontal Timeline Line */}
                  <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-600"></div>

                  {/* Timeline Items */}
                  <div className="relative flex justify-between items-center">
                    {/* Item 1 - iTech Marketing (Bottom Branch) */}
                    <div className="relative flex flex-col items-center">
                      {/* Content Box */}
                      <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                        <h4 className="text-xl font-bold mb-3 text-gray-300">iTech Marketing</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Our first venture into digital marketing, specializing in comprehensive digital marketing services and strategies.
                        </p>
                      </div>
                      
                      {/* Vertical Line */}
                      <div className="w-1 h-16 bg-gray-600"></div>
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                      </div>
                      

                      
                      {/* Logo */}
                      <div className="mt-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                        <img 
                          src={logoImage} 
                          alt="iTech Logo" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <p className="text-red-500 text-xs font-bold mt-2">ITECH Marketing</p>
                    </div>

                    {/* Item 2 - Zoho CRM (Top Branch) */}
                    <div className="relative flex flex-col items-center">
                      {/* Logo */}
                      <div className="mb-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                        <span className="text-red-500 font-bold text-2xl">Z</span>
                      </div>
                      <p className="text-red-500 text-xs font-bold mb-4">Zoho CRM</p>
                      
                      {/* Content Box */}
                      <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                        <h4 className="text-xl font-bold mb-3 text-gray-300">Zoho CRM Integration</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Zoho CRM enables you to streamline your sales processes, track leads and nurture customer relationships effectively. This leads to improved customer satisfaction, increased sales and better insight into your business performance.
                        </p>
                      </div>
                      
                      {/* Vertical Line */}
                      <div className="w-1 h-16 bg-gray-600"></div>
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                      </div>
                      

                    </div>

                    {/* Item 3 - Web Development (Bottom Branch) */}
                    <div className="relative flex flex-col items-center">
                      {/* Content Box */}
                      <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                        <h4 className="text-xl font-bold mb-3 text-gray-300">Advanced Web Development</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Beyond the surface, our web development endeavors are fueled by cutting-edge technology. We leverage the latest frameworks, languages, and tools to build robust, scalable, and future-ready websites.
                        </p>
                      </div>
                      
                      {/* Vertical Line */}
                      <div className="w-1 h-16 bg-gray-600"></div>
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                      </div>
                      

                    </div>

                    {/* Item 4 - Cybersecurity (Top Branch) */}
                    <div className="relative flex flex-col items-center">
                      {/* Logo */}
                      <div className="mb-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                        <span className="text-red-500 font-bold text-2xl">🔒</span>
                      </div>
                      <p className="text-red-500 text-xs font-bold mb-4">iTech & Co</p>
                      
                      {/* Content Box */}
                      <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                        <h4 className="text-xl font-bold mb-3 text-gray-300">Robust Cybersecurity Measures</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Access Controls and Authentication, Employee Training and Awareness. We implement cutting-edge cybersecurity protocols to protect against cyber threats, including malware, phishing attacks, and other malicious activities.
                        </p>
                      </div>
                      
                      {/* Vertical Line */}
                      <div className="w-1 h-16 bg-gray-600"></div>
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                      </div>
                      

                    </div>

                    {/* Item 5 - Future (Bottom Branch) */}
                    <div className="relative flex flex-col items-center">
                      {/* Content Box */}
                      <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                        <h4 className="text-xl font-bold mb-3 text-gray-300">iTech Talents</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          iTech can help you grow your business by providing dedicated business development managers and training your existing teams to achieve maximum effectiveness.
                        </p>
                      </div>
                      
                      {/* Vertical Line */}
                      <div className="w-1 h-16 bg-gray-600"></div>
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                      </div>
                      
                      {/* Year Box */}
                      <div className="mt-4 px-4 py-2 rounded-full border border-red-400 bg-transparent">
                        <span className="text-white font-bold text-sm">2023</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Icons */}
                <div className="flex justify-between items-end mt-16">
                  <div className="text-white text-2xl">CO</div>
                  <div className="text-green-500 text-2xl">🤖</div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-8">
              {/* Main Footer Content */}
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                {/* Company Info */}
                <div>
                  <h4 className="text-2xl font-bold mb-4" style={{ color: '#139BB3' }}>
                    iTech-Link Solutions
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Your trusted partner for digital transformation, delivering innovative IT solutions that empower businesses to thrive in the digital world.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#139BB3' }}>
                      <span className="text-white font-bold">L</span>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A51725' }}>
                      <span className="text-white font-bold">T</span>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#139BB3' }}>
                      <span className="text-white font-bold">F</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#139BB3' }}>
                    Quick Links
                  </h5>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#139BB3' }}>
                    Contact Info
                  </h5>
                  <div className="space-y-3 text-gray-300">
                    <p>📍 123 Tech Street, Digital City</p>
                    <p>📧 info@itechlink.com</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>🌐 www.itechlink.com</p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-700 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 iTech-Link Solutions. All rights reserved.
                  </p>
                  <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                  </div>
                </div>
              </div>

              {/* Back to Home Button */}
              <div className="text-center mt-12">
                <button
                  onClick={onClose}
                  className="group relative px-10 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl"
                  style={{ 
                    backgroundColor: '#139BB3',
                    boxShadow: '0 8px 25px rgba(19, 155, 179, 0.4)'
                  }}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 text-lg tracking-wide">
                    Back to Home
                  </span>
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AboutModal 