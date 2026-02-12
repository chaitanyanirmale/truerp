import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    
  return (
    <div>
        <aside className="fixed top-14 left-0 h-screen w-64 bg-slate-900 text-white p-4 overflow-y-auto">

            <div className="space-y-2 pb-10">
              
              <NavLink to="features" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                Features
              </NavLink>
              <NavLink to="finance" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                Finance Dashboard
              </NavLink>
              <NavLink to="general" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                General Dashboard
              </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">AI Features</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="ocr" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                OCR
                </NavLink>
                <NavLink to="general" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  AI Features
                </NavLink>

                
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Account</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <NavLink to="ledger" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                Ledger
                </NavLink>
                <NavLink to="expenses" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Expenses
                </NavLink>
                <NavLink to="supplier-payment" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Supplier Payment
                </NavLink>
                <NavLink to="invoice" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Invoice
                </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Admin & HR</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <NavLink to="user" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  User
                </NavLink>
                <NavLink to="salary" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Salary
                </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Engineering</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="new-so" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Create New SO
                </NavLink>
                <NavLink to="all-so" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  List All SO
                </NavLink>
                <NavLink to="manage-so" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Manage SO
                </NavLink>
                <NavLink to="items" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  Items
                </NavLink>
                <div className="border-t border-slate-700 my-4"></div>
            </div>
        </aside>

    </div>
  )
}
