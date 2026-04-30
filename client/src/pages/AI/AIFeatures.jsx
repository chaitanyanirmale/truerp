import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AIFeatures = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full'>
        <div className="text-center p-4">
            <h1 className='text-3xl font-semibold'>AI Powered Manufacturing <span className='text-blue-700'>TRUErp</span></h1>
            <p className='text-sm text-gray-600'>Explore intelligent automation across all ERP modules</p>
        </div>        
        <div className="mt-4 p-2 gap-10 grid grid-cols-3">
            <div className="bg-white w-full rounded-md shadow-lg">
                <div className="p-6">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-line-chart'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Demand Forecasting</h5>
                    <p className='text-sm my-2'>Predicts future demand accurately.</p>
                    <img src="\ai_demand.jpg" alt="" className='h-50'/>
                    <div className="flex justify-end w-full">
                        <button onClick={()=> navigate('/dashboard/demand-forecasting')} className="bg-blue-600 px-2 py-1 rounded-xs text-white text-sm font-semibold  items-end hover:shadow-lg hover:scale-105 transition-all duration-700 cursor-pointer" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md shadow-lg">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i class="fa fa-boxes-stacked"></i></div>                   
                    <h5 className='text-lg font-semibold'>Smart Inventory Optimization</h5>
                    <p className='text-sm my-2'>Optimizes stock levels.</p>
                    <img src="\ai_smart_inventory.jpg" alt="" className='h-50'/>
                    <div className="flex justify-end w-full">
                        <button onClick={()=> navigate('/dashboard/smart-inventory')} className="bg-blue-600 px-2 py-1 rounded-xs text-white text-sm font-semibold  items-end hover:shadow-lg hover:scale-105 transition-all duration-700 cursor-pointer" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-md shadow-lg">
                <div className="p-6 ">
                    <div className="w-20 mb-2 text-blue-600 text-4xl"><i className='fa fa-inr'></i></div>                   
                    <h5 className='text-lg font-semibold'>AI Costing & Profit Prediction</h5>
                    <p className='text-sm my-2'>Predicts job profitability.</p>
                    <img src="\ai_costing.jpg" alt="" className='h-50'/>
                    <div className="flex justify-end w-full">
                        <button onClick={()=> navigate('/dashboard/costing-profit')} className="bg-blue-600 px-2 py-1 rounded-xs text-white text-sm font-semibold  items-end hover:shadow-lg hover:scale-105 transition-all duration-700 cursor-pointer" id="viewbutton"
                        >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
