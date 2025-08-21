import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, ArrowLeft, Code2, Globe, ShieldCheck, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import logoImage from '../assets/itech logo.jpg'

const ServicesPage = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: 'Software Development',
      desc: 'Custom software solutions tailored to your business goals and requirements.',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Custom Applications', 'API Development', 'Database Design'],
      route: '/software-development'
    },
    {
      title: 'Web Development',
      desc: 'Modern, responsive websites and web applications that drive results.',
      icon: Globe,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development'],
      route: '/web-development'
    },
    {
      title: 'Security Optimization',
      desc: 'Protect your data and infrastructure with advanced security measures.',
      icon: ShieldCheck,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      route: '/security-optimization'
    },
    {
      title: 'Digital Transformation',
      desc: 'Consulting to modernize and future-proof your business operations.',
      icon: TrendingUp,
      gradient: 'from-[#44A9BF] to-[#DA393A]',
      features: ['Process Optimization', 'Cloud Migration', 'Strategy Consulting'],
      route: '/digital-transformation'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-opacity"
            >
              <img src={logoImage} alt="iTech Link Logo" className="w-24 h-24 object-contain" />
            </button>
          </div>
          
          {/* Contact Information - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#DA393A]" />
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
              <MapPin className="w-5 h-5 text-[#DA393A]" />
              <div>
                <p className="font-bold text-sm">25 ojuolobun close</p>
              </div>
            </div>
          </div>
          
          {/* Instant Call & Chat Button */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="bg-[#DA393A] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#44A9BF] hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              Instant Call & Chat
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

             {/* Hero Section */}
       <section className="relative bg-white py-8 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0">
           <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
           <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
         </div>
         
         {/* Subtle grid pattern overlay */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
       </section>

             {/* Services Section */}
       <section className="relative py-12 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full mb-6"
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From custom software development to digital transformation, we provide end-to-end IT solutions that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                                     <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                                             <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                                             <p className="text-gray-600 mb-6 flex-grow">
                        {service.desc}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                                                 {service.features.map((feature, featureIdx) => (
                           <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-500">
                             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                                             <button 
                         onClick={() => navigate(service.route)}
                         className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                       >
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ServicesPage
