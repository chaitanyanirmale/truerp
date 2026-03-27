import React from 'react'

export const FinanceDashboard = () => {
  return (
    <main>
        <div className="p-4">
            <div className="p-2 text-center">
                <h1 className='text-2xl font-semibold'>P&L Dashboard</h1>
            </div>
            <div className="mt-2">
                <table className='text-center bg-white'>
                    <tr className='bg-blue-600 border border-slate-200 text-white'>
                        <th className='border border-gray-200 p-1 px-2'>Sr.no</th>
                        <th className='border border-gray-200 p-1 px-2'>Month</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Sales</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Purchase</th>
                        <th className='border border-gray-200 p-1 px-2'>Expanses</th>
                        <th className='border border-gray-200 p-1 px-2'>Monthly Salary</th>
                        <th className='border border-gray-200 p-1 px-2'>GST</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Payment Received</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Supplier Paid Payment</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Supplier Balance Payment</th>
                        <th className='border border-gray-200 p-1 px-2'>Month Wise Profit</th>
                        <th className='border border-gray-200 p-1 px-2'>Profit in %</th>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2'>1</td>
                        <td className='border border-gray-200 p-2'>April 2025</td>
                        <td className='border border-gray-200 p-2'>38,07,931</td>
                        <td className='border border-gray-200 p-2'>37,80,146</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>4,37,693</td>
                        <td className='border border-gray-200 p-2'>1,67,22,144</td>
                        <td className='border border-gray-200 p-2'>16,76,959</td>
                        <td className='border border-gray-200 p-2'>20,95,221</td>
                        <td className='border border-gray-200 p-2'>-4,09,908</td>
                        <td className='border border-gray-200 p-2'>-11</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2'>2</td>
                        <td className='border border-gray-200 p-2'>May 2025</td>
                        <td className='border border-gray-200 p-2'>23,25,084</td>
                        <td className='border border-gray-200 p-2'>40,52,357</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>2,73,254</td>
                        <td className='border border-gray-200 p-2'>33,39,459</td>
                        <td className='border border-gray-200 p-2'>5,75,296</td>
                        <td className='border border-gray-200 p-2'>34,77,061</td>
                        <td className='border border-gray-200 p-2'>-20,00,527</td>
                        <td className='border border-gray-200 p-2'>-86</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2'>3</td>
                        <td className='border border-gray-200 p-2'>June 2025</td>
                        <td className='border border-gray-200 p-2'>37,19,037</td>
                        <td className='border border-gray-200 p-2'>57,419</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>5,67,257</td>
                        <td className='border border-gray-200 p-2'>11,44,875</td>
                        <td className='border border-gray-200 p-2'>44,675</td>
                        <td className='border border-gray-200 p-2'>12,744</td>
                        <td className='border border-gray-200 p-2'>30,94,361</td>
                        <td className='border border-gray-200 p-2'>83</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >4</td>
                        <td className='border border-gray-200 p-2'>July 2025</td>
                        <td className='border border-gray-200 p-2'>20,59,262</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>3,13,988</td>
                        <td className='border border-gray-200 p-2'>27,94,317</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>17,45,274</td>
                        <td className='border border-gray-200 p-2'>85</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >5</td>
                        <td className='border border-gray-200 p-2'>August 2025</td>
                        <td className='border border-gray-200 p-2'>47,78,714</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>7,28,956</td>
                        <td className='border border-gray-200 p-2'>69,79,741</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>40,49,758</td>
                        <td className='border border-gray-200 p-2'>85</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >6</td>
                        <td className='border border-gray-200 p-2'>September 2025</td>
                        <td className='border border-gray-200 p-2'>79,48,642</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>12,03,311</td>
                        <td className='border border-gray-200 p-2'>8,65,739</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>67,45,331</td>
                        <td className='border border-gray-200 p-2'>85</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >7</td>
                        <td className='border border-gray-200 p-2'>October 2025</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >8</td>
                        <td className='border border-gray-200 p-2'>November 2025</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >9</td>
                        <td className='border border-gray-200 p-2'>December 2025</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >10</td>
                        <td className='border border-gray-200 p-2'>January 2026</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>1,00,000</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>-1,00,000</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >11</td>
                        <td className='border border-gray-200 p-2'>February 2026</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>13,000</td>
                        <td className='border border-gray-200 p-2'>12,587</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>-25,587</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className='border border-gray-200 p-2' >12</td>
                        <td className='border border-gray-200 p-2'>March 2026</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                        <td className='border border-gray-200 p-2'>0</td>
                    </tr>
                    <tr className='bg-blue-600 text-white'>
                        <th colspan="2">TOTAL</th>
                        <th className='border border-gray-200 p-2'>2,46,38,670</th>
                        <th className='border border-gray-200 p-2'>78,89,922</th>
                        <th className='border border-gray-200 p-2'>1,13,000</th>
                        <th className='border border-gray-200 p-2'>12,587</th>
                        <th className='border border-gray-200 p-2'>35,24,459</th>
                        <th className='border border-gray-200 p-2'>3,18,46,275</th>
                        <th className='border border-gray-200 p-2'>22,96,930</th>
                        <th className='border border-gray-200 p-2'>55,85,026</th>
                        <th className='border border-gray-200 p-2'>1,30,98,702</th>
                        <th className='border border-gray-200 p-2'>53</th>
                    </tr>
                </table>
            </div>
        </div>
    </main>
  )
}
