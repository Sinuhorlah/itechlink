import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, ArrowLeft, FolderKanban, TrendingUp, Users, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import logoImage from '../assets/itech logo.jpg'

const CaseStudiesPage = () => {
  const navigate = useNavigate()

  const caseStudies = [
    {
      title: 'E-Commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce solution that increased online sales by 300% and improved customer experience.',
      results: ['300% increase in online sales', 'Improved customer experience', 'Scalable platform'],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Developed a comprehensive healthcare management system that streamlined patient care and administrative processes.',
      results: ['Streamlined patient care', 'Reduced administrative overhead', 'Improved data security'],
      icon: Users,
      color: 'green'
    },
    {
      title: 'Financial Analytics Dashboard',
      industry: 'Finance',
      description: 'Created a real-time financial analytics dashboard that provided insights for better decision-making.',
      results: ['Real-time insights', 'Better decision-making', 'Improved efficiency'],
      icon: Zap,
      color: 'purple'
    }
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CASE STUDIES | ITECHLINK SOLUTIONS
            </h1>
            <div className="text-white/80 text-lg">
              Home - Case Studies
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 text-blue-600 px-4 py-2 rounded-full mb-6"
            >
              <FolderKanban className="w-4 h-4" />
              <span className="text-sm font-medium">Case Studies</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Success Stories
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                That Drive Results
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve their digital transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => {
              const Icon = study.icon
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600'
              }
              
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${colorClasses[study.color]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-semibold mb-4">
                        {study.industry}
                      </p>
                      <p className="text-slate-600 mb-6 flex-grow">
                        {study.description}
                      </p>
                      
                      {/* Results */}
                      <div className="space-y-2 mb-6">
                        {study.results.map((result, resultIdx) => (
                          <div key={resultIdx} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {result}
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <button className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        <span className="text-sm">View Details</span>
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

export default CaseStudiesPage
