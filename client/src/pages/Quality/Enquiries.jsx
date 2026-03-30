import React, { useEffect, useState } from 'react'

export const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(false)
    const fetchEnquiries = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/contact/enquiries');
            const data = await res.json();
            if(data.success === true){
                setEnquiries(data.data)
                }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchEnquiries();
    },[]);
  return (
    <div className='p-4 bg-white rounded-sm shadow-sm'>
        <h1 className='text-2xl font-semibold'>Enquiries</h1>
        <hr className='text-slate-300 my-4'/>
        <div className="">
            <table className='w-full text-sm text-center'>
                <thead>
                    <tr>
                        <th className='p-2 border border-slate-300'>Full Name</th>
                        <th className='p-2 border border-slate-300'>Email</th>
                        <th className='p-2 border border-slate-300'>Message</th>
                        <th className='p-2 border border-slate-300'>Enquired On</th>
                        <th className='p-2 border border-slate-300'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiries === 0 ? (
                        <tr>
                            <td colSpan="5">No Enquiries Found</td>
                        </tr>
                    ) : (
                        enquiries.map((enq)=> (
                            <tr key={enq._id}>
                                <td className='p-2 border border-slate-300'>{enq.name}</td>
                                <td className='p-2 border border-slate-300'>{enq.email}</td>
                                <td className='p-2 border border-slate-300'>{enq.message}</td>
                                <td className='p-2 border border-slate-300'>{new Date(enq.createdAt).toISOString().split("T")[0]}</td>
                                <td className='p-2 border border-slate-300'>
                                    <button className="bg-blue-700 text-white font-semibold px-3 py-2 rounded-sm">Action</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}
