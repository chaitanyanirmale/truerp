import React from 'react'

export const AddMachinery = () => {
  return (
    <div className='bg-white p-4 rounded-sm shadow-sm'>
        <h1 className='text-2xl font-semibold'>Add New Machinery</h1>
        <hr className='text-slate-300 my-4'/>
        <div className="xl:grid xl:grid-cols-3 gap-8">
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Machinery Name</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Machinery Name'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Machinery Description</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Machinery Description'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Machinery Image</label>
                <input type="file" name="" className="p-2 border border-slate-300 rounded-sm"/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Manufacturer</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Manufacturer'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Model Number</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Model Number'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Serial Number</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Serial Number'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Date of Purchase</label>
                <input type="date" name="" className="p-2 border border-slate-300 rounded-sm" />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Purchase Price</label>
                <input type="text" name="" className="p-2 border border-slate-300 rounded-sm" placeholder='Enter Purchase Price'/>
            </div>
        </div>
         <hr className='text-slate-300 my-6'/>
         <div className="">
            <button className='p-2 bg-blue-700 text-white font-semibold rounded-xs px-4 mr-2 hover:bg-blue-800'><i className='fa fa-check-circle pr-1 '></i>Submit</button>
            <button className='p-2 bg-gray-400 text-white font-semibold rounded-xs px-4 hover:bg-gray-500'><i className='fa fa-times-circle pr-1'></i>Clear</button>
         </div>
    </div>
  )
}
