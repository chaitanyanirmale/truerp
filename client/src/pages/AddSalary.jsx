import React from 'react'

export const AddSalary = () => {
  return (
    <div className='w-200 bg-white border border-slate-400 p-4 shadow-lg rounded-sm'>
        <form action="">
            <h1 className='text-2xl font-semibold'>Add Salary</h1>
            <hr className='text-slate-400 my-4'/>
            <div className="w-full">
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Select Role</label>
                    <select name="" id="" className='w-full border border-slate-400 rounded-sm p-1'>
                        <option value="">--Select Role--</option>
                    </select>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Month Year</label>
                    <div className="flex w-full gap-4">
                        <select name="" id="" className='w-full border border-slate-400 rounded-sm p-1'>
                            <option value="">--Select Month--</option>
                        </select>
                        <select name="" id="" className='w-full border border-slate-400 rounded-sm p-1'>
                            <option value="">--Select Year--</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Staff / Worker</label>
                    <select name="" id="" className='w-full border border-slate-400 rounded-sm p-1'>
                        <option value="">--Select Staff / Worker--</option>
                    </select>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Per Day (in Rs.)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Per Hour (in Rs.)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Monthly (Days)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Present (in Days)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Absent (in Days)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Extra Hours (in Hours)</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Total Payment</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Deduction</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Advance</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Other</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">PF</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Professional Tax</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Payment After Deduction / Advance</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Present Days</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Weekly Off</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Bonus</label>
                    <input type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Date</label>
                    <input type="date" name="" id="" className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Deduction</label>
                    <textarea type="text" name="" id="" className='w-full border border-slate-400 rounded-sm p-1' placeholder='Enter Remark'/>
                </div>
            </div>
            <hr className='text-slate-400 my-4'/>
            <div className="">
                <button className="bg-blue-600 hover:bg-blue-800 p-1 rounded-sm text-white px-2 mx-2"><i className='fa fa-check-circle mr-1'></i>Submit</button>
                <button className='bg-gray-400 hover:bg-gray-500 p-1 px-2 rounded-sm '><i className='fa fa-times-circle mr-1'></i>Clear</button>
            </div>
        </form>
    </div>
  )
}
