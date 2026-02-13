import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
        <aside className="fixed top-14 left-0 h-screen w-64 bg-slate-900 text-white p-4 overflow-y-auto">

            <div className="space-y-2 pb-10">
              
              <NavLink to="features" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                <i class="fa fa-dashboard"></i> Features
              </NavLink>
              <NavLink to="finance" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                <i class="fa fa-inr"></i> Finance Dashboard
              </NavLink>
              <NavLink to="general" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                <i class="fa fa-dashboard"></i> General Dashboard
              </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">AI Features</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="ocr" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                <i class="fa fa-dashboard"></i> OCR
                </NavLink>
                <NavLink to="general" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  <i class=" fa fa-dashboard"></i> AI Features
                </NavLink>

                
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Account</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <NavLink to="ledger" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                <i class=" fa fa-file"></i> Ledger
                </NavLink>
              
                <button onClick={() => setOpenMenu(openMenu === "expense" ? null : "expense")} className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-rupee"></i><p className='w-full mr-25'>Expense</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "expense" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "expense" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-expense" className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition text-sm">
                        <i className="fa fa-rupee"></i>Add Expense
                      </NavLink>
                      <NavLink to="expense-list" className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition text-sm">
                        <i className="fa fa-file"></i>List of Expense
                      </NavLink>
                </div>

                <NavLink to="supplier-payment" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  <i class="fa fa-rupee"></i> Supplier Payment
                </NavLink>
                <NavLink to="invoice" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  <i class="fa fa-file-text"></i> Invoice
                </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Admin & HR</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <button onClick={() => setOpenMenu(openMenu === "user" ? null : "user")} className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-users"></i><p className='w-full mr-30'>User</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "user" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "user" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="user" className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition text-sm">
                        <i className="fa fa-user-plus"></i>Add new user
                      </NavLink>
                      <NavLink to="user-list" className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition text-sm">
                        <i className="fa fa-list-alt"></i>List of user
                      </NavLink>
                </div>
                
                
                <NavLink to="salary" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
                  <i class="app-menu__icon fa fa-rupee"></i> Salary
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
