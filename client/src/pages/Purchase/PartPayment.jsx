import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const PartPayment = () => {
    const { id } = useParams();
    const [purchaseBill, setPurchaseBill] = useState([]);
    const [paymentData, setPaymentData] = useState({
        paidAmount: "",
        tdsDeduction: "",
        otherDeduction: "",
        paymentDate: "",
        paymentNote: ""
    });
    const [payments, setPayments] = useState([]);
    const navigate = useNavigate();
    const fetchPurchaseBill = async () => {
        const res = await fetch(`/api/purchase/purchase-bill/${id}`);
        const data = await res.json();
        setPurchaseBill(data.purchaseBill);

        if (data.success) {
            setFormData({
                ...data.purchaseBill,
                supplier: data.purchaseBill?.supplier?._id || "",
                invoiceDate: data.purchaseBill.invoiceDate
                ? data.purchaseBill.invoiceDate.split("T")[0]
                : "",
                paymentDueDate: data.purchaseBill.paymentDueDate
                ? data.purchaseBill.paymentDueDate.split("T")[0]
                : "",
            });
        }
    };

    const fetchPayments = async () => {
        try {
            const res = await fetch(`/api/payment/history/${purchaseBill?._id}`,
                {
                    credentials: "include"
                }
            );

            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
                return;
            }

            setPayments(data.payments);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=> {
        fetchPurchaseBill();
        if (purchaseBill?._id) {
            fetchPayments();
        }
    },[purchaseBill?._id])

    const handleChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!paymentData.paidAmount || !paymentData.paymentDate) {
                alert("Paid amount and payment date are required");
                return;
            }
            
            const res = await fetch("/api/payment/add-payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    billId: purchaseBill._id,
                    ...paymentData
                })
            });

            const data = await res.json();

            if (!res.ok) {
                console.log(data.message);
                return;
            }

            alert("Payment added successfully");
            setPaymentData({
                paidAmount: "",
                tdsDeduction: "",
                otherDeduction: "",
                paymentDate: "",
                paymentNote: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    const totalPaid = payments.reduce(
    (sum, item) => sum + Number(item.paidAmount || 0),
    0
    );

    const totalTds = payments.reduce(
    (sum, item) => sum + Number(item.tdsDeduction || 0),
    0
    );

    const totalOther = payments.reduce(
    (sum, item) => sum + Number(item.otherDeduction || 0),
    0
    );

    const totalSettled = totalPaid + totalTds + totalOther;

    const balanceAmount = Number(purchaseBill?.totalAmount || 0) - totalSettled;


  return (
    <div className="flex justify-between items-start">
        <div className="bg-white p-4 w-1/2 shadow-sm rounded-sm mr-4">
            <div className='flex justify-between items-start'>
                <div className="">
                <h1 className='text-2xl font-semibold'>Bill</h1>
                <h6 className='text-md'>{purchaseBill?.invoiceNumber}</h6>
                </div>
                <button onClick={()=> navigate(`/dashboard/viewPurchaseBill/${id}`)} className='bg-green-600 text-white font-semibold rounded-sm p-2 px-4 hover:bg-green-700'>View Details</button>
            </div>
            <hr className='text-slate-300 my-4'/>
        <form onSubmit={handleSubmit}>
            <label className="text-2xl font-semibold">Add Payment</label>
            <hr className='text-slate-300 my-4'/>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Paid Amount</label>
                    <input type="number" name="paidAmount" value={paymentData.paidAmount} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Paid Amount'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">TDS Deduction</label>
                    <input type="number" name="tdsDeduction" value={paymentData.tdsDeduction} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter TDS Deduction'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Other Deduction</label>
                    <input type="number" name="otherDeduction" value={paymentData.otherDeduction} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Other Deduction'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Payment Date</label>
                    <input type="date" name="paymentDate" value={paymentData.paymentDate} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm"/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Payment Note</label>
                    <textarea type="text" name="paymentNote" value={paymentData.paymentNote} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" rows="3"></textarea>
                </div>
                <hr className='text-slate-300 my-4'/>
                <div className="">
                    <button className='bg-blue-800 p-2 px-4 rounded-sm text-white font-semibold'><i className='fa fa-check-circle pr-1'></i>Submit</button>
                </div>
            </div>
        </form>
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
                        <td className='border border-slate-300 p-2 w-'>₹ {purchaseBill?.totalAmount || 0}</td>
                        <td className='border border-slate-300 p-2'>₹ {totalPaid}</td>
                        <td className='border border-slate-300 p-2'>₹ {totalTds}</td>
                        <td className='border border-slate-300 p-2'>₹ {totalOther}</td>
                        <td className='border border-slate-300 p-2'>₹ {balanceAmount}</td>
                    </tr>   
                </tbody>
            </table>
            <hr className='text-slate-300 my-4'/>
            <div className="flex justify-between">
                <label className="text-xl font-semibold">{purchaseBill?.supplier?.companyName}</label>
                <label className="text-xl font-semibold">Bill No: {purchaseBill?.invoiceNumber}</label>
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
                {payments.length > 0 ? (
                    payments.map((item) => (
                    <tr key={item._id}>
                        <td className='border border-slate-300 p-2'>
                        {new Date(item.paymentDate).toLocaleDateString()}
                        </td>

                        <td className='border border-slate-300 p-2'>
                        ₹ {item.paidAmount}
                        </td>

                        <td className='border border-slate-300 p-2'>
                        ₹ {item.tdsDeduction || 0}
                        </td>

                        <td className='border border-slate-300 p-2'>
                        ₹ {item.otherDeduction || 0}
                        </td>

                        <td className='border border-slate-300 p-2'>
                        {item.paymentNote || "-"}
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td
                        colSpan="5"
                        className="border border-slate-300 p-4 text-center text-slate-500"
                    >
                        No payment history available
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            <hr className='text-slate-300 my-4'/>
            <div className="py-4">
                <table className='w-full font-semibold text-md'>
                    <tbody className='text-center'>
                        <tr className='bg-blue-800 text-white'>
                            <td className='p-2 border border-slate-300'>Total Paid</td>
                            <td className='p-2 border border-slate-300'>TDS</td>
                            <td className='p-2 border border-slate-300'>Balance</td>
                        </tr>
                        <tr>
                            <td className='p-2 border border-slate-300'>₹ {totalPaid}</td>
                            <td className='p-2 border border-slate-300'>₹ {totalTds}</td>
                            <td className='p-2 border border-slate-300'>₹ {balanceAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
