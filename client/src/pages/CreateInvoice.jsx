import React from 'react'

export const CreateInvoice = () => {
  return (
    <div className='p-4 border border-slate-400 shadow-md rounded-sm bg-white'>
        <form action="">
            <h1 className='text-3xl mb-2 font-semibold'>Create New Invoice</h1><hr className='text-slate-400 mb-4'/>
            <div className="">
                <h3 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>Invoice Details</h3>
                <div className="flex gap-4 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1">Select Invoice Type</label>
                        <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">Tax Invoice</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Invoice Prefix</label>
                        <input type="text" name="" id="" placeholder='Invoice'  className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Select Company</label>
                        <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">LLP</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Invoice Number</label>
                        <input type="text" name="" id="" placeholder='VEL-000-2025-2026' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Invoice Date</label>
                        <input type="date" name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="">
                <div className="flex justify-between bg-gray-300 px-2 py-1 rounded-sm">
                    <h3 className='text-2xl font-semibold '>Supplier / Buyer Details</h3>
                    <div className="bg-blue-700 px-2 py-1 text-white text-sm rounded-xs hover:bg-blue-800 shadow-md">
                        <i className='fa fa-plus px-1'></i>
                        <button>Add New Supplier / Buyer</button>
                    </div>
                </div>
                <div className="flex justify-between px-2 gap-4 mt-2">
                    <div className="grid w-full">
                        <label className="text-sm p-1">Details of Receiver | Billed to:</label>
                        <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">--Select Receiver--</option>
                        </select>
                    </div>
                    <div className="grid w-full">
                        <label className="text-sm p-1">Details of Consignee | Shipped to:</label>
                        <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">--Select Consignee--</option>
                        </select>
                    </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="">
                <h3 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>Invoice Details</h3>
                <div className="flex gap-4 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1">Select Product</label>
                        <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">New Product</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">OR Type Name</label>
                        <textarea name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1 bg-green-200' row='4' placeholder='Enter Product Name'></textarea>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">HSN</label>
                        <input type="text" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Unit</label>
                        <input type="text" name="" id="" placeholder='NOS.' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Quantity</label>
                        <input type="text" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Unit Price</label>
                        <input type="text" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">GST (%)</label>
                        <select type="text" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">0</option>
                            <option value="">0.25</option>
                            <option value="">1</option>
                            <option value="">1.5</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Sub Total</label>
                        <input type="text" name="" id="" placeholder='NaN' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="py-4 ">
                        <div className="bg-blue-700 hover:bg-blue-800 flex p-2 rounded-sm text-white">
                            <i className='fa fa-plus py-1 px-1'></i>Add
                        </div>
                    </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="">
                <h3 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>PO Details</h3>
                <div className="flex gap-2 px-2 mt-2 justify-between">
                    <div className="">
                        <label className="text-sm p-1">PO No.</label>
                        <input name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">PO Date</label>
                        <input type="date" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Challan Number</label>
                        <input type="text" name="" id="" placeholder='Enter Here' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Challan Date</label>
                        <input type="date" name="" id="" placeholder='' className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'/>
                    </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="">
                <h3 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>Transportation Details</h3>
                <div className="flex gap-4 justify-between px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1">Select Type</label>
                        <select type="text" name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1'>
                            <option value="">-- Select Type --</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Bill No.</label>
                        <input type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Vehicle Number</label>
                        <input type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Date of Supply</label>
                        <input  type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Place of Supply</label>
                        <input  type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                </div>
                <div className="flex justify-between w-1/2 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1">Transporter Name</label>
                        <input  type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1">Transporter Id</label>
                        <input  type='text' name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="flex justify-evenly gap-4 text-sm font-medium">
                <div className="bg-gray-200 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="" id=""/><label className='px-1'>Original For Receipient</label>
                </div>
                <div className="bg-gray-200 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="" id="" /><label className='px-1'>Duplicate For Transporter</label>
                </div>
                <div className="bg-gray-200 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="" id="" /><label className='px-1'>Triplicate For Supplier</label>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="flex gap-4">
                <div className="">
                    <h1 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>Bank Details</h1>
                    <div className="flex justify-between p-2">
                        <div className="">
                            <div className="flex justify-between">
                                <label className="w-1/3">Account Name :</label>
                                <label className="uppercase w-full">Viswasuta Engineering LLP</label>
                            </div>
                            <div className="flex justify-between">
                                <label className="w-1/3">Account Number :</label>
                                <label className="w-full">50200071291874</label>
                            </div>
                            <div className="flex justify-between">
                                <label className="w-1/3">IFSC Code :</label>
                                <label className="w-full">HDFC0001791</label>
                            </div>
                            <div className="flex justify-between">
                                <label className="w-1/3">Bank Name :</label>
                                <label className="w-full">HDFC Bank</label>
                            </div>
                            <div className="flex justify-between">
                                <label className="w-1/3">Branch:</label>
                                <label className="w-full">GROUND FLOOR AND 2ND FLOOR, LANDMARK BUILDING PLOT NO A-1 S NO 42,43 CTS NO 203 OPPOSITE BIG BAZAAR, PUNE- 411015</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                        <h1 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm'>Invoice Status & Remark</h1>
                        <div className="p-2 flex gap-4">
                            <select name="" id="" className='border border-slate-400 rounded-sm px-2 py-1 text-sm mt-1 h-10'>
                                <option value="">Paid</option>
                                <option value="">Partially Paid</option>
                                <option value="">Unpaid</option>
                            </select>
                            <textarea type="text" name="" id="" rows="8" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1' placeholder='Remark'/>
                        </div>
                </div>
            </div><hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="">
                <h1 className='text-2xl bg-gray-300 px-2 py-1 font-semibold rounded-sm mb-2'>Bank Details</h1>
                <textarea name="" id="" rows="4" className='border border-slate-400 rounded-sm px-2 py-1 w-full text-sm mt-1 uppercase placeholder:text-gray-400' placeholder='100% within 30 days'></textarea>
            </div>
            <hr className='text-slate-400 mb-4 my-4 w-full'/>
            <div className="mt-4 p-2 justify-between text-sm">
                    <button className="bg-blue-600 p-2 mx-2 rounded-md text-white hover:bg-blue-800" type="submit" name="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i>Submit</button>
                    <button className="bg-gray-600 p-2 rounded-md text-white hover:bg-gray-800" type="reset"><i className="fa fa-fw fa-lg fa-times-circle"></i>Clear</button>
                </div>
        </form>
    </div>
  )
}
