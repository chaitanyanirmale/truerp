import React from 'react'

export const PartPayment = () => {
  return (
    <div className="flex justify-between items-start">
        <div className="bg-white p-4 w-1/2 shadow-sm rounded-sm mr-4">
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>Select Bill</h1>
                <button className='bg-green-600 text-white font-semibold rounded-sm p-2'>View Details</button>
            </div>
            <hr className='text-slate-300 my-4'/>
            <select name="" className="w-full border border-slate-300 p-2 rounded-sm">
                <option value="">-- Select Bill --</option>
            </select>
            <hr className='text-slate-300 my-4'/>
            <label className="text-2xl font-semibold">Add Payment</label>
            <hr className='text-slate-300 my-4'/>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Paid Amount</label>
                    <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Paid Amount'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">TDS Deduction</label>
                    <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter TDS Deduction'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Other Deduction</label>
                    <input type="text" name="" className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Other Deduction'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Payment Date</label>
                    <input type="date" name="" className="border border-slate-300 p-2 rounded-sm"/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Payment Note</label>
                    <textarea type="date" name="" className="border border-slate-300 p-2 rounded-sm" rows="3"></textarea>
                </div>
                <hr className='text-slate-300 my-4'/>
                <div className="">
                    <button className='bg-blue-800 p-2 px-4 rounded-sm text-white font-semibold'><i className='fa fa-check-circle pr-1'></i>Submit</button>
                </div>
            </div>
        </div>
        <div className="bg-white p-4 w-full shadow-sm rounded-sm">
            <table className='w-full sm:w-full mb-6'>
                <thead>
                    <tr className='bg-blue-800 text-white'>
                        <td className='border border-slate-300 p-2 font-semibold'>Total Amount</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Paid Amount</td>
                        <td className='border border-slate-300 p-2 font-semibold'>TDS Deduction</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Other Deduction</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Balance Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 p-2 w-'>₹ 840</td>
                        <td className='border border-slate-300 p-2'>₹ 840</td>
                        <td className='border border-slate-300 p-2'>₹ 0</td>
                        <td className='border border-slate-300 p-2'>₹ 0</td>
                        <td className='border border-slate-300 p-2'>₹ 0</td>
                    </tr>   
                </tbody>
            </table>
            <hr className='text-slate-300 my-4'/>
            <div className="flex justify-between">
                <label className="text-2xl font-semibold">Cash Memo</label>
                <label className="text-2xl font-semibold">Bill No.</label>
            </div>
            <hr className='text-slate-300 my-4'/>
            <label className="text-2xl font-semibold">Payment History</label>
            <hr className='text-slate-300 my-4'/>
            <table className='w-full sm:w-full'>
                <thead>
                    <tr className='bg-blue-800 text-white'>
                        <td className='border border-slate-300 p-2 font-semibold'>Payment Date</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Paid Amount</td>
                        <td className='border border-slate-300 p-2 font-semibold'>TDS</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Other</td>
                        <td className='border border-slate-300 p-2 font-semibold'>Payment Note</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 p-2 w-'>2025-04-10</td>
                        <td className='border border-slate-300 p-2'>Rs 840/-</td>
                        <td className='border border-slate-300 p-2'>Rs /-</td>
                        <td className='border border-slate-300 p-2'>Rs /-</td>
                        <td className='border border-slate-300 p-2'>-</td>
                    </tr>                            
                </tbody>
            </table>
            <hr className='text-slate-300 my-4'/>
            <div className="py-4">
                <table className='w-full font-semibold text-lg'>
                    <tbody>
                        <tr>
                            <td className='p-4 border border-slate-300 text-blue-600 w-1/2 text-end'>Total Paid</td>
                            <td className='p-4 border border-slate-300'>840</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
