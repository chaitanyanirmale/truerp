import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [active, setActive] = useState('')
  return (
    <div>
        <aside className="fixed top-14 left-0 h-screen w-64 bg-slate-900 text-white p-4 overflow-y-auto">

            <div className="space-y-2 pb-10">
              
              <NavLink to="features" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'features' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('features')}>
                <i className="fa fa-dashboard"></i> Features
              </NavLink>
              <NavLink to="finance" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'finance' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('finance')}>
                <i className="fa fa-inr"></i> Finance Dashboard
              </NavLink>
              <NavLink to="general" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'general' ? 'bg-slate-800 border-l border-blue-700':''}`}  onClick={()=> setActive('general')}>
                <i className="fa fa-dashboard"></i> General Dashboard
              </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">AI Features</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="ocr" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ocr' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('ocr')}>
                <i className="fa fa-dashboard"></i> OCR
                </NavLink>
                <NavLink to="ai-features" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ai-features' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('ai-features')}>
                  <i className=" fa fa-dashboard"></i> AI Features
                </NavLink>

                
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Account</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <NavLink to="ledger" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ledger' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('ledger')}>
                <i className=" fa fa-file"></i> Ledger
                </NavLink>
              
                <button onClick={() => setOpenMenu(openMenu === "expense" ? null : "expense")} className='flex items-center gap-3 px-3 py-2  hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-rupee"></i><p className='w-full mr-25'>Expense</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "expense" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "expense" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-expense" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-exp' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('add-exp')}>
                        <i className="fa fa-rupee"></i>Add Expense
                      </NavLink>
                      <NavLink to="expense-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'exp-list' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('exp-list')}>
                        <i className="fa fa-file"></i>List of Expense
                      </NavLink>
                </div>

                <NavLink to="supplier-payment" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'supplier-pay' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('supplier-pay')}>
                  <i className="fa fa-rupee"></i> Supplier Payment
                </NavLink>
                
                <button onClick={() => setOpenMenu(openMenu === "invoice" ? null : "invoice")} className='flex items-center gap-3  px-3 py-2 hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-file-text"></i><p className='w-full'>Invoice</p>
                     <i className={`fa fa-angle-right ml-26 transition-transform duration-300 ${ openMenu === "invoice" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "invoice" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="create-invoice" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'create-invoice' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('create-invoice')}>
                        <i className="fa fa-plus-circle"></i>Create Regular Invoice
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'invoice-list' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('invoice-list')}>
                        <i className="fa fa-list-alt"></i>List Regular Invoice
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'performa-invoice' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('performa-invoice')}>
                        <i className="fa fa-plus-circle"></i>Create Performa Invoice
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'performa-list' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('performa-list')}>
                        <i className="fa fa-list-alt"></i>List Performa Invoices
                      </NavLink>
                </div>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Admin & HR</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <button onClick={() => setOpenMenu(openMenu === "users" ? null : "users")} className='flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-users"></i><p className='w-full mr-27'>Users</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "users" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "users" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-user" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-user' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('add-user')}>
                        <i className="fa fa-user-plus"></i>Add new user
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'user-list' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('user-list')}>
                        <i className="fa fa-list-alt"></i>List of user
                      </NavLink>
                </div>
                
                <button onClick={() => setOpenMenu(openMenu === "salary" ? null : "salary")} className='flex items-center justify-between gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-users"></i><p className='w-full mr-25'>Salary</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "salary" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "salary" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-salary" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-salary' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('add-salary')}>
                        <i className="fa fa-user-plus"></i>Add Salary
                      </NavLink>
                      <NavLink to="add-employee" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-emp' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('add-emp')}>
                        <i className="fa fa-user-plus"></i>Add Employee
                      </NavLink>
                      <NavLink to="employee-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'emp-list' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('emp-list')}>
                        <i className="fa fa-list"></i>Employee List
                      </NavLink>
                </div>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Engineering</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="new-so" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'new-so' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('new-so')}>
                  Create New SO
                </NavLink>
                <NavLink to="all-so" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'all-so' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('all-so')}>
                  List All SO
                </NavLink>
                <NavLink to="manage-so" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'manage-so' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('manage-so')}>
                  Manage SO
                </NavLink>
                <NavLink to="items" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'items' ? 'bg-slate-800 border-l border-blue-700':''}`} onClick={()=> setActive('items')}>
                  Items
                </NavLink>
                <div className="border-t border-slate-700 my-4"></div>
            </div>
        </aside>

    </div>
  )
}
