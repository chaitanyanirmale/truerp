import React, { useEffect, useState } from 'react'

export const MainCategory = () => {
    const initialData = {
        name:"", sequenceNumber:"",
    }
    const [formData, setFormData] = useState(initialData);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/category/add-category",{
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if(data.success === false){
                console.log(data.message)
                setLoading(false)
                return
            }
            setFormData(initialData)
            setLoading(false)
            console.log('Category Added')
        } catch (error) {
            console.log(error);
        }
    }

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
  return (
    <div className='grid grid-cols-2 gap-8'>
        <div className="bg-white p-4 border border-slate-300 shadow-sm">
            <h1 className='text-2xl font-semibold'>Add New Category</h1>
            <hr className='text-slate-300 my-4'/>
            <form onClick={handleSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold">Category Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Category Name'/>
                    </div>
                    <div className="grid gap-2 placeholder:text-slate-400">
                        <label className="font-semibold">Sequence Number</label>
                        <input type="text" name="sequenceNumber" value={formData.sequenceNumber} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" placeholder='Enter Sequence Number'/>
                    </div>
                </div>
                <hr className='text-slate-300 my-4'/>
                <button className='bg-blue-700 px-4 py-2 text-white rounded-sm hover:bg-blue-800'><i className='fa fa-check-circle pr-2'></i>Submit</button>
            </form>
        </div>
        <div className="bg-white p-4 border border-slate-300 shadow-sm">
            <h1 className='text-2xl font-semibold'>List of Categories</h1>
            <hr className='my-4 text-slate-300'/>
            <div className="">
                <table className='border border-slate-300 w-full'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-slate-300'>Category Name</th>
                            <th className='p-2 border border-slate-300'>Sequence</th>
                            <th className='p-2 border border-slate-300'>Added on</th>
                            <th className='p-2 border border-slate-300'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {categories.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="p-4">
                            No Categories Found
                            </td>
                        </tr>
                        ) : (
                        categories.map((cat) => (
                            <tr key={cat._id}>
                                <td className="p-2 border border-slate-300">{cat.name}</td>
                                <td className="p-2 border border-slate-300">
                                    {cat.sequenceNumber}
                                </td>
                                <td className="p-2 border border-slate-300">
                                    {new Date(cat.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-2 border border-slate-300"><i className='fa fa-pencil text-yellow-500'></i></td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
