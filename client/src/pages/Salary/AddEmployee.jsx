import React, { useState } from 'react'

export const AddEmployee = () => {
    const initialData = {
        role: "",
        empCode: "",
        department: "",
        position:"",
        fullname: "",
        reporting: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        aadharNumber: "",
        panNumber: "",
        joiningDate: "",
        leavingDate: "",
        salaryPerDay: "",
        salaryPerHour: "",
        pfUanNo: "",
        biometricId: "",
        bankName: "",
        bankAccountNo: "",
        ifscCode: "",
        address: "",
        state: "",
        location: "",
        pinCode: "",
    }
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false)
    const positionsByDept = {
        HR: ["HR Manager", "HR Executive", "Recruiter"],
        IT: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
        ACC: ["Accountant", "Senior Accountant"],
        SALES: ["Sales Executive", "Sales Manager"],
        WORKER: ['Worker']
    };
    const [positions, setPositions] = useState([]);
    const handleDepartmentChange = async (e) => {
        const dept = e.target.value;
        setPositions(positionsByDept[dept] || []);
        try {
            const res = await fetch(`/api/employee/generate-code?dept=${dept}`);
            const data = await res.json();

            setFormData((prev) => ({
                ...prev,
                empCode: data.code,
                department: dept,
                position: ""
            }));
        } catch (err) {
            console.error("Error generating emp code:", err);
        }
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await fetch('/api/employee/add-emp',{
                method: 'POST', 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            if(data.success === false){
                console.log(data.message)
                setLoading(false)
                return
            }
            setFormData(initialData)
            setLoading(false)
            console.log('Employee Added')
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
  return (
    <div className='bg-white p-4 shadow-md'>
        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-2xl font-semibold'>Add New Employee</h1>
            <hr className='text-slate-300 my-4'/>
            <div className="grid grid-cols-4 gap-6 text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Role</label>
                    <select name="role" id="" value={formData.role} className='border border-slate-300 rounded-sm p-2 px-2' onChange={handleChange}>
                        <option value="" disabled>--Select User Role--</option>
                        <option value="worker">Worker</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Department</label>
                    <select
                        name='department'
                        value={formData.department}
                        onChange={(e) => {
                        handleChange(e);
                        handleDepartmentChange(e);}}
                        className="border border-slate-300 rounded-sm p-2 px-2"
                    >
                        <option value="" disabled>--Select Department--</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="ACC">Accounts</option>
                        <option value="SALES">Sales</option>
                        <option value="WORKER">Worker</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Employee Code</label>
                    <input type="text" name="empCode" value={formData.empCode || ""} className='border border-slate-300 rounded-sm p-2 px-2' placeholder='0001' readOnly/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Position</label>
                    <select name="position" onChange={handleChange} value={formData.position} className='border border-slate-300 rounded-sm p-2 px-2' >
                        <option value="" disabled>--Select Position--</option>
                        {positions.map((pos, index) => (
                            <option key={index} value={pos}>
                            {pos}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input type="text" name='fullname' value={formData.fullname} placeholder='Enter Full Name' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Reporting To</label>
                    <select type="text" name='reporting' value={formData.reporting}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}>
                        <option value="">-- Select --</option>
                        <option value="Atharv Raut">Atharv Raut</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Mobile Number</label>
                    <input type="text" name='mobile' value={formData.mobile} placeholder='Enter Mobile Number' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="text" name='email' value={formData.email} placeholder='Enter Email' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Gender</label>
                    <select type="text" name='gender' value={formData.gender} className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}>
                        <option value="" disabled>--Select Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Date of Birth</label>
                    <input type="date" name='dob' value={formData.dob}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Aadhar Number</label>
                    <input type="text" name='aadharNumber' value={formData.aadharNumber} placeholder='Aadhar Number' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">PAN Number</label>
                    <input type="text" name='panNumber' value={formData.panNumber} placeholder='PAN Number' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Joining Date</label>
                    <input type="date" name='joiningDate' value={formData.joiningDate}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Leaving Date</label>
                    <input type="date" name='leavingDate' value={formData.leavingDate}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Salary Per Day</label>
                    <input type="number" name='salaryPerDay' value={formData.salaryPerDay}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Salary Per Hour</label>
                    <input type="number" name='salaryPerHour' value={formData.salaryPerHour}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">PF/UAN No.</label>
                    <input type="text" name='pfUanNo' value={formData.pfUanNo}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Biometric ID</label>
                    <input type="text" name='biometricId' value={formData.biometricId}  className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                {/* <div className="w-full grid gap-2">
                    <label className="font-semibold">Photo</label>
                    <input type="file" name='photo'  className='border border-slate-300 p-2 rounded-sm'/>
                </div> */}
            </div>
            <div className="flex justify-between gap-4  text-sm my-4">
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Bank Name</label>
                    <input type="text" name='bankName' value={formData.bankName} placeholder='Enter Bank Name' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">Bank Account Number</label>
                    <input type="text" name='bankAccountNo' value={formData.bankAccountNo} placeholder='Enter Bank Account Number' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="w-full grid gap-2">
                    <label className="font-semibold">IFSC Code</label>
                    <input type="text" name='ifscCode' value={formData.ifscCode} placeholder='Enter IF SC Code' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
            </div>
            <div className="flex justify-between gap-4 text-sm ">
                <div className="grid gap-2 w-1/2">
                    <label className="font-semibold">Address</label>
                    <textarea type="text" name='address' value={formData.address} placeholder='Enter Address' rows='2' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                </div>
                <div className="flex pb-4 gap-4">
                    <div className="grid">
                        <label className="font-semibold">State</label>
                        <input type="text" name='state' value={formData.state} placeholder='Enter State Name' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                    </div>
                    <div className="grid">
                        <label className="font-semibold">Location</label>
                        <input type="text" name='location' value={formData.location} placeholder='Enter Location' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                    </div>
                    <div className="grid">
                        <label className="font-semibold">Pin Code</label>
                        <input type="text" name='pinCode' value={formData.pinCode} placeholder='Enter Pin Code' className='border border-slate-300 p-2 rounded-sm' onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <hr className='text-slate-300 my-4'/>
            <div className="text-white flex justify-between w-40">
                <button type='submit' className="bg-blue-700 hover:bg-blue-800 p-2 rounded-sm hover:scale-105 transition-all duration-700"><i className='fa fa-check-circle mr-1'></i>{loading ? 'Saving..' : 'Submit'}</button>
                <button type='button' onClick={()=> setFormData(initialData)} className='bg-gray-700 hover:bg-gray-800 p-2 rounded-sm hover:scale-105 transition-all duration-700'><i className='fa fa-times-circle mr-1'></i>Clear</button>
            </div>
        </form>
    </div>
  )
}
