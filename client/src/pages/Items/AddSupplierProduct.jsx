import React, { useEffect, useState } from 'react'

export const AddSupplierProduct = () => {
    const initialData = {
        supplierName: "",
        price: "",
        unit: "",
        stockCount: "",
    }
    const [formData, setFormData] = useState(initialData);
    const [suppliers, setSuppliers] = useState([]);
    const [supplierProducts ,setSupplierProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    
    const fetchSuppliers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/users/suppliers-vendors');
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
    const fetchSupplierProductList = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/items/sp-list');
            const data = await res.json();
            if(data.success === true){
                setSupplierProducts(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchSuppliers();
        fetchSupplierProductList();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/items/supplier-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success){
                console.log("Supplier Product Added");
                setFormData(initialData);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div className='flex justify-between gap-8 items-start'>
        <div className="bg-white p-4 shadow-sm rounded-sm w-210 gap-2 grid">
            <div className="bg-green-200 p-4 rounded-sm text-sm">
                <p><span className='font-bold'>Success!</span> Product added successfully... Please add supplier details!!!</p>
            </div>
            <h1 className='text-2xl font-semibold'>Add Supplierwise Product</h1>
            <hr className='my-2 text-slate-300'/>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Select Supplier/Customer/Sub-Vendor</label>
                    <select name="supplierName" value={formData.supplierName} onChange={handleChange} className="border border-slate-300 rounded-sm p-2">
                        <option value="">--Select Supplier/Customer/Sub-Vendor--</option>
                        {suppliers.map((supplier) => (
                            <option key={supplier._id} value={supplier._id}>
                            {supplier.companyName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Price</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} className="border border-slate-300 rounded-sm p-2" placeholder='Enter Price'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Unit</label>
                    <input type="text" name="unit" value={formData.unit} onChange={handleChange} className="border border-slate-300 rounded-sm p-2" placeholder='Enter Unit'/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">Stock Count</label>
                    <input type="text" name="stockCount" value={formData.stockCount} onChange={handleChange} className="border border-slate-300 rounded-sm p-2" placeholder='Enter Stock Count'/>
                </div>
                <hr className='my-2 text-slate-300'/>
                <div className="">
                    <button type='submit' className='bg-blue-700 text-white font-semibold rounded-sm px-4 py-2'><i className='fa fa-check-circle pr-2'></i>Submit</button>
                </div>
            </form>
        </div>
        <div className="bg-white p-4 shadow-sm rounded-sm w-full">
            <h1 className='text-2xl font-semibold'>List of Supplierwise Product</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300 w-full overflow-y-auto'>
                    <thead>
                        <tr>
                            <td className='p-2 border border-slate-300 font-semibold'>Supplier/Customer Name</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Role</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Price</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Unit</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Stock Count</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Created On</td>
                            <td className='p-2 border border-slate-300 font-semibold'>Action</td>
                        </tr>
                    </thead>
                        <tbody>
                            { supplierProducts.length === 0 ? (
                                <tr>
                                    <td colSpan='8' className='text-center p-4'>No List Found</td>
                                </tr>
                            ) :
                            supplierProducts.map((sp) => (
                            <tr key={sp._id}>
                                <td className='p-2 border border-slate-300'>{sp.supplierName?.companyName}</td>
                                <td className='p-2 border border-slate-300'>{sp.supplierName?.role}</td>
                                <td className='p-2 border border-slate-300'>{sp.price}</td>
                                <td className='p-2 border border-slate-300'>{sp.unit}</td>
                                <td className='p-2 border border-slate-300'>{sp.stockCount}</td>
                                <td className='p-2 border border-slate-300'>{new Date(sp.createdAt).toLocaleDateString()}</td>
                                 <td className='border border-slate-300 p-2'>
                                    <button className='bg-blue-700 p-2 py-1 text-white font-semibold rounded-sm'>Action <i className='fa fa-angle-down px-1'></i></button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
