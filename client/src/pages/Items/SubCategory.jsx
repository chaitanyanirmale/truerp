import React from 'react'

export const SubCategory = () => {
  return (
    <div className='grid grid-cols-2 gap-8'>
        <div className="bg-white p-4 border border-slate-300 shadow-sm items-stretch">
            <h1 className='text-2xl font-semibold'>Add New Sub-Category</h1>
            <hr className='text-slate-300 my-4'/>
            <form action="">
                <div className="grid gap-4">
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold text-sm">Select Product Main Category</label>
                        <select name="" className="border border-slate-300 rounded-sm p-2">
                            <option value="">API Plan</option>
                            <option value="">Coolers</option>
                            <option value="">Cooling Coils</option>
                            <option value="">General</option>
                        </select>
                    </div>
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold text-sm">Sub-Category Name</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Sub-Category Name'/>
                    </div>
                </div>
                <hr className='text-slate-300 my-4'/>
                <button className='bg-blue-700 px-4 py-2 text-white rounded-sm'><i className='fa fa-check-circle pr-2'></i>Submit</button>
            </form>
        </div>
        <div className="bg-white p-4 border border-slate-300 rounded-sm shadow-sm">
            <h1 className='text-2xl font-semibold'>List of Sub-Categories</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300 w-full text-sm'>
                    <thead>
                        <tr>
                            <th className='p-4 border border-slate-300'>Sub Category Name</th>
                            <th className='p-4 border border-slate-300'>Root Category</th>
                            <th className='p-4 border border-slate-300'>Added on</th>
                            <th className='p-4 border border-slate-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='p-4 border border-slate-300'>General</td>
                            <td className='p-4 border border-slate-300'>Coolers</td>
                            <td className='p-4 border border-slate-300'>2022-01-14</td>
                            <td className='p-4 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300'>General</td>
                            <td className='p-4 border border-slate-300'>API Plan</td>
                            <td className='p-4 border border-slate-300'>2022-01-14</td>
                            <td className='p-4 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300'>General</td>
                            <td className='p-4 border border-slate-300'>Cooling Coils</td>
                            <td className='p-4 border border-slate-300'>2022-01-14</td>
                            <td className='p-4 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300'>General</td>
                            <td className='p-4 border border-slate-300'>General</td>
                            <td className='p-4 border border-slate-300'>2022-01-14</td>
                            <td className='p-4 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
