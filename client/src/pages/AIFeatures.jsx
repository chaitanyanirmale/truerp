import React, { useState } from 'react'

export const AIFeatures = () => {
  return (
    <div className='w-full'>
        <div className="text-center p-4">
            <h1 className='text-3xl font-semibold'>AI Powered Manufacturing <span className='text-blue-700'>TRUErp</span></h1>
            <p className='text-sm text-gray-600'>Explore intelligent automation across all ERP modules</p>
        </div>        
        <div className="mt-4 p-2 gap-10 grid grid-cols-3">
            <div className="bg-white w-full rounded-md">
                <div className="p-6">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-line-chart'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Demand Forecasting</h5>
                    <p className='text-sm my-2'>Predicts future demand accurately.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-gears'></i></div>                   
                    <h5 className='text-lg font-semibold'>Predictive Machine Maintenance</h5>
                    <p className='text-sm my-2'>Avoids unexpected breakdowns.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-check-circle'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Quality Control</h5>
                    <p className='text-sm my-2'>Improves product quality.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-boxes-stacked'></i></div>                   
                    <h5 className='text-lg font-semibold'>Smart Inventory Optimization</h5>
                    <p className='text-sm my-2'>Optimizes stock levels.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-robot'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI ERP Assistant</h5>
                    <p className='text-sm my-2'>Chat with your ERP.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-indian-rupee-sign'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Costing & Profit Prediction</h5>
                    <p className='text-sm my-2'>Predicts job profitability.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-file-shield'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Compliance Monitoring</h5>
                    <p className='text-sm my-2'>Ensures regulatory compliance.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-user-gear'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Workforce Optimization</h5>
                    <p className='text-sm my-2'>Improves manpower efficiency.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-truck-fast'></i></div>                   
                    <h5 className='text-lg font-semibold'>Smart Dispatch & Delivery AI</h5>
                    <p className='text-sm my-2'>Optimizes deliveries.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-magnifying-glass-chart'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Root Cause Analysis</h5>
                    <p className='text-sm my-2'>Finds hidden problems.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-handshake-angle'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Supplier Intelligence</h5>
                    <p className='text-sm my-2'>Evaluates supplier risks.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-bolt'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Energy Optimization</h5>
                    <p className='text-sm my-2'>Reduces energy costs.</p>
                    <div className="flex justify-end w-full">
                        <button className="bg-blue-600 px-2 py-1 rounded-md text-white text-sm font-semibold  items-end" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
