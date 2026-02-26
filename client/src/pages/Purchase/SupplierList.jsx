import React, { useEffect, useState } from 'react'

export const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
        const [loading, setLoading] = useState(false);
    
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
  return (
    <div className='bg-white p-4 border border-slate-400 shadow-sm rounded-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>List of Suppliers</h1>
            <select name="" className="border border-slate-400 p-2 rounded-sm">
                <option value="">--Select Suppliers/Vendors--</option>
                <option value="supplier">Supplier</option>
                <option value="sub-vendors">Sub Vendors</option>
                <option value="customers">Customers</option>
            </select>
        </div>
        <hr className='text-slate-400 my-4'/>
        {loading ? (<p>Loading...</p>):(

        <div className="overflow-y-auto ">
            <table className='border border-slate-400 xl:w-full'>
                <thead>
                    <tr>
                        <th className='border border-slate-400 p-2 px-4'>Fullname</th>
						<th className='border border-slate-400 p-2 px-4'>Role</th>
						<th className='border border-slate-400 p-2 px-4'>Mobile</th>
						<th className='border border-slate-400 p-2 px-4'>Email</th>
						<th className='border border-slate-400 p-2 px-4'>GST No</th>
						<th className='border border-slate-400 p-2 px-4'>PAN No</th>
						<th className='border border-slate-400 p-2 px-4'>Location</th>
						<th className='border border-slate-400 p-2 px-4'>Status</th>
						<th className='border border-slate-400 p-2 px-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.length === 0 ? (
                        <tr>
                            <td colSpan='9' className='text-center p-4'>No Supplier Found</td>
                        </tr>) : suppliers.map((supplier)=>(
                            <tr key={supplier._id}>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.name}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.role}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.mobile}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.email}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.gstNumber}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.panNumber}</td>
                                <td className='border border-slate-400 p-2 px-4'>{supplier.location}</td>
                                <td className="px-6 py-4 border">
                                <span className="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded">
                                    Active
                                </span>
                                </td>
                                <td className='border border-slate-400 p-2 px-4'>
                                    <button className='bg-blue-600 p-2 rounded-sm text-white'>Action</button>
                                </td>
                            </tr>
                        ))                
                        }
                </tbody>
            </table>
        </div>
        )}
    </div>
  )
}
