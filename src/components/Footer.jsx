import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Phone, MapPin, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
  <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Main footer content */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
                         <button 
               onClick={() => handleNavigation('/')}
               className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
             >
               <Zap className="text-blue-500 w-8 h-8" />
               <span className="font-black text-2xl tracking-tight">ITECHLINK</span>
             </button>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for digital transformation. We deliver innovative, secure, and customer-centric IT solutions that empower businesses to thrive in a digital world.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@itechlink.com" aria-label="Email" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                         <div className="space-y-3">
               {[
                 { name: 'Home', path: '/' },
                 { name: 'About', path: '/about' },
                 { name: 'Services', path: '/services' },
                 { name: 'Case Studies', path: '/case-studies' },
                 { name: 'Zoho ERP', path: '/contact' },
                 { name: 'Contact', path: '/contact' }
               ].map((link) => (
                 <button
                   key={link.name}
                   onClick={() => handleNavigation(link.path)}
                   className="block text-slate-300 hover:text-blue-400 transition-colors text-left w-full"
                 >
                   {link.name}
                 </button>
               ))}
             </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Services</h3>
                         <div className="space-y-3">
               {[
                 { name: 'Software Development', path: '/software-development' },
                 { name: 'Web Development', path: '/web-development' },
                 { name: 'Security Optimization', path: '/security-optimization' },
                 { name: 'Digital Transformation', path: '/digital-transformation' }
               ].map((service) => (
                 <button
                   key={service.name}
                   onClick={() => handleNavigation(service.path)}
                   className="block text-slate-300 hover:text-blue-400 transition-colors text-left w-full"
                 >
                   {service.name}
                 </button>
               ))}
             </div>
          </motion.div>
        </div>
      </div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-t border-slate-700 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <a 
             href="mailto:info@itechlink@gmail.com?subject=Inquiry about IT Services&body=Hello! I'm interested in your IT services. Please provide more information."
             className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
           >
             <Mail className="w-5 h-5 text-blue-400" />
             <div>
               <div className="text-sm text-slate-400">Email</div>
               <div className="font-medium">info@itechlink@gmail.com</div>
             </div>
           </a>
           <a 
             href="tel:+2348149360338"
             className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
           >
             <Phone className="w-5 h-5 text-blue-400" />
             <div>
               <div className="text-sm text-slate-400">Phone</div>
               <div className="font-medium">08149360338</div>
             </div>
           </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <div>
              <div className="text-sm text-slate-400">Location</div>
              <div className="font-medium">25 ojuolobun close victoria island lagos state</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-slate-700 py-6 text-center"
      >
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} ITECHLINK Solutions. All rights reserved.
        </div>
      </motion.div>
    </div>
     </footer>
   )
 }
 
 export default Footer
 