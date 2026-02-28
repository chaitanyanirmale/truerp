import React from 'react'

export const ManageUnits = () => {
  return (
    <div className='bg-white p-4 border border-slate-300 rounded-sm shadow-sm'>
      <h1 className='text-2xl font-semibold'>Add Unit</h1>
      <hr className='text-slate-300 my-4'/>
      <div className="grid gap-2 w-full">
        <label className="text-sm font-semibold">Unit Name</label>
        <div className="flex justify-between gap-4">
          <input type="text" name="" className="border border-slate-300 rounded-sm p-2 w-full" />
          <p className='text-rose-500 w-full'>NOTE: Don't write "per" infront of unit. e.g. per Kg, per Litre etc</p>
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <button className='bg-blue-700 text-white px-4 py-2 font-semibold rounded-sm'><i className='fa fa-check-circle pr-2'></i>Submit</button>
      </div>
      <div className="">
                <table className='border border-slate-300 w-full'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-slate-300'>Unit Name</th>
                            <th className='p-2 border border-slate-300'>Sequence</th>
                            <th className='p-2 border border-slate-300'>Added on</th>
                            <th className='p-2 border border-slate-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td className='p-2 border border-slate-300'>KG</td>
                            <td className='p-2 border border-slate-300'>
                              <input type="checkbox" name="" className="border-slate-300 p-2" /> <button className='text-white bg-green-600 px-3 py-1 rounded-sm'>Update</button>
                            </td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500 pr-2'></i><i className='fa fa-trash text-rose-600'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>Coolers</td>
                            <td className='p-2 border border-slate-300'>
                              <input type="checkbox" name="" className="border-slate-300 p-2" /> <button className='text-white bg-green-600 px-3 py-1 rounded-sm '>Update</button>
                            </td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500 pr-2'></i><i className='fa fa-trash text-rose-600'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>Cooling Coils</td>
                            <td className='p-2 border border-slate-300'>
                              <input type="checkbox" name="" className="border-slate-300 p-2" /> <button className='text-white bg-green-600 px-3 py-1 rounded-sm'>Update</button>
                            </td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500 pr-2'></i><i className='fa fa-trash text-rose-600'></i></td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>General</td>
                            <td className='p-2 border border-slate-300'>
                              <input type="checkbox" name="" className="border-slate-300" /> <button className='text-white bg-green-600 px-3 py-1 rounded-sm'>Update</button>
                            </td>
                            <td className='p-2 border border-slate-300'>2022-01-14</td>
                            <td className='p-2 border border-slate-300'><i className='fa fa-pencil text-yellow-500 pr-2'></i><i className='fa fa-trash text-rose-600'></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}
