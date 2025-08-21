import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AboutModal from './AboutModal'

const TypewriterText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length) {
      // Wait for 2 seconds when complete, then reset
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
        setIsTyping(true)
      }, 2000)
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text, isTyping])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-red-500">|</span>
    </span>
  )
}

const AboutSection = () => {
  const [experienceYears, setExperienceYears] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setExperienceYears(prev => {
          if (prev < 8) {
            return prev + 1
          }
          return prev
        })
      }, 100)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        {/* Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 text-center"
          >
            {/* WHO WE ARE heading with teal blue dot */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#139BB3' }}></div>
              <h3 className="text-2xl font-bold" style={{ color: '#139BB3' }}>WHO WE ARE</h3>
            </div>
            
            {/* Main content paragraph */}
            <p className="text-lg text-slate-700 leading-relaxed">
              We stand as one of Africa's rapidly advancing and prominent technology solution providers, boasting a team of exceptionally skilled and certified technology professionals dedicated to delivering unparalleled value to businesses of all sizes, spanning from small enterprises to large-scale corporations across diverse industries. Our core emphasis lies in the meticulous implementation of customized digital transformation solutions, precisely aligned with the unique needs and aspirations of each business.
            </p>
            
            {/* Experience counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center gap-2 text-2xl font-bold mt-8"
            >
              <span className="text-slate-900">+ {experienceYears} Years Of</span>
              <TypewriterText 
                text="Experience" 
                className="font-bold text-red-500" 
              />
            </motion.div>

            {/* More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-110 shadow-2xl"
                style={{ 
                  backgroundColor: '#139BB3',
                  boxShadow: '0 8px 25px rgba(19, 155, 179, 0.4)'
                }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Text with glow effect */}
                <span className="relative z-10 text-lg tracking-wide group-hover:text-shadow-lg">
                  More
                </span>
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Modal */}
        <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </section>
  )
}

export default AboutSection 