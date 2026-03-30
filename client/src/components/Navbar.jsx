import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [user, setUser] = useState(null)
    const fetchUser = async () => {
        try {
            const res = await fetch('/api/users/user',{
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if(data.success === true){
                setUser(data.data)
            }
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(()=> {
        fetchUser();
    },[])
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
                        <i className='fa fa-users fa-md p-1'></i><p className='text-md p-2'>Users</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-sm ${ openMenu === "users" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="add-user" className={'flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100'} onClick={()=> setOpenMenu(null)}><i className="fa fa-plus text-blue-600"></i>Add New User
                            </NavLink>
                            <NavLink to="user-list" className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100`} onClick={()=> setOpenMenu(null)} ><i className="fa fa-list text-blue-600"></i>List of User
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "items" ? null : "items")} className='flex hover:bg-blue-800 items-center h-full px-2'>
                        <i className='fa fa-cubes fa-md p-1'></i><p className='text-md p-2'>Items</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "items" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="add-item" className={'flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'} onClick={()=> setOpenMenu(null)}><i className="fa fa-plus text-blue-600"></i>Add New Item
                            </NavLink>
                            <NavLink to="items-list" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>List of Items
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "quotations" ? null : "quotations")} className='flex hover:bg-blue-800 items-center h-full px-2'>
                        <i className='fa fa-cubes fa-md p-1'></i><p className='text-md p-2'>Quotation</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "quotations" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="quotation-list" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>List of Quotations
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "so" ? null : "so")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-industry fa-md p-1'></i><p className='text-md p-2'>SO</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "so" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-so" className={'flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'} onClick={()=> setOpenMenu(null)}><i className="fa fa-plus text-blue-600"></i>Create SO
                            </NavLink>
                            <NavLink to="so-list" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>List of SO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "po" ? null : "po")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-shopping-cart fa-md p-1'></i><p className='text-md p-2'>PO</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "po" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-po" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=> setOpenMenu(null)}>
                                <i className="fa fa-plus text-blue-600"></i>Create PO
                            </NavLink>
                            <NavLink to="po-list" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>List of PO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "grr" ? null : "grr")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-truck fa-md p-1'></i><p className='text-md p-2'>GRR</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "grr" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="grr" className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> setOpenMenu(null)}><i className="fa fa-plus text-blue-600"></i>Create GRR
                            </NavLink>
                            <NavLink to="grr-list" className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> setOpenMenu(null)} ><i className="fa fa-list text-blue-600"></i>List of GRR
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "invoices" ? null : "invoices")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-inr fa-md p-1'></i><p className='text-md p-2'>Invoices</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div  className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "invoices" ? "max-h-40 w-50" : "max-h-0 border-none"}`}>
                            <NavLink to="create-invoice" className='flex items-center gap-3 px-3 py-2 cursor-pointer' onClick={()=> setOpenMenu(null)}>
                                <i className="fa fa-plus text-blue-600"></i>Create Invoice
                            </NavLink>
                            <NavLink to="invoice-llp" className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>Invoices LLP
                            </NavLink>
                            <NavLink to="invoice-pvt-ltd" className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> setOpenMenu(null)} >
                            <i className="fa fa-list text-blue-600"></i>Invoices PVT LTD
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "purchase-bills" ? null : "purchase-bills")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-file-pdf-o fa-md p-1'></i><p className='text-md p-2'>Purchase Bills</p><i className='fa fa-angle-down font-bold'></i>
                    </button>
                    <div className={`overflow-hidden absolute left-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "purchase-bills" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="add-purchase" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`}>
                                <i className="fa fa-plus text-blue-600"></i>Add New Bill
                            </NavLink>
                            <NavLink to="supplier-payment" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`}>
                            <i className="fa fa-list text-blue-600"></i>List of Bills
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "ai" ? null : "ai")} className='flex hover:bg-blue-800 items-center h-full px-2'><i className='fa fa-robot fa-md p-1'></i><p className='text-md p-2'>AI</p><i className='fa fa-angle-down font-bold'></i></button>
                    <div  className={`overflow-hidden absolute right-0 w-60 overflow-y-auto text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "ai" ? "max-h-80" : "max-h-0 border-none" }`}>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-line-chart text-blue-600"></i>Demand Forecasting
                            </NavLink>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-cubes text-green-500"></i>Smart Inventory
                            </NavLink>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-comments text-cyan-600"></i>ERP Assistent
                            </NavLink>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-inr text-yellow-400"></i>Costing & Profit Prediction
                            </NavLink>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-shield text-rose-600"></i>Compliance Monitoring
                            </NavLink>
                            <NavLink to="demand-forecasting" className='flex items-center gap-3 p-3 cursor-pointer hover:bg-cyan-50' onClick={()=> {setOpenMenu(null);}}><i className="fa fa-industry text-gray-500"></i>Supplier Intelligence
                            </NavLink>
                    </div>
                </div>
                {user ? (
                        <div className="h-full relative inline-block">
                        <button onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-user fa-md p-1'></i><p className='text-sm'>{user.name}</p><i className='fa fa-angle-down font-bold pl-1'></i>
                    </button>
                    <div className={`overflow-hidden absolute right-0 w-50 text-sm border border-slate-300 bg-white text-gray-600 rounded-xs ${ openMenu === "profile" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="profile" className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer' onClick={()=> setOpenMenu(null)}>
                                <i className="fa fa-user text-blue-600"></i>My Profile
                            </NavLink>
                            <NavLink to="" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=>setOpenMenu(null)}>
                            <i className="fa fa-cog text-blue-600"></i>Change Password
                            </NavLink>
                            <NavLink to="" className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer`} onClick={()=>setOpenMenu(null)}>
                            <i className="fa fa-sign-out text-blue-600"></i>Logout
                            </NavLink>
                    </div>
                    </div>
                ) : (
                    <p>Loading</p>
                )}    
            </div>
        </header>
    </div>
  )
}
