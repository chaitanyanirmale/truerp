import React, { useEffect, useState } from 'react'

export const CreateSO = () => {
    const initialData = {purchaseOrderId: '',customer: '', soNumber: '', jobCardNumber: '', itemDesc: '', itemQty: '', majorMinorNumber: '', receivedDate: '', expectedDate: '', status: '', orderType: '', drawingRevisionNumber: '', poNumber: '', poDate: '', remark: ''};
    const [formData, setFormData] = useState(initialData);
    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [po, setPo] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchJCNo = async () => {
        const res = await fetch("/api/so/preview/JC-Number");
        const data = await res.json();
        
        if(data.success){
            setFormData(formData => ({
                ...formData,
                jobCardNumber : data.jcNumber
            }))
        }
    }
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
    const fetchSoNo = async () => {
      const res = await fetch("/api/so/preview/SO-Number");
      const data = await res.json();
          
      if(data.success){
          setFormData(formData => ({
          ...formData,
          soNumber : data.soNumber
        }))
      }
    }
    const fetchItems = async () => {
      setLoading(true);
      try {
          const res = await fetch('/api/items/list');
          const data = await res.json();
          if(data.success === true){
              setItems(data.data)
          }
          setLoading(false);
      } catch (error) {
          console.log(error)
          setLoading(false);
      }
    }
  const fetchPO = async () => {
      setLoading(true);
      try {
          const res = await fetch('/api/po/po-list');
          const data = await res.json();
          if(data.success === true){
              setPo(data.data)
          }
          setLoading(false);
      } catch (error) {
          console.log(error)
          setLoading(false);
      }
    }
  useEffect(() => {
    fetchJCNo();
    fetchCustomers();
    fetchSoNo();
    fetchItems();
    fetchPO();
  }, []);

  const handlePOChange = (e) => {
    const selectedPO = po.find(
      (po) => po._id === e.target.value
    );

    setFormData({
      ...formData,
      purchaseOrderId: selectedPO._id,
      poNumber: selectedPO.poNo,
      poDate: selectedPO.poDate,
    });
  };
  const handleItemChange = (e) => {
    const selectedItem = items.find(
      (item) => item._id === e.target.value
    );

    setFormData({
      ...formData,
      itemId: selectedItem._id,
      itemDesc: selectedItem.description,
    });
  };
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
      console.log("So Created Successfully")
      setFormData(initialData)
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='xl:max-w-200 bg-white p-4 border border-slate-200 shadow-md rounded-sm'>
        <h1 className='text-2xl font-semibold'>Create Sales Order (SO)</h1>
        <hr className='text-slate-300 my-4'/>
        <form onSubmit={handleSubmit} >
          <div className="">
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-blue-700'><i className='fa fa-user pr-2'></i>Customer</h2>
            <div className="flex justify-between gap-6 py-4 text-sm">
              <div className="grid gap-2 w-full">
                <label className="font-semibold">Select Customer <span className='text-red-500'>*</span></label>
                <select name="customer" value={formData.customer}
              onChange={handleChange} className='p-2 border border-slate-300 rounded-sm ' required>
                    <option value="">--Select Customer--</option>
                        {customers.map((cust) => (
                        <option key={cust._id} value={cust._id}>
                        {cust.name}
                        </option>
                    ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">So Number <span className='text-red-500'>*</span></label>
                <input type="text" name='soNumber' value={formData.soNumber} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm bg-gray-100' readOnly/>
              </div>
            </div>
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-green-500'><i className='fa fa-file-text-o pr-2'></i>Order Details</h2>
            <div className="grid grid-cols-2 gap-6 text-sm py-4">
              <div className="grid gap-2">
                  <label className="font-semibold">JobCard Number <span className='text-red-500'>*</span></label>
                  <input type="text" value={formData.jobCardNumber} onChange={handleChange} name="jobCardNumber"  className='p-2 border border-slate-300 rounded-sm bg-gray-100' readOnly/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Major/Minor Number <span className='text-red-500'>*</span></label>
                <input type="text" name="majorMinorNumber" value={formData.majorMinorNumber} onChange={handleChange}  placeholder='e.g. MAJ-001' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Drawing Revision number <span className='text-red-500'>*</span></label>
                <input type="text" name="drawingRevisionNumber" value={formData.drawingRevisionNumber} onChange={handleChange} placeholder='e.g. 0, 1, A' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Select Item <span className='text-red-500'>*</span></label>
                <select name="itemId" value={formData.itemId} onChange={handleItemChange} className="border border-slate-300 rounded-sm p-2" required>
                  <option value="">Select Item</option>
                  {items.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.itemName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                  <label className="font-semibold">Item Description <span className='text-red-500'>*</span></label>
                  <input type="text" name="itemDesc" value={formData.itemDesc} onChange={handleChange}  placeholder='Enter Item Description' className='p-2 border border-slate-300 rounded-sm' required/>
              </div>
              <div className="grid gap-2">
                  <label className="font-semibold">Item Quantity <span className='text-red-500'>*</span></label>
                  <input type="number" name="itemQty" value={formData.itemQty} onChange={handleChange}  placeholder='Enter Item Quantity' className='p-2 border border-slate-300 rounded-sm' required/>
              </div>
            </div>
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-yellow-400'><i className='fa fa-file-text-o pr-2'></i>Customer PO Details</h2>
            <div className="grid grid-cols-3 gap-6 text-sm py-4">
              <div className="grid gap-2">
                <label className="font-semibold">Select PO <span className='text-red-500'>*</span></label>
                <select name="purchaseOrderId" value={formData.purchaseOrderId} onChange={handlePOChange} className='p-2 border border-slate-300 rounded-sm'>
                  <option value="">Select PO</option>
                  {po.map((po) => (
                    <option key={po._id} value={po._id}>
                      {po.supplier?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">PO Number <span className='text-red-500'>*</span></label>
                <input type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} placeholder='PO Number' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">PO Date <span className='text-red-500'>*</span></label>
                <input type="text" name="poDate" value={formData.poDate?.split("T")[0]} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm' readOnly/>
              </div>
            </div>
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-orange-400'><i className='fa fa-calendar pr-2'></i>Dates</h2>
            <div className="grid grid-cols-2 gap-6 text-sm py-4">
              <div className="grid gap-2">
                <label className="font-semibold">Received Date <span className='text-red-500'>*</span></label>
                <input type="date" name="receivedDate" value={formData.receivedDate} onChange={handleChange}  placeholder='Select Recieved Date' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Expected Date <span className='text-red-500'>*</span></label>
                <input type="date" name="expectedDate" value={formData.expectedDate} onChange={handleChange}  placeholder='Select Expected Date' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
            </div>
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-purple-700'><i className='fa fa-flag pr-2'></i>Status & Type</h2>
            <div className="grid grid-cols-2 gap-6 py-4 text-sm">
              <div className="grid gap-2">
                <label className="font-semibold">Status</label>
                <select name="status" value={formData.status}
              onChange={handleChange} className='p-2 border border-slate-300 rounded-sm'>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="dispatch">Dispatch</option>
                    <option value="complete">Complete</option>
                    <option value="hold">Hold</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Order Type</label>
                <select name="orderType" value={formData.orderType}
              onChange={handleChange}  className='p-2 border border-slate-300 rounded-sm'>
                    <option value="">-- Select Order Type --</option>
                    <option value="Under Quotation">Under Quotation</option>
                    <option value="Order Acceptance">Order Acceptance</option>
                </select>
              </div>
            </div>
            <h2 className='bg-gray-100 p-2 font-semibold border-l-4 border-green-600'><i className='fa fa-comment pr-2'></i>Remark</h2>
            <div className="py-4 text-sm">
                <textarea name="remark" value={formData.remark} onChange={handleChange}  rows='2' placeholder='Enter any remark or notes..' className='p-2 border border-slate-300 rounded-sm w-full'></textarea>
            </div>
          </div>
            <hr className='text-slate-300 my-4'/>
            <div className="">
              <button type='submit' className='bg-blue-700 p-2 rounded-xs text-white w-30 hover:bg-blue-800 hover:scale-105 transition-all duration-700' disabled={loading}><i className='fa fa-chechk pr-1'></i>{loading ? "Creating..." : "Create SO"}</button>
            </div>
        </form>
    </div>
  )
}
