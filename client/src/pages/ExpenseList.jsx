import React from 'react'

export const ExpenseList = () => {
  return (
    <div className='p-2 bg-white h-screen border border-slate-400 shadow-md rounded-sm'>
      <h4 className='mb-4 text-2xl font-semibold'>List of Expenses</h4>
      <hr className='text-slate-600'/>
      <form action="">
        <div className="m-2">
          <div className="flex justify-between bg-gray-200 px-5 py-2 ">
            <div className="border border-slate-400 rounded-sm p-3 py-1 bg-white">
              <input type="text" name="" id="" placeholder='From Date'/>
            </div>
            <div className="border border-slate-400 rounded-sm p-3 py-1 bg-white">
              <input type="text" name="" id="" placeholder='To Date'/>
            </div>
            <div className="border border-slate-400 rounded-sm p-3 py-1 bg-white">
              <select type="text" name="" id="" >
                <option value="">---Select Employee---</option>
              </select>
            </div>
            <div className="">
              <button type='submit' name='submit' className='bg-blue-600 text-white p-2 rounded-sm'><i className='fa fa-fw fa-search'></i>Search</button>
            </div>
          </div>
          <hr className='text-slate-600 mt-2'/>
          <table className='p-2 mt-4 w-full'>
            <thead className='border border-slate-400'>
              <tr className='text-center'>
                <th className='p-2 border border-slate-400'>Expense Date</th>
                <th className='p-2 border border-slate-400'>Expense Amount</th>
                <th className='p-2 border border-slate-400'>Expense Type</th>
                <th className='p-2 border border-slate-400'>Expense Note</th>
                <th className='p-2 border border-slate-400'>Full Name</th>
                <th className='p-2 border border-slate-400'>File</th>
                <th className='p-2 border border-slate-400'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center'>
                <td className='p-2 border border-slate-400'>21-02-2026</td>
                <td className='p-2 border border-slate-400'>Rs. 1000</td>
                <td className='p-2 border border-slate-400'>Transport</td>
                <td className='p-2 border border-slate-400'></td>
                <td className='p-2 border border-slate-400'>Nilesh Mali</td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-yellow-500 px-2 py-1 rounded-sm '><i className="fa fa-plus px-1" aria-hidden="true"></i>Attach file</a></td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-rose-600 px-2 py-1 rounded-sm text-white'><i class="fa fa-trash px-2" aria-hidden="true"></i>Delete</a></td>
              </tr>
              <tr className='text-center'>
                <td className='p-2 border border-slate-400'>04-02-2026</td>
                <td className='p-2 border border-slate-400'>Rs. 12000</td>
                <td className='p-2 border border-slate-400'>Rent</td>
                <td className='p-2 border border-slate-400'></td>
                <td className='p-2 border border-slate-400'>Tanaji Tangle</td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-yellow-500 px-2 py-1 rounded-sm '><i className="fa fa-plus px-1" aria-hidden="true"></i>Attach file</a></td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-rose-600 px-2 py-1 rounded-sm text-white'><i class="fa fa-trash px-2" aria-hidden="true"></i>Delete</a></td>
              </tr>
              <tr className='text-center'>
                <td className='p-2 border border-slate-400'>02-01-2026</td>
                <td className='p-2 border border-slate-400'>Rs. 100000</td>
                <td className='p-2 border border-slate-400'>Transport</td>
                <td className='p-2 border border-slate-400'></td>
                <td className='p-2 border border-slate-400'>Gopal Patil</td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-yellow-500 px-2 py-1 rounded-sm '><i className="fa fa-plus px-1" aria-hidden="true"></i>Attach file</a></td>
                <td className='p-2 border border-slate-400'><a href="" className='bg-rose-600 px-2 py-1 rounded-sm text-white'><i class="fa fa-trash px-2" aria-hidden="true"></i>Delete</a></td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <table className='border border-slate-400 mt-4 w-full'>
              <thead className='w-full'>
                <tr><th className='p-2 text-blue-600'>Total Expenses</th></tr>
              </thead><hr className='text-slate-400'/>
              <tbody className='w-full text-center'>
                <tr><td className='p-2 font-bold'>Rs. 113000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  )
}
