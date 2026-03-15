import React, { useState } from 'react'

export const ViewPurchaseBill = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [active, setActive] = useState('')
  return (
    <div className='bg-white rounded-sm shadow-sm p-4 px-8'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Bill Details : </h1>
            <button className='bg-green-600 p-2 text-white font-semibold text-sm rounded-sm'><i className='fa fa-plus pr-1'></i>Add Payment</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="flex text-sm">
            <div className={`p-2 ${active === 'billDetails' ? 'border-blue-500 border-b-2':''}`}>
                <label className="text-md" onClick={() => {setOpenMenu(openMenu === "billDetails" ? null : "billDetails") , setActive("billDetails")}}>Bill Details</label> 
            </div>
            <div className={`p-2 ${active === 'editBill' ? 'border-blue-500 border-b-2':''}`}>
                 <label className="text-md" onClick={() => {setOpenMenu(openMenu === "editBill" ? null : "editBill") , setActive("editBill")}}>Edit Bill</label>
            </div>
            <div className={`p-2 ${active === 'paymentHistory' ? 'border-blue-500 border-b-2':''}`}>
                <label className="text-md" onClick={() => {setOpenMenu(openMenu === "paymentHistory" ? null : "paymentHistory") , setActive("paymentHistory")}}>Payment History</label>
            </div>
        </div> 
        <hr className='text-slate-300 mb-2'/> 
        <div className="py-4">
            <div className={`overflow-hidden ${ openMenu === "billDetails" ? "max-h-full" : "max-h-0" }`}>
                <table className='w-full sm:w-full'>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300 p-2 w-1/3'>Supplier Name</td>
                            <td className='border border-slate-300 p-2'>Cash Memo</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-2'>Invoice No</td>
                            <td className='border border-slate-300 p-2'>12345</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-2'>Invoice Date</td>
                            <td className='border border-slate-300 p-2'>12-04-2026</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-2'>GST No.</td>
                            <td className='border border-slate-300 p-2'></td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-2'>Basic Amount</td>
                            <td className='border border-slate-300 p-2'>840</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={`overflow-hidden ${ openMenu === "editBill" ? "max-h-full" : "max-h-0" }`}>
                <div className="xl:grid xl:grid-cols-4 gap-10 px-4">
                    <div className="grid">
                        <label className="text-sm font-semibold">Supplier</label>
                        <select name="" className="border border-slate-300 p-2 rounded-sm my-2">
                            <option value="">Select Supplier</option>
                        </select>
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold">Invoice No.</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div>                    
                    <div className="grid">
                        <label className="text-sm font-semibold">Invoice Date</label>
                        <input type="date" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div>                    
                    <div className="grid">
                        <label className="text-sm font-semibold">GST No.</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div>                    
                </div>
                <div className="xl:grid xl:grid-cols-4 gap-10 px-4">
                    <div className="grid">
                        <label className="text-sm font-semibold">Basic Amount</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div> 
                    <div className="grid">
                        <label className="text-sm font-semibold">CGST</label>
                        <select name="" className="border border-slate-300 p-2 rounded-sm my-2">
                            <option value="">-- Select CGST % --</option>
                        </select>
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold">SGST</label>
                        <select name="" className="border border-slate-300 p-2 rounded-sm my-2">
                            <option value="">-- Select SGST % --</option>
                        </select>
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold">IGST</label>
                        <select name="" className="border border-slate-300 p-2 rounded-sm my-2">
                            <option value="">-- Select ISGT % --</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/3 px-4">
                    <div className="grid">
                        <label className="text-sm font-semibold">Total Amount</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2 bg-gray-300" readOnly/>
                    </div> 
                </div>
                <div className="xl:grid xl:grid-cols-3 gap-10 px-4">
                    <div className="grid">
                        <label className="text-sm font-semibold">Payment Terms (in Days)</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2" placeholder='Enter Payment Terms (in Days)'/>
                    </div> 
                    <div className="grid">
                        <label className="text-sm font-semibold">Payment Due Date</label>
                        <input type="date" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div> 
                    <div className="grid">
                        <label className="text-sm font-semibold">Payment by Cheque/Cash</label>
                        <input type="text" name="" className="border border-slate-300 p-2 rounded-sm my-2" />
                    </div> 
                </div>
                <div className="p-4">
                    <button className='bg-blue-700 text-white font-semibold p-2 rounded-sm mr-2'><i className='fa fa-check-circle pr-1'></i>Submit</button>
                    <button className='bg-gray-500 text-white font-semibold p-2 rounded-sm'><i className='fa fa--circle pr-1'></i>Clear</button>
                </div>
            </div>
            <div className={`overflow-hidden ${ openMenu === "paymentHistory" ? "max-h-full" : "max-h-0" }`}>
                <div className="">
                    <label className="text-2xl font-semibold">Summary</label><hr className='text-slate-300 my-4'/>
                    <table className='w-full sm:w-full mb-6'>
                        <thead>
                            <tr className='bg-blue-800 text-white'>
                                <td className='border border-slate-300 p-2 font-semibold'>Total Amount</td>
                                <td className='border border-slate-300 p-2 font-semibold'>Recieved Amount</td>
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
                    <label className="text-2xl font-semibold ">History</label><hr className='text-slate-300 my-4'/>
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
                </div>
            </div>
        </div>
    </div>
  )
}
