import React from 'react'

export const AddPurchase = () => {
  return (
    <div className='bg-white border border-slate-400 rounded-sm shadow-sm p-4'>
        <h1 className='text-2xl font-semibold'>Add New Purchase Bill</h1>
        <hr className='my-4 text-slate-400'/>
        <div className="">
            <form action="">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-4">
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Supplier</label>
                        <select name="" className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select Supplier--</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Invoice No</label>
                        <input type="text" name="" className="border border-slate-400 rounded-sm p-2" placeholder='Enter Invoice Number'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Invoice Date</label>
                        <input type="date" name="" className="border border-slate-400 rounded-sm p-2" />
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">GST Number</label>
                        <input type="text" name="" className="border border-slate-400 rounded-sm p-2" placeholder='Enter GST Number'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Basic Amount</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Basic Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">CGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span  className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="" className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select CGST%--</option>
                            <option value="0%">0%</option>
                            <option value="0.25%">0.25%</option>
                            <option value="0.1%">0.1%</option>
                            <option value="1%">1%</option>
                            <option value="1.5%">1.5%</option>
                            <option value="2.5%">2.5%</option>
                            <option value="3%">3%</option>
                            <option value="5%">5%</option>
                            <option value="6%">6%</option>
                            <option value="9%">9%</option>
                            <option value="12%">12%</option>
                            <option value="14%">14%</option>
                            <option value="18%">18%</option>
                            <option value="28%">28%</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm ">SGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="" className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select SGST%--</option>
                            <option value="0%">0%</option>
                            <option value="0.25%">0.25%</option>
                            <option value="0.1%">0.1%</option>
                            <option value="1%">1%</option>
                            <option value="1.5%">1.5%</option>
                            <option value="2.5%">2.5%</option>
                            <option value="3%">3%</option>
                            <option value="5%">5%</option>
                            <option value="6%">6%</option>
                            <option value="9%">9%</option>
                            <option value="12%">12%</option>
                            <option value="14%">14%</option>
                            <option value="18%">18%</option>
                            <option value="28%">28%</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">IGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="" className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select IGST%--</option>
                            <option value="0%">0%</option>
                            <option value="0.25%">0.25%</option>
                            <option value="0.1%">0.1%</option>
                            <option value="1%">1%</option>
                            <option value="1.5%">1.5%</option>
                            <option value="2.5%">2.5%</option>
                            <option value="3%">3%</option>
                            <option value="5%">5%</option>
                            <option value="6%">6%</option>
                            <option value="9%">9%</option>
                            <option value="12%">12%</option>
                            <option value="14%">14%</option>
                            <option value="18%">18%</option>
                            <option value="28%">28%</option>
                        </select>
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Total Amount</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Total Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Paid Amount</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Paid Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Balance Amount</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Balance Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Type</label>
                        <select name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Basic Amount'>
                            <option value="">--Select Type--</option>
                            <option value="Partial">Partial</option>
                            <option value="Full">Full</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">TDS Deduction</label>
                        <div className="gap-4 flex justify-between">
                            <input type='text' name='' className='border border-slate-400 rounded-sm p-2 w-full' placeholder='Enter Basic Amount'/>
                            <button className='bg-green-600 text-white p-2 rounded-sm'>Calculate</button>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Other Deduction</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Enter Other Deduction'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Terms (in Days)</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Payment Terms (in Days)'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Due Date</label>
                        <input type='date' name='' className='border border-slate-400 rounded-sm p-2'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment by Cheque/Cash</label>
                        <input type='text' name='' className='border border-slate-400 rounded-sm p-2' placeholder='Payment by Cheque/Cash'/>
                    </div>
                </div>
                <hr className='my-4 text-slate-400'/>
                <div className="">
                    <button className='bg-blue-600 p-2 text-white font-semibold rounded-sm mr-2'>Submit</button>
                    <button className='bg-gray-500 p-2 text-white font-semibold rounded-sm '>Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}
