import React, { useEffect, useState } from 'react'

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
      
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
    <div className='bg-white border border-slate-300 rounded-sm shadow-sm p-4'>
      <h1 className='text-2xl font-semibold'>List of Items</h1>
      <hr className='text-slate-300 my-4'/>
      <div className="">
        <table className='border border-slate-300 w-full text-sm'>
          <thead>
            <tr>
              <td className='p-2 border border-slate-300 font-semibold'>Item Code</td>
              <td className='p-2 border border-slate-300 font-semibold'>Item Name</td>
              <td className='p-2 border border-slate-300 font-semibold'>Supplier Price</td>
              <td className='p-2 border border-slate-300 font-semibold'>Customer Price</td>
              <td className='p-2 border border-slate-300 font-semibold'>Item Category</td>
              <td className='p-2 border border-slate-300 font-semibold'>Stock Count</td>
              <td className='p-2 border border-slate-300 font-semibold'>Action</td>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                  <td colSpan='7' className='text-center p-4'>No Items Found</td>
              </tr>) : items.map((item) =>  (
              <tr key={item._id}>
                <td className="border border-slate-300 p-2">{item.itemCode}</td>
                <td className="border border-slate-300 p-2">{item.itemName}</td>
                <td className="border border-slate-300 p-2"><i className="fa fa-inr pr-1"></i>{item.supplierPrice}</td>
                <td className="border border-slate-300 p-2"><i className="fa fa-inr pr-1"></i>{item.customerPrice}</td>
                <td className="border border-slate-300 p-2">{item.subCategory?.name}</td>
                <td className='border border-slate-300 p-2'></td>                
                <td className='border border-slate-300 p-2'>
                  <button className='bg-blue-700 p-2 text-white font-semibold px-4 rounded-sm'>Action <i className='fa fa-angle-down px-1'></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
