import React, { useEffect, useState } from 'react'

export const SubCategory = () => {
    const initialData = {mainCategory:"", subCategory:"",}
    const [subCategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const fetchCategories = async () => {
                setLoading(true);
                try {
                    const res = await fetch('/api/category/category-list');
                    if (!res.ok) {
                        throw new Error("Failed to fetch categories");
                    }
                    const data = await res.json();
                    if (data.success === true) {
                        setCategories(data.data);
                        setFormData(initialData);  
                        fetchSubCategories();
                    }
                    setLoading(false);
                } catch (error) {
                    console.log(error)
                    setLoading(false);
                }
            }
            useEffect(() => {
                fetchCategories();
            }, []);    

    const fetchSubCategories = async () => {
        try {
            const res = await fetch("/api/category/subcategory-list");
            const data = await res.json();

            if (data.success) {
                setSubCategories(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

        useEffect(() => {
            fetchSubCategories();
        }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await fetch('/api/category/add-subcategory',{
                method:"POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(data.success){
                console.log(data.message)
                setLoading(false)
                return
            }
            setFormData(initialData)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='grid xl:grid-cols-2 gap-8'>
        <div className="bg-white p-4 border border-slate-300 shadow-sm items-stretch">
            <h1 className='text-2xl font-semibold'>Add New Sub-Category</h1>
            <hr className='text-slate-300 my-4'/>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold text-sm">Select Product Main Category</label>
                        <select name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="border border-slate-300 rounded-sm p-2">
                            <option value="">-- Select Main Category --</option>
                            {categories.map((cat)=>(
                                <option key={cat._id} value={cat._id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold text-sm">Sub-Category Name</label>
                        <input type="text" name="subCategory" value={formData.subCategory} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Sub-Category Name'/>
                    </div>
                </div>
                <hr className='text-slate-300 my-4'/>
                <button className='bg-blue-700 px-4 py-2 text-white rounded-sm'><i className='fa fa-check-circle pr-2'></i>Submit</button>
            </form>
        </div>
        <div className="bg-white p-4 border border-slate-300 rounded-sm shadow-sm">
            <h1 className='text-2xl font-semibold'>List of Sub-Categories</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300 w-full text-sm'>
                    <thead>
                        <tr>
                            <th className='p-4 border border-slate-300'>Sub Category Name</th>
                            <th className='p-4 border border-slate-300'>Root Category</th>
                            <th className='p-4 border border-slate-300'>Added on</th>
                            <th className='p-4 border border-slate-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {subCategories.map((sub)=>(
                            <tr key={sub._id}>
                                <td className="p-4 border border-slate-300">
                                    {sub.name}
                                </td>

                                <td className="p-4 border border-slate-300">
                                    {sub.parent?.name}
                                </td>

                                <td className="p-4 border border-slate-300">
                                    {new Date(sub.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-4 border border-slate-300">
                                    <i className='fa fa-pencil pr-2'></i>
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
