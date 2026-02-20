import React, { useEffect, useState } from 'react'

export const CreateSO = () => {
    const initialData = {customer: '', soNumber: '', jobCardNumber: '', itemDesc: '', itemQty: '', majorMinorNumber: '', receivedDate: '', expectedDate: '', status: '', orderType: '', drawingRevisionNumber: '', poNumber: '', poDate: '', remark: ''};
    const [formData, setFormData] = useState(initialData);
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
    try {
      const res = await fetch("/api/users/customers", {
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setCustomers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
        const res = await fetch("/api/so/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(formData),
        
      });
      const data = await res.json();
      if(!res.ok){
        console.log("server error")
        return;
      }
      setFormData(initialData)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className=' md:w-full xl:w-1/2  bg-white p-4 border border-slate-400 shadow-md rounded-sm'>
        <h1 className='text-2xl font-semibold'>Create New SO</h1>
        <hr className='text-slate-400 my-4'/>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 text-sm placeholder:text-slate-400'>
            <select name="customer" value={formData.customer}
          onChange={handleChange} className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="">--Select Customer--</option>
                    {customers.map((cust) => (
                    <option key={cust._id} value={cust._id}>
                    {cust.name}
                    </option>
                ))}
            </select>
            <input type="text" name='soNumber' placeholder='Enter SO Number' value={formData.soNumber} onChange={handleChange} className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <div className="grid">
                <label className="font-semibold">JobCard Number</label>
                <input type="text" value={formData.jobCardNumber} onChange={handleChange} name="jobCardNumber"   className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <div className="grid">
                <label className="font-semibold">Item Description</label>
                <input type="text" name="itemDesc" value={formData.itemDesc} onChange={handleChange}  placeholder='Enter Item Description' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <div className="grid">
                <label className="font-semibold">Item Quantity</label>
                <input type="number" name="itemQty" value={formData.itemQty} onChange={handleChange}  placeholder='Enter Item Quantity' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            </div>
            <input type="text" name="majorMinorNumber" value={formData.majorMinorNumber} onChange={handleChange}  placeholder='Major/Minor Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="receivedDate" value={formData.receivedDate} onChange={handleChange}  placeholder='Select Recieved Date' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="expectedDate" value={formData.expectedDate} onChange={handleChange}  placeholder='Select Expected Date' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <select name="status" value={formData.status}
          onChange={handleChange} className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
                <option value="dipatch">Dispatch</option>
                <option value="hold">Hold</option>
            </select>
            <select name="orderType" value={formData.orderType}
          onChange={handleChange}  className='p-2 my-2 border border-slate-400 rounded-sm'>
                <option value="Under Quaotation">Under Quotation</option>
                <option value="Order Acceptance">Order Acceptance</option>
            </select>
            <input type="text" name="drawingRevisionNumber" value={formData.drawingRevisionNumber} onChange={handleChange} placeholder='Drawing Revision Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} placeholder='PO/LOI Number' className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <input type="date" name="poDate"  placeholder='Select PO Date' value={formData.poDate} onChange={handleChange} className='p-2 my-2 border border-slate-400 rounded-sm'/>
            <textarea name="remark" value={formData.remark} onChange={handleChange}  rows='2' placeholder='Remark' className='p-2 my-2 border border-slate-400 rounded-sm'></textarea>
            <hr className='text-slate-400 my-4'/>
            <button type='submit' className='bg-blue-600 p-2 rounded-sm text-white w-20 hover:bg-blue-700'>Submit</button>
        </form>
    </div>
  )
}
