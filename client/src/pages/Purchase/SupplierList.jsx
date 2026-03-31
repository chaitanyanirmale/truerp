import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null)
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    const navigate = useNavigate();
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
    <div className='bg-white p-4 border border-slate-300 shadow-sm rounded-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>List of Suppliers</h1>
            <select name="" className="border border-slate-400 p-2 rounded-sm">
                <option value="">--Select Suppliers/Vendors--</option>
                <option value="supplier">Supplier</option>
                <option value="sub-vendors">Sub Vendors</option>
                <option value="customers">Customers</option>
            </select>
        </div>
        <hr className='text-slate-300 my-4'/>
        {loading ? (<p>Loading...</p>):(

        <div className="overflow-y-auto ">
            <table className='border border-slate-300 text-sm xl:w-full'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 p-2 px-4'>Fullname</th>
						<th className='border border-slate-300 p-2 px-4'>Role</th>
						<th className='border border-slate-300 p-2 px-4'>Mobile</th>
						<th className='border border-slate-300 p-2 px-4'>Email</th>
						<th className='border border-slate-300 p-2 px-4'>GST No</th>
						<th className='border border-slate-300 p-2 px-4'>PAN No</th>
						<th className='border border-slate-300 p-2 px-4'>Location</th>
						<th className='border border-slate-300 p-2 px-4'>Status</th>
						<th className='border border-slate-300 p-2 px-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.length === 0 ? (
                        <tr>
                            <td colSpan='9' className='text-center p-4'>No Supplier Found</td>
                        </tr>) : suppliers.map((supplier)=>(
                            <tr key={supplier._id}>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.name}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.role}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.mobile}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.email}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.gstNumber}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.panNumber}</td>
                                <td className='border border-slate-300 p-2 px-4'>{supplier.location}</td>
                                <td className="px-6 py-4 border border-slate-300">
                                <span className={`px-3 py-2 text-xs font-semibold text-white rounded ${ supplier.status === "active" ? "bg-green-600" : "bg-red-600" }`}>
                                    {supplier.status === "active" ? "Active" : "Inactive"}
                                </span>
                                </td>
                                <td className='border border-slate-300 p-2 px-4'>
                                   <button className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xs hover:bg-blue-700 transition" onClick={()=> toggleDropdown(supplier._id)}>Actions<i className='fa fa-angle-down pl-2'></i>
                            </button>
                            {openDropdown === supplier._id && (
                                <div className="absolute right-8 w-32 bg-white shadow-sm border border-slate-300 z-10">
                                <button onClick={() => navigate(`/users/${supplier._id}`)} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100">View User</button>
                                <button onClick={() => deleteUser(supplier._id)} className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</button>
                                </div>
                                )}
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
