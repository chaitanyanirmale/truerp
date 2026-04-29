import React from 'react'

export const Stats = () => {
  return (
    <section id="stats" className="stats section">
        <div className="py-20">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 text-slate-700">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold ">50234</span>
                <div className="w-15 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
                <p className="p-4">Products</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30  ">
                <span className="text-4xl font-bold">56</span>
                <div className="w-15 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
                <p className="p-4">ERP's</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold">1453</span>
                <div className="w-15 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
                <p className="p-4">Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-auto h-30 ">
                <span className="text-4xl font-bold">50</span>
                <div className="w-15 border border-b-2 border-blue-900 mx-auto rounded-lg my-4"></div>
                <p className="p-4">Crore Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
