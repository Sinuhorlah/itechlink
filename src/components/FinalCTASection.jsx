import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightCircle, Sparkles, Zap, Target } from 'lucide-react'

const FinalCTASection = () => (
  <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-32 left-1/4 w-16 h-16 border border-cyan-400/20 rounded-full"
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Ready to Get Started?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Ready to Transform
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Your Business?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Contact ITECHLINK today for a free consultation and discover how we can help you achieve your digital goals.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { icon: Sparkles, text: "Free Consultation" },
            { icon: Zap, text: "Quick Response" },
            { icon: Target, text: "Results Guaranteed" }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300">
              <feature.icon className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Get Started <ArrowRightCircle className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
          >
            Schedule a Call
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default FinalCTASection 