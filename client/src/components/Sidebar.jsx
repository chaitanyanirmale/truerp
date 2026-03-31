import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [active, setActive] = useState('')
  return (
    <div>
        <aside className="fixed top-14 left-0 h-screen w-60 bg-slate-900 text-white p-4 overflow-y-auto">
            <div className="space-y-2 pb-10">
              
              <NavLink to="features" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'features' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('features')}>
                <i className="fa fa-dashboard"></i> Features
              </NavLink>
              <NavLink to="quick-links" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'quick-links' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('quick-links')}>
                <i className="fa fa-link"></i> Quick Links
              </NavLink>
              <NavLink to="finance" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'finance' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('finance')}>
                <i className="fa fa-inr"></i> P&L Dashboard
              </NavLink>
              <NavLink to="general" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'general' ? 'bg-slate-800 border-l-2 border-blue-700':''}`}  onClick={()=> setActive('general')}>
                <i className="fa fa-dashboard"></i> General Dashboard
              </NavLink>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">AI Features</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="ocr" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ocr' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('ocr')}>
                <i className="fa fa-dashboard"></i> OCR
                </NavLink>
                <NavLink to="aifeatures" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ai-features' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('ai-features')}>
                  <i className=" fa fa-dashboard"></i> AI Features
                </NavLink>

                
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Account</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <NavLink to="ledger" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'ledger' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('ledger')}>
                <i className=" fa fa-file"></i> Ledger
                </NavLink>
              
                <button onClick={() => setOpenMenu(openMenu === "expense" ? null : "expense")} className='flex items-center gap-3 px-3 py-2 w-full  hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-rupee"></i><p className='w-full text-start'>Expense</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "expense" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "expense" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-expense" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-exp' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-exp')}>
                        <i className="fa fa-rupee"></i>Add Expense
                      </NavLink>
                      <NavLink to="expense-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'exp-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('exp-list')}>
                        <i className="fa fa-list"></i>List of Expense
                      </NavLink>
                </div>

                <NavLink to="supplier-payment" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'supplier-pay' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('supplier-pay')}>
                  <i className="fa fa-rupee"></i> Supplier Payment
                </NavLink>
                
                <button onClick={() => setOpenMenu(openMenu === "invoice" ? null : "invoice")} className='flex items-center gap-3  px-3 py-2 w-full hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-file-text"></i><p className='w-full text-start'>Invoice</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "invoice" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "invoice" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="create-invoice" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'create-invoice' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('create-invoice')}>
                        <i className="fa fa-plus-circle"></i>Create Regular Invoice
                      </NavLink>
                      <NavLink to="invoice-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'invoice-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('invoice-list')}>
                        <i className="fa fa-list-alt"></i>List Regular Invoice
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'performa-invoice' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('performa-invoice')}>
                        <i className="fa fa-plus-circle"></i>Create Performa Invoice
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'performa-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('performa-list')}>
                        <i className="fa fa-list-alt"></i>List Performa Invoices
                      </NavLink>
                </div>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Admin & HR</p>
                <div className="border-t border-slate-700 my-4"></div>
                
                <button onClick={() => setOpenMenu(openMenu === "users" ? null : "users")} className='flex items-center gap-3 px-3 py-2 w-full hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-users"></i><p className='w-full text-start'>Users</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "users" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "users" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-user" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-user' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-user')}>
                        <i className="fa fa-user-plus"></i>Add new user
                      </NavLink>
                      <NavLink to="user-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'user-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('user-list')}>
                        <i className="fa fa-list-alt"></i>List of user
                      </NavLink>
                </div>
                
                <button onClick={() => setOpenMenu(openMenu === "salary" ? null : "salary")} className='flex items-center  gap-3 px-3 py-2 w-full hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-rupee"></i><p className='w-full text-start'>Salary</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "salary" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 ${ openMenu === "salary" ? "max-h-40" : "max-h-0" }`}>
                      <NavLink to="add-salary" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-salary' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-salary')}>
                        <i className="fa fa-user-plus"></i>Add Salary
                      </NavLink>
                      <NavLink to="add-employee" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-emp' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-emp')}>
                        <i className="fa fa-user-plus"></i>Add Employee
                      </NavLink>
                      <NavLink to="employee-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'emp-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('emp-list')}>
                        <i className="fa fa-list"></i>Employee List
                      </NavLink>
                      <NavLink to="salary-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'salary-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('salary-list')}>
                        <i className="fa fa-file"></i>Salary List
                      </NavLink>
                </div>

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Engineering</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="create-so" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'create-so' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('create-so')}> <i className='fa fa-plus-circle'></i>
                  Create New SO
                </NavLink>
                <NavLink to="so-list" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'so-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('so-list')}> <i className='fa fa-list'></i>
                  List All SO
                </NavLink>
                <NavLink to="manage-so" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'manage-so' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('manage-so')}> <i className='fa fa-hand-pointer-o'></i>
                  Manage SO
                </NavLink>
                <button onClick={() => setOpenMenu(openMenu === "items" ? null : "items")} className='flex items-center  gap-3 px-3 py-2 w-full hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-product-hunt"></i><p className='w-full text-start'>Items</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "items" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden overflow-y-auto text-sm transition-all duration-300 ${ openMenu === "items" ? "max-h-30" : "max-h-0" }`}>
                      <NavLink to="add-item" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-item' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-item')}>
                        <i className="fa fa-plus-circle"></i>Add New Item
                      </NavLink>
                      <NavLink to="main-cat" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'main-cat' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('main-cat')}>
                        <i className="fa fa-plus-circle"></i>Main Categories
                      </NavLink>
                      <NavLink to="sub-cat" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'sub-cat' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('sub-cat')}>
                        <i className="fa fa-plus-circle"></i>Sub-Categories
                      </NavLink>
                      <NavLink to="items-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'items-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('items-list')}>
                        <i className="fa fa-list"></i>View All Items
                      </NavLink>
                      <NavLink to="manage-units" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'manage-units' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('manage-units')}>
                        <i className="fa fa-list"></i>Manage Units
                      </NavLink>
                </div>
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Purchase</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="create-po" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'create-po' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('create-po')}> <i className='fa fa-plus-circle'></i>
                 Create PO
                </NavLink>
                <NavLink to="po-list" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'po-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('po-list')}> <i className='fa fa-list'></i>
                 List of PO's/BOM's
                </NavLink>
                <NavLink to="add-purchase" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-purchase' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-purchase')}> <i className='fa fa-plus-circle'></i>
                 Add Purchase Bill
                </NavLink>
                <NavLink to="supplier-list" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'supplier-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('supplier-list')}> <i className='fa fa-list'></i>
                 List of Suppliers
                </NavLink>
                <NavLink to="supplier-payment" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'supplier-payment' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('supplier-payment')}> <i className='fa fa-list'></i>
                 List of Purchase Bills
                </NavLink>
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Store</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="grr" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'grr' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('grr')}> <i className='fa fa-codepen'></i>
                 GRR
                </NavLink>
                <NavLink to="grr-list" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'grr-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('grr-list')}> <i className='fa fa-list'></i>
                 List of GRR
                </NavLink>
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Quality</p>
                <div className="border-t border-slate-700 my-4"></div>
                <button onClick={() => setOpenMenu(openMenu === "machinery" ? null : "machinery")} className='flex items-center  gap-3 px-3 py-2 w-full hover:bg-slate-700 cursor-pointer transition'>
                     <i className="fa fa-th-list"></i><p className='w-full text-start'>Machinery</p>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "machinery" ? "rotate-90" : ""}`}></i>
                </button>
                <div className={`overflow-hidden overflow-y-auto text-sm transition-all duration-300 ${ openMenu === "machinery" ? "max-h-30" : "max-h-0" }`}>
                  <NavLink to="add-machinery" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'add-machinery' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('add-machinery')}><i className='fa fa-plus'></i>
                  Add Machinery
                  </NavLink>
                  <NavLink to="machinery-list" className={`flex items-center gap-3 mx-2 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'machinery-list' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('machinery-list')}> <i className='fa fa-list-alt'></i>
                  List of Machinery
                  </NavLink>
                </div>
                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Sales</p>
                <div className="border-t border-slate-700 my-4"></div>
                <NavLink to="enquiries" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'enquiries' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('enquiries')}> <i className='fa fa-list'></i>
                 Enquiries
                </NavLink>
                <NavLink to="quotations" className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-700 cursor-pointer transition duration-300 ${active === 'quotations' ? 'bg-slate-800 border-l-2 border-blue-700':''}`} onClick={()=> setActive('quotations')}> <i className='fa fa-list'></i>
                 Quotations
                </NavLink>
            </div>
        </aside>

    </div>
  )
}
