import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Home = () => {
  return (
    <div className='bg-gray-100 '>
    <header id="header" className="fixed top-0 w-full bg-white shadow-md z-50 m-2 border-2 border-gray-200 rounded-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/home" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </a>

              <nav className="hidden xl:flex space-x-8 font-medium text-gray-700">
                <a href="#hero" className="text-blue-600 hover:text-blue-700">Home</a>
                <a href="#about" className="hover:text-blue-600">About</a>
                <a href="#features" className="hover:text-blue-600">Features</a>
                <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
                <a href="#services" className="hover:text-blue-600">Services</a>
                <a href="#pricing" className="hover:text-blue-600">Pricing</a>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
              </nav>

      
              <div className="xl:block flex items-center space-x-4">
                <a
                  href="https://truerp.in/demo/erp/"
                  target="_blank"
                  className="bg-blue-900 text-white mx-2 px-3 py-1.5 rounded-full font-medium hover:bg-blue-800 transition"
                >
                  Try Demo
                </a>
                <button onClick={() => setIsMenuOpen(true)} id="menuBtn" className="xl:hidden text-2xl text-gray-700">
                ☰
              </button>
              </div>
            </div>
          </div>
    </header>
    <section id='hero' className='flex items-center justify-center bg-gray-100 md:grid-cols-2 md:py-30 xl:py-20 '>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-10">
        <div>
          <div className='md:text-center'>
            <div className="mb-6 bg-slate-300 text-blue-950 inline-block p-3 rounded-full font-medium">
                <i className="bi bi-gear-fill me-2"></i>
                Working for your success
            </div>
            <h1 className="mb-8 text-3xl font-semibold   md:text-4xl xl:text-5xl text-gray-600 md:text-center">
                Smart ERP for the Manufacturing &amp;<br />
                Mechanical <br />
                <span className="text-blue-800">Industry!</span>
            </h1>
            <p className="mb-8 mb-md-8">
               The TRUERP team - Powering India's Manufacturing Eco System.
            </p>
            <div className="flex flex-wrap gap-2 mb-16 md:justify-center">
                <a href="https://truerp.in/pdf/truerp.pdf" target="_blank" className="bg-blue-950 text-white p-4 rounded-full">DOWNLOAD BROCHURE</a>
                <a href="https://www.youtube.com/watch?v=9UMA-uGlg50" className="text-blue-950 font-semibold flex items-center gap-2 p-3 text-lg">
                  <i className="bi bi-play-circle me-1 text-2xl"></i>
                  Play Video
                </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-center">
            <div className="w-125 p-2 flex flex-col items-center justify-center">
              <img src="/illustration-1.webp" alt="Hero Image" className="w-full" />
              <div className="w-75 bg-white p-4 rounded-lg shadow-lg mt-4">
                <p className="md:text-center">Smart ERP for the Manufacturing & Mechanical Industry
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section id="about" className="flex items-center justify-center bg-gray-100  md:px-10 xl:px-16 ">
      <div className="" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-20">
          <div className="col-xl-5 w-full px-10" data-aos="fade-up" data-aos-delay="200">
            <span className="text-blue-800 font-bold">MORE ABOUT US</span>
            <h2 className="text-slate-600 font-bold text-3xl mb-4">Powering Efficiency. Driving Growth. Simplifying Operations.</h2>
            <p className="mb-4">TRUERP is a next-generation ERP solution built specifically for the mechanical and manufacturing sector. It brings every part of your business — from quotations to payroll — into one smart, automated, and data-driven platform.</p>

            <div className="row md:flex justify-between">
              <div className=" col-md-6 p-2">
                <ul className="text-gray-900 ">
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Centralized Data Management</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Accuracy & Error Reduction</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Real-Time Insights</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Improved Collaboration</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Scalability</li>
                </ul>
              </div>
              <div className="col-md-6 p-2">
                <ul className="feature-list">
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Automation of Processes</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Enhanced Security</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Audit & Traceability</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Integration with Other Systems</li>
                  <li className='mb-2'><i className="bi bi-check-circle-fill text-blue-800"></i> Professional Reporting & Analytics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-6 px-10">
            <div className="relative">
              <div className="w-140 relative">
                <img src="/main1.jpg" alt="Business Meeting" className="w-full rounded-2xl object-cover" />
                <img src="/main2.png" alt="Team Discussion" className="absolute -left-12 top-1/4 w-48 rounded-2xl border-4 border-white shadow-lg" />
              </div>
              <div className="absolute bottom-6 right-6 bg-blue-800 text-white px-6 py-4 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2">
                <h3 className='text-3xl'>15+ <span className='text-lg font-semibold'>Years</span></h3>
                <p className="text-sm opacity-90">Of experience in business service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
