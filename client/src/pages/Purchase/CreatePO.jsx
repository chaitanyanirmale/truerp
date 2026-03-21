import React, { useEffect, useState } from 'react'

export const CreatePO = () => {
  const initialData = { poNo:"", poDate:"" }
  const [formData, setFormData] = useState(initialData);
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
  useEffect(() => {
    fetchPoNo();
    setTodayDate();
  }, []);
  return (
    <div className='bg-white rounded-sm shadow p-4 w-1/2'>
      <h1 className='text-2xl font-semibold'>Create PO</h1>
      <hr className='text-slate-300 my-4'/>
      <div className="mb-6">
        <select name="so" className="border border-slate-300 p-2 rounded-sm w-full">
          <option value="" disabled>-- Select SO --</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold">PO No.</label>
          <input type="text" name="poNo" value={formData.poNo} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold">PO Date</label>
          <input type="date" name="pdDate" value={formData.poDate} className="border border-slate-300 p-2 rounded-sm" />
        </div>
      </div>
      <div className="grid gap-2 mt-2">
        <label className="text-sm font-semibold">PO Terms & Conditions</label>
        <textarea name="terms&Conditions" className="border border-slate-300 p-2 rounded-sm text-sm text-gray-700" rows="2" 
        defaultValue={`1. Terms of Payment : 60 Days Credit \n2. Delivery : Immediately  within 1-2 Weeks \n3. Freights : At Actual \n4. Packing And Forwarding : NIL \n5. Other Reference :  \n\nYou are Requested to acknowledge the Acceptance of this Order to us Immediately. If you fail to acknowledge the acceptance within 2 days the we will assume that you have accepted this order.`}>         
        </textarea>
      </div>
      <hr className='text-slate-300 my-4'/>
      <div className="">
        <button className='bg-blue-700 hover:bg-blue-800 p-2 px-4 text-white font-semibold rounded-xs'><i className='fa fa-check-circle pr-1'></i>Submit</button>
      </div>
    </div>
  )
}
