import React, { useEffect, useState } from 'react'

export const CreatePO = () => {
  const initialData = {salesOrderId: '', supplier: '', poNo:"", poDate:"" }
  const [formData, setFormData] = useState(initialData);
  const [sos, setSO] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchPoNo = async () => {
        const res = await fetch("/api/po/previewPoNumber");
        const data = await res.json();
        
        if(data.success){
            setFormData(formData => ({
                ...formData,
                poNo : data.poNumber
            }))
        }
  }
  const setTodayDate = () => {
    const today = new Date().toISOString().split("T")[0];
          
    setFormData(formData => ({
        ...formData,
        poDate:today
    }))
  }
  const fetchSO = async () => {
      try {
          const res = await fetch('/api/so/so-list');
          const data = await res.json();
          if(data.success === true){
            setSO(data.data)
          }
      } catch (error) {
        console.log(error)
      }
  }
  const fetchSuppliers = async () => {
    try {
        const res = await fetch('/api/users/suppliers');
        const data = await res.json();
        if(data.success === true){
            setSuppliers(data.data)
        }
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    fetchPoNo();
    setTodayDate();
    fetchSO();
    fetchSuppliers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
        const res = await fetch("/api/po/createPo", {
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
      console.log("Po Created Successfully")
      setFormData(initialData)
      fetchPoNo();
      setTodayDate();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='bg-white rounded-sm shadow p-4 w-1/2'>
      <h1 className='text-2xl font-semibold'>Create PO</h1>
      <hr className='text-slate-300 my-4'/>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2 mb-6">
          <label className="text-sm font-semibold">Select Sales Order</label>
          <select
            name="salesOrderId"
            value={formData.salesOrderId}
            onChange={handleChange}
            className="border border-slate-300 p-2 rounded-sm w-full"
          >
            <option value="">-- Select SO --</option>
            {sos.map((so) => (
              <option key={so._id} value={so._id}>
                {so.soNumber}
              </option>
            ))}
          </select>
      </div>
      <div className="grid gap-2 mb-6">
        <label className="text-sm font-semibold">Select Supplier</label>
        <select name="supplier" onChange={handleChange} className="border border-slate-300 p-2 rounded-sm w-full">
          <option value="">-- Select Supplier --</option>
          {suppliers.map((supplier)=> (
            <option key={supplier._id} value={supplier._id}>{supplier.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold">PO No.</label>
          <input type="text" name="poNo" value={formData.poNo} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold">PO Date</label>
          <input type="date" name="poDate" onChange={handleChange} value={formData.poDate} className="border border-slate-300 p-2 rounded-sm" />
        </div>
      </div>
      <div className="grid gap-2 mt-2">
        <label className="text-sm font-semibold">PO Terms & Conditions</label>
        <textarea className="border border-slate-300 p-2 rounded-sm text-sm text-gray-700" rows="2" 
        defaultValue={`1. Terms of Payment : 60 Days Credit \n2. Delivery : Immediately  within 1-2 Weeks \n3. Freights : At Actual \n4. Packing And Forwarding : NIL \n5. Other Reference :  \n\nYou are Requested to acknowledge the Acceptance of this Order to us Immediately. If you fail to acknowledge the acceptance within 2 days the we will assume that you have accepted this order.`}>         
        </textarea>
      </div>
      <hr className='text-slate-300 my-4'/>
      <div className="">
        <button type='submit' className='bg-blue-700 hover:bg-blue-800 p-2 px-4 text-white font-semibold rounded-xs'><i className='fa fa-check-circle pr-1'></i>Submit</button>
      </div>
    </form>
    </div>
  )
}
