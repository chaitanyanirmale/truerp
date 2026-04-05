import React from 'react'
import {useNavigate} from 'react-router-dom';

export const BillsOfSupply = () => {
    const navigate = useNavigate() 
  return (
    <div className='p-4 bg-gray-100'>
        <div className="bg-white shadow-sm rounded-xs px-4 py-2">
            <div className="flex justify-between">
                <img src="\profile.jpg" alt="" className='h-40'/>
                <div className="text-end pt-8">
                    <p className='text-2xl font-semibold'>VISWASUTA ENGINEERING LLP</p>
                    <p className='text-gray-600 text-sm'>Gat No. 675/2, Kesnand, Wagholi</p>
                    <p className='text-gray-600 text-sm'>8087611678 / 8087611678 | truerp@gmail.com</p>   
                    <p className='text-gray-600 text-sm'>GSTN: 27AATFV7268A1ZO | PAN: AATFV7268A</p>   
                </div>
            </div>
            <div className="">
                <div className="flex justify-between">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='border border-b-0 border-slate-400'>
                                    <p className='text-2xl text-center font-semibold pt-4'>Bills of Supply</p>
                                </td>
                                <td className='w-1/6 p-2 border border-b-0 border-slate-400'>
                                    <tr>
                                        <td className='border border-slate-400'>
                                            <i className='fa fa-check p-2'></i>
                                        </td>
                                        <td className='border border-slate-400 px-2'>Original for Recipient</td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-400'></td>
                                        <td className='border border-slate-400 px-2'>Duplicate for Transporter</td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-400'></td>
                                        <td className='border border-slate-400 px-2'>Triplicate for Supplier</td>
                                    </tr>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='border border-b-0 border-slate-400 px-2'>
                                    <p>Reverse No: No</p>
                                    <p>Invoice No: INL-0001-2026-27</p>
                                    <p>Invoice Date: 04-04-2026</p>
                                    <p>State: Maharashtra</p>
                                </td>
                                <td className='border border-b-0 border-slate-400 px-2'>
                                    <p>Transportation Mode: </p>
                                <p>Vehicle No:</p>
                                <p>Date of Supply: 04-04-2026</p>
                                <p>Place of Supply</p>
                                </td>
                                <td className='border border-b-0 border-slate-400 px-2'>
                                    <p>Challan No: No</p>
                                    <p>Transporter Name</p>
                                    <p>PO NO: </p>
                                    <p>PO Date:</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='border border-slate-400 p-2'>Details of Receiver | Billed to:</th>
                                <th className='border border-slate-400 p-2'>Details of Receiver | Billed to:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 px-2'>
                                    <p>Name</p>
                                    <p>Address</p>
                                    <p>GSTIN</p>
                                    <p>State</p>
                                </td>
                                <td className='border border-slate-400 px-2'>
                                    <p>Name</p>
                                    <p>Address</p>
                                    <p>GSTIN</p>
                                    <p>State</p>
                                </td>                     
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full text-center'>
                        <thead>
                            <tr>
                                <th className='border border-t-0 border-slate-400'>Sr. No.</th>
                                <th className='border border-t-0 border-slate-400 w-1/3'>Product Name</th>
                                <th className='border border-t-0 border-slate-400'>HSN/SAC</th>
                                <th className='border border-t-0 border-slate-400'>Qty</th>
                                <th className='border border-t-0 border-slate-400'>Unit</th>
                                <th className='border border-t-0 border-slate-400'>Rate</th>
                                <th className='border border-t-0 border-slate-400'>Taxable Value</th>
                                <th className='border border-t-0 border-slate-400 w-30 px-2'>
                                    <tr className=''>
                                        <td className='text-center'>CGST</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td>Rate</td>
                                        <td>Amount</td>
                                    </tr>
                                </th>
                                <th className='border border-t-0 border-slate-400 w-30 px-2'>
                                    <tr className=''>SGST</tr>
                                    <tr className='flex justify-between'>
                                        <td>Rate</td>
                                        <td>Amount</td>
                                    </tr>
                                </th>
                                <th className='border border-t-0 border-slate-400'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400'>1</td>
                                <td className='border border-slate-400'></td>
                                <td className='border border-slate-400'></td>
                                <td className='border border-slate-400'></td>
                                <td className='border border-slate-400'>NOS</td>
                                <td className='border border-slate-400'></td>
                                <td className='border border-slate-400'></td>
                                <td className='border border-slate-400'>
                                    <tr className='flex justify-between'>
                                        <td className='border-r border-slate-400 w-full'>0%</td>
                                        <td className=' w-full'>0</td>
                                    </tr>
                                </td>
                                <td className='border border-slate-400'>
                                    <tr className='flex'>
                                        <td className='border-r border-slate-400 w-full'>0%</td>
                                        <td className='w-full'>0</td>
                                    </tr>
                                </td>
                                <td className='border border-slate-400'>0</td>
                            </tr>
                            <tr className=''>
                                <td className='border border-slate-400' colSpan="3">Total</td>
                                <td className='border border-slate-400'>0</td>
                                <td className='border border-slate-400' colSpan="2"></td>
                                <td className='border border-slate-400'>0</td>
                                <td className='border border-slate-400'>0</td>
                                <td className='border border-slate-400'>0</td>
                                <td className='border border-slate-400'>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 border-t-0 px-2'>Total Amount in Words:</td>
                                <td className='border border-t-0 border-slate-400 p-2 w-40'>
                                    <tr><td className='border-b border-slate-400'>Total GST: 0</td></tr>
                                    <tr><td className=''>Amount with Tax: 0</td></tr>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full border border-t-0 border-slate-400'>
                        <tbody>
                            <tr>
                                <td className='text-sm p-2'>
                                    <p>Bank Details:</p>
                                    <p>Account Name : VISWASUTA ENGINEERING LLP</p>
                                    <p>Account Number : 50200071291874</p>
                                    <p>IFSC Code : HDFC0001791</p>
                                    <p>Bank Name : HDFC BANK</p>
                                    <p>Branch: GROUND FLOOR AND 2ND FLOOR, LANDMARK BUILDING PLOT NO A-1 S NO 42,43 CTS NO 203 OPPOSITE BIG BAZAAR, PUNE- 411015</p>
                                    <p>Terms: 100% WITHIN 30 DAYS</p>
                                </td>
                                <td className='text-center border-l border-slate-400 p-2'>
                                    <p>Certified that the particular given above are true and correct</p>
                                    <p className='font-semibold text-xl'>For, VISWASUTA ENGINEERING LLP</p>
                                    <img src="\stamp_vepl.jpg" alt="" className='h-40 mx-auto'/>
                                    <p className='font-semibold '>Authorised Signatory</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center gap-8 py-4">
                <button onClick={()=> navigate('/dashboard/create-invoice')} className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-green-600 hover:bg-green-700'>Create New Invoice</button>
                <button className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-blue-700 hover:bg-blue-800'>Edit Invoice</button>
                <button onClick={()=> navigate('/dashboard/invoice-list')} className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-cyan-500 hover:bg-cyan-600'>Invoice List</button>
            </div>
        </div>
    </div>
  )
}
