import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
export const SalaryList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)
    const [salaries, setSalaries] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    const navigate = useNavigate();

    const totalSalary = salaries.reduce((total, salary) => {
        return total + Number(salary.netSalary);
    }, 0)
    
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
        const fetchSalaries = async () => {
            setLoading(true)
            try {
                const res = await fetch("/api/salary/salary-list");
                if (!res.ok) {
                    throw new Error("Failed to fetch salaries");
                }
                const data = await res.json();
                if(data.success === true){
                    setSalaries(data.data);
                }
            } catch(error) {
                console.log(error)
            } finally{
                setLoading(false)
            }          
        };

        useEffect(() => {
            fetchEmployees();
            fetchSalaries();
        }, []);

        const handleDelete = async (id) => {
        try {
            const res = await fetch(`/api/salary/delete-salary/${id}`, {
                method: "DELETE",
                credentials: "include"
            });

            const data = await res.json();

            if (data.success) {
            alert("Salary deleted successfully");

            setSalaries((prev) =>
                prev.filter((salary) => salary._id !== id)
            );
            }
        } catch (error) {
            console.log(error);
        }
        };
  return (
    <div>
    <div className='p-4 border border-slate-300 shadow-md rounded-sm bg-white'>
        <h1 className='text-2xl font-semibold'>Salary List</h1><hr className='my-4 text-slate-200'/>
        <div className=''>
            <div className="">
                <table className='w-full text-sm'>
                <thead className='text-white uppercase text-xs bg-blue-700'>
                    <tr>
						<th className="p-4 border border-slate-300">Fullname</th>
						<th className="p-4 border border-slate-300">Salary Month</th>
						<th className="p-4 border border-slate-300">Salary Per Day</th>
						<th className="p-4 border border-slate-300">Salary Per Hour</th>
						<th className="p-4 border border-slate-300">General (8 Hrs)</th>
						<th className="p-4 border border-slate-300">Location</th>
						<th className="p-4 border border-slate-300">Overtime (11 Hrs)</th>
						<th className="p-4 border border-slate-300">Night (22 Hrs)</th>
						<th className="p-4 border border-slate-300">Extra Hours</th>
						<th className="p-4 border border-slate-300">Bonus</th>
						<th className="p-4 border border-slate-300">Salary Amount</th>
						<th className="p-4 border border-slate-300">Salary Date</th>
						<th className="p-4 border border-slate-300">Action</th>
					</tr>
                </thead>
                <tbody>
                    {salaries.length === 0 ? (
                       <tr>
                            <td colSpan="13" className="text-center py-4 border border-slate-300">
                                No Salary Records Found
                            </td>
                        </tr>
                    ): (salaries.map((salary) => (
                        <tr key={salary._id} className="text-center">
                            <td className="px-4 py-2 border border-slate-300">
                            {salary.employee?.fullname}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.month} / {salary.year}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            ₹ {salary.salaryPerDay}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            ₹ {salary.salaryPerHour}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.presentDays}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.employee?.location || "-"}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.overtimeHours || 0}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.nightHours || 0}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {salary.extraHours}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            ₹ {salary.bonus}
                            </td>

                            <td className="px-4 py-2 border border-slate-300 font-semibold text-green-600">
                            ₹ {salary.netSalary}
                            </td>

                            <td className="px-4 py-2 border border-slate-300">
                            {new Date(salary.salaryDate).toISOString().split("T")[0]}
                            </td>
                            <td className="px-4 py-2 border border-slate-300">
                                <button onClick={()=>toggleDropdown(salary._id)} className="bg-blue-700 w-20 text-white p-2 rounded-xs font-semibold hover:scale-105 transition-all duration-700">
                                   Action <i className='fa fa-angle-down'></i>
                                </button>
                                {openDropdown === salary._id && (
                                    <div className="absolute right-14 w-50 bg-white shadow-sm border border-slate-300 z-10 py-2 rounded-sm">
                                        <button onClick={() => navigate(`/dashboard/view-salary/${salary._id}`)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        > <i className='fa fa-eye pr-2 text-blue-700'></i>View Salary</button>
                                        <button onClick={() => navigate(`/dashboard/edit-salary/${salary._id}`)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        > <i className='fa fa-pencil pr-2 text-blue-700'></i>Edit Salary</button>
                                        <button onClick={() => navigate(`/dashboard/view-salary/${salary._id}`)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        > <i className='fa fa-print pr-2 text-blue-700'></i>Print Payslip</button>
                                        <button onClick={()=> handleDelete(salary._id)} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        > <i className='fa fa-trash pr-2 text-blue-700'></i>Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))
                )}    
                </tbody>
                </table>
            </div>         
        </div>
    </div>
    <div className="bg-white" >
        <div className="text-md">
            <table className='border border-slate-300 mt-4 w-full'>
              <thead className='w-full'>
                <tr><th className='p-2 text-blue-600'>Total Salaries</th></tr>
              </thead>
              <tbody className='w-full text-center border border-slate-300'>
                <tr><td className='p-2 font-bold'>Rs. {totalSalary}</td></tr>
              </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}
