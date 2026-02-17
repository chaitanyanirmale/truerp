import React, { useEffect, useState } from 'react'

export const AddExpense = () => {
    const [employees, setEmployees] = useState([])
    const [formData, setFormData] = useState({
        employee:'', amount:'', expenseType:'', expenseDate:'', note:''
    })

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
            const res = await fetch('/api/employee/emp-list');
            const data = await res.json();
            if (data.success) {
                setEmployees(data.data);
            }
            } catch (error) {
            console.log(error);
            }
        };

        fetchEmployees();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/expenses/add-expense', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(data.success === false){
                console.log("server error")
                return;
            }
            console.log("Expense Added Successfully")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='m-2 xl:w-200 border border-slate-400 p-4 shadow-lg rounded-sm bg-white'>
        <h3 className='text-xl font-semibold mb-2'>Add Expense</h3><hr className='text-slate-400'/><br />
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-center ">
            <label className="col-span-3 font-medium mr-2">Employee</label>
            <select name='employee' value={formData.employee} onChange={handleChange} className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full">
                <option value=''>-- Select Employee --</option>
                {employees.map(emp => (
                    <option key={emp._id} value={emp._id}>
                        {emp.fullname}
                    </option>
                ))}					                            
            </select>
            
            <label className="col-span-3 font-medium mr-2">Expense Amount (in Rs.)</label>
            <input type="number" value={formData.amount} name='amount' onChange={handleChange} placeholder="Enter Expense Amount (only digits)" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/>

            <label className="col-span-3 font-medium">Expense Type</label>
            <select name='expenseType' value={formData.expenseType} onChange={handleChange} className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full">
                <option value=''>-- Select Expense Type --</option>
                <option value="Petrol" >Petrol</option>
                <option value="Transport" >Transport</option>
                <option value="Rent" >Rent</option>
                <option value="Mobile Recharge" >Mobile Recharge</option>										
                <option value="Others" >Others</option>
            </select>

            <label className="col-span-3 font-medium mr-2">Expense Date</label>
            <input type="date" name='expenseDate' value={formData.expenseDate} onChange={handleChange} className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/>

            <label className="col-span-3 font-medium mr-2">Note</label>
            <textarea rows="2" name='note' value={formData.note} onChange={handleChange} placeholder="Enter Note" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"></textarea>

            {/* <label className="col-span-3 font-medium mr-2">Upload Screenshot/Receipt</label>
            <input type="file" name='photo' className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/> */}

            <div className="col-span-12 flex gap-4 pt-4 border-t mt-4">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                ><i className="fa fa-fw fa-lg fa-check-circle"></i>
                    Submit
                </button>

                <button
                    type="reset"
                    className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700" onClick={()=> 
                        setFormData({
                            employee:'',
                            amount:'',
                            expenseType:'',
                            expenseDate:'',
                            note:''
                        })}
                ><i className="fa fa-fw fa-lg fa-times-circle"></i>
                    Clear
                </button>
            </div>
        </form>
    </div>
  )
}
