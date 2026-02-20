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
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div className="w-screen h-screen bg-cover bg-center pt-30" style={{ backgroundImage: "url('/main1.jpg')" }}>
        <div className="flex justify-end mr-20 ">
            <div className="bg-white p-5 w-1/4 shadow-lg rounded-lg justify-center md:w-70 sm:w-70">
            <form onSubmit={handleSubmit}>
                <img src="/vlogo.jpg" className='w-50'/>
                <div className="mb-4">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
                </div>
                <div className="mb-4">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/>
                </div>
                <div className="mt-8">
                    <button className="bg-blue-800 text-white p-2 rounded-lg w-full" type="submit"><i className="fa fa-sign-in fa-lg fa-fw"></i>{loading ? 'Siging In..': 'Sign In'}</button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}
