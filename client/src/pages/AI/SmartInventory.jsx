import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SmartInventory = () => {
  const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate(); 

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
      useEffect(() => {
        fetchItems();
      }, []);
  return (
    <div className='p-4 bg-white rounded-sm shadow-sm'>
        <div className="flex justify-between items-center">
            <h1 className='text-2xl font-semibold'>📈 AI Smart Inventory Optimization</h1>
            <button onClick={()=> navigate('/dashboard/aifeatures')} className='bg-rose-600 p-2 px-4 font-semibold text-white rounded-sm hover:bg-rose-700 hover:shadow-md'>Back</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="">
            <table className='w-full text-center text-sm'>
                <thead>
                    <tr className='bg-blue-700 text-white'>
                        <th className='p-2 border-r border-slate-300  w-1/2'>Product</th>
                        <th className='p-2 border-r border-slate-300'>Stock</th>
                        <th className='p-2 border-r border-slate-300'>Avg Daily Sale</th>
                        <th className='p-2 border-r border-slate-300'>Days Left</th>
                        <th className='p-2 border-r border-slate-300'>Movement</th>
                        <th className='p-2 border-r border-slate-300'>Reorder Qty</th>
                        <th className='p-2 border-r border-slate-300'>Priority</th>
                        <th className='p-2'>Ai Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=> (
                        <tr key={item._id} className='border-b border-slate-300'>
                            <td className='p-2'>{item.itemName}</td>
                            <td className='p-2'>0</td>
                            <td className='p-2'>0</td>
                            <td className='p-2'>999 Days</td>
                            <td className='p-2'>Good Stock</td>
                            <td className='p-2'>-</td>
                            <td className='p-2'><span className='bg-yellow-500 p-2 py-1 rounded-lg text-white font-semibold text-xs'>Medium</span></td>
                            <td className='p-2'>Good Purchase / Minimum Discount</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    )
}
