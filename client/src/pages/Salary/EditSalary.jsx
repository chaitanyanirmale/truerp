import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditSalary = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        role: "",
        employee: "",
        month: "",
        year: "",
        salaryPerDay: "",
        salaryPerHour: "",
        totalWorkingDays: "",
        presentDays: "",
        extraHours: "",
        deduction: "",
        advance: "",
        other: "",
        pf: "",
        professionalTax: "",
        weeklyOff: "",
        bonus: "",
        salaryDate: "",
        remark: "",
    });
    const fetchSalaryById = async () => {
        try {
        setLoading(true);

        const res = await fetch(`/api/salary/emp/${id}`);
        const result = await res.json();

        if (result.success) {
            const data = result.data;

            setFormData({
                role: data.role || "",
                employee: data.employee?._id || "",
                month: data.month || "",
                year: data.year || "",
                salaryPerDay: data.salaryPerDay || "",
                salaryPerHour: data.salaryPerHour || "",
                totalWorkingDays: data.totalWorkingDays || "",
                presentDays: data.presentDays || "",
                extraHours: data.extraHours || "",
                deduction: data.deduction || "",
                advance: data.advance || "",
                other: data.other || "",
                pf: data.pf || "",
                professionalTax: data.professionalTax || "",
                weeklyOff: data.weeklyOff || "",
                bonus: data.bonus || "",
                salaryDate: data.salaryDate
                    ? data.salaryDate.split("T")[0]
                    : "",
                remark: data.remark || "",
                });
            }
        } catch (error) {
        console.error("Error fetching salary:", error);
        } finally {
        setLoading(false);
        }
    };
    const fetchEmployees = async () => {
            const res = await fetch("/api/employee/emp-list");
            if (!res.ok) {
                throw new Error("Failed to fetch employees");
            }
            const data = await res.json();
            setEmployees(data.data);
    };
    useEffect(()=> {
        fetchEmployees();
    },[])
    useEffect(() => {
        if (id) {
            fetchSalaryById();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const absenceDays = useMemo(() => {
        return (
        Number(formData.totalWorkingDays || 0) -
        Number(formData.presentDays || 0)
        );
    }, [formData.totalWorkingDays, formData.presentDays]);

    const grossSalary = useMemo(() => {
        return (
        Number(formData.salaryPerDay || 0) *
            Number(formData.presentDays || 0) +
        Number(formData.salaryPerHour || 0) *
            Number(formData.extraHours || 0) +
        Number(formData.bonus || 0)
        );
    }, [formData]);

    const netSalary = useMemo(() => {
        return (
        grossSalary -
        Number(formData.deduction || 0) -
        Number(formData.advance || 0) -
        Number(formData.other || 0) -
        Number(formData.pf || 0) -
        Number(formData.professionalTax || 0)
        );
    }, [formData, grossSalary]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await fetch(`/api/salary/update/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                absentDays: absenceDays,
                grossSalary,
                netSalary,
            }),
        });

        const result = await res.json();

        if (result.success) {
            alert("Salary updated successfully");
            navigate(`/dashboard/view-salary/${id}`);
        } else {
            alert(result.message);
        }
        } catch (error) {
        console.error("Update error:", error);
        }
    };
  return (
    <div className='w-200 bg-white border border-slate-400 p-4 shadow-lg rounded-sm'>
        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-2xl font-semibold'>Edit Salary</h1>
            <hr className='text-slate-400 my-4'/>
            <div className="w-full">
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Select Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'>
                        <option value="" disabled>--Select Role--</option>
                        <option value="Staff">Staff</option>
                        <option value="Worker">Worker</option>
                    </select>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Salary Month-Year</label>
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
                    <label className="w-1/2 text-sm font-semibold">Staff / Worker</label>
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
                    <label className="w-1/2 text-sm font-semibold">Salary Per Day (in Rs.)</label>
                    <input type="number" name="salaryPerDay" value={formData.salaryPerDay} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Salary Per Hour (in Rs.)</label>
                    <input type="number" name="salaryPerHour" value={formData.salaryPerHour} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Monthly (Days)</label>
                    <input type="number" name="totalWorkingDays" value={formData.totalWorkingDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Present (in Days)</label>
                    <input type="number" name="presentDays" value={formData.presentDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Absent (in Days)</label>
                    <input type="number" value={absenceDays} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Extra Hours (in Hours)</label>
                    <input type="number" name="extraHours" value={formData.extraHours} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Total Payment</label>
                    <input type="number" value={grossSalary} className='w-full border border-slate-400 rounded-sm p-1' readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Deduction</label>
                    <input type="number" name="deduction" value={formData.deduction} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Advance</label>
                    <input type="number" name="advance" value={formData.advance} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Other</label>
                    <input type="number" name="other" value={formData.other} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">PF</label>
                    <input type="number" name="pf" value={formData.pf} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Professional Tax</label>
                    <input type="number" name="professionalTax" value={formData.professionalTax} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Payment After Deduction / Advance</label>
                    <input type="number" value={netSalary} className='w-full border border-slate-400 rounded-sm p-1' readOnly/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Weekly Off</label>
                    <input type="number" name="weeklyOff" value={formData.weeklyOff} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Bonus</label>
                    <input type="number" name="bonus" value={formData.bonus} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Salary Date</label>
                    <input type="date" name="salaryDate" value={formData.salaryDate} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1'/>
                </div>
                <div className="flex justify-between my-4">
                    <label className="w-1/2 text-sm font-semibold">Remark</label>
                    <textarea type="text" name="remark" value={formData.remark} onChange={handleChange} className='w-full border border-slate-400 rounded-sm p-1' placeholder='Enter Remark'/>
                </div>
            </div>

            <hr className='text-slate-400 my-4'/>
            <div className="">
                <button className="bg-blue-700 hover:bg-blue-800 p-2 rounded-xs text-white px-4 mx-2">Update</button>
            </div>
        </form>
    </div>
  )
}
