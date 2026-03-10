import React, { useEffect, useState } from 'react'

export const GRR = () => {
    const initialData = {
        grrNo:"",
        grrDate:""
    }
    const [formData,setFormData] = useState(initialData);
    
    const fetchGRR = async () => {
        const res = await fetch("/api/grr/preview");
        const data = await res.json();
        
        if(data.success){
            setFormData(formData => ({
                ...formData,
                grrNo:data.grrNo
            }))
        }
    }

    const setTodayDate = () => {
        const today = new Date().toISOString().split("T")[0];
        
        setFormData(formData => ({
            ...formData,
            grrDate:today
        }))
    }
    useEffect(() => {
        fetchGRR();
        setTodayDate();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const res = await fetch("/api/grr/create", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(!res.ok){
            console.log("server error")
            return;
        }
        setFormData(initialData)
        } catch (error) {
            console.log(error)
        }
    }

return (
    <div className="bg-white p-4 rounded-sm shadow-md xl:w-1/2 sm:w-full">
        <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Create GRR</h1>
            <button className='p-2 bg-rose-700 text-white rounded-sm hover:bg-rose-800'>List GRR</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2"> 
                    <label className="text-sm font-semibold">GRR No.</label>
                    <input type="text" name="grrNo" value={formData.grrNo} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">GRR Date.</label>
                    <input type="date" name="grrDate" value={formData.grrDate} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
                </div>
            </div>
            <hr className='text-slate-300 my-4'/>
            <button type='submit' className='bg-blue-700 p-2 px-4 text-white rounded-sm font-semibold hover:bg-blue-800'><i className='fa fa-check-circle pr-1'></i>Submit</button>
        </form>
    </div>
  )
}
