import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const GRRList = () => {
    const [grrs, setGrrs] = useState([])
    const [loading, setLoading] = useState(false);
    
    const fetchGrr = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/grr/grr-list');
            const data = await res.json();
            if(data.success === true){
                setGrrs(data.data)
             }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchGrr();
    },[]);
  return (
    <div className='bg-white p-4 shadow-sm rounded-sm'>
        <div className="flex justify-between">
            <div className="w-1/2">
                <h1 className='text-2xl font-semibold'>All GRR</h1>
            </div>
            <div className="grid grid-cols-3 gap-8 w-full">
                <button className='p-1 px-4 bg-green-600 text-white rounded-sm font-semibold'><i className='fa fa-plus pr-1'></i>Create New GRR</button>
                <input type="date" name="" className="border border-slate-300 rounded-sm p-2" />
                <input type="date" name="" className="border border-slate-300 rounded-sm p-2" />
            </div>
            <button className='p-1 px-2 bg-blue-700 text-white rounded-sm w-40 ml-8'>Search</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div>
            <table className="w-full text-sm">
                <thead>
                    <tr className=''>
                        <td className='border border-slate-300 p-3 font-semibold'>GRR No.</td>
                        <td className='border border-slate-300 p-3 font-semibold'>GRR Date</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Po Number</td>
                        <td className='border border-slate-300 p-3 font-semibold'>So Number</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Item Name</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Recieved Qty</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Rejected Qty</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Accecepted Qty</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Remark</td>
                    </tr>
                </thead>
                <tbody>
                    {grrs.length === 0 ? (
                        <tr>
                            <td>No GRR Found</td>
                        </tr>
                    ):(grrs.map((grr) => (
                    <tr key={grr._id}>
                        <td className="p-2 py-3 border border-slate-300">{grr.grrNo}</td>
                        <td className="p-2 py-3 border border-slate-300">{new Date(grr.grrDate).toLocaleDateString("en-IN")}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.poId?.poNo}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.soId?.soNumber}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.itemId?.itemName}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.receivedQty}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.rejectedQty}</td>
                        <td className="p-2 py-3 border border-slate-300 font-semibold">{grr.acceptedQty}</td>
                        <td className="p-2 py-3 border border-slate-300">{grr.remark}</td>
                    </tr>
                    )))}                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
