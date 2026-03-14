import React, { useState } from 'react'
import { useEffect } from 'react';

export const SupplierPayment = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPurchaseList = async () => {
            setLoading(true)
            try {
                const res = await fetch("/api/purchase/purchase-list");
                if (!res.ok) {
                    throw new Error("Failed to fetch Purchases");
                }
                const data = await res.json();
                if(data.success === true){
                    setPurchases(data.data);
                }
            } catch(error) {
                console.log(error)
            } finally{
                setLoading(false)
            }          
        };
    useEffect(()=> {
        fetchPurchaseList();
    },[])
  return (
    <>
        <div className='bg-white rounded-sm shadow-sm p-2'>
            <div className="flex justify-between">
                <div className="font-semibold p-2">
                    <h1 className='text-2xl'>Purchase Bills</h1>
                </div>
                <div className="flex justify-between gap-4 text-sm ">
                    <div className="p-2">
                        <button className='bg-cyan-600 text-white rounded-sm p-2 px-8 font-semibold'><i className='fa fa-check-square-o px-2'></i>Make Payment</button>
                    </div>
                    <div className="flex justify-between gap-2 p-2">
                        <input type="date" name="" className='border border-slate-400 rounded-sm p-2 placeholder:text-slate-400'/>
                        <input type="date" name="" className='border border-slate-400 rounded-sm p-2 placeholder:text-slate-400'/>
                    </div>
                    <div className="p-2">
                        <button className='bg-blue-700 text-white rounded-sm p-2 px-8 font-semibold'><i className='fa fa-search pr-2'></i>Search</button>
                    </div>
                    <div className="p-2">
                        <button className='bg-yellow-500 rounded-sm p-2 px-8 font-semibold'><i className='fa fa-print pr-2'></i>Print</button>
                    </div>
                    <div className="p-2">
                    <button className='bg-rose-600 text-white rounded-sm p-2 px-4 font-semibold'>Back</button>
                    </div>
                </div>
            </div>
            <hr className='text-slate-400 my-4'/>
            <div className="">
                <table className='w-full text-center text-sm'>
                    <thead className='border border-slate-400'>
                        <tr>
                            <th className='p-2 border border-slate-400'>Sr. No.</th>	
                            <th className='p-2 border border-slate-400'>Select</th>	
                            <th className='p-2 border border-slate-400'>Supplier Name</th>	
                            <th className='p-2 border border-slate-400'>Invoice No</th>
                            <th className='p-2 border border-slate-400'>Invoice Date</th>
                                
                            <th className='p-2 border border-slate-400'>Total Amount <i className="fa fa-inr" aria-hidden="true"></i></th>	
                            <th className='p-2 border border-slate-400'>Paid Amount <i className="fa fa-inr" aria-hidden="true"></i></th>	
                            <th className='p-2 border border-slate-400'>Balance Amount <i className="fa fa-inr" aria-hidden="true"></i></th>
                            <th className='p-2 border border-slate-400'>TDS</th>
                            <th className='p-2 border border-slate-400'>Payment Date</th>
                            <th className='p-2 border border-slate-400'>Remark</th>
                            <th className='p-2 border border-slate-400'>Action</th>
                        </tr>
                    </thead>
                <tbody>
                    {purchases.length === 0 ? (
                        <tr><td>No Purchases Found</td></tr>
                    ): purchases.map((purchase, index)=> (
                        <tr key={purchase._id}>
                            <td className='p-2 border border-slate-400'>{index + 1}</td>
                            <td className='p-2 border border-slate-400'></td>
                            <td className='p-2 border border-slate-400'>{purchase.supplier?.name}</td>
                            <td className='p-2 border border-slate-400'>{purchase.invoiceNumber}</td>
                            <td className='p-2 border border-slate-400'>{purchase.invoiceDate}</td>
                            <td className='p-2 border border-slate-400'><i className="fa fa-inr"></i> {Number(purchase.totalAmount).toLocaleString("en-IN")}</td>
                            <td className='p-2 border border-slate-400'><i className="fa fa-inr"></i> {Number(purchase.paidAmount).toLocaleString("en-IN")}</td>
                            <td className='p-2 border border-slate-400'><i className="fa fa-inr"></i> {Number(purchase.balanceAmount).toLocaleString("en-IN")}</td>
                            <td className='p-2 border border-slate-400'><i className="fa fa-inr"></i> {Number(purchase.tdsDeduction).toLocaleString("en-IN")}</td>
                            <td className='p-2 border border-slate-400'>{purchase.paymentDueDate}</td>
                            <td className='p-2 border border-slate-400'></td>
                            <td className='p-2 border border-slate-400'></td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
        <div className="bg-white my-4 p-4 shadow-md">
                <table className='w-full text-center text-sm'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-slate-400 text-blue-700'>Total Amount</th>
                            <th className='p-2 border border-slate-400 text-blue-700'>Total Paid</th>
                            <th className='p-2 border border-slate-400 text-blue-700'>Total Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-2 border border-slate-400'>2000</td>
                            <td className='p-2 border border-slate-400'>2000</td>
                            <td className='p-2 border border-slate-400'>2000</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </>
  )
}
