import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ViewPurchaseBill = () => {
    const [openMenu, setOpenMenu] = useState("billDetails")
    const [active, setActive] = useState('billDetails')
    const [suppliers, setSuppliers] = useState([]);
    const [purchaseBill, setPurchaseBill] = useState(null);
    const gstOptions = [0,1,1.5,2,2.5,3,5,6,9, 14];
    const [formData, setFormData] = useState({ supplier: "", invoiceNumber: "", invoiceDate: "", gstNumber: "", basicAmount: "", cgst: "", sgst: "", igst: "", totalAmount: "", paymentTerms: "", paymentDueDate: "", paymentMethod: "",
    })

    const { id } = useParams();
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
    const fetchSuppliers = async () => {
        const res = await fetch("/api/users/suppliers");
        const data = await res.json();

        if (data.success) {
            setSuppliers(data.data);
        }
    };
    useEffect(()=> {
        fetchPurchaseBill();
        fetchSuppliers();
    },[])

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value,
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/purchase/update-purchase/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
            alert("Bill updated successfully");
        }
    };
  return (
    <div className='bg-white rounded-sm shadow-sm p-4 px-8'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Bill Details : {purchaseBill?.supplier?.name}</h1>
            <button className='bg-green-600 p-2 text-white font-semibold text-sm rounded-sm'><i className='fa fa-plus pr-1'></i>Add Payment</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="flex text-sm">
            <div className={`p-2 ${active === 'billDetails' ? 'border-blue-500 border-b-2':''}`} onClick={() => {setOpenMenu(openMenu === "billDetails" ? null : "billDetails") , setActive("billDetails")}}>
                <label className="text-md">Bill Details</label> 
            </div>
            <div className={`p-2 ${active === 'editBill' ? 'border-blue-500 border-b-2':''}`} onClick={() => {setOpenMenu(openMenu === "editBill" ? null : "editBill") , setActive("editBill")}}>
                 <label className="text-md">Edit Bill</label>
            </div>
            <div className={`p-2 ${active === 'paymentHistory' ? 'border-blue-500 border-b-2':''}`} onClick={() => {setOpenMenu(openMenu === "paymentHistory" ? null : "paymentHistory") , setActive("paymentHistory")}}>
                <label className="text-md">Payment History</label>
            </div>
        </div> 
        <hr className='text-slate-300 mb-2'/> 
        <div className="py-4">
            <div className={`overflow-hidden ${ openMenu === "billDetails" ? "max-h-full" : "max-h-0" }`}>
                <table className='w-full sm:w-full text-sm'>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold w-1/3'>Supplier Name</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.supplier?.name}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Invoice No</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.invoiceNumber}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Invoice Date</td>
                            <td className='border border-slate-300 p-4'>
                                {purchaseBill?.invoiceDate
                                    ? new Date(purchaseBill.invoiceDate).toLocaleDateString("en-IN")
                                    : "N/A"
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>GST No.</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.gstNumber}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Basic Amount</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.basicAmount}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>CGST(9%)</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.cgst}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>SGST(9%)</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.sgst}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>IGST</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.igst}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Total Amount</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.totalAmount}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Balance Amount</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.balanceAmount}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Payment Terms (in Days)</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.paymentTerms}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Payment Due Date</td>
                            <td className='border border-slate-300 p-4'>
                                {purchaseBill?.paymentDueDate
                                    ? new Date(purchaseBill.paymentDueDate).toLocaleDateString("en-IN")
                                    : "N/A"
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Payment by Cheque/Cash</td>
                            <td className='border border-slate-300 p-4'>{purchaseBill?.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 p-4 font-semibold'>Added On</td>
                            <td className='border border-slate-300 p-4'>
                                 {purchaseBill?.createdAt
                                    ? new Date(purchaseBill.createdAt).toLocaleDateString("en-IN")
                                    : "N/A"
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={`overflow-hidden ${ openMenu === "editBill" ? "max-h-full" : "max-h-0" }`}>
                <form onSubmit={handleUpdate}>
                    <div className="xl:grid xl:grid-cols-4 gap-10 px-4">
                        <div className="grid">
                            <label className="text-sm font-semibold">Supplier</label>
                            <select name="supplier" value={formData.supplier} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2">
                                <option value="">Select Supplier</option>
                                    {suppliers.map((supplier) => (
                                        <option key={supplier._id} value={supplier._id}>
                                        {supplier.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="grid">
                            <label className="text-sm font-semibold">Invoice No.</label>
                            <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div>                    
                        <div className="grid">
                            <label className="text-sm font-semibold">Invoice Date</label>
                            <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div>                    
                        <div className="grid">
                            <label className="text-sm font-semibold">GST No.</label>
                            <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div>                    
                    </div>
                    <div className="xl:grid xl:grid-cols-4 gap-10 px-4">
                        <div className="grid">
                            <label className="text-sm font-semibold">Basic Amount</label>
                            <input type="text" name="basicAmount" value={formData.basicAmount} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div> 
                        <div className="grid">
                            <label className="text-sm font-semibold">CGST</label>
                            <select name="cgst" value={formData.cgst} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2">
                                <option value="">-- Select CGST % --</option>
                                {gstOptions.map((rate) => (
                                    <option key={rate} value={rate}>
                                        {rate}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid">
                            <label className="text-sm font-semibold">SGST</label>
                            <select name="sgst" value={formData.sgst} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2">
                                <option value="">-- Select SGST % --</option>
                                {gstOptions.map((rate) => (
                                <option key={rate} value={rate}>
                                    {rate}%
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid">
                            <label className="text-sm font-semibold">IGST</label>
                            <select name="igst" value={formData.igst} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2">
                                <option value="">-- Select ISGT % --</option>
                                {gstOptions.map((rate) => (
                                    <option key={rate} value={rate}>
                                        {rate}%
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-1/3 px-4">
                        <div className="grid">
                            <label className="text-sm font-semibold">Total Amount</label>
                            <input type="text" name="totalAmount" value={formData.totalAmount} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2 bg-gray-300" readOnly/>
                        </div> 
                    </div>
                    <div className="xl:grid xl:grid-cols-3 gap-10 px-4">
                        <div className="grid">
                            <label className="text-sm font-semibold">Payment Terms (in Days)</label>
                            <input type="text" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" placeholder='Enter Payment Terms (in Days)'/>
                        </div> 
                        <div className="grid">
                            <label className="text-sm font-semibold">Payment Due Date</label>
                            <input type="date" name="paymentDueDate" value={formData.paymentDueDate} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div> 
                        <div className="grid">
                            <label className="text-sm font-semibold">Payment by Cheque/Cash</label>
                            <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm my-2" />
                        </div> 
                    </div>
                    <div className="p-4">
                        <button type='submit' className='bg-blue-700 text-white font-semibold p-2 rounded-sm mr-2'><i className='fa fa-check-circle pr-1'></i>Submit</button>
                        <button className='bg-gray-500 text-white font-semibold p-2 rounded-sm'><i className='fa fa--circle pr-1'></i>Clear</button>
                    </div>
                </form>
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
