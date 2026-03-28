import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    const [formData, setFormData] = useState({email:'', password:''})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/signin',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(!res.ok){
                alert(data.message)
                return;
            }
            navigate('/dashboard/profile')
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div className="bg-slate-200">
        <div className="w-full flex justify-center items-center">
            <div className="">
                <img src="/loginbg.png" alt="img" className='w-full h-screen p-2'/>
            </div>
            <div className="bg-white p-5 w-1/3 shadow-xl rounded-sm md:w-90 sm:w-90">
            <form onSubmit={handleSubmit}>
                <img src="/vlogo.jpg" className='w-60 ml-10'/>
                <p className='text-center text-sm mb-4 text-slate-600'>Smart ERP for Manufacturing & Industrial Businesses</p>
                <div className="mb-4">
                    <input className="border border-slate-200 rounded-sm p-2 w-full" type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
                </div>
                <div className="mb-4">
                    <input className="border border-slate-200 rounded-sm p-2 w-full" type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/>
                </div>
                <div className="mt-8">
                    <button className="bg-blue-800 text-white p-2 rounded-sm w-full" type="submit"><i className="fa fa-sign-in fa-lg fa-fw"></i>{loading ? 'Siging In..': 'Sign In'}</button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}
