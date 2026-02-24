import React from 'react'

export const GeneralDashboard = () => {
  return (
    <div className='h-screen'>
        <div className="w-1/3 p-2">
            <input type="text" placeholder='🔍 Search dashboard menu (e.g. Stock, Invoice, Ledger)' className='border border-gray-300 p-1 w-full rounded-md'/>
        </div>
        <div className="grid gap-3">
            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-file-text fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>SO</h4>
                        <p><b>Sales Orders</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-cogs fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>BOM</h4>
                        <p><b>Bill of Materials</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-shopping-cart fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>PO</h4>
                        <p><b>Purchase Orders</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-truck fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>GRR</h4>
                        <p><b>Goods Receipt</b></p>
                    </div>
                </div>            
            </div>

            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-cube fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>ITEMS</h4>
                        <p><b>Item Master</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-file fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>PURCHASE</h4>
                        <p><b>Purchase Bills</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-file-pdf-o fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>INVOICES</h4>
                        <p><b>Sales Invoices</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-users fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>USERS</h4>
                        <p><b>User Management</b></p>
                    </div>
                </div>            
            </div>

            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-money fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>SALARY</h4>
                        <p><b>Payroll</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-credit-card fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>EXPENSES</h4>
                        <p><b>Comapany Expenses</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-line-chart fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>SALES</h4>
                        <p><b>Total Sales</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-database fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>STOCK</h4>
                        <p><b>Total Stock</b></p>
                    </div>
                </div>            
            </div>
            
            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-book fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>LEDGER</h4>
                        <p><b>Account Ledger</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-money fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>SUPPLIER PAYMENT</h4>
                        <p><b>Vendor Payments</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-bar-chart fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>REPORTS</h4>
                        <p><b>All Reports</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-code fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>HSN CODES</h4>
                        <p><b>HSN Master</b></p>
                    </div>
                </div>            
            </div>

            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-road fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>E-WAY BIL</h4>
                        <p><b>Transport Bills</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-undo fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>MRN</h4>
                        <p><b>Material Return Note</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-share-square-o fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>ISSUE SLIP</h4>
                        <p><b>Material Issue</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-truck fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>DELIVERY CHALLAN</h4>
                        <p><b>Dispatch Note</b></p>
                    </div>
                </div>            
            </div>

            <div className="p-2 flex gap-4 w-full">
                <div className="flex border border-gray-100 rounded-lg shadow-md mx-2 justify-center w-full">
                    <div className="bg-blue-600 p-4 rounded-l-lg">
                        <i className="fa fa-cogs fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>WPS / WPQ / PQR</h4>
                        <p><b>Quality Docs</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-cyan-500 p-4 rounded-l-lg">
                        <i className="fa fa-industry fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>MACHINERY</h4>
                        <p><b>Machine Master</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-amber-400 p-4 rounded-l-lg">
                        <i className="fa fa-exclamation-triangle fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>NCR</h4>
                        <p><b>Non Conformance</b></p>
                    </div>
                </div>            
                <div className="flex border border-gray-100 rounded-lg shadow-lg mx-2 justify-center w-full">
                    <div className="bg-rose-600 p-4 rounded-l-lg">
                        <i className="fa fa-calendar fa-3x text-white"></i>
                    </div>
                    <div className=" p-4 w-full">
                        <h4>PLANS</h4>
                        <p><b>Production Plans</b></p>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  )
}
