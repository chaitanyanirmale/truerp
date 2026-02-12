import React from 'react'

export const SidebarItem = ({label}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-700 cursor-pointer transition">
        <span className="text-md">{label}</span>
    </div>
  )
}
