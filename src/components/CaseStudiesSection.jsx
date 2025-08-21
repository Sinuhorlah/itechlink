import React from 'react'
import { motion } from 'framer-motion'
import { FolderKanban, TrendingUp, Users, Award, ArrowRight, ShieldCheck, Users2 } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-Commerce Platform Revamp',
    summary: 'Boosted online sales by 40% for a retail client with a custom e-commerce platform.',
    industry: 'Retail',
    results: ['40% Sales Increase', '3x Faster Load Times', '99.9% Uptime'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: TrendingUp
  },
  {
    title: 'Banking Security Implementation',
    summary: 'Implemented advanced security for a fintech firm, reducing threats by 70%.',
    industry: 'Fintech',
    results: ['70% Threat Reduction', 'SOC 2 Compliance', 'Zero Breaches'],
    gradient: 'from-green-500 to-emerald-500',
    icon: ShieldCheck
  },
  {
    title: 'Healthcare Cloud Migration',
    summary: 'Seamless migration for a healthcare provider, improving uptime and compliance.',
    industry: 'Healthcare',
    results: ['50% Cost Reduction', 'HIPAA Compliant', '24/7 Support'],
    gradient: 'from-purple-500 to-pink-500',
    icon: Users
  },
]

const CaseStudiesSection = () => (
  <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50" />
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
          return (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 mb-3" />
                    <div className="text-sm font-medium opacity-90 mb-1">{study.industry}</div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {study.summary}
                  </p>
                  
                  {/* Results */}
                  <div className="space-y-3 mb-6">
                    {study.results.map((result, resultIdx) => (
                      <div key={resultIdx} className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">View Case Study</span>
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

export default CaseStudiesSection 