import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const CreateBOM = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [so, setSo] = useState();
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
  const fetchSoDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/so/${id}`)
        const data = await res.json();

        if(data.success){
          setSo(data.so)
        }
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false); 
      }
  }

    const addBOMItem = async (item) => {
      try {
        const res = await fetch(`/api/so/${id}/bom`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item: item._id,
            quantity: 1,
            cost: item.supplierPrice,
          }),
        });

        const data = await res.json();

        if (data.success) {
          setSo(data.so);
          alert("Item added to BOM");
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchItems();
    }, []);

    useEffect(()=> {
      fetchSoDetails();
    },[id])
  return (
    <div className='p-4 bg-white rounded-sm shadow-sm'>
      <div className="flex justify-between p-2">
        <h1 className='text-2xl font-semibold'>Bills of Material for SO Number: {so?.soNumber}</h1>
        <button className='bg-yellow-400 text-black font-semibold p-2 rounded-sm hover:bg-yellow-500'><i className='fa fa-pencil pr-2'></i>Edit BOM</button>
      </div>
      <hr className='text-slate-300 my-4'/>
      <div className="">
        <table className='w-full text-sm'>
          <thead>
            <tr>
              <th className='border border-slate-300 p-2 py-4'>Item Code</th>
              <th className='border border-slate-300 p-2 py-4'>Sequence</th>
              <th className='border border-slate-300 p-2 py-4'>Item Name</th>
              <th className='border border-slate-300 p-2 py-4'>Stock Count</th>
              <th className='border border-slate-300 p-2 py-4'>Min Order Qty</th>
              <th className='border border-slate-300 p-2 py-4'>Unit</th>
              <th className='border border-slate-300 p-2 py-4'>Qty/Job</th>
              <th className='border border-slate-300 p-2 py-4'>Supplier Price</th>
              <th className='border border-slate-300 p-2 py-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item)=> (
              <tr key={item._id}>
                <td className='border border-slate-300 p-4'>{item.itemCode}</td>
                <td className='border border-slate-300 p-4'>{item.mainCategory?.sequenceNumber}</td>
                <td className='border border-slate-300 p-4 w-1/3'>{item.itemName}</td>
                <td className='border border-slate-300 p-4'>{item.stockCount}</td>
                <td className='border border-slate-300 p-4'>{item.minOrderQty}</td>
                <td className='border border-slate-300 p-4'>{item.perUnit}</td>
                <td className='border border-slate-300 p-4'>1</td>
                <td className='border border-slate-300 p-4'>{item.supplierPrice}</td>
                <td className='border border-slate-300 p-4'>
                  <button onClick={() => addBOMItem(item)} className='bg-green-700 text-white font-semibold p-2 px-4 rounded-sm hover:scale-105 transition-all duration-700'><i className='fa fa-plus pr-2'></i>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
