import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Profile = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('')
    const [user, setUser] = useState(null)

    const fetchUser = async () => {
        try {
            const res = await fetch('/api/users/user',{
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if(data.success === true){
                setUser(data.data)
            }
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(()=> {
        fetchUser();
    },[])

  return (
    <div className='w-full flex justify-between gap-4'>
        <div className="">
            <div className="w-50 mb-4">
                <img src="/profile.jpg" alt="" className='w-full'/>
            </div>
            <div className="bg-white grid">
                    <div className={`transition duration-300 p-2 cursor-pointer ${active === 'view' ? 'border-l-2 border-blue-700 text-slate-600':'text-blue-700'}`} onClick={() => {setOpen(open === "view" ? "view" : "view"); setActive('view')}}>View Profile</div>
                    <div className={`transition duration-300 p-2 cursor-pointer ${active === 'update' ? 'border-l-2 border-blue-700 text-slate-600':'text-blue-700'}`} onClick={() => {setOpen(open === "update" ? "update" : "update"); setActive('update')}}>Update Profile</div>
            </div>
        </div>

        <div className={`overflow-hidden ${ open === "view" ? "w-full h-full bg-white p-2 px-4 " : "w-0" }`}>
            <div className="">
                <div className="p-2">
                    <h3 className='text-xl font-semibold'>TRUERP</h3>
                    <p className="text-muted"><small>January 14th, 2026</small></p>	
                </div>
                <hr className='text-slate-400'/>
            </div>
            
            <div className="p-2">
                {user ? (
                    <ul>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Role :</label>
                        <label>{user.role}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Company Name :</label>
                        <label>{user.companyName}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Full Name :</label>
                        <label>{user.name}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Mobile Number :</label>
                        <label>{user.mobile}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Landline/Other Mobile :</label>
                        <label>{user.alternateMobile}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Email :</label>
                        <label>{user.email}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>PAN Number :</label>
                        <label>{user.panNumber}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Aadhar Number :</label>
                        <label>{user.aadharNumber}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>GST Number :</label>
                        <label>{user.gstNumber}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Address :</label>
                        <label>{user.address}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Location :</label>
                        <label>{user.location}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>State :</label>
                        <label>{user.state}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Pin Code :</label>
                        <label>{user.pinCode}</label>
                    </div>
                    <div className="flex mb-2 px-2">
                        <label className='w-1/4 p-1'>Active Status :</label>
                        <label>Active</label>
                    </div>
                </ul>
                ) : (
                    <p>Loading..</p>
                )}
                
            </div>
        </div>
        <div className={`overflow-hidden ${ open === "update" ? "w-full h-full bg-white p-2 px-4" : "w-0" }`}>
            <div className="p-2">
                <h4 className='text-lg mb-3 font-semibold'>Update Profile</h4><hr className='text-slate-400 my-4'/>
                
                <form action="">
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Role</label>
                        <select name="role" id="" className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'>
                            <option value="">---Select Role---</option>
                        </select>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Full Name</label>
                        <input type="text" name='fullname' placeholder='Enter Full Name' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Mobile Number</label>
                        <input type="text" name='mobile' placeholder='Enter Mobile Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Alternate Number</label>
                        <input type="text" name='alternatenumber' placeholder='Enter Aleternate Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>GST Number</label>
                        <input type="text" name='gstnumber' placeholder='Enter GST Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>PAN Number</label>
                        <input type="text" name='pannumber' placeholder='Enter Pan Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Aadhar Number</label>
                        <input type="text" name='aadharnumber' placeholder='Enter Aadhar Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Password</label>
                        <input type="password" name='password' placeholder='Enter Password' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Email</label>
                        <input type="email" name='email' placeholder='Enter Email' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Address</label>
                        <textarea type="text" row="2" name='address' placeholder='Enter Address' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>State</label>
                        <input type="text" name='email' placeholder='Enter State' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Location</label>
                        <input type="text" name='location' placeholder='Enter Location' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Pin Code</label>
                        <input type="text" name='pincode' placeholder='Enter Pin COde' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'/>
                    </div>
                    <hr className='text-slate-400 w-full my-4'/>
                    <div className="flex justify-center mt-4">
                        <button type='submit' className='w-30 bg-blue-700 text-white p-2 rounded-lg'>
                            <i className='fa fa-wa fa-lg fa-check-circle pr-2'></i>Save
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
