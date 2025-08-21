import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, Send, Clock, MessageSquare, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const ContactPage = () => {
  const navigate = useNavigate()

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['08149360338', '+234 814 936 0338'],
      color: 'from-blue-500 to-cyan-500',
             link: 'tel:+2348149360338'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@itechlink@gmail.com', 'support@itechlink.com'],
      color: 'from-purple-500 to-pink-500',
      link: 'mailto:info@itechlink@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['25 ojuolobun close', 'Victoria Island, Lagos State'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8AM - 6PM', 'Saturday: 9AM - 3PM'],
      color: 'from-[#44A9BF] to-[#DA393A]'
    }
  ]

     // WhatsApp link with your phone number (without + for WhatsApp API)
   const whatsappLink = `https://wa.me/2348149360338?text=Hello! I'm interested in your IT services. Can you help me?`

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
              <img src="/src/assets/itech logo.jpg" alt="iTech Link Logo" className="w-24 h-24 object-contain" />
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
           <div className="flex items-center gap-3">
             <a 
               href="mailto:info@itechlink@gmail.com?subject=Inquiry about IT Services&body=Hello! I'm interested in your IT services. Please provide more information."
               className="bg-[#44A9BF] text-white px-4 py-3 rounded-lg font-bold shadow-lg hover:bg-[#DA393A] hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
             >
               <Mail className="w-4 h-4" />
               Email Us
             </a>
                            <a 
                 href="tel:+2348149360338"
                 className="bg-[#DA393A] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#44A9BF] hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
               >
               <Phone className="w-4 h-4" />
               Call Now
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

      {/* Contact Section */}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-600 px-4 py-2 rounded-full mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Contact Us
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how our IT solutions can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="security-optimization">Security Optimization</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="zoho-erp">Zoho ERP</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#44A9BF] to-[#DA393A] text-white py-4 px-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                <p className="text-gray-600 mb-8">
                  We're here to help you transform your business with cutting-edge IT solutions. 
                  Reach out to us and let's start building something amazing together.
                </p>
              </div>

                             <div className="space-y-6">
                 {contactInfo.map((info, idx) => {
                   const Icon = info.icon
                   return (
                     <motion.div
                       key={info.title}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                       className={`flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${info.link ? 'cursor-pointer' : ''}`}
                       onClick={info.link ? () => window.open(info.link, '_blank') : undefined}
                     >
                       <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex-shrink-0`}>
                         <Icon className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                         {info.details.map((detail, detailIdx) => (
                           <p key={detailIdx} className="text-gray-600">
                             {detail}
                           </p>
                         ))}
                         {info.link && (
                           <p className="text-blue-600 text-sm mt-2 font-medium">Click to contact →</p>
                         )}
                       </div>
                     </motion.div>
                   )
                 })}
               </div>

               {/* WhatsApp Contact Card */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.9 }}
                 className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer border-2 border-green-200"
                 onClick={() => window.open(whatsappLink, '_blank')}
               >
                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex-shrink-0">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                   <p className="text-gray-600 mb-2">Chat with us on WhatsApp</p>
                   <p className="text-green-600 text-sm font-medium">Click to start chat →</p>
                 </div>
               </motion.div>

              {/* Quick Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-gradient-to-r from-[#44A9BF] to-[#DA393A] rounded-2xl p-8 text-white text-center"
              >
                <h4 className="text-xl font-bold mb-4">Need immediate assistance?</h4>
                <p className="text-blue-100 mb-6">
                  Our team is ready to help you with any urgent IT needs or questions.
                </p>
                                 <a
                   href="tel:+2348149360338"
                   className="inline-flex items-center gap-2 bg-white text-[#DA393A] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                 >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
