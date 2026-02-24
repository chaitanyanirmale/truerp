import React from 'react'

export const AddSupplier = () => {
  return (
    <div className='bg-white border border-slate-400 rounded-sm p-4'>
        <h1 className='text-2xl font-semibold'>Add New Supplier/Vendor</h1>
        <hr className='text-slate-400 my-4'/>
        <div className="">
            <form action="">
                <div className="grid gap-2 px-2">
                    <label className='text-sm font-semibold'>Role</label>
                    <select name="role" className='border border-slate-400 rounded-md p-2 w-1/4 placeholder:text-slate-600' required>
                        <option value="">Select User Role</option>
                        <option value="Supplier">Supplier</option>
                        <option value="Sub-vendors">Sub Vendors</option>
                        <option value="Customer">Customer</option>
                    </select>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 mt-4 w-full gap-4 mb-2">
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Full Name / Company Name</label>
                        <input type="text" name="companyName" placeholder='Enter Full Name' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Contact Person</label>
                        <input type="text" name="contactPerson" placeholder='Enter Name' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Mobile Number / Username</label>
                        <input type="text" name="mobileNumber" placeholder='Enter Mobile Number' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Password</label>
                        <input type="password" name="password" placeholder='Enter Password' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Landline / Alternate Number</label>
                        <input type="number" name="alternateNumber" placeholder='Landline or Other Mobile Number' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>GST Number</label>
                        <input type="number" name="gstNumber" placeholder='GST Number' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>PAN Number</label>
                        <input type="number" name="companyName" placeholder='PAN Number' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-sm font-semibold'>Email</label>
                        <input type="email" name="contactPerson" placeholder='Enter Email' className='border border-slate-600 rounded-sm p-2 mt-2' />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2">
                    <div className="grid gap-2">
                        <label className='text-sm font-semibold'>Address</label>
                        <textarea name="" className="border border-slate-400 rounded-sm p-2" rows="2" placeholder='Enter Address Here..'></textarea>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <label className='text-sm font-semibold'>State</label>
                            <input type="text" name="" className="border border-slate-600 rounded-sm p-2 mt-2" placeholder='Maharashtra'/>
                        </div>
                        <div className="">
                            <label className='text-sm font-semibold'>Location</label>
                            <input type="text" name="" className="border border-slate-600 rounded-sm p-2 mt-2" placeholder='Enter Location'/>
                        </div>
                        <div className="">
                            <label className='text-sm font-semibold'>Pin Code</label>
                            <input type="text" name="" className="border border-slate-600 rounded-sm p-2 mt-2" placeholder='Enter Pin Code'/>
                        </div>
                    </div>
                </div>
                <hr className='my-4 text-slate-400'/>
                <div className="">
                    <button className='bg-blue-600 p-2 text-white rounded-sm mr-2'>Submit</button>
                    <button className='bg-gray-400 p-2 text-white rounded-sm'>Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}
