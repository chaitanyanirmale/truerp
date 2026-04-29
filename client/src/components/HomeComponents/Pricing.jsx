import React from 'react'

export const Pricing = () => {
  return (
    <section id='pricing'className='bg-gray-100 xl:pt-20 md:p-5'>
        <div className="">
          <h1 className="text-center text-3xl font-semibold mb-4 mt-2 text-slate-700">Pricing</h1>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
          <p className="text-center text-gray-600 mb-6">Flexible pricing designed for every manufacturing business.</p>
        </div>
        <div className="p-10 md:p-5">
          <div className="grid xl:grid-cols-3 md:grid-cols gap-8 px-25 mt-5 md:p-5">
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-white rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                <h3 className='text-slate-600 text-2xl mb-2 font-semibold'>Small-Scale Businesses & Startups</h3>
                <h4 className='text-slate-600 mb-4 text-md'>INCLUDE FOLLOWINGS:</h4>
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
                <a href="tel:+918087611678" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-blue-900 rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                {/* <div className="text-center font-semibold p-2 px-4 bg-white rounded-full mx-30 xl:mx-20 mb-3">Most Popular</div> */}
                <h3 className='text-white text-2xl mb-2 font-semibold'>Growing Medium-Scale Companies</h3>
                <h4 className='text-white mb-4 text-md'>INCLUDES EVERYTHING IN SILVER, PLUS :</h4>
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
                <a href="tel:+918087611678" className="bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-blue-100 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="grid xl:grid-cols md:grid-cols gap-8 md:px-15 md:mx-10 bg-white rounded-lg hover:shadow-lg xl:mx-2 xl:px-10 p-5">
              <div className="pricing-card ">
                <h3 className='text-slate-600 text-2xl mb-2 font-semibold'>Large Manufacturing & Multi-Branch</h3>
                <h4 className='text-slate-600 mb-4 text-md'>INCLUDES EVERYTHING IN GOLD, PLUS:</h4>
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
                <a href="tel:+918087611678" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition gap-2 flex items-center justify-center w-full">
                  Buy Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
