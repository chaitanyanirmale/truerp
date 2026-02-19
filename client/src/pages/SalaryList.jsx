import React, { useEffect, useState } from 'react'

export const SalaryList = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)
    const [salaries, setSalaries] = useState([]);
    
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
            fetchSalaries();
        }, []);
  return (
    <div className='p-4 border border-slate-400 shadow-md rounded-sm bg-white'>
        <h1 className='text-2xl font-semibold'>Salary List</h1><hr className='my-4 text-slate-200'/>
        <div className=''>
            <form action="" className="flex justify-evenly gap-8 bg-gray-100 p-2">
                <div className="bg-white">
                    <input type="date" name="" className='w-full border border-slate-400 rounded-sm p-2'/>
                </div>
                <div className="bg-white">
                    <input type="date" name="" className='w-full border border-slate-400 rounded-sm p-2'/>
                </div>
                <select type="text" name="" className='border border-slate-400 rounded-sm p-2 bg-white'>
                    <option value="">-- Select Employee --</option>
                    {employees.map((emp) => (
                            <option key={emp._id} value={emp._id}>
                            {emp.fullname}
                            </option>
                    ))}
                </select>
                <button className='bg-blue-600 text-white px-2 rounded-sm hover:bg-blue-700'><i className='fa fa-sm fa-search p-1'></i>Search
                </button>
            </form>
            <hr className='my-4 text-slate-200'/>
            <div className="">

                <table className='w-full text-sm'>
                <thead className='text-gray-700 uppercase text-xs'>
                    <tr>
						<th className="px-4 py-3 border">Fullname</th>
						<th className="px-4 py-3 border">Salary Month</th>
						<th className="px-4 py-3 border">Salary Per Day</th>
						<th className="px-4 py-3 border">Salary Per Hour</th>
						<th className="px-4 py-3 border">General (8 Hrs)</th>
						<th className="px-4 py-3 border">Location</th>
						<th className="px-4 py-3 border">Overtime (11 Hrs)</th>
						<th className="px-4 py-3 border">Night (22 Hrs)</th>
						<th className="px-4 py-3 border">Extra Hours</th>
						<th className="px-4 py-3 border">Bonus</th>
						<th className="px-4 py-3 border">Salary Amount</th>
						<th className="px-4 py-3 border">Salary Date</th>
						<th className="px-4 py-3 border">Action</th>
					</tr>
                </thead>
                <tbody>
                    {salaries.length === 0 ? (
                       <tr>
                            <td colSpan="7" className="text-center py-4">
                                No Salary Records Found
                            </td>
                        </tr>
                    ): (salaries.map((salary) => (
                        <tr key={salary._id} className="text-center">
                            <td className="px-4 py-2 border">
                            {salary.employee?.name}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.month} / {salary.year}
                            </td>

                            <td className="px-4 py-2 border">
                            ₹ {salary.salaryPerDay}
                            </td>

                            <td className="px-4 py-2 border">
                            ₹ {salary.salaryPerHour}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.presentDays}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.employee?.location || "-"}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.overtimeHours || 0}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.nightHours || 0}
                            </td>

                            <td className="px-4 py-2 border">
                            {salary.extraHours}
                            </td>

                            <td className="px-4 py-2 border">
                            ₹ {salary.bonus}
                            </td>

                            <td className="px-4 py-2 border font-semibold text-green-600">
                            ₹ {salary.netSalary}
                            </td>

                            <td className="px-4 py-2 border">
                            {new Date(salary.salaryDate).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-2 border">
                                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
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
