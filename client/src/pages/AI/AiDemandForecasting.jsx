import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AiDemandForecasting = () => {
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
            <h1 className='text-2xl font-semibold'>📈 AI Demand Forecasting (Next 30 Days)</h1>
            <button onClick={()=> navigate('/dashboard/aifeatures')} className='bg-rose-600 p-2 px-4 font-semibold text-white rounded-sm hover:bg-rose-700 hover:shadow-md'>Back</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="">
            <table className='w-full text-center text-sm'>
                <thead>
                    <tr className='bg-violet-700'>
                        <th className='p-2 border-r border-slate-300 text-white w-1/2'>Product</th>
                        <th className='p-2 border-r border-slate-300 text-white'>Last 30 Days</th>
                        <th className='p-2 border-r border-slate-300 text-white'>Prev 60 Days Avg</th>
                        <th className='p-2 border-r border-slate-300 text-white'>Growth%</th>
                        <th className='p-2 border-r border-slate-300 text-white'>Forecast (30 Days)</th>
                        <th className='p-2 border-r border-slate-300 text-white'>Recommended Stock</th>
                        <th className='p-2 px-4 text-white'>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=> (
                        <tr key={item._id}>
                            <td className='p-2 border-b border-slate-300'>{item.itemName}</td>
                            <td className='p-2 border-b border-slate-300'>0</td>
                            <td className='p-2 border-b border-slate-300'>0</td>
                            <td className='p-2 border-b border-slate-300'>0%</td>
                            <td className='p-2 border-b border-slate-300'>0</td>
                            <td className='p-2 border-b border-slate-300'>0</td>
                            <td className='p-2 border-b border-slate-300'><span className='bg-gray-800 p-2 py-0 rounded-lg text-white font-semibold text-xs'>Stable</span></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
