import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`/api/employee/update-status/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: newStatus
            })
            });

            const data = await res.json();

            if (data.success) {
                setEmployees((prev) =>
                    prev.map((emp) =>
                    emp._id === id
                        ? { ...emp, status: newStatus }
                        : emp
                    )
                );
                setOpenDropdown(null)
            }
        } catch (error) {
            console.log(error);
        }
    };
    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/employee/emp-list');
            const data = await res.json();
            if(data.success === true){
                setEmployees(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`/api/employee/delete-emp/${id}`, {
                method: "DELETE",
                credentials: "include"
            });

            const data = await res.json();

            if (data.success) {
                alert("Employee deleted successfully");

                setEmployees((prev) =>
                    prev.filter((emp) => emp._id !== id)
                );
                setOpenDropdown(null)
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (

    <div className='p-4 bg-white border border-slate-200 rounded-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>List of Employee</h1>
            <select name="" className='p-2 border border-slate-400 rounded-sm'>
                <option value="all-emp">All Employees</option>
                <option value="staff">Staff</option>
                <option value="worker">Worker</option>
            </select>
        </div>
        <hr className='text-slate-300 my-4'/>
        {loading ? (
            <p>Loading...</p>
        ): <div className="text-center overflow-y-auto">
            <table className='w-full text-sm'>
                <thead className='text-white bg-blue-700 uppercase text-xs'>
                    <tr>
						<th className="p-4 border border-slate-300">Fullname</th>
						<th className="p-4 border border-slate-300">Role</th>
						<th className="p-4 border border-slate-300">EMP Code</th>
						<th className="p-4 border border-slate-300">Mobile</th>
						<th className="p-4 border border-slate-300">Email</th>
						<th className="p-4 border border-slate-300">PAN No</th>
						<th className="p-4 border border-slate-300">Location</th>
						<th className="p-4 border border-slate-300">Status</th>
						<th className="p-4 border border-slate-300">Action</th>
					</tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr>
                            <td colSpan='10' className='text-center p-4'>No Employees Found</td>
                        </tr>
                    ): employees.map((emp) => (
                        <tr key={emp._id} className="border border-slate-300">
                            <td className="px-2 border border-slate-300">{emp.fullname}</td>
                            <td className="px-2 border border-slate-300">{emp.role}</td>
                            <td className="px-2 border border-slate-300">{emp.empcode}</td>
                            <td className="px-2 border border-slate-300">{emp.mobile}</td>
                            <td className="px-2 border border-slate-300">{emp.email}</td>
                            <td className="px-2 border border-slate-300">{emp.panNumber}</td>
                            <td className="px-2 border border-slate-300">{emp.location}</td>
                            <td className="px-6 py-4 border border-slate-300">
                                <span className={`px-3 py-2 text-xs font-semibold text-white rounded ${ emp.status === "active" ? "bg-green-600" : "bg-red-600" }`}>
                                    {emp.status === "active" ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="px-6 py-4 border border-slate-300 text-center">
                                <button onClick={()=> toggleDropdown(emp._id)} className="px-3 py-2 text-sm text-white bg-blue-700 rounded-xs hover:bg-blue-800 hover:scale-105 transition-all duration-700">
                                    Actions
                                    <i className='fa fa-angle-down pl-1'></i>
                                </button>
                                {openDropdown === emp._id && (
                                    <div className="absolute right-20 w-50 bg-white shadow-sm border border-slate-300 z-10">
                                        <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >View</button>
                                        <button onClick={() => updateStatus(emp._id, emp.status === "active" ? "inactive" : "active")} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                            {emp.status === "active" ? "Deactivate" : "Activate"}
                                        </button>
                                        <button onClick={()=> handleDelete(emp._id)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                        ))                    
                    }   
                </tbody>
            </table>
        </div>
    }        
    </div>
  )
}
