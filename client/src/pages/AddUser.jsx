import React, { useState } from 'react'

export const AddUser = () => {
  return (
    <div className='p-5 border border-slate-300 shadow-md rounded-md bg-white'>
        <h1 className='text-3xl font-semibold text-slate-600'>Add New User</h1>
        <hr className='text-gray-600'/><br />
        <div className="text-md">
            <form >
                <div className="grid gap-2 px-2">
                    <label className='text-md font-semibold'>Role</label>
                    <select name="role" id="role" className='border border-slate-400 rounded-md p-2 w-1/4 placeholder:text-slate-600' required>
                        <option value="">Select User Role</option>
                        <option value="admin">Admin</option>
                        <option value="contractor">Contractor</option>
                        <option value="customer">Customer</option>
                        <option value="driver">Driver</option>
                        <option value="staff">Staff</option>
                        <option value="supplier">Supplier</option>
                        <option value="transporter">Transporter</option>
                        <option value="worker">Worker</option>
                    </select>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 mt-4 w-full gap-4">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Company Name</label>
                        <input type="text" name="companyName" id="companyName" placeholder='Company Name' className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>User Name</label>
                        <input type="text" name="name" id="name" placeholder='Full Name' className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Mobile No.</label>
                        <input type="text" name="mobile" id="mobile" placeholder='Mobile No.'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Password</label>
                        <input type="password" name="password" id="password" placeholder='Password'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Alternate No.</label>
                        <input type="text" name="alternateMobile" id="alternateMobile" placeholder='Alternate No.'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>GST Number</label>
                        <input type="text" name="gstNumber" id="gstNumber" placeholder='GST Number'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>PAN Number</label>
                        <input type="text" name="panNumber" id="panNumber" placeholder='PAN Number'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>email</label>
                        <input type="email" name="email" id="email" placeholder='Enter Email'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Salary Per Day</label>
                        <input type="text" name="salaryPerDay" id="salaryPerDay" placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Payment Terms (in days)</label>
                        <input type="text" name="paymentTermsInDays" id="paymentTermsInDays" placeholder='Pay'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>State</label>
                        <input type="text" name="state" id="state" placeholder='Maharashtra'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Location</label>
                        <input type="text" name="location" id="location" placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Pin Code</label>
                        <input type="text" name="pinCode" id="pinCode" placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold' >Address</label>
                        <textarea type="textarea"  name="address" id="address"  row="4" placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                </div>
                <div className="mt-4 p-2 justify-between">
                    <button className="bg-blue-600 p-2 mx-2 rounded-md text-white" type="submit" name="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i>Submit</button>
                    <button className="bg-gray-600 p-2 rounded-md text-white" type="reset"><i className="fa fa-fw fa-lg fa-times-circle"></i>Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}
