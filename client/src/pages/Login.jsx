import React, { useState } from 'react'
 

export const Login = () => {
    const [formData, setFormData] = useState("")
  return (
      <div className="w-screen h-screen bg-cover bg-center pt-30" style={{ backgroundImage: "url('/main1.jpg')" }}>
        <div className="flex justify-center">
            <div className="bg-white p-5 w-70 h-110 shadow-lg rounded-lg">
                <form action="" method="post">
                <img src="/vlogo.jpg" className='w-full'/>
                <div className="mb-2">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="text" placeholder="Username" name="myusername" />
                </div>
                <div className="mb-2">
                    <input className="border border-slate-200 rounded-lg p-2 w-full" type="password" placeholder="Password" name="mypassword" />
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
