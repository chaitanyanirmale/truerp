import React, { useEffect, useState } from 'react'
import {data, useNavigate, useParams} from 'react-router-dom';

export const BillsOfSupply = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState(null);

    const fetchInvoice = async () => {
        try {
            
            const res = await fetch(`/api/invoice/${id}`, {
                credentials: "include"
            });

            const data = await res.json();

            setInvoice(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=> {
        fetchInvoice();
    },[])
    const navigate = useNavigate();
  return (
    <div className='p-4 bg-gray-100'>
        <div id='bill-content' className="bg-white shadow-sm rounded-xs px-4 py-2">
            <div className="flex justify-between">
                <img src="\profile.jpg" alt="" className='h-40'/>
                <div className="text-end pt-8">
                    <p className='text-2xl font-semibold'>VISWASUTA ENGINEERING LLP</p>
                    <p className='text-gray-600 text-sm'>Gat No. 675/2, Kesnand, Wagholi</p>
                    <p className='text-gray-600 text-sm'>8087611678 / 8087611678 | truerp@gmail.com</p>   
                    <p className='text-gray-600 text-sm'>GSTN: 27AATFV7268A1ZO | PAN: AATFV7268A</p>   
                </div>
            </div>
            {invoice && 
            <div className="">
                <div className="flex justify-between">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='border border-b-0 border-slate-400'>
                                    <p className='text-2xl text-center font-semibold pt-4'>{invoice?.invoiceType}</p>
                                </td>
                                <td className='w-1/6 p-2 border border-b-0 border-slate-400'>
                                    <table className='w-full border-collapse'>
                                        <tbody>
                                            <tr>
                                                <td className='border border-slate-400'>
                                                    {invoice?.originalForRecipient && (
                                                        <i className='fa fa-check p-2'></i>
                                                    )}
                                                </td>
                                                <td className='border border-slate-400 px-2'>
                                                    Original for Recipient
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='border border-slate-400'>
                                                    {invoice?.duplicateForTransporter && (
                                                        <i className='fa fa-check p-2'></i>
                                                    )}
                                                </td>
                                                <td className='border border-slate-400 px-2'>
                                                    Duplicate for Transporter
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='border border-slate-400'>
                                                    {invoice?.triplicateForSupplier && (
                                                        <i className='fa fa-check p-2'></i>
                                                    )}
                                                </td>
                                                <td className='border border-slate-400 px-2'>
                                                    Triplicate for Supplier
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                    <p>Invoice No: {invoice?.invoiceNumber}</p>
                                    <p>Invoice Date: {new Date(invoice?.invoiceDate).toISOString().split('T')[0]}</p>
                                    <p>State: Maharashtra</p>
                                </td>
                                <td className='border border-b-0 border-slate-400 px-2'>
                                    <p>Transportation Mode: {invoice?.transportType}</p>
                                    <p>Vehicle No: {invoice?.vehicleNumber}</p>
                                    <p>Date of Supply: {new Date(invoice?.dateOfSupply).toISOString().split('T')[0]}</p>
                                    <p>Place of Supply: {invoice?.placeOfSupply}</p>
                                </td>
                                <td className='border border-b-0 border-slate-400 px-2 w-1/5'>
                                    <p>Challan No: {invoice?.challanNumber}</p>
                                    <p>Transporter Name: {invoice?.transporterName}</p>
                                    <p>PO NO: {invoice?.poNumber}</p>
                                    <p>PO Date: {new Date(invoice?.poDate).toISOString().split('T')[0]}</p>
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
                                <th className='border border-slate-400 p-2'>Details of Consignee | Billed to:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 px-2'>
                                    <p>Name: {invoice?.receiver?.name}</p>
                                    <p>Address: {invoice?.receiver?.address}</p>
                                    <p>GSTIN</p>
                                    <p>State: {invoice?.receiver?.state}</p>
                                </td>
                                <td className='border border-slate-400 px-2'>
                                    <p>Name: {invoice?.consignee?.name}</p>
                                    <p>Address: {invoice?.consignee?.address}</p>
                                    <p>GSTIN</p>
                                    <p>State: {invoice?.consignee?.state}</p>
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
                                <th colspan="2" className='border-r border-b border-slate-400'><span >CGST</span><hr className='text-slate-400'/>
                                <small className='pr-4'>Rate</small><small>Amount(<i className="fa fa-inr"></i>)</small></th> 
                                <th colspan="2" className='border-r border-b border-slate-400' ><span>SGST</span><hr className='text-slate-400'/>
                                <small  className='pr-4'>Rate</small><small>Amount(<i class="fa fa-inr"></i>)</small></th> 
                                <th className='border border-t-0 border-slate-400'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400'>1</td>
                                <td className='border border-slate-400'> {invoice?.productName}</td>
                                <td className='border border-slate-400'> {invoice?.hsn}</td>
                                <td className='border border-slate-400'> {invoice?.quantity}</td>
                                <td className='border border-slate-400'> {invoice?.unit}</td>
                                <td className='border border-slate-400'>{invoice?.unitPrice}</td>
                                <td className='border border-slate-400'>{invoice?.taxableValue}</td>                  
                                <td className='border border-slate-400'><p>{invoice?.sgstRate}%</p></td> 
                                <td className='border border-slate-400'>{invoice?.sgstAmount}</td> 
                                <td className='border border-slate-400'><p>{invoice?.cgstRate}%</p></td>      
                                <td className='border border-slate-400'>{invoice?.cgstAmount}</td>
                                <td className='border border-slate-400'>{invoice?.subTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 border-t-0 px-2' colSpan="12">Total Amount in Words: {invoice?.amountInWords}</td>
                                <td className='border border-t-0 border-slate-400 p-2 w-20' colSpan="4">
                                    Total GST: <span><i class="fa fa-inr" ></i> {(invoice?.cgstAmount || 0) + (invoice?.sgstAmount || 0)}</span><hr className='text-slate-400'/>
				                    Amount With Tax: <span><i class="fa fa-inr" >{invoice?.subTotal || 0}</i></span>
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
            }
            </div>
            <div className="flex justify-center gap-8 py-4">
                <button onClick={()=> navigate('/dashboard/create-invoice')} className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-green-600 hover:bg-green-700'>Create New Invoice</button>
                <button className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-blue-700 hover:bg-blue-800'>Edit Invoice</button>
                <button onClick={()=> navigate('/dashboard/invoice-list')} className='text-white p-2 px-4 cursor-pointer font-semibold rounded-xs shadow-md bg-cyan-500 hover:bg-cyan-600'>Invoice List</button>
            </div>
    </div>
  )
}
