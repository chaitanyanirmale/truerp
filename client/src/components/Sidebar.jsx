import React from 'react'
import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {
    
  return (
    <div>
        <aside className="fixed top-14 left-0 h-screen w-64 bg-slate-900 text-white p-4 overflow-y-auto">

            <div className="space-y-2 pb-10">
                
                <SidebarItem label="Features" />
                <SidebarItem label="Finance Dashboard" />
                <SidebarItem label="General Dashboard" />

                <div className="border-t border-slate-700 my-4"></div>

                <p className="text-gray-200 uppercase text-sm text-center">AI Features</p>
                <div className="border-t border-slate-700 my-4"></div>
                <SidebarItem label="OCR" />
                <SidebarItem label="AI Features" />

                
                <div className="border-t border-slate-700 my-4"></div>

                <p className="text-gray-200 uppercase text-sm text-center">Account</p>
                <div className="border-t border-slate-700 my-4"></div>
                <SidebarItem label="Ledger" />
                <SidebarItem label="Expenses" />
                <SidebarItem label="Supplier Payment" />
                <SidebarItem label="Invoice" />

                <div className="border-t border-slate-700 my-4"></div>

                <p className="text-gray-200 uppercase text-sm text-center">Admin & HR</p>
                <div className="border-t border-slate-700 my-4"></div>
                <SidebarItem label="User" />
                <SidebarItem label="Salary" />

                <div className="border-t border-slate-700 my-4"></div>
                <p className="text-gray-200 uppercase text-sm text-center">Engineering</p>
                <div className="border-t border-slate-700 my-4"></div>
                <SidebarItem label="Create New SO" />
                <SidebarItem label="List All SO" />
                <SidebarItem label="Manage SO's" />
                <SidebarItem label="Items" />
                <div className="border-t border-slate-700 my-4"></div>
            </div>
        </aside>

    </div>
  )
}
