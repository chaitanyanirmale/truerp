import React from 'react'

export const MainCategory = () => {
  return (
    <div className='grid grid-cols-2 gap-8'>
        <div className="bg-white p-4 border border-slate-300 shadow-sm">
            <h1 className='text-2xl font-semibold'>Add New Category</h1>
            <hr className='text-slate-300 my-4'/>
            <form action="">
                <div className="grid gap-4">
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold">Category Name</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Category Name'/>
                    </div>
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold">Sequence Number</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Sequence Number'/>
                    </div>
                </div>
                <hr className='text-slate-300 my-4'/>
                <button className='bg-blue-700 px-4 py-2 text-white rounded-sm'><i className='fa fa-check-circle pr-2'></i>Submit</button>
            </form>
        </div>
        <div className="bg-white p-4 border border-slate-300 rounded-sm shadow-sm">
            <h1 className='text-2xl font-semibold'>List of Categories</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300 w-full'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-slate-300'>Category Name</th>
                            <th className='p-2 border border-slate-300'>Sequence</th>
                            <th className='p-2 border border-slate-300'>Added on</th>
                            <th className='p-2 border border-slate-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='p-2 border border-slate-300'>API Plan</td>
                            <td className='p-2 border border-slate-300'>2</td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>Coolers</td>
                            <td className='p-2 border border-slate-300'>1</td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>Cooling Coils</td>
                            <td className='p-2 border border-slate-300'>3</td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>General</td>
                            <td className='p-2 border border-slate-300'>4</td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500'></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
