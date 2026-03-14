import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateInvoice = () => {
    const initialData = {
        invoiceType: "Tax Invoice",
        invoicePrefix: "Invoice -",
        company: "",
        invoiceNumber: "",
        invoiceDate: "",
        receiver: "",
        consignee: "",
        product: "",
        productName: "",
        hsn: "",
        unit: "",
        quantity: "",
        unitPrice: "",
        gstPercent: "",
        subTotal: "",
        poNumber: "",
        poDate: "",
        challanNumber: "",
        challanDate: "",
        transportType: "",
        transportBillNo: "",
        vehicleNumber: "",
        dateOfSupply: "",
        placeOfSupply: "",
        transporterName: "",
        transporterId: "",
        originalForRecipient: false,
        duplicateForTransporter: false,
        triplicateForSupplier: false,
        paymentStatus: "Unpaid",
        remark: "",
        termsAndConditions: "",
    }
    const [formData, setFormData] = useState(initialData);
    const [items, setItems] = useState([]);
    const [suppliers, setSuppliers] = useState([])
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [selectedConsignee, setSelectedConsignee] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const gstRates = [0, 0.25, 1, 3, 5, 12, 18, 28];


    useEffect(()=>{
        const qty = Number(formData.quantity);
        const price = Number(formData.unitPrice);
        const gst = Number(formData.gstPercent);

        if (qty && price) {
            const baseAmount = qty * price;
            const gstAmount = (baseAmount * gst) / 100;
            const total = baseAmount + gstAmount;

            setFormData((formData) => ({
                ...formData,
                subTotal: total.toFixed(2),
            }));
        }
    }, [formData.quantity, formData.unitPrice, formData.gstPercent])

    

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
    const fetchItems = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/items/list');
            const data = await res.json();
            if(data.success === true){
                setItems(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    const fetchInvoiceNo = async () => {
        const res = await fetch("/api/invoice/previewInvoice");
        const data = await res.json();
        
        if(data.success){
            setFormData(formData => ({
                ...formData,
                invoiceNumber : data.invoiceNo
            }))
        }
    }
    const setTodayDate = () => {
        const today = new Date().toISOString().split("T")[0];
        
        setFormData(formData => ({
            ...formData,
            invoiceDate: today
        }))
    }
    useEffect(() => {
        fetchSuppliers();
        fetchItems();
        fetchInvoiceNo();
        setTodayDate();
    }, []);

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/invoice/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( formData )
            });

            const data = await res.json();
            setFormData(initialData)
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='p-4 border border-slate-300 shadow-md rounded-sm bg-white'>
        <form onSubmit={handleSubmit}>
            <h1 className='text-2xl mb-2 font-semibold'>Create New Invoice</h1><hr className='text-slate-300 mb-4'/>
            <div className="invoice-details">
                <h3 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>Invoice Details</h3>
                <div className="xl:grid xl:grid-cols-5 xl:gap-6 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Select Invoice Type</label>
                        <select name="invoiceType" value={formData.invoiceType} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                            <option value="Tax Invoice">Tax Invoice</option>
                            <option value="Bills of Supply">Bills of Supply</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Invoice Prefix</label>
                        <input type="text" name="invoicePrefix" value={formData.invoicePrefix} onChange={handleChange} placeholder='Invoice'  className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Select Company</label>
                        <select name="company" value={formData.company} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                            <option value="" disabled>-- Select Company --</option>
                            <option value="LLP">LLP</option>
                            <option value="Private Ltd">Private Ltd</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Invoice Number</label>
                        <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} placeholder='VEL-000-2025-2026' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' readOnly/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Invoice Date</label>
                        <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' readOnly/>
                    </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="supplier-buyer-details">
                <div className="flex justify-between bg-gray-300 px-3 py-3 rounded-sm">
                    <h3 className='text-xl font-semibold '>Supplier / Buyer Details</h3>
                    <button type='button' onClick={() => navigate("/dashboard/add-user")} className="bg-blue-700 p-2 text-white text-sm rounded-sm hover:bg-blue-800 shadow-md">
                        <i className='fa fa-plus pt-1 pr-1'></i>
                        Add New Supplier / Buyer
                    </button>
                </div>
                <div className="flex justify-between px-2 gap-6 mt-2 items-start">
                    <div className="grid w-full">
                        <label className="text-sm p-1 font-semibold">Details of Receiver | Billed to:</label>
                        <select name="receiver" value={formData.receiver} onChange={(e) => {
                            const value = e.target.value;
                            const supplier = suppliers.find((s)=> s._id === e.target.value);
                            setSelectedSupplier(supplier);
                            setFormData((formData)=> ({
                                ...formData, receiver: value,
                            }))
                        }} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                            <option value="">--Select Receiver--</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier._id} value={supplier._id}>
                                {supplier.companyName}
                                </option>
                            ))}
                        </select>
                        {selectedSupplier && (
                            <div className="border border-gray-300 rounded-sm bg-white my-2">
                                <div className="bg-blue-700 text-white px-4 py-2 text-sm font-medium">
                                    Details
                                </div>

                                <div className="p-4 text-sm space-y-2">
                                    <>
                                        <p><strong>Full Name:</strong> {selectedSupplier.name}</p>
                                        <p><strong>Address:</strong> {selectedSupplier.address}</p>
                                        <p><strong>GST Number:</strong> {selectedSupplier.gstNumber}</p>
                                        <p><strong>State:</strong> {selectedSupplier.state}</p>
                                        <p><strong>PIN Code:</strong> {selectedSupplier.pinCode}</p>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="grid w-full">
                        <label className="text-sm p-1 font-semibold">Details of Consignee | Shipped to:</label>
                        <select name="consignee" value={formData.consignee} onChange={(e) => {
                            const value = e.target.value;
                            const consignee = suppliers.find((c)=> c._id === e.target.value);
                            setSelectedConsignee(consignee);
                            setFormData((formData)=> ({
                                ...formData, consignee:value,
                            }))
                        }} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                            <option value="">--Select Consignee--</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier._id} value={supplier._id}>
                                {supplier.companyName}
                                </option>
                            ))}
                        </select>
                        {selectedConsignee && (
                            <div className="border border-gray-300 rounded-sm bg-white my-2">
                                <div className="bg-blue-700 text-white px-4 py-2 text-sm font-medium">
                                    Details
                                </div>

                                <div className="p-4 text-sm space-y-2">
                                    <>
                                        <p><strong>Full Name:</strong> {selectedConsignee.name}</p>
                                        <p><strong>Address:</strong> {selectedConsignee.address}</p>
                                        <p><strong>GST Number:</strong> {selectedConsignee.gstNumber}</p>
                                        <p><strong>State:</strong> {selectedConsignee.state}</p>
                                        <p><strong>PIN Code:</strong> {selectedConsignee.pinCode}</p>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="product-details">         
                <h3 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>Product Details</h3>
                <div className="xl:grid grid-cols-2 gap-4 px-2 mt-2">
                    <div className="xl:grid grid-cols-2 gap-4">
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Select Product</label>
                            <select name="product" value={formData.product} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                                <option value="">New Product</option>
                                {items.map((item)=>(
                                    <option key={item._id}>{item.itemName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">OR Type Name</label>
                            <textarea name='productName'value={formData.product} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1 bg-green-200' rows='4' placeholder='Enter Product Name' readOnly></textarea>
                        </div>
                    </div>
                    <div className="xl:grid xl:grid-cols-7 xl:gap-4 md:grid md:grid-cols-1 md:gap-2 sm:grid sm:grid-cols-1 sm:gap-2">
                        <div className="">
                            <label className="text-sm p-1 font-semibold">HSN</label>
                            <input type="text" name="hsn" value={formData.hsn} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Unit</label>
                            <input type="text" name="unit" value={formData.unit}  onChange={handleChange} placeholder='NOS.' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Quantity</label>
                            <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Unit Price</label>
                            <input type="text" name="unitPrice" value={formData.unitPrice} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">GST (%)</label>
                            <select name="gstPercent" value={formData.gstPercent} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1 '>
                                {gstRates.map((rate) => (
                                    <option key={rate} value={rate} className='overflow-y-auto max-h-20'>
                                    {rate}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Sub Total</label>
                            <input type="text" name="subTotal" value={formData.subTotal} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' readOnly/>
                        </div>
                        <div className="">
                            <button type='button'  className="bg-blue-700 hover:bg-blue-800 flex p-2 rounded-sm text-white mt-6" >
                                <i className='fa fa-plus py-1 px-1'></i>Add
                            </button>
                        </div>
                    </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="po-details">
                <h3 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>PO Details</h3>
                <div className="xl:grid xl:grid-cols-4 xl:gap-6 gap-2 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1 font-semibold">PO No.</label>
                        <input name="poNumber" value={formData.poNumber} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">PO Date</label>
                        <input type="date" name="poDate" value={formData.poDate} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Challan Number</label>
                        <input type="text" name="challanNumber" value={formData.challanNumber} onChange={handleChange} placeholder='Enter Here' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Challan Date</label>
                        <input type="date" name="challanDate" value={formData.challanDate} onChange={handleChange}  placeholder='' className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'/>
                    </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="transportation-details">
                <h3 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>Transportation Details</h3>
                <div className="xl:grid xl:grid-cols-3 gap-6 px-2 mt-2">
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Select Type</label>
                        <select type="text" name="transportType" value={formData.transportType} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1'>
                            <option value="" disabled>--Select Type--</option>
                            <option value="None">None</option>
                            <option value="Road">Road</option>
                            <option value="Rail">Rail</option>
                            <option value="Air">Air</option>
                            <option value="Ship/Road Cum Ship">Ship/Road cum Ship</option>
                        </select>
                    </div>
                    <div className="xl:grid xl:grid-cols-2 gap-6">
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Bill No.</label>
                            <input type='text' name="transportBillNo" value={formData.transportBillNo} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Vehicle Number</label>
                            <input type='text' name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                        </div>
                    </div>
                    <div className="xl:grid xl:grid-cols-2 gap-6">
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Date of Supply</label>
                            <input  type='date' name="dateOfSupply" value={formData.dateOfSupply} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                        </div>
                        <div className="">
                            <label className="text-sm p-1 font-semibold">Place of Supply</label>
                            <input  type='text' name="placeOfSupply" value={formData.placeOfSupply} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                        </div>
                    </div>
                </div>
                <div className="xl:grid xl:grid-cols-2 xl:gap-4 px-2 mt-4">
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Transporter Name</label>
                        <input  type='text' name="transporterName" value={formData.transporterName} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                    <div className="">
                        <label className="text-sm p-1 font-semibold">Transporter Id</label>
                        <input  type='text' name="transporterId" value={formData.transporterId} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Enter Here'></input>
                    </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="xl:flex xl:justify-evenly xl:gap-4  sm:grid sm:grid-cols-1 sm:gap-2 text-sm font-medium">
                <div className="bg-gray-100 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="originalForRecipient" value={formData.originalForRecipient} onChange={handleChange}/><label className='px-1'>Original For Receipient</label>
                </div>
                <div className="bg-gray-100 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="duplicateForTransporter" value={formData.duplicateForTransporter} onChange={handleChange}/><label className='px-1'>Duplicate For Transporter</label>
                </div>
                <div className="bg-gray-100 px-2 py-2 w-full rounded-sm">
                    <input type="checkbox" name="triplicateForSupplier" value={formData.triplicateForSupplier} onChange={handleChange}/><label className='px-1'>Triplicate For Supplier</label>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="xl:flex gap-4">
                <div className="bank-details">
                    <h1 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>Bank Details</h1>
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
                <div className="w-full invoice-status">
                        <h1 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm'>Invoice Status & Remark</h1>
                        <div className="p-2 flex gap-4">
                            <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className='border border-slate-300 rounded-sm p-2 text-sm mt-1 h-10'>
                                <option value="Paid">Paid</option>
                                <option value="Partially Paid">Partially Paid</option>
                                <option value="Unpaid">Unpaid</option>
                            </select>
                            <textarea type="text" name="remark" onChange={handleChange} rows="8" className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1' placeholder='Remark'></textarea>
                        </div>
                </div>
            </div><hr className='text-slate-300 mb-4 my-4 w-full'/ >
            <div className="terms-conditions">
                <h1 className='text-xl bg-gray-300 px-3 py-3 font-semibold rounded-sm mb-2'>Terms & Conditions</h1>
                <textarea name="termsAndConditions" value={formData.termsAndConditions} onChange={handleChange} rows="4" className='border border-slate-300 rounded-sm p-2 w-full text-sm mt-1 uppercase placeholder:text-gray-300' placeholder='100% within 30 days'></textarea>
            </div>
            <hr className='text-slate-300 mb-4 my-4 w-full'/>
            <div className="mt-4 p-2 text-sm">
                    <button className="bg-blue-600 p-2 mr-2 rounded-sm text-white hover:bg-blue-800" type="submit" name="submit"><i className="fa fa-fw fa-lg fa-check-circle pr-1"></i>Submit</button>
                    <button className="bg-gray-600 p-2 rounded-sm text-white hover:bg-gray-800" type="reset"><i className="fa fa-fw fa-lg fa-times-circle pr-1"></i>Clear</button>
            </div>
        </form>
    </div>
  )
}
