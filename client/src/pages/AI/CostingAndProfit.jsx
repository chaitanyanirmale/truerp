import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CostingAndProfit = () => {
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

      const getSuggestionColor = (aiSuggestion) => {
        if (!aiSuggestion) return "bg-gray-400";

        const value = aiSuggestion.toLowerCase();

        if (value.includes("low")) return "bg-red-500";
        if (value.includes("avg") || value.includes("average")) return "bg-yellow-400 text-black";
        if (value.includes("good") || value.includes("high")) return "bg-green-500";

        return "bg-gray-400";
    };
  return (
    <div className='p-4 bg-white rounded-sm shadow-sm'>
        <div className="flex justify-between items-center">
            <h1 className='text-2xl font-semibold'>💰 AI Costing & Profit Prediction</h1>
            <button onClick={()=> navigate('/dashboard/aifeatures')} className='bg-rose-600 p-2 px-4 font-semibold text-white rounded-sm hover:bg-rose-700 hover:shadow-md'>Back</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="">
            <table className='w-full text-center text-sm'>
                <thead>
                    <tr className='bg-green-800 text-white'>
                        <th className='p-2 py-3 border-r border-slate-300  w-1/2'>Product</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Avg Purchase Cost</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Selling Price</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Extra Cost</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Total Cost</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Profit / Unit</th>
                        <th className='p-2 py-3 border-r border-slate-300'>Margin %</th>
                        <th className='p-2 py-3 w-40'>Ai Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=> {
                        const avgPurchaseCost = Number(item.supplierPrice) || 0;
                            const sellingPrice = Number(item.customerPrice) || 0;
                            const extraCost = 0;

                            const totalCost = avgPurchaseCost + extraCost;
                            const profitPerUnit = sellingPrice - totalCost;

                            const marginValue =
                            sellingPrice > 0
                                ? (profitPerUnit / sellingPrice) * 100
                                : 0;

                            const margin = marginValue.toFixed(2);

                            let aiSuggestion = "";

                            if (marginValue < 10) {
                                aiSuggestion = "Low margin";
                            } else if (marginValue < 20) {
                                aiSuggestion = "Average profit";
                            } else {
                                aiSuggestion = "Good profit";
                            }
                        return (
                        <tr key={item._id} className='border-b border-slate-300'>
                            <td className='p-2 py-3'>{item.itemName}</td>
                            <td className='p-2 py-3'>{avgPurchaseCost}</td>
                            <td className='p-2 py-3'>{sellingPrice}</td>
                            <td className='p-2 py-3'>{extraCost}</td>
                            <td className='p-2 py-3'>{totalCost}</td>
                            <td className='p-2 py-3'>{profitPerUnit}</td>
                            <td className='p-2 py-3'>{margin}%</td>
                            <td className='p-2 py-3'><span className={`${getSuggestionColor(aiSuggestion)} px-2 py-1 rounded-lg text-white font-semibold text-xs`}>{aiSuggestion}</span></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    </div>
    )
}
