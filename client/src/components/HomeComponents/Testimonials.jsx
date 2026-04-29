import React from 'react'

export const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-gray-100 pt-20'>
        <div className="text-center text-slate-700">
          <h1 className='text-3xl font-semibold'>Testimonials</h1>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
          <p className='pb-10'>Trusted by leading mechanical manufacturers across India.
          </p>
        </div>
        <div className="flex flex-row lg:flex-row items-center justify-center gap-10 p-4 mx-10 ">
          <div className="grid xl:grid-cols-2 md:grid-cols gap-8 px-8 pb-10">
            <div className="col-lg-6 m-2 bg-white p-5 pt-2 rounded-lg shadow-lg ">
              <div className="flex items-center gap-4 p-5">
                <img src="/noimage.png" className="h-20 w-20" alt="" />
                <div className="">
                  <h1 className='w-full font-semibold'>Tanaji Tengale</h1>
                  <h3>Ceo &amp; Founder</h3>
                  <div className="stars text-yellow-400 ">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>TRUERP has streamlined our entire workflow from quotations to dispatch. Our team now works faster and with zero paperwork.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
            </div>

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg ">
              <div className="flex items-center gap-4 p-2">
                <img src="/noimage.png" className="h-20 w-20" alt="" />
                <div className="">
                  <h3 className='w-full font-semibold'>Ganesh Chandak</h3>
                  <h4>Industrialist</h4>
                  <div className="stars text-yellow-400">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>The dashboards give us real-time visibility of sales, purchases, and expenses. Decision-making has become much easier.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
            </div>

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg ">
              <div className="flex items-center gap-4 p-5">
                <img src="/noimage.png" className="h-20 w-20" alt="" />
                <div className="">
                  <h3 className='w-full font-semibold'>Sharad Dethe</h3>
                  <h4>Store Owner</h4>
                  <div className="stars text-yellow-400">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Managing BOM and production used to be chaotic. With TRUERP, everything is organized and traceable in one place.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
            </div>

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg ">
              <div className="flex items-center gap-4 p-5">
                <img src="/noimage.png" className="h-20 w-20" alt="" />
                <div className="">
                  <h3 className='font-semibold'>Nitin Rajwade</h3>
                  <h4>Purchase Head</h4>
                  <div className="stars text-yellow-400">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Excellent support and easy-to-use interface. TRUERP helped reduce errors, improve productivity, and boost overall efficiency.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
            </div>
          </div>
        </div>
      </section>
  )
}
