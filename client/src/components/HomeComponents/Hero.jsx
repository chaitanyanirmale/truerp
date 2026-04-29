import React from 'react'

export const Hero = () => {
  return (
    <section id='hero' className='flex items-center justify-center bg-[linear-gradient(135deg,rgba(59,130,246,0.05)_25%,transparent_50%)] md:grid-cols-2 md:py-30 xl:px-25 py-30'>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-10">
          <div>
            <div className='md:text-center xl:text-start '>
              <div className="mb-6 bg-slate-300 text-blue-950 inline-block p-3 rounded-full font-medium">
                  <i className="bi bi-gear-fill me-2"></i>
                  Working for your success
              </div>
              <h1 className="mb-8 text-3xl font-bold md:text-4xl xl:text-6xl text-gray-600 md:text-center xl:text-start">
                  Smart ERP for the Manufacturing &amp;<br />
                  Mechanical <br />
                  <span className="text-blue-800">Industry!</span>
              </h1>
              <p className="mb-8 mb-md-8">
                The TRUERP team - Powering India's Manufacturing Eco System.
              </p>
              <div className="flex flex-wrap gap-2 mb-16 md:justify-center xl:justify-start">
                  <a href="https://truerp.in/pdf/truerp.pdf" target="_blank" className="bg-blue-950 text-white p-4 rounded-full">DOWNLOAD BROCHURE</a>
                  <a href="https://www.youtube.com/watch?v=9UMA-uGlg50" className="text-blue-950 font-semibold flex items-center gap-2 p-3 text-lg">
                    <i className="bi bi-play-circle me-1 text-2xl"></i>
                    Play Video
                  </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center">
              <div className="p-2 flex flex-col items-center justify-center">
                <img src="/illustration-1.webp" alt="Hero Image" className="w-full" />
                <div className="absolute bottom-40 w-75 bg-white p-4 rounded-lg shadow-lg mt-4">
                  <p className="md:text-center">Smart ERP for the Manufacturing & Mechanical Industry
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}
