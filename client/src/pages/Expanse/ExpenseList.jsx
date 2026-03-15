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
    <div>
    <div className='p-2 bg-white shadow-md rounded-sm'>
      <h4 className='mb-4 text-2xl font-semibold'>List of Expenses</h4>
      <hr className='text-slate-600'/>
      <form action="">
        <div className="m-2 text-sm">
          <div className="flex justify-between bg-gray-200 px-5 py-2 ">
              <input type="text" name="" placeholder='From Date' className="border border-slate-400 rounded-sm p-3 py-1 bg-white"/>
              <input type="text" name="" placeholder='To Date' className="border border-slate-400 rounded-sm p-3 py-1 bg-white"/>
               <select type="text" name="" className="border border-slate-400 rounded-sm p-3 py-1 bg-white">
                <option value="">---Select Employee---</option>
               {employees.map((emp) => (
                  <option key={emp._id} value={emp._id}>
                  {emp.fullname}
                  </option>
                ))}
              </select>
            <div className="">
              <button type='submit' name='submit' className='bg-blue-600 text-white p-2 rounded-sm'><i className='fa fa-fw fa-search'></i>Search</button>
            </div>
          </div>
          <hr className='text-slate-600 mt-2'/>
          {loading ? (
            <p>Loading..</p>
          ) : <div className="text-center">
              <table className='p-2 mt-4 w-full'>
            <thead className='border border-slate-400'>
              <tr className=''>
                <th className='p-2 border border-slate-400'>Expense Date</th>
                <th className='p-2 border border-slate-400'>Expense Amount</th>
                <th className='p-2 border border-slate-400'>Expense Type</th>
                <th className='p-2 border border-slate-400'>Expense Note</th>
                <th className='p-2 border border-slate-400'>Full Name</th>
                <th className='p-2 border border-slate-400'>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td><p>No Expenses Found</p></td>
                </tr>
                
              ) : expenses.map((exp)=> 
              <tr key={exp._id} className=''>
                <td className='p-2 border border-slate-400'>{new Date(exp.expenseDate).toLocaleDateString()}</td>
                <td className='p-2 border border-slate-400'>{exp.amount}</td>
                <td className='p-2 border border-slate-400'>{exp.expenseType}</td>
                <td className='p-2 border border-slate-400'>{exp.note}</td>
                <td className='p-2 border border-slate-400'>{exp.employee?.fullname}</td>
                {/* <td className='p-2 border border-slate-400'><a href="" className='bg-yellow-500 px-2 py-1 rounded-sm '><i className="fa fa-plus px-1" aria-hidden="true"></i>Attach file</a></td> */}
                <td className='p-2 border border-slate-400'>
                  <button onClick={() => deleteExpense(exp._id)} className='bg-rose-600 p-2 rounded-sm text-white hover:bg-rose-700'><i className="fa fa-trash px-2"></i>Delete</button>
                </td>
              </tr>)
              }             
            </tbody>
          </table>
          </div>
          }
                  
        </div>
      </form>
    </div>
        <div className="bg-white">
            <table className='border border-slate-400 mt-4 w-full'>
              <thead className='w-full'>
                <tr><th className='p-2 text-blue-600'>Total Expenses</th></tr>
              </thead>
              <tbody className='w-full text-center border border-slate-400'>
                <tr><td className='p-2 font-bold'>Rs. {totalExpense}</td></tr>
              </tbody>
            </table>
          </div>  
  </div>
  )
}
