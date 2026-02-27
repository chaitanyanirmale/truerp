import React, { useEffect, useState } from 'react'

export const AddPurchase = () => {
    const [suppliers, setSuppliers] = useState([])
    const [loading, setLoading] = useState(false)
    const initialData = {supplier:'', invoiceNumber: '', invoiceDate: '', gstNumber: '', basicAmount: '', cgst: '', sgst: '', igst: '', paidAmount: '', paymentType: '', tdsPercent:'', tdsDeduction: '', otherDeduction: '', paymentTerms: '', paymentDueDate: '', paymentMethod: '', totalAmount: 0, balanceAmount: 0,}
    const [formData, setFormData] = useState(initialData);

    const fetchSuppliers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/users/suppliers');
            const data = await res.json();
            if(data.success === true){
                setSuppliers(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchSuppliers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleTdsCalculate = (e) => {
        e.preventDefault(); 
        const basic = Number(formData.basicAmount) || 0;
        const percent = Number(formData.tdsPercent) || 0;
        const tdsAmount = (basic * percent) / 100;

        setFormData((formData) => ({
            ...formData, 
            tdsDeduction: tdsAmount,
        }))
    }

    useEffect(() => {
        const basic = Number(formData.basicAmount) || 0;
        const cgst = Number(formData.cgst) || 0;
        const sgst = Number(formData.sgst) || 0;
        const igst = Number(formData.igst) || 0;
        const paid = Number(formData.paidAmount) || 0;
        const tds = Number(formData.tdsDeduction) || 0;
        const other = Number(formData.otherDeduction) || 0;

        const cgstAmount = (basic * cgst) / 100;
        const sgstAmount = (basic * sgst) / 100;
        const igstAmount = (basic * igst) / 100;

        const total = basic + cgstAmount + sgstAmount + igstAmount;
        const balance = total - paid - tds - other;

        let paymentType = "Partial";

        if (balance <= 0 && total > 0) {
            paymentType = "Full";
        }
        
        setFormData((formData) => ({
            ...formData,
            totalAmount: total,
            balanceAmount: balance,
            paymentType,
        }));
        }, [
        formData.basicAmount,
        formData.cgst,
        formData.sgst,
        formData.igst,
        formData.paidAmount,
        formData.tdsDeduction,
        formData.otherDeduction,
        ]);

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await fetch('/api/purchase/add-purchase',{
                    method:"POST", 
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                const data = await res.json();
                if(data.success){
                    setFormData(initialData)
                }
            } catch (error) {
                console.log(error);
            }
        }

    return (
    <div className='bg-white border border-slate-400 rounded-sm shadow-sm p-4'>
        <h1 className='text-2xl font-semibold'>Add New Purchase Bill</h1>
        <hr className='my-4 text-slate-400'/>
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-4">
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Supplier</label>
                        <select name="supplier" onChange={handleChange} value={formData.supplier} className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select Supplier--</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier._id} value={supplier._id}>
                                {supplier.companyName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Invoice No</label>
                        <input type="text" name="invoiceNumber" onChange={handleChange} value={formData.invoiceNumber} className="border border-slate-400 rounded-sm p-2" placeholder='Enter Invoice Number'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Invoice Date</label>
                        <input type="date" name="invoiceDate" onChange={handleChange} value={formData.invoiceDate} className="border border-slate-400 rounded-sm p-2" />
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">GST Number</label>
                        <input type="text" name="gstNumber" onChange={handleChange} value={formData.gstNumber} className="border border-slate-400 rounded-sm p-2" placeholder='Enter GST Number'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Basic Amount</label>
                        <input type='text' name='basicAmount' onChange={handleChange} value={formData.basicAmount} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Basic Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">CGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span  className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="cgst" onChange={handleChange} value={formData.cgst} className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select CGST%--</option>
                            <option value="0">0%</option>
                            <option value="0.25">0.25%</option>
                            <option value="0.1">0.1%</option>
                            <option value="1">1%</option>
                            <option value="1.5">1.5%</option>
                            <option value="2.5">2.5%</option>
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                            <option value="12">12%</option>
                            <option value="14">14%</option>
                            <option value="18">18%</option>
                            <option value="28">28%</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm ">SGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="sgst" onChange={handleChange} value={formData.sgst} className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select SGST%--</option>
                            <option value="0">0%</option>
                            <option value="0.25">0.25%</option>
                            <option value="0.1">0.1%</option>
                            <option value="1">1%</option>
                            <option value="1.5">1.5%</option>
                            <option value="2.5">2.5%</option>
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                            <option value="12">12%</option>
                            <option value="14">14%</option>
                            <option value="18">18%</option>
                            <option value="28">28%</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">IGST <span className='bg-blue-600 p-1 rounded-sm text-white text-xs'>Manual</span> <span className='bg-green-600 p-1 rounded-sm text-white text-xs'>Auto</span></label>
                        <select name="igst" onChange={handleChange} value={formData.igst} className="border border-slate-400 rounded-sm p-2">
                            <option value="">--Select IGST%--</option>
                            <option value="0">0%</option>
                            <option value="0.25">0.25%</option>
                            <option value="0.1">0.1%</option>
                            <option value="1">1%</option>
                            <option value="1.5">1.5%</option>
                            <option value="2.5">2.5%</option>
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="9">9%</option>
                            <option value="12">12%</option>
                            <option value="14">14%</option>
                            <option value="18">18%</option>
                            <option value="28">28%</option>
                        </select>
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Total Amount</label>
                        <input type='text' name='totalAmount' onChange={handleChange} value={formData.totalAmount} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Total Amount' readOnly/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Paid Amount</label>
                        <input type='text' name='paidAmount' onChange={handleChange} value={formData.paidAmount} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Paid Amount'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Balance Amount</label>
                        <input type='text' name='balanceAmount' onChange={handleChange} value={formData.balanceAmount} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Balance Amount' readOnly/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Type</label>
                        <select name='paymentType' onChange={handleChange} value={formData.paymentType} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Basic Amount'>
                            <option value="">--Select Type--</option>
                            <option value="Partial">Partial</option>
                            <option value="Full">Full</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">TDS Deduction</label>
                        <div className="gap-4 flex justify-between">
                            <input type='number' name='tdsPercent' onChange={handleChange} value={formData.tdsPercent || ""} className='border border-slate-400 rounded-sm p-2' placeholder='Enter TDS %'/>
                            <button type='button' className='bg-green-600 text-white p-2 rounded-sm' onClick={handleTdsCalculate}>Calculate</button>
                            <input type="text" value={formData.tdsDeduction} className="border border-slate-400 rounded-sm p-2 bg-gray-100 w-full" placeholder='TDS Amount' readOnly/>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Other Deduction</label>
                        <input type='text' name='otherDeduction' onChange={handleChange} value={formData.otherDeduction} className='border border-slate-400 rounded-sm p-2' placeholder='Enter Other Deduction'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Terms (in Days)</label>
                        <input type='text' name='paymentTerms' onChange={handleChange} value={formData.paymentTerms} className='border border-slate-400 rounded-sm p-2' placeholder='Payment Terms (in Days)'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment Due Date</label>
                        <input type='date' name='paymentDueDate' onChange={handleChange} value={formData.paymentDueDate} className='border border-slate-400 rounded-sm p-2'/>
                    </div>
                    <div className="grid gap-2">
                        <label className="font-semibold text-sm">Payment by Cheque/Cash</label>
                        <input type='text' name='paymentMethod' onChange={handleChange} value={formData.paymentMethod} className='border border-slate-400 rounded-sm p-2' placeholder='Payment by Cheque/Cash'/>
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
