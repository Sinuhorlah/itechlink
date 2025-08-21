import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, TrendingUp, Users, Zap, ArrowLeft, Cloud, Target, Settings, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import logoImage from '../assets/itech logo.jpg'

const DigitalTransformationPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar - Similar to the image */}
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

      {/* Hero Section with Background Title */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        {/* Background decorative elements - same as services section */}
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
              DIGITAL TRANSFORMATION SOLUTIONS IN NIGERIA | ITECHLINK SOLUTIONS
            </h1>
            <div className="text-white/80 text-lg">
              Home - Services - Digital Transformation
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modernize Your Business for the Digital Age
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The way businesses operate is changing rapidly. To stay competitive, you need to adapt, modernize, and prepare for the future. At iTech Link, we help organizations embrace digital transformation by rethinking processes, adopting modern technologies, and creating strategies that make your business more agile, efficient, and future-ready.
            </p>
          </motion.div>

          {/* Our Transformation Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Transformation Process
            </h3>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  title: 'Assessment & Strategy',
                  desc: 'We evaluate your current operations and identify opportunities for improvement.',
                  icon: Target,
                  color: 'blue'
                },
                {
                  title: 'Process Optimization',
                  desc: 'Streamlining workflows to save time, reduce costs, and eliminate inefficiencies.',
                  icon: Settings,
                  color: 'green'
                },
                {
                  title: 'Cloud Migration',
                  desc: 'Moving your business systems securely to the cloud for flexibility and scalability.',
                  icon: Cloud,
                  color: 'purple'
                },
                {
                  title: 'Implementation & Training',
                  desc: 'Helping your team adapt to new systems with minimal disruption.',
                  icon: Users,
                  color: 'orange'
                },
                {
                  title: 'Ongoing Consulting',
                  desc: 'Continuous guidance to ensure long-term success.',
                  icon: TrendingUp,
                  color: 'red'
                }
              ].map((item, index) => {
                const Icon = item.icon
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600',
                  red: 'bg-red-100 text-red-600'
                }
                
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <div className={`w-12 h-12 ${colorClasses[item.color]} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* What We Offer Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What We Offer
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Process Optimization – Redesigning workflows for speed, accuracy, and efficiency.',
                'Cloud Migration – Securely moving data and systems to the cloud for flexibility.',
                'Strategy Consulting – Crafting a roadmap for digital growth and competitiveness.',
                'Change Management – Ensuring smooth adoption of new technologies within your team.',
                'Business Innovation – Helping you leverage digital tools to create new opportunities.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Digital Transformation Matters Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Digital Transformation Matters for Your Business
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Stay Competitive',
                  desc: 'Keep pace with changing industries and customer expectations.',
                  icon: TrendingUp,
                  color: 'blue'
                },
                {
                  title: 'Work Smarter',
                  desc: 'Automate manual tasks and free up time for growth.',
                  icon: Zap,
                  color: 'green'
                },
                {
                  title: 'Enhance Customer Experience',
                  desc: 'Deliver faster, more personalized services.',
                  icon: Users,
                  color: 'purple'
                },
                {
                  title: 'Boost Flexibility',
                  desc: 'Work from anywhere, anytime with cloud-based solutions.',
                  icon: Cloud,
                  color: 'orange'
                },
                {
                  title: 'Future-Proof Your Business',
                  desc: 'Prepare for market changes and new opportunities.',
                  icon: Lightbulb,
                  color: 'red'
                }
              ].map((item, index) => {
                const Icon = item.icon
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600',
                  red: 'bg-red-100 text-red-600'
                }
                
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className={`w-12 h-12 ${colorClasses[item.color]} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Choose iTech Link?
            </h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              {[
                {
                  title: 'Official Zoho Partner',
                  desc: 'Expertise in implementing industry-leading cloud-based solutions.'
                },
                {
                  title: 'Tailored Solutions',
                  desc: 'Custom IT services to match your unique business needs.'
                },
                {
                  title: 'Comprehensive Support',
                  desc: 'From hardware supply to software training, we\'re your one-stop IT partner.'
                },
                {
                  title: 'Proven Results',
                  desc: 'Track record of successful digital transformations across industries.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">
                    {item.title}
                  </h4>
                  <p className="text-blue-100">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-xl font-semibold text-white mb-4">
                Let us help you take your IT operations to the next level!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DigitalTransformationPage
