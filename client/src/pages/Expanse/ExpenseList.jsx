import React, { useEffect, useState } from 'react'

export const ExpenseList = () => {
  const [expenses, setExpenses] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchExpenses = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/expense/get-expenses');
      const data = await res.json();
      if(data.success === true){
          setExpenses(data.data)
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
      
  useEffect(()=> {
    fetchExpenses();
  },[])

  const deleteExpense = async (id) => {
        try {
            const res = await fetch(`/api/expense/delete/${id}`, {
            method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
            alert("Expense deleted successfully");

            setExpenses(expenses.filter((expense) => expense._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

  const totalExpense = expenses.reduce(
    (total, exp) => total + exp.amount, 0
  );
  return (
    <div  className='p-4 bg-white shadow-md rounded-sm'>
    <h4 className='mb-4 text-2xl font-semibold'><i className='fa fa-file-text-o pr-2 text-blue-700'></i>List of Expenses</h4>
    <hr className='text-slate-300 my-4'/>
    <div className="m-2 text-sm border border-slate-300 p-4 rounded-sm"> 
      <div className="flex justify-between">
        <h2 className='text-md font-semibold uppercase'><i className='fa fa-table pr-2 text-blue-700'></i>Expense Records</h2>
        <p className='p-1 px-3 text-blue-700 bg-blue-100 font-semibold rounded-full'>{expenses?.length || 0} Records</p> 
      </div>
        <hr className='text-slate-300 my-4'/>
          {loading ? (
            <p>Loading..</p>
          ) : <div className="text-center">
            <table className='p-2 mt-4 w-full'>
              <thead className='border border-slate-300 '>
                <tr className=''>
                  <th className='p-2 border border-slate-300 w-15'>Sr. No.</th>
                  <th className='p-2 border border-slate-300'>Date</th>
                  <th className='p-2 border border-slate-300'>Employee</th>
                  <th className='p-2 border border-slate-300'>Type</th>
                  <th className='p-2 border border-slate-300'>Note</th>
                  <th className='p-2 border border-slate-300'>Amount</th>
                  <th className='p-2 border border-slate-300'>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.length === 0 ? (
                  <tr>
                    <td className='p-2 border border-slate-300' colSpan="6">No Expenses Found</td>
                  </tr>
                  
                ) : expenses.map((exp, index)=> 
                <tr key={exp._id} className='text-start'>
                  <td className='p-2 border border-slate-300 text-center'>{index + 1}</td>
                  <td className='p-2 border border-slate-300'>{new Date(exp.expenseDate).toISOString().split("T")[0]}</td>
                  <td className='p-2 border border-slate-300'>{exp.employee?.fullname}</td>
                  <td className='p-2 border border-slate-300'><span className="border border-gray-300 p-1 px-3 rounded-sm bg-slate-200 font-semibold">{exp.expenseType}</span></td>
                  <td className='p-2 border border-slate-300'>{exp.note}</td>
                  <td className='p-2 border border-slate-300 text-blue-700 font-semibold'>Rs. {exp.amount}</td>
                  <td className='p-2 border border-slate-300 text-center'>
                    <button onClick={() => deleteExpense(exp._id)} className='text-rose-600 p-2 border border-rose-600 rounded-sm hover:bg-rose-700 hover:text-white hover:scale-110 transition-all duration-300'><i className="fa fa-trash px-2"></i>Delete</button>
                  </td>
                </tr>)
                }             
              </tbody>
            </table>
          </div>
          }       
    </div>
      <div className="bg-blue-600 text-white flex justify-between items-center p-4 font-semibold rounded-md">
        <div className="flex">
          <i className='fa fa-calculator pr-2 mt-1'></i>
          <h1>Total Expenses</h1>
        </div>
        <div className="text-xl">
          Rs. {totalExpense}.00/-
        </div>
      </div>  
  </div>
  )
}
