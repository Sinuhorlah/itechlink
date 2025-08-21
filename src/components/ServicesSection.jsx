import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Globe, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business goals and requirements.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Custom Applications', 'API Development', 'Database Design']
  },
  {
    title: 'Web Development',
    desc: 'Modern, responsive websites and web applications that drive results.',
    icon: Globe,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development']
  },
  {
    title: 'Security Optimization',
    desc: 'Protect your data and infrastructure with advanced security measures.',
    icon: ShieldCheck,
    gradient: 'from-green-500 to-emerald-500',
    features: ['Security Audits', 'Penetration Testing', 'Compliance']
  },
  {
    title: 'Digital Transformation',
    desc: 'Consulting to modernize and future-proof your business operations.',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    features: ['Process Optimization', 'Cloud Migration', 'Strategy Consulting']
  },
]

const ServicesSection = () => (
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
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">Our Services</span>
        </motion.div>
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
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 flex-grow">
                    {service.desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection 