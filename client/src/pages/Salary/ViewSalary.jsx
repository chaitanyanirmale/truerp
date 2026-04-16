import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ViewSalary = () => {
    const {id} = useParams();
    const [salaryData, setSalaryData] = useState([]);
    const navigate = useNavigate();
    const fetchSalaryDetails = async (id) => {
        try {
            const res = await fetch(`/api/salary/emp/${id}`);

            const data = await res.json();

            if (data.success) {
            setSalaryData(data.data);
            } else {
            console.log(data.message);
            }
        } catch (error) {
            console.error("Error fetching salary:", error);
        }
    };
    useEffect(() => {
        if (id) {
            fetchSalaryDetails(id);
        }
    }, [id]);
  return (
    <div className='bg-white p-4 shadow-sm rounded-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>Salary Details</h1>
            <button onClick={()=> navigate('/dashboard/salary-list')} className='p-2 px-4 bg-blue-700 text-white font-semibold rounded-sm hover:bg-blue-800 hover:shadow-md'>List of Salaries</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="">
            <table className='w-full text-sm'>
                    <tbody>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold w-1/3'>Employee Name:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.employee?.fullname}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Salary Per Day:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.salaryPerDay}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Salary Per Hour:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.salaryPerHour}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Total Working Days:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.totalWorkingDays}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Total Payment:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.grossSalary}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Deduction:</td>
                            <td className='p-4 border border-slate-300'>₹ {
                                (salaryData?.deduction || 0) +
                                (salaryData?.advance || 0) +
                                (salaryData?.other || 0) +
                                (salaryData?.pf || 0) +
                                (salaryData?.professionalTax || 0)
                            }</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Bonus:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.bonus}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Total Payment After Deduction/Bonus:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.netSalary}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Salary Date:</td>
                            <td className='p-4 border border-slate-300'>{salaryData?.salaryDate
                                ? new Date(salaryData.salaryDate).toLocaleDateString("en-IN")
                                : "-"}
                            </td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Remark:</td>
                            <td className='p-4 border border-slate-300'>{salaryData.remark}</td>
                        </tr>
                        <tr>
                            <td className='p-4 border border-slate-300 font-semibold'>Added On:</td>
                            <td className='p-4 border border-slate-300'>
                                {salaryData?.createdAt
                                ? new Date(salaryData.createdAt).toLocaleDateString("en-IN")
                                : "-"}
                            </td>
                        </tr>
                    </tbody>               
            </table>
        </div>
    </div>
  )
}
