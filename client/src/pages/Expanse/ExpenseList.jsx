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
    
  useEffect(()=> {
    fetchEmployees();
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
      <div className='flex justify-between'>
        <h4 className='mb-4 text-2xl font-semibold'>List of Expenses</h4>
        <div className="">
            <select type="text" name="" className="border border-slate-300 rounded-sm p-2 bg-white">
              <option value="">---Select Employee---</option>
              {employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                {emp.fullname}
                </option>
              ))}
            </select>
        </div>
      </div>
      <hr className='text-slate-300 my-4'/>
    <div className="m-2 text-sm">      
          {loading ? (
            <p>Loading..</p>
          ) : <div className="text-center">
              <table className='p-2 mt-4 w-full'>
            <thead className='border border-slate-300'>
              <tr className=''>
                <th className='p-2 border border-slate-300'>Full Name</th>
                <th className='p-2 border border-slate-300'>Expense Date</th>
                <th className='p-2 border border-slate-300'>Expense Amount</th>
                <th className='p-2 border border-slate-300'>Expense Type</th>
                <th className='p-2 border border-slate-300'>Expense Note</th>
                <th className='p-2 border border-slate-300'>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td><p>No Expenses Found</p></td>
                </tr>
                
              ) : expenses.map((exp)=> 
              <tr key={exp._id} className=''>
                <td className='p-2 border border-slate-300'>{exp.employee?.fullname}</td>
                <td className='p-2 border border-slate-300'>{new Date(exp.expenseDate).toLocaleDateString()}</td>
                <td className='p-2 border border-slate-300'>{exp.amount}</td>
                <td className='p-2 border border-slate-300'>{exp.expenseType}</td>
                <td className='p-2 border border-slate-300'>{exp.note}</td>
                {/* <td className='p-2 border border-slate-400'><a href="" className='bg-yellow-500 px-2 py-1 rounded-sm '><i className="fa fa-plus px-1" aria-hidden="true"></i>Attach file</a></td> */}
                <td className='p-2 border border-slate-300'>
                  <button onClick={() => deleteExpense(exp._id)} className='bg-rose-600 p-2 rounded-sm text-white hover:bg-rose-700'><i className="fa fa-trash px-2"></i>Delete</button>
                </td>
              </tr>)
              }             
            </tbody>
          </table>
          </div>
          }       
    </div>
        <div className="bg-white shadow-sm">
            <table className='border border-slate-300 mt-4 w-full'>
              <thead className='w-full'>
                <tr><th className='p-2 text-blue-600'>Total Expenses</th></tr>
              </thead>
              <tbody className='w-full text-center border border-slate-300'>
                <tr><td className='p-2 font-bold'>Rs. {totalExpense}</td></tr>
              </tbody>
            </table>
          </div>  
  </div>
  )
}
