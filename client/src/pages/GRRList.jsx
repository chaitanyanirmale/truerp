import React from 'react'

export const GRRList = () => {
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
                        <td className='border border-slate-300 p-3 font-semibold'>Status</td>
                        <td className='border border-slate-300 p-3 font-semibold'>View</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Quality Check</td>
                        <td className='border border-slate-300 p-3 font-semibold'>Store Approve</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 p-3'>GRR-0078-2025-26</td>
                        <td className='border border-slate-300 p-3'>03-02-2026</td>
                        <td className='border border-slate-300 p-3'>
                            <select name="" className="p-2 border border-slate-300 rounded-sm">
                                <option value="">Pending</option>
                                <option value="">Canceled</option>
                                <option value="">Denied</option>
                                <option value="">Complete</option>
                            </select>
                        </td>
                        <td className='border border-slate-300 p-3'>
                            <button className='bg-blue-700 text-white font-semibold p-2 px-4 rounded-sm'>View</button>
                        </td>
                        <td className='border border-slate-300 p-3'>
                            <button className='bg-green-600 text-white font-semibold p-2 px-4 rounded-sm'>Quality Check</button>
                        </td>
                        <td className='border border-slate-300 p-3'> <button className='bg-green-600 text-white font-semibold p-2 px-4 rounded-sm'>Store Approve</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
