import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const QuickLinks = () => {
    const navigate = useNavigate();
  return (
    <div className='p-4 pt-10'>
        <div className="grid gap-4 text-center mb-10">
            <h1 className='text-4xl text-blue-700 font-extrabold'>TRUERP Quick Navigations</h1>
            <p className='text-sm'>Manage your complete manufacturing process</p>
        </div>
        <div className="grid grid-cols-4 gap-8 px-20">
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/create-so')}>
                <img src="\button_so.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Sales Order</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/so-list')}>
                <img src="\button_bom.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Bills of Materials</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/create-po')}>
                <img src="\button_po.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Purchase Order</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/grr')}>
                <img src="\button_grr.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Goods of Receipt</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/create-invoice')}>
                <img src="\button_invoice.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Invoice</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/add-user')}>
                <img src="\button_payroll.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Payroll</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/add-purchase')}>
                <img src="\button_purchasebill.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>Purchase Bill</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-slate-300 shadow-md" onClick={()=> navigate('/dashboard/finance')}>
                <img src="\button_pnl.jpg" alt="" className='h-25 mb-2 mx-auto block'/>
                <p className='text-sm font-semibold'>P&L Dashboard</p>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
