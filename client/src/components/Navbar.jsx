import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [active, setActive] = useState('')
    const menuRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-blue-700 text-white h-14 flex items-center justify-around px-6 z-50">

            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Admin</h1>
                <button className="text-xl">☰</button>
            </div>
            <div className="flex md:w-auto items-center gap-4 w-1/2 px-2">
                <select className="bg-white text-black p-2 px-4 rounded">
                <option>FY: 2025-26</option>
                <option>FY: 2024-25</option>
                <option>FY: 2023-24</option>
                <option>FY: 2022-23</option>
                </select>
                <input
                type="text"
                placeholder="Search SO here..."
                className="w-full p-2 rounded-lg border border-gray-200 bg-white text-black"
                />
            </div>

            <div className="hidden xl:flex xl:justify-between items-center gap-2 text-sm h-full">
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "so" ? null : "so")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-industry fa-md p-1'></i><p className='text-md p-2'>SO</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "so" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-so" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-so' ? '':''}`} onClick={()=> {setActive('create-so');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create SO
                            </NavLink>
                            <NavLink to="so-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('so-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of SO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "po" ? null : "po")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-shopping-cart fa-md p-1'></i><p className='text-md p-2'>PO</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "po" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-so" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-po' ? '':''}`} onClick={()=> {setActive('create-po');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create PO
                            </NavLink>
                            <NavLink to="po-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('po-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of PO
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "grr" ? null : "grr")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-file fa-md p-1'></i><p className='text-md p-2'>GRR</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "grr" ? "max-h-40" : "max-h-0 border-none" }`}>
                            <NavLink to="create-so" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-grr' ? '':''}`} onClick={()=> {setActive('create-grr');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create GRR
                            </NavLink>
                            <NavLink to="grr-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('grr-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of GRR
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "items" ? null : "items")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-file fa-md p-1'></i><p className='text-md p-2'>Items</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "items" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="create-items" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-items' ? '':''}`} onClick={()=> {setActive('create-items');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create Items
                            </NavLink>
                            <NavLink to="items-list" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('items-list');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of Items
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "invoices" ? null : "invoices")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-inr fa-md p-1'></i><p className='text-md p-2'>Invoices</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "invoices" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
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
                        <i className='fa fa-file-pdf-o fa-md p-1'></i><p className='text-md p-2'>Purchase Bills</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "purchase-bills" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
                            <NavLink to="create-new-bill" className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${active === 'create-new-bill' ? '':''}`} onClick={()=> {setActive('create-new-bill');  setOpenMenu(null);}}>
                                <i className="fa fa-plus"></i>Create New Bill
                            </NavLink>
                            <NavLink to="list-bills" className={`flex items-center gap-3 px-3 py-2 cursor-pointer`} onClick={()=> {setActive('list-bills');  setOpenMenu(null);} } >
                            <i className="fa fa-check"></i>List of Bills
                            </NavLink>
                    </div>
                </div>
                <div className="h-full relative inline-block">
                    <button onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")} className='flex hover:bg-blue-800 items-center h-full px-1'>
                        <i className='fa fa-user fa-md p-1'></i><p className='text-md p-2'>TRUERP</p>
                    </button>
                    <div ref={menuRef} className={`overflow-hidden absolute left-0 w-40 text-sm border border-slate-400 bg-white text-gray-600 ${ openMenu === "profile" ? "max-h-40 w-50" : "max-h-0 border-none" }`}>
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
