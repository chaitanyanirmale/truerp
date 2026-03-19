import React from 'react'

export const MachineryList = () => {
  return (
    <div className='bg-white p-4 rounded-xs shadow-sm'>
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
                    <tr>
                        <td className='p-2 border border-slate-300'>TEST</td>
                        <td className='p-2 border border-slate-300'>E1</td>
                        <td className='p-2 border border-slate-300'>DE3</td>
                        <td className='p-2 border border-slate-300'>DDW</td>
                        <td className='p-2 border border-slate-300'>27-02-2026</td>
                        <td className='p-2 border border-slate-300'>20000</td>
                        <td className='p-2 border border-slate-300'>
                            <button className='bg-blue-700 text-white font-semibold p-2 rounded-xs'>Action<i className='fa fa-angle-down pl-1'></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
