import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null)

    const fetchUser = async () => {
        try {
            const res = await fetch(`/api/users/user/${id}`,{
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if(data.success === true){
                setUser(data.user)
            }
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(()=> {
        fetchUser();
    },[id])

  return (
    <div className='w-full flex gap-4'>
        <div className="">
            <div className="w-70 mb-4">
                <img src="/profile.jpg" alt="" className='w-full'/>
            </div>
        </div>
        <div className="w-full">
            <div className="w-full h-full bg-white p-2 px-4 text-sm">
                <div className="">
                    <div className="p-2">
                        <h3 className='text-xl font-semibold'>TRUERP</h3>
                        <p className="text-muted"><small>January 14th, 2026</small></p>	
                    </div>
                    <hr className='text-slate-300 my-4'/>
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
        </div>
    </div>
  )
}
