import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


export const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedRole, setSelectedRole] = useState("");
    const navigate = useNavigate();
    const filteredUsers = selectedRole
        ? users.filter((user) => user.role === selectedRole)
        : users;
    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`/api/users/update-status/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: newStatus
            })
            });
            const data = await res.json();
            if (data.success) {
                setUsers((prev) =>
                    prev.map((user) =>
                    user._id === id
                        ? { ...user, status: newStatus }
                        : user
                    )
                );
                setOpenDropdown(null)
            }
        } catch (error) {
            console.log(error);
        }
    };
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

    useEffect(()=>{
        fetchUsers();
    },[])

    const deleteUser = async (id) => {
        try {
            const res = await fetch(`/api/users/user/${id}`, {
            method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
            alert("User deleted successfully");

            setUsers(users.filter((user) => user._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className='bg-white max-h-screen border border-slate-300 shadow-md px-4'>
        <div className="w-full p-2 mb-8">
            <h4 className="text-2xl font-semibold mb-2">List of Users</h4>	
                <select  value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="border border-gray-400 p-2 rounded-xs w-1/4 text-sm">
                        <option value="">All Users</option>
                        <option value="admin">Admin</option>
                        <option value="contractor">Contractor</option>
                        <option value="customer">Customer</option>
                        <option value="driver">Driver</option>
                        <option value="staff">Staff</option>
                        <option value="supplier">Supplier</option>
                        <option value="sub-vendors">Sub Vendors</option>
                        <option value="store-user">Store User</option>
                        <option value="quality-analysis-team">Quality Analysis Team</option>
                        <option value="purchase-order-team">Purchase Order Team</option>
                        <option value="production-team">Production Team</option>
                        <option value="transporter">Transporter</option>
                        <option value="worker">Worker</option>
                </select>
            
        </div>
        {loading ? (
            <p>Loading..</p>
        ) : <div className="text-start h-150 pb-4 overflow-y-auto">
            <table className='w-full'>
                <thead className="font-semibold text-sm">
                    <tr>
                        <td className="p-2 border border-slate-300">Fullname</td>
                        <td className="p-2 border border-slate-300">Mobile</td>
                        <td className="p-2 border border-slate-300">Email</td>
                        <td className="p-2 border border-slate-300">Role</td>
                        <td className="p-2 border border-slate-300">GST No</td>
                        <td className="p-2 border border-slate-300">PAN No</td>
                        <td className="p-2 border border-slate-300">Location</td>
                        <td className="p-2 border border-slate-300">Status</td>
                        <td className="p-2 border border-slate-300 text-center">Action</td>
                    </tr>
                </thead>
                <tbody className='bg-white text-sm'>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan='7' className='text-center p-4'>No Users Found</td>
                        </tr>
                    ): filteredUsers.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-50 transition">
                            <td className="px-2 border border-slate-300 text-gray-900">{user.name}</td>
                            <td className="px-2 border border-slate-300">{user.mobile}</td> 
                            <td className="px-2 border border-slate-300">{user.email}</td>
                            <td className="px-2 border border-slate-300">{user.role}</td>
                            <td className="px-2 border border-slate-300">{user.gstNumber}</td>
                            <td className="px-2 border border-slate-300">{user.panNumber}</td>
                            <td className="px-2 border border-slate-300">{user.location}</td>

                            <td className="px-6 py-4 border border-slate-300">
                                <span className={`px-3 py-2 text-xs font-semibold text-white rounded ${ user.status === "active" ? "bg-green-600" : "bg-red-600" }`}>
                                    {user.status === "active" ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="px-6 py-4 border border-slate-300 text-center">
                            <button className="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xs hover:bg-blue-700 transition" onClick={()=> toggleDropdown(user._id)}>Actions<i className='fa fa-angle-down pl-2'></i>
                            </button>
                            {openDropdown === user._id && (
                                <div className="absolute right-11 w-32 bg-white shadow-sm border border-slate-300 z-10">
                                <button onClick={() => navigate(`/dashboard/user/${user._id}`)} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100">View User</button>
                                <button onClick={() => updateStatus(user._id, user.status === "active" ? "inactive" : "active")} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100">
                                    {user.status === "active" ? "Deactivate" : "Activate"}
                                </button>
                                <button onClick={() => deleteUser(user._id)} className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</button>
                                </div>
                                )}
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
