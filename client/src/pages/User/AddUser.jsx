import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AddUser = () => {
    const initialData = { role:'', companyName: '', name: '', mobile: '', password: '', aadharNumber: '', gstNumber: '', panNumber: '', email: '', salaryPerDay: '', paymentTermsInDays: '', address: '', state: '', location: '', pinCode: '',}
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();
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
        <hr className='text-gray-300 my-4'/>
        <div className="text-md">
            <form onSubmit={handleSubmit}>
                <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-blue-700'><i className='fa fa-id-badge pr-2'></i>Role & Identity</h2>
                <div className="grid grid-cols-3 gap-6 my-3 text-sm">
                    <div className="grid gap-2 px-2">
                        <label className='text-md font-semibold'>Role</label>
                        <select name="role" onChange={handleChange} value={formData.role} className='border border-slate-300 rounded-sm p-2 placeholder:text-slate-600' required>
                            <option value="">Select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="contractor">Contractor</option>
                            <option value="customer">Customer</option>
                            <option value="driver">Driver</option>
                            <option value="staff">Staff</option>
                            <option value="supplier">Supplier</option>
                            <option value="sub-vendors">Sub Vendors</option>
                            <option value="store-user">Store User</option>
                            <option value="quality-analysis-team">Quality Analysis Team</option>
                            <option value="purchase-order-team">Purchase Order Team</option>
                            <option value="production-team">Production Team</option>
                            <option value="transporter">Transporter</option>
                            <option value="worker">Worker</option>
                        </select>
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Company Name</label>
                        <input type="text" name="companyName" id="companyName" onChange={handleChange} value={formData.companyName} placeholder='Company Name' className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>User Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder='Full Name' className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                </div>
                <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-green-600'><i className='fa fa-lock pr-2'></i>Login Credentials</h2>
                <div className="grid grid-cols-3 gap-6 my-3 text-sm">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Mobile No.</label>
                        <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} placeholder='10-digit mobile no.'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='Enter Email'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder='Password'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                </div>
                <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-orange-400'><i className='fa fa-file-text-o pr-2'></i>Document & KYC</h2>
                <div className="grid grid-cols-3 gap-6 my-3 text-sm">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Aadhar Number</label>
                        <input type="text" name="aadharNumber" id="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder='Aadhar Number'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>GST Number</label>
                        <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} placeholder='GST Number'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>PAN Number</label>
                        <input type="text" name="panNumber" id="panNumber" value={formData.panNumber} onChange={handleChange} placeholder='PAN Number'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                </div>
                <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-purple-600'><i className='fa fa-inr pr-2'></i>Salary & Payment</h2>
                <div className="grid grid-cols-2 gap-6 my-3 text-sm">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Salary Per Day</label>
                        <input type="text" name="salaryPerDay" id="salaryPerDay" value={formData.salaryPerDay} onChange={handleChange} placeholder=''className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid mx-2">
                        <label className='text-md font-semibold'>Payment Terms (in days)</label>
                        <input type="text" name="paymentTermsInDays" id="paymentTermsInDays" value={formData.paymentTermsInDays} onChange={handleChange} placeholder='Pay'className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                </div>
                <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-yellow-400'><i className='fa fa-map-marker pr-2'></i>Adress Details</h2>
                <div className="grid grid-cols-2 gap-6 my-3 text-sm">
                    <div className="grid mx-2">
                        <label className='text-md font-semibold' >Address</label>
                        <textarea type="textarea"  name="address" id="address" value={formData.address} onChange={handleChange}  row="4" placeholder=''className='border border-slate-300 rounded-sm p-2 mt-2' />
                    </div>
                    <div className="grid grid-cols-3 gap-6 items-start">
                        <div className="grid mx-2">
                            <label className='text-md font-semibold'>State</label>
                            <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} placeholder='Maharashtra'className='border border-slate-300 rounded-sm p-2 mt-2' />
                        </div>
                        <div className="grid mx-2">
                            <label className='text-md font-semibold'>Location</label>
                            <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder=''className='border border-slate-300 rounded-sm p-2 mt-2' />
                        </div>
                        <div className="grid mx-2">
                            <label className='text-md font-semibold'>Pin Code</label>
                            <input type="text" name="pinCode" id="pinCode" value={formData.pinCode} onChange={handleChange} placeholder=''className='border border-slate-300 rounded-sm p-2 mt-2' />
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-2 flex gap-4 text-sm font-semibold">
                    <button className="bg-blue-700 p-2 px-4 rounded-xs text-white hover:scale-105 transition-all duration-700" type="submit" name="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i>Submit</button>
                    <button onClick={()=> setFormData(initialData)} className="bg-gray-700 p-2 px-4 rounded-xs text-white hover:scale-105 transition-all duration-700" type="button"><i className="fa fa-fw fa-lg fa-times-circle"></i>Clear</button>
                    <button className='p-2 px-4 text-blue-600 rounded-xs hover:scale-105 transition-all duration-700 hover:shadow-lg' onClick={()=> navigate('/dashboard/user-list')}><i className='fa fa-list pr-2'></i>View All Users</button>
                </div>
            </form>
        </div>
    </div>
  )
}
