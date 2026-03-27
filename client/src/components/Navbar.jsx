import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [active, setActive] = useState('')
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-blue-700 text-white h-14 flex items-center px-6 z-50">
            <div className="flex justify-center items-center w-1/4 gap-4">
                <h1 className="text-xl font-semibold">TRUERP</h1>
                <button className="text-xl">☰</button>
            </div>
            <div className="flex items-center gap-4 px-2">
                <select className="bg-white text-black p-2 px-4 rounded-sm">
                <option>FY: 2025-26</option>
                <option>FY: 2024-25</option>
                <option>FY: 2023-24</option>
                <option>FY: 2022-23</option>
                </select>
            </div>
            <div className="hidden xl:flex xl:justify-between items-center gap-2 text-sm w-full h-full">
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "users" ? null : "users")} className='flex hover:bg-blue-800 items-center h-full px-2'>
                        <i className='fa fa-industry fa-md p-1'></i><p className='text-md p-2'>Users</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 rounded-xs ${ openMenu === "users" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="add-user" className={'flex items-center gap-3 px-3 py-2 cursor-pointer'} onClick={()=> {setActive('add-user');  setOpenMenu(null);} }><i className="fa fa-plus"></i>Add New User
                            </NavLink>
                            <NavLink to="user-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('user-list');  setOpenMenu(null);} } >
                            <i className="fa fa-list"></i>List of User
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "items" ? null : "items")} className='flex hover:bg-blue-800 items-center h-full px-2'>
                        <i className='fa fa-cubes fa-md p-1'></i><p className='text-md p-2'>Items</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 rounded-xs ${ openMenu === "items" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="add-item" className={'flex items-center gap-3 px-3 py-2 cursor-pointer'} onClick={()=> {setActive('add-item');  setOpenMenu(null);} }><i className="fa fa-plus"></i>Add New Item
                            </NavLink>
                            <NavLink to="items-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('items-list');  setOpenMenu(null);} } >
                            <i className="fa fa-list"></i>List of Items
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "quotations" ? null : "quotations")} className='flex hover:bg-blue-800 items-center h-full px-2'>
                        <i className='fa fa-cubes fa-md p-1'></i><p className='text-md p-2'>Quotation</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 rounded-xs ${ openMenu === "quotations" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="quotation-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('quotation-list');  setOpenMenu(null);} } >
                            <i className="fa fa-list"></i>List of Items
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "so" ? null : "so")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-industry fa-md p-1'></i><p className='text-md p-2'>SO</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "so" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-so" className={'flex items-center gap-3 px-3 py-2 cursor-pointer'} onClick={()=> {setActive('create-so');  setOpenMenu(null);} }><i className="fa fa-plus"></i>Create SO
                            </NavLink>
                            <NavLink to="so-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('so-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of SO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "po" ? null : "po")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-shopping-cart fa-md p-1'></i><p className='text-md p-2'>PO</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "po" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-po" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-po' ? '':''}`} onClick={()=> {setActive('create-po');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create PO
                            </NavLink>
                            <NavLink to="po-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('po-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of PO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "grr" ? null : "grr")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-truck fa-md p-1'></i><p className='text-md p-2'>GRR</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "grr" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="grr" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-grr' ? '':''}`} onClick={()=> {setActive('create-grr');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create GRR
                            </NavLink>
                            <NavLink to="grr-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('grr-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of GRR
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "invoices" ? null : "invoices")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-inr fa-md p-1'></i><p className='text-md p-2'>Invoices</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "invoices" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="create-invoice" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-invoice' ? '':''}`} onClick={()=> {setActive('create-invoice');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create Invoice
                            </NavLink>
                            <NavLink to="invoice-llp" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('invoice-llp');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>Invoices LLP
                            </NavLink>
                            <NavLink to="invoice-pvt-ltd" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('invoice-pvt-ltd');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>Invoices PVT LTD
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "purchase-bills" ? null : "purchase-bills")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-file-pdf-o fa-md p-1'></i><p className='text-md p-2'>Purchase Bills</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "purchase-bills" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="add-purchase" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('add-purchase');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Add New Bill
                            </NavLink>
                            <NavLink to="supplier-payment" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('supplier-payment');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of Bills
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "ai" ? null : "ai")} className='flex hover:bg-blue-800 items-center h-full px-1'><i className='fa fa-robot fa-md p-1'></i><p className='text-md p-2'>AI</p><i className='fa fa-angle-down font-bold'></i></button>
                    <div  className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "ai" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="add-item" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'add-item' ? '':''}`} onClick={()=> {setActive('add-item');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Add Items
                            </NavLink>
                            <NavLink to="items-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('items-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of Items
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-user fa-md p-1'></i><p className='text-md p-2'>TRUERP</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div className={`overflow-hidden absolute right-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "profile" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="profile" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'profile' ? '':''}`} onClick={()=> {setActive('profile');  setOpenMenu(null);}}>
                                <i className="fa fa-user"></i>My Profile
                            </NavLink>
                            <NavLink to="" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('');  setOpenMenu(null);} } >
                            <i className="fa fa-cog"></i>Change Password
                            </NavLink>
                            <NavLink to="" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('');  setOpenMenu(null);} } >
                            <i className="fa fa-sign-out"></i>Logout
                            </NavLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
