import React from 'react'
import { useParams } from 'react-router-dom'

export const EditBOM = () => {
    const { id } = useParams();
  return (
    <div className='bg-white p-4 rounded-sm shadow-sm'>
        <div className="">
          <h1 className='text-2xl font-semibold'>Edit BOM</h1>
        </div>
        <hr className='text-slate-300 my-4'/>
        <h2 className='text-xl font-semibold my-2'>SO Number</h2>
        <div className="">
          <table className='text-sm w-full'>
            <thead>
              <tr className='bg-blue-700 text-white'>
                <th className='border border-slate-300 p-4'>Item Details</th>
                <th className='border border-slate-300 p-4'>Stock/Unit</th>
                <th className='border border-slate-300 p-4'>Supplier Name</th>
                <th className='border border-slate-300 p-4'>Qty</th>
                <th className='border border-slate-300 p-4'>Update</th>
                <th className='border border-slate-300 p-4'>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
    </div>
  )
}
