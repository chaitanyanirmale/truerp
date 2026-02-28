import React from 'react'

export const AddNewItem = () => {
  return (
    <div className='p-4 bg-white border border-slate-300 rounded-sm shadow-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Add New Item</h1>
            <button className='p-1 px-4 bg-blue-800 text-white font-semibold rounded-sm'>List Item</button>
        </div>
        <hr className='my-4 text-slate-300'/>
        <form action="">
            <div className="grid grid-cols-3 gap-4">
                <div className="">
                    <label className="text-sm font-semibold">Select Main Category</label>
                    <select name="" className="border border-slate-300 p-2 mt-1 rounded-sm w-full">
                        <option value="">-- Select Main Category --</option>
                    </select>
                </div>
                <div className="">
                    <label className="text-sm font-semibold">Select Sub Category</label>
                    <select name="" className="border border-slate-300 p-2 mt-1 rounded-sm w-full">
                        <option value="">-- Select Sub Category --</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid">
                        <label className="text-sm font-semibold">Check Last Item Code</label>
                        <select name="" className="border border-slate-300 p-2 mt-1 rounded-sm w-full">
                            <option value="">-- Select Prefix --</option>
                        </select>
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold">Item Code</label>
                        <input type="text" name="" className="border border-slate-300 p-2 mt-1 rounded-sm w-full" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-4">
                <div className="grid">
                    <label className="text-sm font-semibold">Item Name/Model Name</label>
                    <input type="text" name="" className="border border-slate-300 p-2  rounded-sm mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Per Unit*</label>
                    <select name="" className="border border-slate-300 p-2 rounded-sm mt-2">
                        <option value="">-- Select Unit --</option>
                    </select>
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Weight in Gram</label>
                    <input type="text" name="" className="border border-slate-300 p-2  rounded-sm mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-4 mt-4 gap-4">
                <div className="grid">
                    <label className="text-sm font-semibold">Item Price Supplier</label>
                    <input type="text" name="" className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Item Price Customer</label>
                    <input type="text" name="" className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Minimum Order Qty</label>
                    <input type="text" name="" className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
            </div>
            <div className="grid mt-4">
                <label className="text-sm font-semibold">Item Description</label>
                <textarea name="" className="border border-slate-300 rounded-sm p-2 mt-2" rows="2"></textarea>
            </div>
            <hr className='my-4 text-slate-300'/>
            <div className="flex justify-end">
                <button className='bg-blue-700 px-3 py-1 text-white rounded-sm '>Next</button>
            </div>
        </form>
    </div>
  )
}
