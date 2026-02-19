import React from 'react'

export const CreateSO = () => {
  return (
    <div className='w-1/2 bg-white p-4 border border-slate-400 shadow-md rounded-sm'>
        <h1 className='text-2xl font-semibold'>Create New SO</h1>
        <hr className='text-slate-400 my-4'/>
        <form action="" className='grid gri-cols-1 text-sm placeholder:text-slate-400'>
            <select name="" id="" className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="">--Select Customer--</option>
            </select>
            <input type="text" placeholder='Enter SO Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <div className="grid">
                <label className="font-semibold">JobCard Number</label>
                <input type="text" name="" id=""  className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <div className="grid">
                <label className="font-semibold">Item Description</label>
                <input type="text" name="" id="" placeholder='Enter Item Description' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <div className="grid">
                <label className="font-semibold">Item Quantity</label>
                <input type="text" name="" id="" placeholder='Enter Item Quantity' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <input type="text" name="" id="" placeholder='Major/Minor Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="" id="" placeholder='Select Recieved Date' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="" id="" placeholder='Select Expected Date' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <select name="" id="" className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="">Pending</option>
                <option value="">Complete</option>
                <option value="">Dispatch</option>
                <option value="">Hold</option>
            </select>
            <select name="" id="" className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="">Under Quotation</option>
                <option value="">Order Acceptance</option>
            </select>
            <input type="text" name="" id="" placeholder='Drawing Revision Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="text" name="" id="" placeholder='PO/LOI Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="" id="" placeholder='Select PO Date' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <textarea name="" id="" rows='2' placeholder='Remark' className='p-2 my-2 border border-slate-400 rounded-sm'></textarea>
            <hr className='text-slate-400 my-4'/>
            <button className='bg-blue-600 p-2 rounded-sm text-white w-20 hover:bg-blue-700'>Submit</button>
        </form>
    </div>
  )
}
