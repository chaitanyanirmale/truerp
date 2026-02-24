import React, { useState } from 'react'

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/users/user-list');
            const data =  await res.json();
            if(data.success === true){
                setUsers(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useState(()=>{
        fetchUsers();
    },[])

  return (
    <div className='bg-white h-screen border border-slate-300 shadow-md px-4'>
        <div className="w-full p-2 mb-8">
            <h4 className="text-xl font-semibold mb-2">List of Users</h4>	
                <select name="role"  id="select" className="border border-gray-400 p-1 rounded-md w-40 text-sm">
                        <option value="">All Users</option>
                        <option value="admin" >Admin</option>
                        <option value="contractor" >Contractor</option>
                        <option value="customer" >Customer</option>
                        <option value="driver" >Driver</option>
                        <option value="staff" >Staff</option>
                        <option value="supplier" >Supplier</option>
                        <option value="transporter" >Transporter</option>
                        <option value="worker" >Worker</option>
                </select>
            
        </div>
        {loading ? (
            <p>Loading..</p>
        ) : <div className="text-center">
            <table className='w-full'>
                <thead className=" text-gray-700 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 border">Fullname</th>
                        <th className="px-6 py-3 border">Mobile</th>
                        <th className="px-6 py-3 border">Email</th>
                        <th className="px-6 py-3 border">Role</th>
                        <th className="px-6 py-3 border">GST No</th>
                        <th className="px-6 py-3 border">PAN No</th>
                        <th className="px-6 py-3 border">Location</th>
                        <th className="px-6 py-3 border">Status</th>
                        <th className="px-6 py-3 border text-center">Action</th>
                    </tr>
                </thead>
                <tbody className='bg-white text-sm'>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan='7' className='text-center p-4'>No Users Found</td>
                        </tr>
                    ): users.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-50 transition">
                            <td className="px-2 border text-gray-900">
                            {user.name}
                            </td>
                            <td className="px-2 border">{user.mobile}</td>
                            <td className="px-2 border">{user.email}</td>
                            <td className="px-2 border">{user.role}</td>
                            <td className="px-2 border">{user.gstNumber}</td>
                            <td className="px-2 border">{user.panNumber}</td>
                            <td className="px-2 border">{user.location}</td>

                            <td className="px-6 py-4 border">
                            <span className="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded">
                                Active
                            </span>
                            </td>
                            <td className="px-6 py-4 border text-center">
                            <button className="px-3 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                                Actions
                            </button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    }        
    </div>
    
  )
}
