export const Home = () => {

  const toggleFaq = (e) => {
  e.currentTarget
    .querySelector(".faq-content")
    .classList.toggle("hidden");

  e.currentTarget
    .querySelector(".faq-toggle")
    .classList.toggle("rotate-90");
};

  return (
    <div className='bg-white'>
      <header id="header" className="fixed top-0 left-0 w-full z-50 m-2 ">
            <div className="max-w-7xl mx-auto px-5 mt-2 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between h-15">
                <a href="/home" className="flex items-center">
                  <img src="/logo.png" alt="Logo" className="h-13 w-auto" />
                </a>

                <nav className="hidden xl:flex space-x-8 text-gray-700 text-lg font-medium">
                  <a href="#hero" className="text-blue-700 hover:text-blue-800">Home</a>
                  <a href="#about" className="hover:text-blue-700">About</a>
                  <a href="#features" className="hover:text-blue-700">Features</a>
                  <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
                  <a href="#services" className="hover:text-blue-700">Services</a>
                  <a href="#pricing" className="hover:text-blue-700">Pricing</a>
                  <a href="#contact" className="hover:text-blue-700">Contact</a>
                </nav>
                <div className="xl:block flex items-center space-x-4">
                  <a
                    href="/login"
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
      <section id='hero' className='flex items-center justify-center bg-gray-100 md:grid-cols-2 md:py-40 xl:px-25 py-40'>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-10">
          <div>
            <div className='md:text-center xl:text-start'>
              <div className="mb-6 bg-slate-300 text-blue-950 inline-block p-3 rounded-full font-medium">
                  <i className="bi bi-gear-fill me-2"></i>
                  Working for your success
              </div>
              <h1 className="mb-8 text-3xl font-bold   md:text-4xl xl:text-6xl text-gray-600 md:text-center xl:text-start">
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
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Centralized Data Management</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Accuracy & Error Reduction</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Real-Time Insights</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Improved Collaboration</li>
                    <li className='mb-4'><i className="bi bi-check-circle-fill text-blue-800"></i> Scalability</li>
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
      <section id='testimonials' className='bg-gray-100 pt-20'>
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
      <section id='pricing'className='bg-gray-100 xl:pt-20 md:p-5'>
        <div className="">
          <h2 className="text-center text-3xl font-semibold mb-4 text-slate-700">Pricing</h2>
          <p className="text-center text-gray-600 mb-10">Flexible pricing designed for every manufacturing business.</p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-3 md:grid-cols gap-8 px-25 mt-20 md:p-5">
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
                {/* <div className="text-center font-semibold p-2 bg-white rounded-full w-40 mx-14">Most Popular</div> */}
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
      <section id='faq' className='p-10 bg-gray-100'>
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="w-130">
              <h2 className="text-slate-600 text-4xl font-semibold mb-5">Have a question? Check out the FAQ</h2>
              <p className="mb-5">We have covered the key questions to help you understand TRUERP better.</p>
              <div className="hidden lg:block faq-arrow">
                <svg className="faq-arrow text-blue-900" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-7 w-auto">
              <div className="faq-container grid xl:grid-cols md:grid-cols gap-4">
                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>What is TRUERP and who is it designed for?</h3>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>TRUERP is a complete ERP solution designed specifically for mechanical, manufacturing, fabrication, and industrial businesses. It helps automate quotations, orders, purchases, BOM, inventory, payroll, and financial dashboards.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>Can TRUERP manage the end-to-end workflow of a manufacturing business?</h3>
                    <i className="faq-toggle bi bi-chevron-right" ></i>
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>Yes. TRUERP covers the full cycle—from Quotation → Sales Order → Purchase Order → GRR → Inventory → BOM → Production → Payroll → Reports.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>Is TRUERP cloud-based or offline?</h3>
                    <i className="faq-toggle bi bi-chevron-right" ></i>             
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>TRUERP supports both cloud and on-premise deployment, depending on the client's preference, data sensitivity, and IT infrastructure.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>Can I customize modules based on my business requirements?</h3>
                    <i className="faq-toggle bi bi-chevron-right" ></i>
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>Absolutely. TRUERP allows module-level and workflow customization to match your company’s processes, approvals, and documentation format.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>How secure is my data in TRUERP?</h3>
                    <i className="faq-toggle bi bi-chevron-right" ></i>
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>Your data is protected with role-based access, encrypted storage, regular backups, and high-level security protocols to ensure confidentiality and safety.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" onClick={toggleFaq}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>Do you provide training and support?</h3>
                    <i className="faq-toggle bi bi-chevron-right" ></i>
                  </div>
                  <div className="faq-content hidden w-150">
                    <p>Yes, we offer onboarding, staff training, and ongoing technical support to ensure smooth daily operations and quick issue resolution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action-2" className="call-to-action-2 section dark-background">
        <div className="bg-blue-900 text-white py-20">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center ">
                  <h3 className='text-3xl font-semibold mb-4'>Ready to streamline your operations? Let's get started today.</h3><br />
                <a className="border border-gray-100 rounded-full p-4 px-8 text-lg font-semibold" href="tel:+918087611678">Call To Action</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='xl:pt-2 p-10 bg-gray-100'>
        <div className="text-center py-20">
          <h2 className='text-slate-600 font-semibold text-3xl mb-5'>Contact</h2>
          <p>Take the next step toward smarter, faster business management.</p>
        </div>
        <div className="grid xl:grid-cols-2 md:grid-cols gap-8 md:px-5 xl:px-20">
          <div className="bg-blue-900 text-white p-10 rounded-lg shadow-lg xl:w-125 md:w-150 mx-5">
            <h3 className='text-3xl'>Contact Info</h3>
            <div className="flex items-start gap-4 mt-5">
              <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-geo-alt"></i>
              </div>
              <div className="content">
                <h4 className='text-xl font-semibold mb-2'>Our Locations</h4>
                <p>1) Dashmesh Complex, Hadapsar</p>
                <p>2) Kesnand, Wagholi</p>
				        <p>3) Office No. 527, Amanora Chambers</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
              <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-telephone"></i>
              </div>
              <div className="content">
                <h4 className='text-xl font-semibold mb-2'>Phone Number</h4>
                <p><a href="tel:+918087611678">80876 11678</a></p>
                <p><a href="tel:+917558274199">75582 74199</a></p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
                <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4 className='text-xl font-semibold mb-2'>Email Address</h4>
                  <p><a href="mailto:enquiry@truerp.in">enquiry@truerp.in</a></p>
                  <p><a href="mailto:sales@truerp.in">sales@truerp.in</a></p>
                </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white p-10 rounded-lg shadow-lg xl:w-125 md:w-150 mx-5">
              <h3 className='text-slate-600 mb-4 text-2xl'>Get In Touch</h3>
              <p className='text-slate-600 mb-4'>Don't wait. Automate your entire workflow effortlessly.</p>
              <form action="">
                <div className="">
                  <div className="flex justify-between">
                    <input className='p-2 border border-gray-200 rounded-lg w-xl placeholder:text-sm m-2' type="text" name="name" id="name" placeholder='Your Name' required/>
                    <input className='p-2 border border-gray-200 rounded-lg w-xl  placeholder:text-sm m-2' type="email" name='email' id='email' placeholder='Your Email' required/>
                  </div>
                  <div className="p-2 border border-gray-200 rounded-lg w-auto m-2 placeholder:text-sm">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                  </div>

                  <div className="p-2 border border-gray-200 rounded-lg w-auto m-2 placeholder:text-sm">
                    <textarea name="message" rows="4" placeholder="Message" required=""></textarea>
                  </div>

                  <div className="w-full">
                    <div className="bg-blue-800 w-50 rounded-full p-2 text-white py-4 text-center">
                      <button type="submit" className="btn">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="bg-white py-8">
        <center>              
          <div className="credits">© <span>Copyright</span> <strong className="px-1 font-semibold">TRUERP</strong> <span>All Rights Reserved</span> | Powered by <a href="https://www.tronsoftech.com/">TRON Softech</a>
          </div>
        </center>
      </footer>
         <a href="#" id="scroll-top" className='text-center bg-blue-900 p-2 px-3 rounded-full text-2xl text-white fixed bottom-0 right-0 m-4'><i className="bi bi-arrow-up-short"></i>
         </a>
  </div>
  )
}
