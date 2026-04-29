import React from 'react'

export const About = () => {
  return (
    <section id="about" className="flex items-center justify-center bg-white pt-10 pb-10 xl:px-20 mb-10 overflow-hidden">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:pt-20">
            <div className="col-xl-5 w-full px-10">
              <h1 className='mb-2'>
                <span className="text-blue-800 font-bold">MORE ABOUT US</span>
              </h1>
              <h1 className="text-slate-600 font-bold text-3xl mb-4">Powering Efficiency. Driving Growth. Simplifying Operations.</h1>
              <p className="mb-4">TRUERP is a next-generation ERP solution built specifically for the mechanical and manufacturing sector. It brings every part of your business — from quotations to payroll — into one smart, automated, and data-driven platform.</p>

              <div className="row xl:flex sm:grid sm:grid-cols-2 justify-between">
                <div className=" col-md-6 p-2">
                  <ul className="text-gray-900 ">
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Centralized Data Management</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Accuracy & Error Reduction</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Real-Time Insights</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Improved Collaboration</li>
                    <li className=''><i className="bi bi-check-circle-fill text-blue-800"></i> Scalability</li>
                  </ul>
                </div>
                <div className="col-md-6 p-2">
                  <ul className="feature-list">
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Automation of Processes</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Enhanced Security</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Audit & Traceability</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Integration with Other Systems</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Professional Reporting & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6 px-10">
              <div className="relative">
                <div className="w-140 relative">
                  <img src="/main1.jpg" alt="Business Meeting" className="w-full rounded-2xl object-cover" />
                  <img src="/main2.png" alt="Team Discussion" className="absolute -left-12 top-1/4 w-48 z-10 rounded-2xl border-4 border-white shadow-lg" />
                </div>
                <div className="absolute bottom-6 right-6 bg-blue-800 text-white px-6 py-4 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2">
                  <h1 className='text-3xl'>15+ <span className='text-lg font-semibold'>Years</span></h1>
                  <p className="text-sm opacity-90">Of experience in business service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
