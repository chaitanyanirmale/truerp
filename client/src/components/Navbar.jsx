import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
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

            <div className="hidden xl:flex items-center gap-2 text-sm h-full">
                <div className='flex hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-industry fa-md p-1'></i>
                    <p className='text-md p-2'>SO</p>
                </div>
                <div className='flex justify-between  hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-shopping-cart fa-md p-1'></i>
                    <p className='text-md p-2'>PO</p>
                </div>
                <div className='flex justify-between hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-file fa-md p-1'></i>
                    <p className='text-md p-2'>GRR</p>
                </div>
                <div className='flex justify-between hover:bg-blue-800 h-full items-center px-1 m-0'>
                    <i className='fa fa-file fa-md p-1'></i>
                    <p className='text-md p-2'>Items</p>
                </div>
                <div className='flex justify-between hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-inr fa-md p-1'></i>
                    <p className='text-md p-2'>Invoices</p>
                </div>
                <div className='flex justify-between hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-file-pdf-o fa-md p-1'></i>
                    <p className='text-md p-2'>Purchase Bills</p>
                </div>
                <NavLink to="profile" className='flex justify-between hover:bg-blue-800 h-full items-center px-1'>
                    <i className='fa fa-user fa-md p-1'></i>
                    <p className='text-md p-2'>TRUERP</p>
                </NavLink>
            </div>
        </header>
    </div>
  )
}
