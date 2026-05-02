import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ViewBOM = () => {
    const {id} = useParams();
    const [bom , setBom] = useState([]);

    
    const getBOM = async () => {
        try {
            const res = await fetch(`/api/so/getBom/${id}`);
            const data = await res.json();

            if (data.success) {
                console.log(data.bom);
                setBom(data.bom);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    if (id) {
        getBOM();
    }
    }, [id]);
  return (
    <div className='bg-white p-4 rounded-sm shadow-sm'>
        <div className="flex justify-between">
            <h1 className='text-2xl font-semibold'>BOM (Bill of Material)for SO Number:</h1>
            <button className='p-2 bg-yellow-500 text-black font-semibold rounded-sm shadow-sm'><i className='fa fa-pencil pr-2'></i>Edit BOM</button>
        </div>
        <hr className='text-slate-300 my-4'/>
        <div className="overflow-x-auto">
            <table className='w-full text-sm'>
                <thead>
                    <tr className='bg-blue-700 text-white'>
                        <th className='border border-slate-300 p-4'>Sr. No.</th>
                        <th className='border border-slate-300 p-4'>Item Code</th>
                        <th className='border border-slate-300 p-4'>Item Name</th>
                        <th className='border border-slate-300 p-4'>Stock Count</th>
                        <th className='border border-slate-300 p-4'>Unit</th>
                        <th className='border border-slate-300 p-4'>Total Required <br /> Qty</th>
                        <th className='border border-slate-300 p-4'>Price</th>
                        <th className='border border-slate-300 p-4'>Sub Total</th>
                        <th className='border border-slate-300 p-4'>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {bom.length === 0 ? (
                        <tr className='border border-slate-300 text-center'>
                            <td className='p-2'>No BOM Found</td>
                        </tr>
                    ): (
                        bom.map((bom, index)=> (
                        <tr key={bom._id}>
                            <td className='border border-slate-300 p-4'>{index + 1}</td>
                            <td className='border border-slate-300 p-4'>{bom?.item?.itemCode}</td>
                            <td className='border border-slate-300 p-4 w-1/3'>{bom?.item?.itemName}</td>
                            <td className='border border-slate-300 p-4'>{bom?.item?.stockCount}</td>
                            <td className='border border-slate-300 p-4'>{bom?.item?.perUnit}</td>
                            <td className='border border-slate-300 p-4'>{bom?.quantity}</td>
                            <td className='border border-slate-300 p-4'>{bom?.item?.supplierPrice}</td>
                            <td className='border border-slate-300 p-4'>{bom?.cost * bom?.quantity}</td>
                            <td className='border border-slate-300 p-4'>Done</td>
                        </tr>
                        ))
                    )}                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
