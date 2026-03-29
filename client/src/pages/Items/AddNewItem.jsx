import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const AddNewItem = () => {
    const initialData = {
        mainCategory: "",
        subCategory: "",
        prefix:"",
        itemCode:"",
        itemName: "",
        perUnit:"",
        weightInGram:"",
        itemType:"",
        supplierPrice:"",
        customerPrice:"",
        minOrderQty:"",
        description:"",
    }
    const [formData, setFormData] = useState(initialData);
    const [mainCategories, setMainCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const fetchSubCategories = async () => {
        try {
            const res = await fetch('/api/category/subcategory-list');
            const data = await res.json();

            if (data.success) {
                setSubCategories(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const fetchMainCategories = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/category/maincategory-list');
            if (!res.ok) {
                throw new Error("Failed to fetch categories");
            }
            const data = await res.json();
            if (data.success === true) {
                setMainCategories(data.data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    const handlePrefixChange = async (e) => {
        const prefix = e.target.value;
        setFormData((formData) => ({
            ...formData,
            prefix
        }));
        if (!prefix) return;

        try {
            const res = await fetch(`/api/items/previewItemCode/${prefix}`);
            const data = await res.json();

            if (data.success) {
                setFormData((formData) => ({
                    ...formData,
                    itemCode: data.itemCode
                }));
            }

        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchMainCategories();
        fetchSubCategories();
    }, []);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });       
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/items/add-item", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (data.success) {
                navigate(`/dashboard/addSupplierwiseProduct/${data.data._id}`);
            }
        } catch (error) {
            console.log(error)
        }
    };
  return (
    
    <div className='p-4 bg-white border border-slate-300 rounded-sm shadow-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Add New Item</h1>
            <button onClick={()=> navigate('/dashboard/items-list')} className='p-1 px-4 bg-blue-800 text-white font-semibold rounded-sm'>List Item</button>
        </div>
        <hr className='my-4 text-slate-300'/>
        <form onSubmit={handleSubmit}>
            <div className="grid xl:grid-cols-3 gap-8 items-stretch">
                <div className="">
                    <label className="text-sm font-semibold">Select Main Category</label>
                    <select name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="border border-slate-300 p-2 mt-1 rounded-sm w-full">
                        <option value="">-- Select Main Category --</option>
                        {mainCategories.map((mainCat)=>(
                            <option key={mainCat._id} value={mainCat._id}>{mainCat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label className="text-sm font-semibold">Select Sub Category</label>
                    <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="border border-slate-300 p-2 mt-1 rounded-sm w-full">
                        <option value="">-- Select Sub Category --</option>
                        {subCategories.map((subCat)=>(
                            <option key={subCat._id} value={subCat._id}>{subCat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="grid xl:grid-cols-2 gap-8">
                    <div className="grid">
                        <label className="text-sm font-semibold">Check Last Item Code</label>
                        <select name="prefix" onChange={handlePrefixChange} className='border border-slate-300 p-2 mt-1 rounded-sm w-full'>
                            <option value="">--Select Prefix--</option>
                            <option value="P">P</option>
                            <option value="TU">TU</option>
                            <option value="FT">FT</option>
                            <option value="G">G</option>
                            <option value="V">V</option>
                            <option value="GEN">GEN</option>
                            <option value="H">H</option>
                            <option value="RM">RM</option>
                            <option value="FL">FL</option>
                        </select>
                        {formData.itemCode &&
                            <p className='text-blue-700 text-sm font-semibold mt-1'>Last Item Code : {formData.itemCode}</p>
                        }
                    </div>
                    <div className="grid items-start">
                        <label className="text-sm font-semibold">Item Code</label>
                        <input type="text" name="itemCode" value={formData.itemCode} className="border border-slate-300 p-2 mt-1 rounded-sm w-full" readOnly/>
                    </div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 mt-4 gap-8">
                <div className="grid">
                    <label className="text-sm font-semibold">Item Name/Model Name</label>
                    <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className="border border-slate-300 p-2  rounded-sm mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Per Unit*</label>
                    <select name="perUnit" value={formData.perUnit} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm mt-2">
                        <option value="">-- Select Unit --</option>
                        <option value="NOS">NOS</option>
                        <option value="PC">PC</option>
                        <option value="MTR">MTR</option>
                        <option value="KG">KG</option>
                    </select>
                </div>
                <div className="grid xl:grid-cols-2 gap-8">
                    <div className="grid">
                        <label className="text-sm font-semibold">Weight in Gram</label>
                        <input type="text" name="weightInGram" value={formData.weightInGram} onChange={handleChange} className="border border-slate-300 p-2  rounded-sm mt-2 w-full" />
                    </div>
                    <div className="grid">
                        <label className="text-sm font-semibold">Item or Raw Material</label>
                        <select name="itemType" value={formData.itemType} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm mt-2 w-full">
                            <option value="">-- Select --</option>
                            <option value="Item">Item</option>
                            <option value="Raw Material">Raw Material</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid xl:grid-cols-4 mt-4 gap-8">
                <div className="grid">
                    <label className="text-sm font-semibold">Item Price Supplier</label>
                    <input type="text" name="supplierPrice" value={formData.supplierPrice} onChange={handleChange} className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Item Price Customer</label>
                    <input type="text" name="customerPrice" value={formData.customerPrice} onChange={handleChange} className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
                <div className="grid">
                    <label className="text-sm font-semibold">Minimum Order Qty</label>
                    <input type="text" name="minOrderQty" value={formData.minOrderQty} onChange={handleChange} className="border border-slate-300 rounded-sm p-2 mt-2" />
                </div>
            </div>
            <div className="grid mt-4">
                <label className="text-sm font-semibold">Item Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="border border-slate-300 rounded-sm p-2 mt-2" rows="2"></textarea>
            </div>
            <hr className='my-4 text-slate-300'/>
            <div className="flex justify-end">
                <button className='bg-blue-700 px-3 py-1 text-white rounded-sm '>Next</button>
            </div>
        </form>
        <div className="">
            <Outlet />
        </div>
    </div>
  )
}
