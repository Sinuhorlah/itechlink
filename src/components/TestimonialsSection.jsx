import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, User } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    text: 'ITECHLINK transformed our business with their innovative solutions. Their team delivered exactly what we needed, on time and within budget.',
    rating: 5,
    company: 'TechCorp'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, FinFlow',
    text: 'Professional, reliable, and always ahead of the curve. ITECHLINK helped us modernize our entire infrastructure seamlessly.',
    rating: 5,
    company: 'FinFlow'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, HealthTech',
    text: 'Their security expertise gave us peace of mind. The implementation was smooth and the results exceeded our expectations.',
    rating: 5,
    company: 'HealthTech'
  },
]

const TestimonialsSection = () => (
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
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full mb-6"
        >
          <Quote className="w-4 h-4" />
          <span className="text-sm font-medium">Testimonials</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          What Our Clients
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Say About Us
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our clients have to say about their experience with ITECHLINK.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
              {/* Background quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-blue-400" />
              </div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-400 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection 