import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, ArrowLeft, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import logoImage from '../assets/itech logo.jpg'
import teamImage from '../assets/image.png'

const AboutUsPage = () => {
  const navigate = useNavigate()
  const experienceYears = 5

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



      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
             {/* Left Column - Text Content */}
             <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="space-y-6"
             >
               {/* WHO WE ARE heading with teal blue dot */}
               <div className="flex items-center gap-3 mb-6">
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
                 className="flex items-center gap-2 text-2xl font-bold mt-8"
               >
                 <span className="text-slate-900">+ {experienceYears} Years Of</span>
                 <span className="font-bold text-red-500">Experience</span>
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
                     Learn More
                   </span>
                   
                   {/* Border glow on hover */}
                   <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                 </button>
               </motion.div>
             </motion.div>

             {/* Right Column - Image */}
             <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="relative"
             >
                               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={teamImage} 
                    alt="iTech Link team of 11 professionals in business attire" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
             </motion.div>
           </div>

                     {/* Why Choose Us Section */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 text-white"
           >
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Choose iTech Link?
            </h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
                                     <p className="text-white/90">
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

           {/* Client Testimonials Section */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 1.0 }}
             className="mt-16"
           >
             <div className="text-center mb-12">
               <h3 className="text-3xl font-bold text-gray-900 mb-4">
                 What Our Clients Say
               </h3>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                 Don't just take our word for it. Here's what our satisfied clients have to say about working with iTech Link.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 {
                   name: 'Sarah Johnson',
                   position: 'CEO, TechStart Solutions',
                   content: 'iTech Link transformed our business operations with their custom software solution. The team was professional, responsive, and delivered exactly what we needed.',
                   rating: 5
                 },
                 {
                   name: 'Michael Chen',
                   position: 'CTO, Global Retail Corp',
                   content: 'Working with iTech Link was a game-changer for our company. Their expertise in digital transformation helped us streamline processes and increase efficiency.',
                   rating: 5
                 },
                 {
                   name: 'Emily Rodriguez',
                   position: 'Operations Manager, HealthCare Plus',
                   content: 'The security optimization services from iTech Link gave us peace of mind. Their team is knowledgeable and always available when we need support.',
                   rating: 5
                 }
               ].map((testimonial, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                 >
                   {/* Rating Stars */}
                   <div className="flex justify-center mb-4">
                     {[...Array(testimonial.rating)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                       </svg>
                     ))}
                   </div>

                   {/* Testimonial Content */}
                   <p className="text-gray-700 mb-6 italic">
                     "{testimonial.content}"
                   </p>

                   {/* Client Info */}
                   <div className="text-center">
                     <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                     <p className="text-sm text-gray-600">{testimonial.position}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </section>
       
       {/* Footer */}
       <Footer />
    </div>
  )
}

export default AboutUsPage
