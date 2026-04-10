import React, { useEffect, useState } from 'react'

export const GRR = () => {
    const initialData = {
        grrNo:"",
        poId: "",
        soId: "",
        itemId: "",
        grrDate: "",
        receivedQty: "",
        rejectedQty: "",
        acceptedQty: "",
        remark: "",
    }
    const [formData,setFormData] = useState(initialData);
    const [po, setPO] = useState([]);
    const [so, setSO] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;

        let updatedData = {
        ...formData,
        [name]: value,
        };

        const received = Number(
        name === "receivedQty"
            ? value
            : updatedData.receivedQty
        );

        const rejected = Number(
        name === "rejectedQty"
            ? value
            : updatedData.rejectedQty
        );

        updatedData.acceptedQty =
        received - rejected >= 0
            ? received - rejected
            : 0;

        setFormData(updatedData);
    };
    const handlePOChange = (e) => {
        const selectedPO = po.find(
            (po) => po._id === e.target.value
        );
        const linkedSO = so.find(
            (so) => so.purchaseOrderId === selectedPO._id
        );

        setFormData({
            ...formData,
            poId: selectedPO._id,
            soId: linkedSO?._id || "",
            itemId: linkedSO?.itemId?._id || linkedSO?.itemId || "",
        });
    };
    const fetchPO = async () => {
      setLoading(true);
      try {
          const res = await fetch('/api/po/po-list');
          const data = await res.json();
          if(data.success === true){
              setPO(data.data)
          }
          setLoading(false);
      } catch (error) {
          console.log(error)
          setLoading(false);
      }
    }
    const fetchSO = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/so/so-list');
            const data = await res.json();
            if(data.success === true){
                setSO(data.data)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
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
    const fetchGRR = async () => {
        const res = await fetch("/api/grr/preview");
        const data = await res.json();
        
        if(data.success){
            setFormData(formData => ({
                ...formData,
                grrNo:data.grrNo
            }))
        }
    }

    const setTodayDate = () => {
        const today = new Date().toISOString().split("T")[0];
        
        setFormData(formData => ({
            ...formData,
            grrDate:today
        }))
    }
    useEffect(() => {
        fetchGRR();
        setTodayDate();
        fetchPO();
        fetchSO();
        fetchItems();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const res = await fetch("/api/grr/create", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
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
    <div className="w-full bg-white p-4 rounded-sm shadow-md">
        <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Create GRR</h1>
            <button className='p-2 bg-rose-700 text-white rounded-sm hover:bg-rose-800'>List GRR</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <form onSubmit={handleSubmit}>
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-6">
                <div className='grid gap-2'>
                    <label className="font-semibold text-sm">
                        Purchase Order
                    </label>
                    <select name="poId" value={formData.poId} onChange={handlePOChange} className="border border-slate-300 p-2 rounded-sm">
                        <option value="" disabled>Select PO</option>
                        {po.map((po)=> (
                            <option key={po._id} value={po._id}>{po.poNo}</option>
                        ))}
                    </select>
                </div>
                <div className='grid gap-2'>
                    <label className="font-semibold">
                        Sales Order
                    </label>
                    <select name="soId" value={formData.soId} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm">
                        <option value="">Select SO</option>
                          {so.filter((so) => so.purchaseOrderId === formData.poId).map((so) => (
                            <option key={so._id} value={so._id}>
                                {so.soNumber}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid gap-2'>
                    <label className="font-semibold">Item</label>
                    <select name="itemId" value={formData.itemId} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm">
                        <option value="">Select Item</option>
                        {items.map((item) => (
                            <option key={item._id} value={item._id}>
                            {item.itemName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2"> 
                    <label className="text-sm font-semibold">GRR No.</label>
                    <input type="text" name="grrNo" value={formData.grrNo} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
                </div>
                <div className="grid gap-2">
                    <label className="text-sm font-semibold">GRR Date.</label>
                    <input type="date" name="grrDate" value={formData.grrDate} className="border border-slate-300 p-2 rounded-sm bg-gray-300" readOnly/>
                </div>
                <div className='grid gap-2'>
                    <label className="font-semibold">
                        Received Qty
                    </label>
                    <input type="number" name="receivedQty" value={formData.receivedQty} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm"/>
                </div>

                <div className='grid gap-2'>
                    <label className="font-semibold">
                        Rejected Qty
                    </label>
                    <input type="number" name="rejectedQty" value={formData.rejectedQty} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm"/>
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold">
                        Accepted Qty
                    </label>
                    <input type="number" value={formData.acceptedQty} readOnly className="border border-slate-300 bg-gray-100 p-2 rounded-sm"/>
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold">
                        Remark
                    </label>
                    <textarea name="remark" value={formData.remark} onChange={handleChange} className="border border-slate-300 p-2 rounded-sm" rows="3"/>
                </div>
            </div>
            <hr className='text-slate-300 my-4'/>
            <button type='submit' className='bg-blue-700 p-2 px-4 text-white rounded-sm font-semibold hover:bg-blue-800'><i className='fa fa-check-circle pr-1'></i>Submit</button>
        </form>
    </div>
  )
}
