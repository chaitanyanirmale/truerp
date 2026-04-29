import React, { useState } from 'react'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch("/api/contact/send-message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });
    
          const data = await res.json();
    
          if (data.success) {
            alert("Message sent successfully");
    
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: ""
            });
          }
        } catch (error) {
          console.log(error);
        }
    };
  return (
    <section id='contact' className='xl:pt-2 p-10 bg-gray-100'>
        <div className="text-center py-20">
          <h2 className='text-slate-600 font-semibold text-3xl mb-5'>Contact</h2>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg mb-4"></div>
          <p className="text-center text-gray-600 mb-6">Take the next step toward smarter, faster business management.</p>
        </div>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-8 md:px-5 xl:px-20 sm:grid-cols-1">
          <div className="bg-blue-900 text-white p-10 rounded-lg shadow-lg mx-5">
            <h3 className='text-3xl'>Contact Info</h3>
            <div className="flex items-start gap-4 mt-5">
              <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-geo-alt"></i>
              </div>
              <div className="content">
                <h4 className='text-xl font-semibold mb-2'>Our Locations</h4>
                <p>1) Dashmesh Complex, Hadapsar</p>
                <p>2) Kesnand, Wagholi</p>
				<p>3) Office No. 527, Amanora Chambers</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
              <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-telephone"></i>
              </div>
              <div className="content">
                <h4 className='text-xl font-semibold mb-2'>Phone Number</h4>
                <p><a href="tel:+918087611678">80876 11678</a></p>
                <p><a href="tel:+917558274199">75582 74199</a></p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-5">
                <div className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4 className='text-xl font-semibold mb-2'>Email Address</h4>
                  <p><a href="mailto:enquiry@truerp.in">enquiry@truerp.in</a></p>
                  <p><a href="mailto:sales@truerp.in">sales@truerp.in</a></p>
                </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white p-10 rounded-lg shadow-lg mx-5">
              <h3 className='text-slate-600 mb-4 text-2xl'>Get In Touch</h3>
              <p className='text-slate-600 mb-4'>Don't wait. Automate your entire workflow effortlessly.</p>
              <form onSubmit={handleSubmit}>
                <div className="p-2 grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className='p-4 border border-gray-200 rounded-md' type="text" name="name"  value={formData.name}  onChange={handleChange} placeholder='Your Name' required/>
                    <input className='p-4 border border-gray-200 rounded-md' type="email" name='email'  value={formData.email}  onChange={handleChange} placeholder='Your Email' required/>
                  </div>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full p-4 border border-gray-200 rounded-md" required="" />
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Message" className="p-4 border border-gray-200 rounded-md" required=""></textarea>
                </div>

                  <div className="w-full flex justify-center">
                    <div className="">
                      <button type="submit" className="bg-blue-700 w-50 rounded-full p-2 text-white py-4 text-center hover:bg-blue-800 hover:scale-105 transition-all duration-700">Send Message</button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}
