import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Home = () => {
  return (
    <div className='bg-white'>
      <header id="header" className="fixed top-0 left-0 w-full z-50 m-2 ">
            <div className="max-w-7xl mx-auto px-5 mt-2 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between h-15">
                <a href="/home" className="flex items-center">
                  <img src="/logo.png" alt="Logo" className="h-13 w-auto" />
                </a>

                <nav className="hidden xl:flex space-x-8 font-medium text-gray-700 text-lg">
                  <a href="#hero" className="text-blue-600 hover:text-blue-800">Home</a>
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
                    className="bg-blue-900 text-white mx-2 px-4 py-2 rounded-full font-sm hover:bg-blue-800 transition"
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
      <section id='hero' className='flex items-center justify-center bg-gray-100 md:grid-cols-2 md:py-40 xl:py-40 py-40'>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-10">
          <div>
            <div className='md:text-center xl:text-start'>
              <div className="mb-6 bg-slate-300 text-blue-950 inline-block p-3 rounded-full font-medium">
                  <i className="bi bi-gear-fill me-2"></i>
                  Working for your success
              </div>
              <h1 className="mb-8 text-3xl font-bold   md:text-4xl xl:text-5xl text-gray-600 md:text-center xl:text-start">
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
      <section id="about" className="flex items-center justify-center bg-white pt-10 pb-10 md:p-10 xl:px-16 overflow-hidden">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-20 md:pt-20">
            <div className="col-xl-5 w-full px-10">
              <h1 className='mb-2'>
                <span className="text-blue-800 font-bold">MORE ABOUT US</span>
              </h1>
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
                  <img src="/main2.png" alt="Team Discussion" className="absolute -left-12 top-1/4 w-48 z-10 rounded-2xl border-4 border-white shadow-lg" />
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
      <section id='features' className='py-25'>
         <div className="bg-white text-center">
          <h2 className='text-3xl font-semibold text-slate-700 mb-4'>Features</h2>
          <p className='mb-10'>Features of TRUERP - Smart ERP for the Manufacturing & Mechanical Industry</p>
        </div>
        <center>
          <img src="/features.png" className='w-200'/>
        </center>
      </section>
      <section id='testimonials' className='bg-gray-100 pt-5'>
        <div className="text-center text-slate-700">
          <h2 className='text-3xl font-semibold pb-10'>Testimonials</h2>
          <p className='pb-10'>Trusted by leading mechanical manufacturers across India.
          </p>
        </div>
        <div className="flex flex-row lg:flex-row items-center justify-center gap-10 p-4 mx-10 ">
          <div className="grid xl:grid-cols-2 md:grid-cols gap-8">
            <div className="col-lg-6 m-2 bg-white p-5 pt-2 rounded-lg shadow-lg w-150 ">
              <div className="flex items-center gap-4 p-5">
                <img src="/noimage.png" className="h-20 w-20" alt="" />
                <div className="">
                  <h3 className='w-full font-semibold'>Tanaji Tengale</h3>
                  <h4>Ceo &amp; Founder</h4>
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

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg w-150">
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

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg w-150">
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

            <div className="col-lg-6 bg-white m-2 p-5 pt-2 rounded-lg shadow-lg w-150">
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
      <section id="stats" className="stats section">
        <div className="py-20">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 text-slate-700">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold ">50234</span>
                <p className="p-4">Products</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30  ">
                <span className="text-4xl font-bold">56</span>
                <p className="p-4">ERP's</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold">1453</span>
                <p className="p-4">Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold">50</span>
                <p className="p-4">Crore Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='services' className='py-10 bg-gray-100'>
        <div className="py-10">
          <h2 className="text-center text-3xl font-semibold mb-4 text-slate-700">Services</h2>
          <p className="text-center text-gray-600 mb-10">Empowering your operations with smarter, faster workflows.</p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-2 md:grid-cols gap-8 md:px-15 xl:px-20">
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4 w-150">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-activity "></i>
                </div>
                <div className='px-2'>
                  <h3 className='mb-2 text-slate-700 text-2xl font-semibold'>Quotation & Sales Management</h3>
                  <p>Create, customize, and track quotations with just a few clicks. Easily convert quotations into Sales Orders (SO) for faster customer response and improved deal closure.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4 w-150">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <div className='px-2'>
                  <h3 className='mb-2 text-slate-700 text-2xl font-semibold'>Purchase & Inventory</h3>
                  <p>Manage your entire purchasing cycle from Purchase Orders (PO) to Goods Received Receipts (GRR) and Purchase Bills — all within one interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4 w-150">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-easel"></i>
                </div>
                <div className='px-2'>
                  <h3 className='mb-2 text-slate-700 text-2xl  font-semibold'>Payroll & HR Management</h3>
                  <p>Simplify workforce operations — from attendance to salary slips.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4 w-150">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <div className='px-2'>
                  <h3 className='mb-2 text-slate-700 text-2xl font-semibold'>Dashboard & Analytics</h3>
                  <p>Make informed decisions with TRUERP's smart dashboards. Get a 360° view of your business performance across sales, purchases, expenses, and GST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='pricing'className='bg-gray-100 py-20'>
        <div className="">
          <h2 className="text-center text-3xl font-semibold mb-4 text-slate-700">Pricing</h2>
          <p className="text-center text-gray-600 mb-10">Flexible pricing designed for every manufacturing business.</p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-3 md:grid-cols gap-8 px-25 mt-20">
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-white rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                <h3 className='text-slate-600 text-2xl mb-2 font-semibold'>Small-Scale Businesses & Startups</h3>
                <h4 className='text-slate-600 mb-2 text-lg'>INCLUDE<br /> FOLLOWINGS:</h4>
                <ul className="features-list">
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Dashboard & Core Reports</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Sales & Quotation Module</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Purchase Order Management</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Item / Product Master</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Basic Inventory Management</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Customer & Supplier Master</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>GST-enabled Invoicing</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Expense Tracking</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>User Management</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>(up to 10 users)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Backup & Basic Security</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>On-premise or Cloud Deployment</li> 
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>3 Months Free Support</li> 
                </ul>
                <a href="tel:+918087611678" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-blue-900 rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                <h3 className='text-white text-2xl mb-2 font-semibold'>Growing Medium-Scale Companies</h3>
                <h4 className='text-white mb-2 text-lg'>INCLUDES EVERYTHING IN<br /> SILVER, PLUS :</h4>
                <ul className="features-list text-white">
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Advanced Inventory	& Stock Alerts</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Bill of Material (BOM)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Manufacturing / MRP Module</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Payroll & HR Module</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Project & Job Costing Module</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Purchase Bills + GRR	(Goods Received Receipt)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Vendor Payment Tracking</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Multi-User Access (up to 20)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Role-Based Permissions</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Email/SMS Integration</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Custom Reports & Analytics</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>Free Setup & Training</li> 
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-white"></i>6 Months Free Support</li> 
                </ul>
                <a href="tel:+918087611678" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-white rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                <h3 className='text-slate-600 text-2xl mb-2 font-semibold'>Large Manufacturing & Multi-Branch</h3>
                <h4 className='text-slate-600 mb-2 text-lg'>INCLUDES EVERYTHING IN<br />GOLD, PLUS:</h4>
                <ul className="features-list">
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Multi-Branch / Multi-Company Support</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Advanced Dashboard with KPIs & Analytics CRM & Sales Automation</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>eCommerce Integration (Optional API ready)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Service Management Module</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Advanced Payroll (Attendance + Leaves)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>GST, TDS & Compliance Reports</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Mobile Access / Responsive Web App</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Unlimited Users</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Priority Support (1 Year)</li>
                  <li className="mb-4"><i className="bi bi-check-circle-fill mr-2 text-blue-700"></i>Free Updates & Customization Requests (Limited)</li>
                </ul>
                <a href="tel:+918087611678" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
