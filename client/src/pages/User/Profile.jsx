import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

export const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
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

    const [formData, setFormData] = useState({
        role: "",
        name: "",
        mobile: "",
        alternateNumber: "",
        gstNumber: "",
        panNumber: "",
        aadharNumber: "",
        password: "",
        email: "",
        address: "",
        state: "",
        location: "",
        pinCode: "",
    });

    useEffect(() => {
        if (user) {
        setFormData({
            role: user.role || "",
            name: user.name || "",
            mobile: user.mobile || "",
            alternateNumber: user.alternateNumber || "",
            gstNumber: user.gstNumber || "",
            panNumber: user.panNumber || "",
            aadharNumber: user.aadharNumber || "",
            password: "",
            email: user.email || "",
            address: user.address || "",
            state: user.state || "",
            location: user.location || "",
            pinCode: user.pinCode || "",
        });
        }
    }, [user]);

     const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        if (!currentUser) {
            console.log("User not loaded yet");
            return;
        }
        const res = await fetch(`/api/users/update/${currentUser._id}`,{
            method: 'PUT',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json(); 

        if (!res.ok) {
            throw new Error(data.message || "Update failed");
        }
        console.log("User Updated Successfully");

        } catch (error) {
        console.log(error);
        }
    };

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
                        <label>{user.alternateNumber}</label>
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
                
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Role</label>
                        <select name="role" value={formData.role} onChange={handleChange} className='border border-slate-400 p-1 px-2 rounded-sm w-1/2'>
                            <option value="">---Select Role---</option>
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
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Full Name</label>
                        <input type="text" name='name' value={formData.name} placeholder='Enter Full Name' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Mobile Number</label>
                        <input type="text" name='mobile' value={formData.mobile} placeholder='Enter Mobile Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Alternate Number</label>
                        <input type="text" name='alternateNumber' value={formData.alternateNumber} placeholder='Enter Alternate Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>GST Number</label>
                        <input type="text" name='gstNumber' value={formData.gstNumber} placeholder='Enter GST Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>PAN Number</label>
                        <input type="text" name='panNumber' value={formData.panNumber} placeholder='Enter Pan Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Aadhar Number</label>
                        <input type="text" name='aadharNumber' value={formData.aadharNumber} placeholder='Enter Aadhar Number' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Password</label>
                        <input type="password" name='password' value={formData.password} placeholder='Enter Password' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Email</label>
                        <input type="email" name='email' value={formData.email} placeholder='Enter Email' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Address</label>
                        <textarea type="text" rows="2" name='address' value={formData.address} placeholder='Enter Address' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>State</label>
                        <input type="text" name='state' value={formData.state} placeholder='Enter State' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Location</label>
                        <input type="text" name='location' value={formData.location} placeholder='Enter Location' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
                    </div>
                    <div className="flex mb-4 px-2">
                        <label className='w-1/4 p-1'>Pin Code</label>
                        <input type="text" name='pinCode' value={formData.pinCode} placeholder='Enter Pin COde' className='border border-slate-400 p-1 px-2 rounded-sm w-1/2' onChange={handleChange}/>
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
