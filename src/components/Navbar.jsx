import React from 'react'
import { motion } from 'framer-motion'
import { Menu, Phone, Mail, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const brandColors = {
  blue: '#44A9BF',
  red: '#DA393A',
  pink: '#DD8B8C',
  teal: '#B7D5DA',
  white: '#FEFEFE',
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Zoho ERP', href: '#' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const navigate = useNavigate()

  return (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="fixed w-full z-30 top-0 left-0"
  >
    {/* Top Information Bar */}
    <div className="bg-white border-b border-slate-200">
      <div className="container mx-auto flex justify-center items-center py-3 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <button onClick={() => navigate('/')}>
            <img src="/src/assets/itech logo.jpg" alt="ITECHLINK Logo" className="w-24 h-24 object-contain" />
          </button>
        </div>
        
        {/* Contact Information */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Phone className="w-5 h-5 text-[#DA393A]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#DA393A] rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="font-bold text-sm">Call Us: 08149360338</p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300"></div>
          
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#DA393A]" />
            <div>
              <p className="font-bold text-sm">Email</p>
              <p className="text-sm">info@itechlink@gmail.com</p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300"></div>
          
          {/* Address */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <MapPin className="w-5 h-5 text-[#DA393A]" />
            </div>
            <div>
              <p className="font-bold text-sm">25 ojuolobun close</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Navigation Bar */}
    <div className="bg-slate-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Spacer */}
        <div className="hidden md:block w-32"></div>
        
        {/* Navigation Links - Centered */}
        <div className="hidden md:flex space-x-8 justify-center flex-1">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => navigate(link.href)}
              className="text-white hover:text-[#DA393A] font-semibold transition-colors duration-200 relative group px-2 py-1 rounded"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DA393A] transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>
        
        {/* Call to Action Button - Right Side */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="hidden md:inline-block bg-[#DA393A] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#44A9BF] hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            Instant Call & Chat
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <button className="md:hidden text-white p-2 rounded-lg hover:bg-[#DA393A] hover:text-white transition-colors">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Navbar
