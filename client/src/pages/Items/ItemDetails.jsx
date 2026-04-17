import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ItemDetails = () => {
    const {id} = useParams();
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
    const [loading, setLoading] = useState(false)
    const [openMenu, setOpenMenu] = useState("itemDetails");
    const [active, setActive] = useState('itemDetails');
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

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
    const fetchItemDetails = async () => {
        try {
            const res = await fetch(`/api/items/item/${id}`);
            const data = await res.json();

            if (data.success) {
                const item = data.item;

                setFormData({
                    mainCategory: data.item.mainCategory?._id || "",
                    subCategory: data.item.subCategory?._id || "",
                    prefix: item.prefix || "",
                    itemCode: item.itemCode || "",
                    itemName: item.itemName || "",
                    perUnit: item.perUnit || "",
                    weightInGram: item.weightInGram || "",
                    itemType: item.itemType || "",
                    supplierPrice: item.supplierPrice || "",
                    customerPrice: item.customerPrice || "",
                    minOrderQty: item.minOrderQty || "",
                    stockCount: item.stockCount || "",
                    description: item.description || "",
                });
            }            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=> {
        fetchMainCategories();
        fetchSubCategories();
        if(id){
            fetchItemDetails();
        }
    },[id])

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

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    }
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/items/update-item/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                alert("Item updated successfully");
            } else {
                alert(data.message || "Update failed");
            }

        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div className='bg-white p-4 rounded-sm shadow-sm'>
        <div className="">
            <h1 className='text-2xl font-semibold'>{formData.itemName}</h1>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="flex gap-4">
            <div className={`p-2 hover:cursor-pointer ${active === 'itemDetails' ? 'border-blue-700 border-b-2':''}`} onClick={() => {setOpenMenu(openMenu === "itemDetails" ? null : "itemDetails") , setActive("itemDetails")}}>
                <label className="text-sm">Item Details</label>
            </div>
            <div className={`p-2 hover:cursor-pointer ${active === 'editItem' ? 'border-blue-700 border-b-2':''}`} onClick={() => {setOpenMenu(openMenu === "editItem" ? null : "editItem") , setActive("editItem")}}>
                <label className="text-sm">Edit Item</label>
            </div>
        </div>
        <hr className='text-slate-300'/>
        <div className="pt-4">
            <div className={`overflow-hidden ${ openMenu === "itemDetails" ? "max-h-full" : "max-h-0" }`}>
                <table className="w-full text-sm" id="">
                <tbody>
                    <tr>
                        <th width="20%" className='border border-slate-300 p-2 text-start'>Item Code</th>
                        <td width="30%" className='border border-slate-300 p-2'><span>{formData.itemCode}</span></td>
                        <th width="20%" className='border border-slate-300 p-2 text-start'>Item Name</th>
                        <td width="30%" className='border border-slate-300 p-2'><span>{formData.itemName}</span></td>
                    </tr>
                    <tr>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Category</th>
                    <td width="30%" className='border border-slate-300 p-2'>{mainCategories.find((cat) => cat._id === formData.mainCategory)?.name}</td>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Unit</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.perUnit}</td>
                    </tr>
                    <tr>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Price</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.supplierPrice}</td>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Minimum Order Qty</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.minOrderQty}</td>
                    </tr>
                    <tr>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Item Price Customer</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.customerPrice}</td>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Sequence Number</th>
                    <td width="30%" className='border border-slate-300 p-2'></td>
                    </tr>
                    
                    <tr>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Sub Category</th>
                    <td width="30%" className='border border-slate-300 p-2'>{subCategories.find((sub) => sub._id === formData.subCategory)?.name}</td>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Stock Count</th>
                    <td width="30%" className='border border-slate-300 p-2 text-green-600 font-semibold'>{formData.stockCount}</td>
                    </tr>
                    <tr>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Item Description</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.description}</td>
                    <th width="20%" className='border border-slate-300 p-2 text-start'>Weight in Gram</th>
                    <td width="30%" className='border border-slate-300 p-2'>{formData.weightInGram}</td>
                    </tr>
                    </tbody>
              </table>
            </div>
            <div className={`overflow-hidden ${ openMenu === "editItem" ? "max-h-full" : "max-h-0" }`}>
                <form onSubmit={handleUpdate}>
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
                        <button type='submit' className='bg-blue-700 px-3 py-1 text-white rounded-xs'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
