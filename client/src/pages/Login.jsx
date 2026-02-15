import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    // const [formData, setFormData] = useState({
    // })
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name] : e.target.value
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
                body: JSON.stringify(user)
            })
            const data = await res.json()
            if(data.success === false){
                return;
            }
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div className="w-screen h-screen bg-cover bg-center pt-30" style={{ backgroundImage: "url('/main1.jpg')" }}>
        <div className="flex justify-center">
            <div className="bg-white p-5 h-110 w-70 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
                <img src="/vlogo.jpg" className='w-full'/>
                <div className="mb-2">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email}/>
                </div>
                <div className="mb-2">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password}/>
                </div>
                <div className="">
                    <button className="bg-blue-800 text-white p-2 rounded-lg w-full" type="submit"><i className="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}
