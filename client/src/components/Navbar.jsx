import React, { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
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
          <div id="mobileMenu" className="sm:hidden xl:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium">
              <a href="#hero" className='hover:text-blue-600'>Home</a>
              <a href="#about" className='hover:text-blue-600'>About</a>
              <a href="#features" className='hover:text-blue-600'>Features</a>
              <a href="#testimonials" className='hover:text-blue-600'>Testimonials</a>
              <a href="#services" className='hover:text-blue-600'>Services</a>
              <a href="#pricing" className='hover:text-blue-600'>Pricing</a>
              <a href="#contact" className='hover:text-blue-600'>Contact</a>

              <a
                href="https://truerp.in/demo/erp/"
                target="_blank"
                className="m-2 w-25 inline-block text-center bg-blue-900 text-white py-2 rounded-full"
              >
                Try Demo
              </a>
            </nav>
          </div>
      </header>
    </div>
  )
}
