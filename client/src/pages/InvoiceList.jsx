import React, { useEffect, useState } from 'react'

export const InvoiceList = () => {
    const [invoices, setInvoices] = useState([])
    const [loading, setLoading] = useState(false);
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
            <div className="xl:w-1/4 md:w-full">
                <button className='bg-blue-700 text-white p-2 rounded-sm'><i className="fa fa-fw fa-lg fa-eye"></i></button>
			    {/* <button className='bg-blue-700 text-white'><i className="fa fa-fw fa-lg fa-eye-slash"></i></button> */}
            </div>
            <div className="xl:w-full xl:flex justify-between md:grid md:gap-2 md:w-full">
                <button className='bg-green-600 text-white font-semibold px-4 rounded-sm'><i className='fa fa-plus px-2'></i>Create Invoice</button>
                <input type="date" name="" className='border border-slate-400 px-2 rounded-sm'/>
                <input type="date" name="" className='border border-slate-400 px-2 rounded-sm'/>
                <button className='bg-blue-700 text-white p-2 px-6 font-semibold rounded-sm'><i className='fa fa-search pr-1'></i>Search</button>
            </div>
        </div>
        <hr className='my-4 text-slate-400'/>
        <div className="md:overflow-x-auto">
            <table className='min-w-1200px'>
                <thead>
                    <tr className='bg-gray-100 text-sm'>
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
                                <td className='border border-slate-300 p-3'>{invoice.invoiceDate}</td>
                                <td className='border border-slate-300 p-3'>{invoice.poNumber}</td>
                                <td className='border border-slate-300 p-3'>{invoice.receiver?.companyName}</td>
                                <td className='border border-slate-300 p-3'>{invoice.placeOfSupply}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.subTotal}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.receivedAmount || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.tds || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {invoice.other || 0}</td>
                                <td className='border border-slate-300 p-3'>₹ {balance}</td>
                                <td className='border border-slate-300 p-3'>{invoice.paymentStatus}</td>
                                <td className="border border-slate-300 p-4">
                                <button className="bg-green-600 text-white font-semibold px-3 py-1 rounded">
                                    Save
                                </button>
                                </td>
                                <td className="border border-slate-300 p-4">
                                <button className="bg-blue-700 text-white font-semibold px-3 py-1 rounded">
                                    Action
                                </button>
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
