import React from 'react'

export const AddSupplierProduct = () => {
  return (
    <div className='flex justify-between gap-8 items-stretch'>
        <div className="bg-white p-4 shadow-sm rounded-sm w-full gap-4 grid">
            <h1 className='text-2xl font-semibold'>Add Supplierwise Product</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Select Supplier/Customer/Sub-Vendor</label>
                <select name="" className="border border-slate-300 rounded-sm p-2">
                    <option value="">--Select Supplier/Customer/Sub-Vendor--</option>
                </select>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Price</label>
                <input type="text" name="" className="border border-slate-300 rounded-sm p-2" placeholder='Enter Price'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Unit</label>
                <input type="text" name="" className="border border-slate-300 rounded-sm p-2" placeholder='Enter Unit'/>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">Stock Count</label>
                <input type="text" name="" className="border border-slate-300 rounded-sm p-2" placeholder='Enter Stock Count'/>
            </div>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <button className='bg-blue-700 text-white font-semibold rounded-sm px-4 py-2'><i className='fa fa-check-circle pr-2'></i>Submit</button>
            </div>
        </div>
        <div className="bg-white p-4 shadow-sm rounded-sm">
            <h1 className='text-2xl font-semibold'>List of Supplierwise Product</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-slate-300'>SP ID</th>
                            <th className='p-2 border border-slate-300'>Supplier/Customer Name</th>
                            <th className='p-2 border border-slate-300'>Role</th>
                            <th className='p-2 border border-slate-300'>Price</th>
                            <th className='p-2 border border-slate-300'>Unit</th>
                            <th className='p-2 border border-slate-300'>Stock Count</th>
                            <th className='p-2 border border-slate-300'>Created On</th>
                            <th className='p-2 border border-slate-300'>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}
