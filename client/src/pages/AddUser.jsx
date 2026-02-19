import React, { useState } from 'react'

export const AddUser = () => {
    const initialData = { role:'', companyName: '', name: '', mobile: '', password: '', alternateMobile: '', aadharNumber: '', gstNumber: '', panNumber: '', email: '', salaryPerDay: '', paymentTermsInDays: '', address: '', state: '', location: '', pinCode: '',}
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(data.success === false){
                console.log("server error")
                return;
            }
            setFormData(initialData)
            console.log("User Created")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='p-5 border border-slate-300 shadow-md rounded-md bg-white'>
        <h1 className='text-3xl font-semibold text-slate-600'>Add New User</h1>
        <hr className='text-gray-600'/><br />
        <div className="text-md">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2 px-2">
                    <label className='text-md font-semibold'>Role</label>
                    <select name="role" onChange={handleChange} value={formData.role} className='border border-slate-400 rounded-md p-2 w-1/4 placeholder:text-slate-600' required>
                        <option value="">Select User Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Customer">Customer</option>
                        <option value="Driver">Driver</option>
                        <option value="Staff">Staff</option>
                        <option value="Supplier">Supplier</option>
                        <option value="Transporter">Transporter</option>
                        <option value="Worker">Worker</option>
                    </select>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-3 mt-4 w-full gap-4">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Company Name</label>
                        <input type="text" name="companyName" id="companyName" onChange={handleChange} value={formData.companyName} placeholder='Company Name' className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>User Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder='Full Name' className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Mobile No.</label>
                        <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} placeholder='Mobile No.'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder='Password'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Alternate No.</label>
                        <input type="text" name="alternateMobile" id="alternateMobile" value={formData.alternateMobile} onChange={handleChange} placeholder='Alternate No.'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Aadhar Number</label>
                        <input type="text" name="aadharNumber" id="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder='Aadhar Number'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>GST Number</label>
                        <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} placeholder='GST Number'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>PAN Number</label>
                        <input type="text" name="panNumber" id="panNumber" value={formData.panNumber} onChange={handleChange} placeholder='PAN Number'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='Enter Email'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Salary Per Day</label>
                        <input type="text" name="salaryPerDay" id="salaryPerDay" value={formData.salaryPerDay} onChange={handleChange} placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Payment Terms (in days)</label>
                        <input type="text" name="paymentTermsInDays" id="paymentTermsInDays" value={formData.paymentTermsInDays} onChange={handleChange} placeholder='Pay'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>State</label>
                        <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} placeholder='Maharashtra'className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Location</label>
                        <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Pin Code</label>
                        <input type="text" name="pinCode" id="pinCode" value={formData.pinCode} onChange={handleChange} placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold' >Address</label>
                        <textarea type="textarea"  name="address" id="address" value={formData.address} onChange={handleChange}  row="4" placeholder=''className='border border-slate-600 rounded-sm py-1 px-2 mt-2' />
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
