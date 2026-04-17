import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const InvoiceList = () => {
    const [invoices, setInvoices] = useState([])
    const [loading, setLoading] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    const navigate = useNavigate();
    const fetchInvoices = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/invoice/invoice-list');
                const data = await res.json();
                if(data.success === true){
                    setInvoices(data.data)
                 }
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        useEffect(()=>{
            fetchInvoices();
        },[]);
  return (
    <div className='bg-white p-4 shadow-md rounded-sm'>
        <div className="flex justify-between md:grid-cols md:gap-2">
            <div className='xl:w-1/3 md:w-full'>
                <h1 className="text-2xl font-semibold">PVT LTD Invoices</h1>
            </div>
            <div className="xl:w-full xl:flex xl:justify-between md:flex md:justify-between md:text-sm md:gap-4">
                <button onClick={()=> navigate('/dashboard/create-invoice')} className='bg-green-600 text-white font-semibold p-2 px-4 rounded-xs'><i className='fa fa-plus px-2'></i>Create Invoice</button>
                <input type="date" name="" className='border border-slate-400 px-2 rounded-sm'/>
                <input type="date" name="" className='border border-slate-400 px-2 rounded-sm'/>
                <button className='bg-blue-700 text-white p-2 px-6 font-semibold rounded-sm'><i className='fa fa-search pr-1'></i>Search</button>
            </div>
        </div>
        <hr className='my-4 text-slate-400'/>
        <div className="md:overflow-x-auto">
            <table className='min-w-1200px'>
                <thead>
                    <tr className='bg-blue-700 text-sm text-white'>
                        <th className='p-4' >Invoice No.</th>
                        <th className='p-4' >Invoice Date</th>
                        <th className='p-4' >PO Number</th>
                        <th className='p-4' >Buyer Name</th>
                        <th className='p-4' >Location</th>
                        <th className='p-4' >Invoice Amt</th>
                        <th className='p-4' >Receievd Amt</th>
                        <th className='p-4' >TDS</th>
                        <th className='p-4' >Other</th>
                        <th className='p-4' >Balance Amt</th>
                        <th className='p-4' >Status</th>
                        <th className='p-4' >Update</th>
                        <th className='p-4' >Action</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {invoices.length === 0 ? (
                        <tr><td>No Invoices Found</td></tr>
                    ) : (
                        invoices.map((invoice) => {
                            const balance =
                            (invoice.subTotal || 0) -
                            (invoice.receivedAmount || 0) -
                            (invoice.tds || 0) -
                            (invoice.other || 0);
                            
                            return(
                                <tr key={invoice._id}>
                                <td className='border border-slate-300 p-3'>{invoice.invoiceNumber}</td>
                                <td className='border border-slate-300 p-3'>{new Date(invoice.invoiceDate).toISOString().split("T")[0]}</td>
                                <td className='border border-slate-300 p-3'>{invoice.poNumber}</td>
                                <td className='border border-slate-300 p-3'>{invoice.receiver?.name}</td>
                                <td className='border border-slate-300 p-3'>{invoice.placeOfSupply}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.subTotal}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.receivedAmount || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.tds || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.other || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {balance}</td>
                                <td className='border border-slate-300 p-3'>
                                    <select value={invoice.paymentStatus} className='border border-slate-300 rounded-sm p-2 text-sm mt-1 h-10'>
                                        <option value="Paid">Paid</option>
                                        <option value="Partially Paid">Partially Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                    </select>
                                </td>
                                <td className="border border-slate-300 p-4">
                                <button className="bg-green-600 text-white font-semibold p-2 px-4 rounded">
                                    Save
                                </button>
                                </td>
                                <td className="border border-slate-300 p-4">
                                <button onClick={()=> toggleDropdown(invoice._id)} className="bg-blue-700 text-white font-semibold p-2 rounded-xs w-23">
                                    Action <i className='fa fa-angle-down pl-1'></i>
                                </button>
                                {openDropdown === invoice._id && 
                                (<div className="absolute right-14 w-40 bg-white shadow-sm border border-slate-300 z-10">
                                    <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-200"
                                    ><i className='fa fa-pencil pr-1 text-blue-600'></i>Edit Invoice</button>
                                    <button onClick={()=> navigate(`/billsofsupply/${invoice._id}`)} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-200"
                                    ><i className='fa fa-file pr-1 text-blue-600'></i>View/Download</button>
                                </div>)}
                                </td>
                            </tr>
                            )
                        })
                    )}        
                </tbody>
            </table>
        </div>
    </div>
  )
}
