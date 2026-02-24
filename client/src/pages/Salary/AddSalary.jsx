import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const AddSalary = () => {
    const initialData = {role: '', employee: '', month: '', year: '', salaryPerDay: '', salaryPerHour: '', totalWorkingDays: '', presentDays: '', absentDays: '', extraHours: '', weeklyOff: '', bonus: '',deduction: '', advance: '',other: '', pf: '',professionalTax: '', salaryDate: '', remark: '',}
    
    const [formData, setFormData] = useState(initialData);

    const [employees, setEmployees] = useState([])

    const absenceDays = Number(formData.totalWorkingDays) - Number(formData.presentDays);

    const grossSalary = (Number(formData.salaryPerDay) || 0) * (Number(formData.presentDays) || 0) + (Number(formData.salaryPerHour) || 0) * (Number(formData.extraHours) || 0) + (Number(formData.bonus) || 0);

    const totalDeductions = (Number(formData.deduction) || 0) + (Number(formData.advance) || 0) + (Number(formData.other) || 0) + (Number(formData.pf) || 0) + (Number(formData.professionalTax) || 0);

    const netSalary = grossSalary - totalDeductions;

    useEffect(()=>{
        const fetchEmployees = async () => {
            const res = await fetch("/api/employee/emp-list");
            if (!res.ok) {
                throw new Error("Failed to fetch employees");
            }
            const data = await res.json();
            setEmployees(data.data);
        };

    fetchEmployees();
    },[]);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/salary/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if(data.success){
                setFormData(initialData)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-200 bg-white border border-slate-400 p-4 shadow-lg rounded-sm'>
        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-2xl font-semibold'>Add Salary</h1>
            <hr className='text-slate-400 my-4'/>
            <div className="w-full">
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Select Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'>
                        <option value="" disabled>--Select Role--</option>
                        <option value="Staff">Staff</option>
                        <option value="Worker">Worker</option>
                    </select>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Month-Year</label>
                    <div className="flex w-full gap-4">
                        <select name="month" value={formData.month} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'>
                            <option value="" disabled>--Select Month--</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select name="year" value={formData.year} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'>
                            <option value="" disabled>--Select Year--</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Staff / Worker</label>
                    <select name="employee" value={formData.employee} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'>
                        <option value="" disabled>--Select Staff / Worker--</option>
                        {employees.map((emp) => (
                            <option key={emp._id} value={emp._id}>
                            {emp.fullname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Per Day (in Rs.)</label>
                    <input type="number" name="salaryPerDay" value={formData.salaryPerDay} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Per Hour (in Rs.)</label>
                    <input type="number" name="salaryPerHour" value={formData.salaryPerHour} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Monthly (Days)</label>
                    <input type="number" name="totalWorkingDays" value={formData.totalWorkingDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Present (in Days)</label>
                    <input type="number" name="presentDays" value={formData.presentDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Absent (in Days)</label>
                    <input type="number" value={absenceDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Extra Hours (in Hours)</label>
                    <input type="number" name="extraHours" value={formData.extraHours} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Total Payment</label>
                    <input type="number" value={grossSalary} className='w-full border border-slate-400 rounded-sm p-1' readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Deduction</label>
                    <input type="number" name="deduction" value={formData.deduction} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Advance</label>
                    <input type="number" name="advance" value={formData.advance} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Other</label>
                    <input type="number" name="other" value={formData.other} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">PF</label>
                    <input type="number" name="pf" value={formData.pf} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Professional Tax</label>
                    <input type="number" name="professionalTax" value={formData.professionalTax} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Payment After Deduction / Advance</label>
                    <input type="number" value={netSalary} className='w-full border border-slate-400 rounded-sm p-1' readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Weekly Off</label>
                    <input type="number" name="weeklyOff" value={formData.weeklyOff} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Bonus</label>
                    <input type="number" name="bonus" value={formData.bonus} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Salary Date</label>
                    <input type="date" name="salaryDate" value={formData.salaryDate} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm">Remark</label>
                    <textarea type="text" name="remark" value={formData.remark} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1' placeholder='Enter Remark'/>
                </div>
            </div>

            <hr className='text-slate-400 my-4'/>
            <div className="">
                <button className="bg-blue-600 hover:bg-blue-800 p-1 rounded-sm text-white px-2 mx-2"><i className='fa fa-check-circle mr-1'></i>Submit</button>
                <button type='reset' className='bg-gray-400 hover:bg-gray-500 p-1 px-2 rounded-sm text-white'><i className='fa fa-times-circle mr-1'></i>Clear</button>
            </div>
        </form>
    </div>
  )
}
