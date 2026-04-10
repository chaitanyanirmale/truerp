import React from 'react'
import { useState, useEffect } from 'react';

export const POList = () => {
  const [po, setPo] = useState([]);
  const [so, setSO] = useState([]);
  const [supplier, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const fetchSuppliers = async () => {
      setLoading(true);
      try {
          const res = await fetch('/api/users/suppliers');
          const data = await res.json();
          if(data.success === true){
              setSuppliers(data.data)
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
        fetchSO();
        fetchSuppliers();
        fetchPO();
    }, []);
  return (
    <div>
      <div className="p-4 bg-white rounded-sm shadow-sm">
        <div className="grid grid-cols-4 gap-8">
          <h1 className='text-2xl font-semibold'>All PO's</h1>
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Select Status</label>
            <select name="" className="p-2 border border-slate-300 rounded-sm">
              <option value="">Pending</option>
              <option value="">Denied</option>
              <option value="">Canceled</option>
              <option value="">Approved</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Select SO</label>
            <select name="" className="p-2 border border-slate-300 rounded-sm">
              <option value="">--Select SO--</option>
              {so.map((so)=> (
                <option key={so._id} value={so._id}>{so.soNumber}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Select Supplier</label>
            <select name="" className="p-2 border border-slate-300 rounded-sm">
              <option value="">--Select Supplier--</option>
              {supplier.map((supplier) => (
                <option key={supplier._id} value={supplier._id}>{supplier.name}</option>
              ))}
            </select>
          </div>
        </div><hr className='text-slate-300 my-4'/>
        <div className="">
          <table className='w-full text-sm'>
            <thead>
              <tr>
                <th className='border border-slate-300 p-2 px-4'>PO Number</th>
                <th className='border border-slate-300 p-2 px-4'>SO Number</th>
                <th className='border border-slate-300 p-2 px-4'>Supplier Name</th>
                <th className='border border-slate-300 p-2 px-4'>Item Count</th>
                <th className='border border-slate-300 p-2 px-4'>Status</th>
                <th className='border border-slate-300 p-2 px-4'>Modified Date</th>
                <th className='border border-slate-300 p-2 px-4'>View</th>
                <th className='border border-slate-300 p-2 px-4'>Print</th>
              </tr>
            </thead>
            <tbody>
              {po.length === 0 ? (
                <tr className='border border-slate-300'>
                  <td colSpan='8' className='text-center p-4'>No Po Found</td>
                </tr>
              ): (po.map((po)=> (
                <tr key={po._id}>
                  <td className='border border-slate-300 p-2 px-4'>{po.poNo}</td>
                  <td className='border border-slate-300 p-2 px-4'>
                    {po.soNumber === "Not Created" ? (
                      <span className="text-red-600">Pending</span>
                    ) : (
                      po.soNumber
                    )}</td>
                  <td className='border border-slate-300 p-2 px-4'>{po.supplier?.name}</td>
                  <td className='border border-slate-300 p-2 px-4'>{}</td>
                  <td className='border border-slate-300 p-2 px-4'>
                    {po.status}
                  </td>
                  <td className='border border-slate-300 p-2 px-4'>{new Date(po.poDate).toISOString().split("T")[0]}</td>
                  <td className='border border-slate-300 p-2'>
                    <button className='p-1 px-3 bg-green-600 text-white font-semibold rounded-sm'><i className='fa fa-pencil pr-2'></i>Edit PO</button>
                  </td>
                  <td className='border border-slate-300 p-2'>
                    <button className='p-1 px-3 bg-yellow-500 text-black font-semibold rounded-sm'><i className='fa fa-print pr-2'></i>Print</button>
                  </td>
                </tr>
              ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
