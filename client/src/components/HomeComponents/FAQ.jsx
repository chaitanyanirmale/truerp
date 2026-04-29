import React, { useState } from 'react'

export const FAQ = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <section id='faq' className='p-10 bg-gray-100'>
        <div className="p-20">
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <div className="w-full">
              <h2 className="text-slate-600 text-4xl font-semibold mb-5">Have a question? Check out the FAQ</h2>
              <p className="text-center text-gray-600 mb-6">We have covered the key questions to help you understand TRUERP better.</p>
              <div className="hidden lg:block faq-arrow">
                <svg className="faq-arrow text-blue-900" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-7 w-auto">
              <div className="faq-container grid xl:grid-cols md:grid-cols gap-4">
                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id1" ? null : "id1")}>
                  <div className="flex items-center justify-between" >
                    <h3 className='text-slate-600 font-semibold '>What is TRUERP and who is it designed for?</h3>
                     <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id1" ? "rotate-90" : ""}`}></i>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id1" ? "max-h-50" : "max-h-0" }`}>
                    <p>TRUERP is a complete ERP solution designed specifically for mechanical, manufacturing, fabrication, and industrial businesses. It helps automate quotations, orders, purchases, BOM, inventory, payroll, and financial dashboards.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id2" ? null : "id2")}>
                  <div className="flex items-center justify-between" >
                    <h3 className='text-slate-600 font-semibold '>Can TRUERP manage the end-to-end workflow of a manufacturing business?</h3>
                    <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id2" ? "rotate-90" : ""}`}></i>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id2" ? "max-h-50" : "max-h-0" }`}>
                    <p>Yes. TRUERP covers the full cycle—from Quotation → Sales Order → Purchase Order → GRR → Inventory → BOM → Production → Payroll → Reports.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id3" ? null : "id3")}>
                  <div className="flex items-center justify-between" >
                    <h3 className='text-slate-600 font-semibold '>Is TRUERP cloud-based or offline?</h3>
                    <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id3" ? "rotate-90" : ""}`}></i>             
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id3" ? "max-h-50" : "max-h-0" }`}>
                    <p>TRUERP supports both cloud and on-premise deployment, depending on the client's preference, data sensitivity, and IT infrastructure.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id4" ? null : "id4")}>
                  <div className="flex items-center justify-between" >
                    <h3 className='text-slate-600 font-semibold '>Can I customize modules based on my business requirements?</h3>
                    <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id4" ? "rotate-90" : ""}`} ></i>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id4" ? "max-h-50" : "max-h-0" }`}>
                    <p>Absolutely. TRUERP allows module-level and workflow customization to match your company’s processes, approvals, and documentation format.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id5" ? null : "id5")}>
                  <div className="flex items-center justify-between" >
                    <h3 className='text-slate-600 font-semibold '>How secure is my data in TRUERP?</h3>
                    <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id5" ? "rotate-90" : ""}`} ></i>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id5" ? "max-h-50" : "max-h-0" }`}>
                    <p>Your data is protected with role-based access, encrypted storage, regular backups, and high-level security protocols to ensure confidentiality and safety.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 cursor-pointer" onClick={() => setOpenMenu(openMenu === "id6" ? null : "id6")}>
                  <div className="flex items-center justify-between">
                    <h3 className='text-slate-600 font-semibold '>Do you provide training and support?</h3>
                    <i className={`fa fa-angle-right transition-transform duration-300 ${ openMenu === "id6" ? "rotate-90" : ""}`} ></i>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${ openMenu === "id6" ? "max-h-50" : "max-h-0" }`}>
                    <p>Yes, we offer onboarding, staff training, and ongoing technical support to ensure smooth daily operations and quick issue resolution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
