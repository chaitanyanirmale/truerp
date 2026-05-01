import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditSo = () => {
    const {id} = useParams();
    const [soData, setSoData] = useState(null);
    const [items, setItems] = useState([]);
    const [po, setPo] = useState([]);
    const [loading, setLoading] = useState(false)


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
    useEffect(()=> {
        fetchItems();
        fetchPO();
    },[])
    useEffect(() => {
        const fetchSO = async () => {
            try {
                const res = await fetch(`/api/so/${id}`);
                const data = await res.json(); 
                setSoData(data.so);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSO();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSoData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleUpdate = async () => {
        try {
            const res = await fetch(`/api/so/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(soData)
            });

            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.message || "Update failed");
            }

            console.log("Updated:", data);

            alert("SO updated successfully");

        } catch (err) {
            console.error(err);
            alert("Update failed");
        }
    };


  return (
    <div className='md:w-full xl:w-full  bg-white p-4 border border-slate-400 shadow-md rounded-sm'>
        <h1 className='text-2xl font-semibold'>Edit SO</h1>
        <hr className='text-slate-300 my-4'/>
        <form onSubmit={handleUpdate}>
                <div className="flex gap-4 p-2">
                    <label className="font-semibold">Customer Name:</label>
                    <p className=''>{soData?.customer?.name}</p>
                </div>
                <div className="flex gap-4 p-2">
                    <label className="font-semibold">SO Number:</label>
                    <p className=''>{soData?.soNumber}</p>
                </div>
                <div className="flex gap-4 p-2">
                    <label className="font-semibold">JC Number:</label>
                    <p className=''>{soData?.jobCardNumber}</p>
                </div>
            <div className="p-2 xl:grid xl:grid-cols-3 xl:gap-6 md:grid md:grid-cols-2 md:gap-6 sm:grid text-sm placeholder:text-slate-400 items-start">
                <div className="grid gap-2">
                    <label className="font-semibold">Select Item</label>
                    <select name="itemId" value={soData?.itemId?._id || soData?.itemId} onChange={handleChange} className="border border-slate-300 rounded-sm p-2" required>
                    <option value="">Select Item</option>
                    {items.map((item) => (
                        <option key={item._id} value={item._id}>
                        {item.itemName}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="grid gap-2">
                  <label className="font-semibold">Item Description</label>
                  <input type="text" name="itemDesc" value={soData?.itemDesc} onChange={handleChange} placeholder='Enter Item Description' className='p-2 border border-slate-300 rounded-sm' required/>
                </div>
                <div className="grid gap-2">
                  <label className="font-semibold">Item Quantity</label>
                  <input type="number" name="itemQty" value={soData?.itemQty} onChange={handleChange} placeholder='Enter Item Quantity' className='p-2 border border-slate-300 rounded-sm' required/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Major/Minor Number</label>
                <input type="text" name="majorMinorNumber" value={soData?.majorMinorNumber} onChange={handleChange} placeholder='Major/Minor Number' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Received Date</label>
                <input type="date" name="receivedDate" value={soData?.receivedDate?.split("T")[0]} onChange={handleChange} placeholder='Select Recieved Date' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Expected Date</label>
                <input type="date" name="expectedDate" value={soData?.expectedDate?.split("T")[0]} onChange={handleChange} placeholder='Select Expected Date' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Status</label>
                <select name="status" value={soData?.status} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm'>
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
                <select name="orderType" value={soData?.orderType} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm'>
                    <option value="">-- Select Order Type --</option>
                    <option value="Under Quotation">Under Quotation</option>
                    <option value="Order Acceptance">Order Acceptance</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Drawing Revision number</label>
                <input type="text" name="drawingRevisionNumber" value={soData?.drawingRevisionNumber} onChange={handleChange} placeholder='Drawing Revision Number' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Select PO</label>
                <select name="purchaseOrderId" value={soData?.purchaseOrderId} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm'>
                  <option value="">Select PO</option>
                  {po.map((po) => (
                    <option key={po._id} value={po._id}>
                      {po.supplier?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">PO Number</label>
                <input type="text" name="poNumber" value={soData?.poNumber} onChange={handleChange} placeholder='PO Number' className='p-2 border border-slate-300 rounded-sm'/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">PO Date</label>
                <input type="text" name="poDate" value={soData?.poDate?.split("T")[0]} onChange={handleChange} className='p-2 border border-slate-300 rounded-sm' readOnly/>
              </div>
              <div className="grid gap-2">
                <label className="font-semibold">Remark</label>
                <textarea name="remark" value={soData?.remark} onChange={handleChange} rows='2' placeholder='Remark' className='p-2 border border-slate-300 rounded-sm'></textarea>
              </div>
            </div>
            <hr className='text-slate-300 my-4'/>
            <div className="">
              <button type='submit' className='bg-blue-700 p-2 rounded-xs text-white w-30 hover:bg-blue-800 hover:scale-105 transition-all duration-700' disabled={loading}><i className='fa fa-chechk pr-1'></i>{loading ? "Updating..." : "Update SO"}</button>
            </div>
        </form>
    </div>
  )
}
