import React from 'react'

export const Client = () => {
  const clients = [
    { name: "NovaTech Systems", img: "/clients/1.jpg" },
    { name: "GreenLeaf Papers", img: "/clients/2.jpg" },
    { name: "Ajwa Footwear", img: "/clients/3.jpg" },
    { name: "Sunstar Pharma", img: "/clients/4.jpg" },
    { name: "Bharat Foods", img: "/clients/5.jpg" },
    { name: "Nexon Electronics", img: "/clients/6.jpg" },
    { name: "SVA", img: "/clients/7.jpg" },
    { name: "EverGreen Timberworks", img: "/clients/8.jpg" },
    { name: "RubberEx Industries", img: "/clients/9.jpg" },
    { name: "BrightStar Publishing", img: "/clients/10.jpg" },
    { name: "PrintWave Solutions", img: "/clients/11.jpg" },
    { name: "Medicare Pharmaceuticals", img: "/clients/12.jpg" },
    { name: "RubberEX Industries", img: "/clients/13.jpg" },
    { name: "BrightStar Publishing", img: "/clients/14.jpg" },
    { name: "PrintWave Solutions", img: "/clients/15.jpg" },
    { name: "Ecoplast Polymers", img: "/clients/16.jpg" },
    { name: "Minerex Mining", img: "/clients/17.jpg" },
    { name: "PetroMax Energy", img: "/clients/18.jpg" },
    { name: "MechPro Machinery", img: "/clients/19.jpg" },
    { name: "CemStar Cement", img: "/clients/20.jpg" }
  ];
  return (
    <section id="client" className="p-10 pt-22 bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl text-slate-600 font-semibold mb-6">Our Clients</h1>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg mb-4"></div>
          <p className="text-gray-600 mb-6">Our Happy Clients</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 mt-20">
          {clients.map(({ name, img }, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-sm shadow-md hover:shadow-lg transition">
              <img src={img} alt={name} className="h-24 mx-auto object-contain" />
              <p className="text-center my-2 text-sm">{name}</p>
            </div>
          ))}
        </div>
      </section>
  )
}
