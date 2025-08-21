import React, { useState } from "react";

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        We are iTech, a technology solutions provider committed to delivering
        innovative IT services and products tailored for businesses of all sizes.  
        Our team of experts leverages the latest technology trends to create solutions
        that help our clients achieve efficiency and growth.
      </p>

      {expanded && (
        <div className="mt-8">
          {/* Timeline Section */}
          <div className="bg-black py-16 rounded-2xl">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-4xl font-bold text-red-500">
                    Timeline
                  </h3>
                </div>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                  From digital marketing to comprehensive IT solutions, discover how we've evolved to become your trusted technology partner.
                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Central Horizontal Timeline Line */}
                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-600"></div>

                {/* Timeline Items */}
                <div className="relative flex justify-between items-center">
                  {/* Item 1 - iTech Marketing (Bottom Branch) */}
                  <div className="relative flex flex-col items-center">
                    {/* Content Box */}
                    <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                      <h4 className="text-xl font-bold mb-3 text-gray-300">iTech Marketing</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Our first venture into digital marketing, specializing in comprehensive digital marketing services and strategies.
                      </p>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-1 h-16 bg-gray-600"></div>
                    
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                    </div>
                    
                    {/* Logo */}
                    <div className="mt-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                      <img 
                        src="/src/assets/itech logo.jpg" 
                        alt="iTech Logo" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-red-500 text-xs font-bold mt-2">ITECH Marketing</p>
                  </div>

                  {/* Item 2 - Zoho CRM (Top Branch) */}
                  <div className="relative flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                      <span className="text-red-500 font-bold text-2xl">Z</span>
                    </div>
                    <p className="text-red-500 text-xs font-bold mb-4">Zoho CRM</p>
                    
                    {/* Content Box */}
                    <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                      <h4 className="text-xl font-bold mb-3 text-gray-300">Zoho CRM Integration</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Zoho CRM enables you to streamline your sales processes, track leads and nurture customer relationships effectively. This leads to improved customer satisfaction, increased sales and better insight into your business performance.
                      </p>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-1 h-16 bg-gray-600"></div>
                    
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                    </div>
                  </div>

                  {/* Item 3 - Web Development (Bottom Branch) */}
                  <div className="relative flex flex-col items-center">
                    {/* Content Box */}
                    <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                      <h4 className="text-xl font-bold mb-3 text-gray-300">Advanced Web Development</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Beyond the surface, our web development endeavors are fueled by cutting-edge technology. We leverage the latest frameworks, languages, and tools to build robust, scalable, and future-ready websites.
                      </p>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-1 h-16 bg-gray-600"></div>
                    
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                    </div>
                  </div>

                  {/* Item 4 - Cybersecurity (Top Branch) */}
                  <div className="relative flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-4 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white">
                      <span className="text-red-500 font-bold text-2xl">🔒</span>
                    </div>
                    <p className="text-red-500 text-xs font-bold mb-4">iTech & Co</p>
                    
                    {/* Content Box */}
                    <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                      <h4 className="text-xl font-bold mb-3 text-gray-300">Robust Cybersecurity Measures</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Access Controls and Authentication, Employee Training and Awareness. We implement cutting-edge cybersecurity protocols to protect against cyber threats, including malware, phishing attacks, and other malicious activities.
                      </p>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-1 h-16 bg-gray-600"></div>
                    
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                    </div>
                  </div>

                  {/* Item 5 - Future (Bottom Branch) */}
                  <div className="relative flex flex-col items-center">
                    {/* Content Box */}
                    <div className="mb-8 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 max-w-xs">
                      <h4 className="text-xl font-bold mb-3 text-gray-300">iTech Talents</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        iTech can help you grow your business by providing dedicated business development managers and training your existing teams to achieve maximum effectiveness.
                      </p>
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-1 h-16 bg-gray-600"></div>
                    
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg bg-red-500 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Icons */}
                <div className="flex justify-between items-end mt-16">
                  <div className="text-white text-2xl">CO</div>
                  <div className="text-green-500 text-2xl">🤖</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
              Founded in 2016, we started with a vision to bridge the gap between
              businesses and technology adoption in Nigeria and beyond. Over the years,
              we have served numerous clients across industries — from fintech and
              e-commerce to manufacturing and education.
            </p>
            <p className="mt-4">
              Our expertise spans software development, cloud integration,
              networking, cybersecurity, and IT consultancy. We believe in building
              long-term relationships by understanding our clients' needs and delivering
              results that exceed expectations.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-6 py-3 bg-[#139BB3] text-white rounded-lg hover:bg-[#0F7C90] transition-colors duration-300 font-semibold"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </section>
  );
} 