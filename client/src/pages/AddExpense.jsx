import React from 'react'

export const AddExpense = () => {
  return (
    <div className='m-2 xl:w-200 border border-slate-400 p-4 shadow-lg rounded-sm bg-white'>
        <h3 className='text-xl font-semibold mb-2'>Add Expense</h3><hr className='text-slate-400'/><br />
        <form className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-center ">
            <label className="col-span-3 font-medium mr-2">Employee</label>
            <select className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full">
                <option>-- Select Employee --</option>
                <option value="180" >Tanaji Tengale</option>
                <option value="249" >Nilesh Mali</option>
                <option value="250" >Yogesh Saste</option>
                <option value="251" >Gopal Patil</option>
                <option value="252" >Geeta Borkar</option>
                <option value="253" >Kaveri Abhale</option>
                <option value="254" >Aniket Patil </option>
                <option value="255" >Manik Tengale</option>
                <option value="256" >Shiom Tengale</option>
                <option value="271" >DIPALI GAIKWAD</option>
                <option value="411" >POOJA SAKARKAR</option>
                <option value="412" >LEENA RAWALE</option>
                <option value="413" >DHIRAJ KAMBLE</option>
                <option value="414" >AKRAM SHAIKH</option>
                <option value="415" >CHETAN LOKHANDE</option>
                <option value="416" >KSHITIJA CHAVAN</option>
                <option value="417" >RUSHIKESH  DANGALE</option>
                <option value="538" >TANMAY VIDHATE</option>
                <option value="539" >KALPANA LANDGE</option>					                                
            </select>
            
            <label className="col-span-3 font-medium mr-2">Expense Amount (in Rs.)</label>
            <input type="number" placeholder="Enter Expense Amount (only digits)" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/>

            <label className="col-span-3 font-medium">Expense Type</label>
            <select className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full">
                <option>-- Select Expense Type --</option>
                <option value="Petrol" >Petrol</option>
                <option value="Transport" >Transport</option>
                <option value="Rent" >Rent</option>
                <option value="Mobile Recharge" >Mobile Recharge</option>										
                <option value="Others" >Others</option>
            </select>

            <label className="col-span-3 font-medium mr-2">Expense Date</label>
            <input type="date" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/>

            <label className="col-span-3 font-medium mr-2">Note</label>
            <textarea rows="2" placeholder="Enter Note" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"></textarea>

            <label className="col-span-3 font-medium mr-2">Upload Screenshot/Receipt</label>
            <input type="file" className="col-span-9 border border-slate-400 placeholder:text-slate-400 rounded-md px-3 py-2 w-full"/>

            <div className="col-span-12 flex gap-4 pt-4 border-t mt-4">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                ><i className="fa fa-fw fa-lg fa-check-circle"></i>
                    Submit
                </button>

                <button
                    type="reset"
                    className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700"
                ><i className="fa fa-fw fa-lg fa-times-circle"></i>
                    Clear
                </button>
            </div>
        </form>
    </div>
  )
}
