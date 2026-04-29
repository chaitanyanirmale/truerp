import React from 'react'

export const Services = () => {
  return (
    <section id='services' className='py-10 bg-gray-100'>
        <div className="py-10">
          <h1 className="text-center text-3xl font-semibold mb-4 text-slate-700">Services</h1>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
          <p className="text-center text-gray-600 mb-10">Empowering your operations with smarter, faster workflows.</p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-8 md:px-15 xl:px-20">
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4">
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
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <div className='px-2'>
                  <h1 className='mb-2 text-slate-700 text-2xl font-semibold'>Purchase & Inventory</h1>
                  <p>Manage your entire purchasing cycle from Purchase Orders (PO) to Goods Received Receipts (GRR) and Purchase Bills — all within one interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-easel"></i>
                </div>
                <div className='px-2'>
                  <h1 className='mb-2 text-slate-700 text-2xl  font-semibold'>Payroll & HR Management</h1>
                  <p>Simplify workforce operations — from attendance to salary slips.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10 mb-5">
              <div className="flex bg-white p-10 rounded-lg shadow-lg gap-4">
                <div className="text-4xl text-blue-800 px-4 py-2 bg-slate-300 rounded-lg h-16 w-20 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <div className='px-2'>
                  <h1 className='mb-2 text-slate-700 text-2xl font-semibold'>Dashboard & Analytics</h1>
                  <p>Make informed decisions with TRUERP's smart dashboards. Get a 360° view of your business performance across sales, purchases, expenses, and GST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
