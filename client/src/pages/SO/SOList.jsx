import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const SOList = () => {
    const [sos, setSO] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const navigate = useNavigate();
    const fetchSO = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/so/so-list');
                const data = await res.json();
                if(data.success === true){
                    setSO(data.data)
                }
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        useEffect(() => {
            fetchSO();
        }, []);
  return (
    <div className='bg-white p-4'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>List of SO</h1>
            <select name="" className='border border-slate-300 p-2 rounded-sm w-1/4'>
                <option value="">--Select SO Type--</option>
            </select>
        </div>
        <hr className='my-4 text-slate-300'/>
        {loading ? (
            <p>Loading...</p>
        ): (
            <div className="w-full overflow-x-auto">
            <div className="max-h-500px overflow-y-auto">
                <table className='border border-slate-300 min-w-1200px text-sm'>
                    <thead>
                        <tr className='border border-slate-300 bg-blue-700 text-white'>
                            <th className='border border-slate-300 p-2 px-4' >Actions</th>
                            <th className='border border-slate-300 p-2 px-4' >SO Number</th>
                            <th className='border border-slate-300 p-2 px-4' >PO Number</th>
                            <th className='border border-slate-300 p-2 px-4' >PO Date</th>
                            <th className='border border-slate-300 p-2 px-4' >BOM Item Count</th>
                            <th className='border border-slate-300 p-2 px-4' >Not ordered</th>
                            <th className='border border-slate-300 p-2 px-4' >Job Card Number</th>
                            <th className='border border-slate-300 p-2 px-4' >Item Description</th>
                            <th className='border border-slate-300 p-2 px-4' >Major/Minor Number</th>
                            <th className='border border-slate-300 p-2 px-4' >Qty</th>
                            <th className='border border-slate-300 p-2 px-4' >Revision Number</th>
                            <th className='border border-slate-300 p-2 px-4' >Customer Name</th>
                            <th className='border border-slate-300 p-2 px-4' >Received Date</th>
                            <th className='border border-slate-300 p-2 px-4' >Status</th>
                            <th className='border border-slate-300 p-2 px-4' >SO Type</th>
                            <th className='border border-slate-300 p-2 px-4' >Remark</th>
                            <th className='border border-slate-300 p-2 px-4' >Add Drawing</th>
                        </tr>
                    </thead>
                    <tbody className='text-start text-sm'>
                        {sos.length === 0 ? (
                             <tr>
                                <td colSpan='17' className='text-center p-4'>No So Found</td>
                            </tr>
                        ) : sos.map((so)=> (
                            <tr key={so._id}>
                            <td className='border border-slate-300 px-2'>
                                <button onClick={()=> toggleDropdown(so._id)} className='bg-blue-700 hover:bg-blue-800 text-white font-semibold p-2 rounded-sm w-20 hover:scale-105 transition-all duration-700 cursor-pointer'>Action<i className='fa fa-angle-down pl-1'></i></button>
                                {openDropdown === so._id && 
                                (<div className="absolute left-72 w-50 bg-white rounded-sm shadow-sm border border-slate-300 z-10 text-md">
                                    <button onClick={()=> navigate(`/dashboard/create-bom/${so._id}`)} className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer"
                                    ><i className='fa fa-plus-circle pr-2 text-blue-700'></i>Create BOM</button>
                                    <button onClick={()=> navigate(`/dashboard/view-bom/${so._id}`)} className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer"
                                    ><i className='fa fa-plus-circle pr-2 text-blue-700'></i>View BOM</button>
                                    <button onClick={()=> navigate(`/dashboard/edit-bom/${so._id}`)} className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer"
                                    ><i className='fa fa-pencil pr-2 text-blue-700'></i>Edit BOM</button>
                                    <button onClick={()=> navigate(`/dashboard/edit-so/${so._id}`)} className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer"
                                    ><i className='fa fa-pencil pr-2 text-blue-700'></i>Edit SO</button>
                                </div>)}
                            </td>
                            <td className='border border-slate-300 p-2 px-4 font-semibold'>{so.soNumber}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.poNumber} </td>
                            <td className='border border-slate-300 p-2 px-4'>{new Date(so.poDate).toISOString().split("T")[0]}</td>
                            <td className='border border-slate-300 p-2 px-4'></td>
                            <td className='border border-slate-300 p-2 px-4'></td>
                            <td className='border border-slate-300 p-2 px-4'>{so.jobCardNumber}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.itemDesc}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.majorMinorNumber}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.itemQty}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.drawingRevisionNumber}</td>
                            <td className='border border-slate-300 p-2 px-4'>{so.customer?.name}</td>
                            <td className='border border-slate-300 p-2 px-4'>{new Date(so.receivedDate).toISOString().split("T")[0]}</td>
                            <td className='border border-slate-300 p-2 px-4'><button className='bg-yellow-500 p-2 px-4 rounded-sm font-semibold'>{so.status}</button></td>
                            <td className='border border-slate-300 p-2 px-4'>{so.orderType}</td>
                            
                            <td className='border border-slate-300 p-2 px-4'>{so.remark}</td>
                            <td className='border border-slate-300 p-2 px-4'>
                                <button className='bg-green-600 text-white font-bold rounded-xs w-30 p-1'><i className='fa fa-upload p-2'></i>Add Drawing</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
        )}
        
    </div>
  )
}
