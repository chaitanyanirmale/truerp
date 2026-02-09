import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Home = () => {
  return (
    <div className='bg-gray-100 '>
    <Navbar />
    <section id='#hero' className='flex items-center justify-center bg-gray-100 md:grid-cols-2 pt-40 px-4 md:px-16'>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div>
          <div className='md:text-center'>
            <div className="mb-6  bg-slate-300 text-blue-950 inline-block p-3 rounded-full font-medium">
                <i className="bi bi-gear-fill me-2"></i>
                Working for your success
            </div>
            <h1 className="mb-8 text-3xl font-semibold   md:text-4xl xl:text-6xl text-gray-600 md:text-center">
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
            <div className="w-125 p-2">
              <img src="/illustration-1.webp" alt="Hero Image" className="w-full" />
              <div className="w-75 bg-white p-4 rounded-lg shadow-lg mt-4">
                <p className="md:text-center">Smart ERP for the Manufacturing & Mechanical Industry
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}
