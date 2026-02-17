import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)

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
  return (

    <div className='p-4 bg-white'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>List of Employee</h1>
            <select name="" id="" className='p-2 border border-slate-400 rounded-sm'>
                <option value="all-emp">All Employees</option>
                <option value="staff">Staff</option>
                <option value="worker">Worker</option>
            </select>
        </div>
        <hr className='text-slate-400 my-4'/>
        {loading ? (
            <p>Loading...</p>
        ): <div className="text-center">
            <table className='w-full text-sm'>
                <thead className='text-gray-700 uppercase text-xs'>
                    <tr>
						<th className="px-4 py-3 border">Fullname</th>
						<th className="px-4 py-3 border">Role</th>
						<th className="px-4 py-3 border">Mobile</th>
						<th className="px-4 py-3 border">Email</th>
						<th className="px-4 py-3 border">PAN No</th>
						<th className="px-4 py-3 border">Location</th>
						<th className="px-4 py-3 border">Salary Per Hour</th>
						<th className="px-4 py-3 border">Status</th>
						<th className="px-4 py-3 border">Action</th>
					</tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr>
                            <td colSpan='7' className='text-center p-4'>No Employees Found</td>
                        </tr>
                    ): employees.map((emp) => (
                        <tr key={emp._id} className="border border-gray-200">
                            <td className="px-2 border text-gray-900">{emp.fullname}</td>
                            <td className="px-2 border">{emp.role}</td>
                            <td className="px-2 border">{emp.mobile}</td>
                            <td className="px-2 border">{emp.email}</td>
                            <td className="px-2 border">{emp.panNumber}</td>
                            <td className="px-2 border">{emp.location}</td>
                            <td className="px-2 border">{emp.salaryPerHour}</td>
                            <td className="px-6 py-4 border">
                            <span className="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded">
                                Active
                            </span>
                            </td>
                            <td className="px-6 py-4 border text-center">
                            <button className="px-3 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                                Actions
                            </button>
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
