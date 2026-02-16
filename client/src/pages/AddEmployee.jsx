import React from 'react'

export const AddEmployee = () => {
  return (
    <div className='bg-white p-4'>
        <form action="">
            <h1 className='text-2xl font-semibold'>Add New Employee</h1>
            <hr className='text-slate-400 my-4'/>
            <div className="flex w-full justify-between gap-8 text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Role</label>
                    <select name="role" id="" className='border border-slate-400 rounded-sm p-1 px-2'>
                        <option value="">--Select User Role--</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Employee Code</label>
                    <input type="text" name="empcode" id="" className='border border-slate-400 rounded-sm p-1 px-2' placeholder='0001' readOnly/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Position</label>
                    <select name="position" id="" className='border border-slate-400 rounded-sm p-1 px-2'>
                        <option value="">--Select Position--</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input type="text" name='fullname' placeholder='Enter Full Name' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Reporting To</label>
                    <select type="text" name='reporting'  className='border border-slate-400 p-1 px-2 rounded-sm'>
                        <option value="">-- Select --</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Mobile Number</label>
                    <input type="text" name='mobile' placeholder='Enter Mobile Number' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="text" name='email' placeholder='Enter Email' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Gender</label>
                    <select type="text" name='gender' className='border border-slate-400 p-1 px-2 rounded-sm'>
                        <option value="">--Select Gender --</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Date of Birth</label>
                    <input type="date" name='dob'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Aadhar Number</label>
                    <input type="text" name='aadhar' placeholder='Aadhar Number' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">PAN Number</label>
                    <input type="text" name='pan' placeholder='PAN Number' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Joining Date</label>
                    <input type="date" name='joining'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Leaving Date</label>
                    <input type="date" name='leaving'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Salary Per Day</label>
                    <input type="text" name='pan'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Salary Per Hour</label>
                    <input type="text" name='pan'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">PF/UAN No.</label>
                    <input type="text" name='pf'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Biometric ID</label>
                    <input type="text" name='biometric'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Department</label>
                    <input type="text" name='dapartment'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Photo</label>
                    <input type="file" name='photo'  className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
            </div>
            <div className="flex justify-between gap-4  text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Bank Name</label>
                    <input type="text" name='bankname' placeholder='Enter Bank Name' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Bank Account Number</label>
                    <input type="text" name='bankaccountno' placeholder='Enter Bank Account Number' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">IF SC Code</label>
                    <input type="text" name='ifsc' placeholder='Enter IF SC Code' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
            </div>
            <div className="flex justify-between gap-4 text-sm ">
                <div className="grid gap-2 w-1/2">
                    <label className="font-semibold">Address</label>
                    <textarea type="text" name='address' placeholder='Enter Address' rows='2' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                </div>
                <div className="flex pb-4 gap-4">
                    <div className="grid">
                        <label className="font-semibold">State</label>
                        <input type="text" name='state' placeholder='Enter State Name' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                    </div>
                    <div className="grid">
                        <label className="font-semibold">Location</label>
                        <input type="text" name='location' placeholder='Enter Location' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                    </div>
                    <div className="grid">
                        <label className="font-semibold">Pin Code</label>
                        <input type="text" name='pincode' placeholder='Enter Bank Name' className='border border-slate-400 p-1 px-2 rounded-sm'/>
                    </div>
                </div>
            </div>
            <hr className='text-slate-400 my-4'/>
            <div className="">
                <button className="bg-blue-600 hover:bg-blue-800 p-1 rounded-sm text-white px-2 mx-2"><i className='fa fa-check-circle mr-1'></i>Submit</button>
                <button className='bg-gray-400 hover:bg-gray-500 p-1 px-2 rounded-sm '><i className='fa fa-times-circle mr-1'></i>Clear</button>
            </div>
        </form>
    </div>
  )
}
