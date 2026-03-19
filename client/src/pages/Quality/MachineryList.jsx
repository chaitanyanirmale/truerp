import React, { useEffect, useState } from 'react'

export const MachineryList = () => {
    const [machineries, setMachineries] = useState([])
    const [loading, setLoading] = useState(false);
    const fetchMachineryList = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/machinery/machinery-list');
            const data = await res.json();
            if(data.success === true){
                setMachineries(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchMachineryList();
    },[]);
  return (
    <div className='bg-white p-4 rounded-xs shadow-sm items-start'>
        <div className="flex justify-between">
        <h1 className='text-2xl font-semibold'>List of Machinery</h1>
        <div className="grid grid-cols-4 gap-6">
            <button className='p-2 px-4 rounded-xs bg-green-700 text-white font-semibold'><i className='fa fa-plus pr-2'></i>Add Machinery</button>
            <input type="date" name=""  className='p-2 px-4 rounded-xs border border-slate-300' />
            <input type="date" name=""  className='p-2 px-4 rounded-xs border border-slate-300' />
            <button className='p-2 px-4 rounded-xs bg-blue-700 text-white font-semibold'><i className='fa fa-search pr-2'></i>Search</button>
        </div>
        </div>
        <hr className='my-6 text-slate-300'/>
        <div className="">
            <table className='w-full text-center text-sm'>
                <thead>
                    <tr className=''>
                        <th className='p-2 border border-slate-300'>Machinery Name</th>
                        <th className='p-2 border border-slate-300'>Manufacturer</th>
                        <th className='p-2 border border-slate-300'>Model Number</th>
                        <th className='p-2 border border-slate-300'>Serial Number</th>
                        <th className='p-2 border border-slate-300'>Purchase Date</th>
                        <th className='p-2 border border-slate-300'>Purchase Price</th>
                        <th className='p-2 border border-slate-300'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {machineries.length === 0 ? (
                            <tr><td colSpan="7" className='text-center p-2'>No Machinery Found</td></tr>
                    ) : (machineries?.map((machine)=>(
                        <tr key={machine._id}>
                            <td className='p-2 border border-slate-300'>{machine.name}</td>
                            <td className='p-2 border border-slate-300'>{machine.manufacturer}</td>
                            <td className='p-2 border border-slate-300'>{machine.modelNumber}</td>
                            <td className='p-2 border border-slate-300'>{machine.serialNumber}</td>
                            <td className='p-2 border border-slate-300'>{new Date(machine.purchaseDate).toISOString().split("T")[0]}</td>
                            <td className='p-2 border border-slate-300'>{machine.purchasePrice}</td>
                            <td className='p-2 border border-slate-300'>
                                <button className='bg-blue-700 text-white font-semibold p-2 rounded-xs'>Action<i className='fa fa-angle-down pl-1'></i></button>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
