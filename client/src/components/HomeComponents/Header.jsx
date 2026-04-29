import React, { useState } from 'react'

export const Header = () => {
    const [active, setActive] = useState("")
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 m-2 sm:px-6">
            <div className="max-w-7xl mx-auto px-5 py-1 mt-2 bg-white shadow-lg rounded-lg ">
              <div className="flex items-center justify-between h-15">
                <a href="/home" className="flex items-center">
                  <img src="/logo.png" alt="Logo" className="h-13 w-auto" />
                </a>

                <nav className="hidden xl:flex space-x-8 text-gray-700 text-md">
                  <a href="#hero"  className={`transition duration-300 ${ active === "hero" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("hero")}>Home</a>
                  <a href="#about"  className={`transition duration-300 ${ active === "about" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("about")}>About</a>
                  <a href="#features"  className={`transition duration-300 ${ active === "features" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("features")}>Features</a>
                  <a href="#testimonials"  className={`transition duration-300 ${ active === "testimonials" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("testimonials")}>Testimonials</a>
                  <a href="#services"  className={`transition duration-300 ${ active === "services" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("services")}>Services</a>
                  <a href="#pricing"  className={`transition duration-300 ${ active === "pricing" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("pricing")}>Pricing</a>
                  <a href="#industries"  className={`transition duration-300 ${ active === "industries" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("industries")}>Industries</a>
                  <a href="#client"  className={`transition duration-300 ${ active === "client" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("client")}>Client</a>
                  <a href="#contact"  className={`transition duration-300 ${ active === "contact" ? "text-blue-900 font-semibold" : "text-gray-700 hover:text-blue-900"}`} onClick={()=> setActive("contact")}>Contact</a>
                </nav>
            <div className="xl:block flex items-center space-x-4">
              <a href="/login" target="_blank" className="bg-blue-900 text-white mx-2 px-4 py-2 rounded-full font-sm hover:bg-blue-800 transition">Try Demo</a>
              <button id="menuBtn" className="xl:hidden text-2xl text-gray-700"> ☰ </button>
            </div>
          </div>
        </div>
    </header>
  )
}
