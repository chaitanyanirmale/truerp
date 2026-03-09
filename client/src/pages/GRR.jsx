import React from 'react'

export const GRR = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow-md w-1/2">
        <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Create GRR</h1>
            <button className='p-2 bg-rose-700 text-white rounded-sm'>List GRR</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2"> 
                <label className="text-sm font-semibold">GRR No.</label>
                <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-semibold">GRR Date.</label>
                <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" />
            </div>
        </div>
        <hr className='text-slate-300 my-4'/>
        <button className='bg-blue-700 p-2 px-4 text-white rounded-sm font-semibold'><i className='fa fa-check-circle pr-1'></i>Submit</button>
    </div>
  )
}
