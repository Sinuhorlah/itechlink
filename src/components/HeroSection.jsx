import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const brandColors = {
  blue: '#44A9BF',
  red: '#DA393A',
  pink: '#DD8B8C',
  teal: '#B7D5DA',
  white: '#FEFEFE',
}

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Digital transformation",
    "Web Development", 
    "Software Solutions",
    "IT Consulting"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
        }}
      />
      
      {/* Dark Red Overlay */}
      {/* <div className="absolute inset-0 bg-red-200 bg-opacity-80"></div> */}
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center mt-12 justify-center text-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-white"
          >
            {texts[currentText]}
          </motion.h1>
          
          {/* Sub-heading/Breadcrumb */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl font-medium text-white opacity-90"
          >
            Home - {texts[currentText]}
          </motion.p>
          
          {/* Small Red Dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-3 h-3 bg-red-500 rounded-full mt-8 animate-pulse"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
 