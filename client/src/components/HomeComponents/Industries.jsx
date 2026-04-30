import React from 'react'
import {
  FaIndustry, FaCogs, FaFlask, FaPaintBrush, FaLeaf, FaBuilding,
  FaFilter, FaShoppingBag, FaTshirt, FaUniversity, FaBolt,
  FaMicrochip, FaEye, FaUtensils, FaTags, FaShoppingCart,
  FaTint, FaGlobe, FaCube, FaMedkit, FaPrint,
  FaRecycle, FaBook, FaLifeRing, FaTree, FaCar
} from "react-icons/fa";


export const Industries = () => {
  const industries = [
    { name: "Manufacturing", icon: FaIndustry },
    { name: "Steel Industry", icon: FaCogs },
    { name: "Chemicals", icon: FaFlask },
    { name: "Cosmetic", icon: FaPaintBrush },
    { name: "Fiber", icon: FaLeaf },
    { name: "Concrete", icon: FaBuilding },
    { name: "Filter Mfg", icon: FaFilter },
    { name: "Garments", icon: FaShoppingBag },
    { name: "Textile", icon: FaTshirt },
    { name: "Cement & Lime", icon: FaUniversity },
    { name: "Electrical", icon: FaBolt },
    { name: "Electronics", icon: FaMicrochip },
    { name: "Optical", icon: FaEye },
    { name: "Food & Beverage", icon: FaUtensils },
    { name: "Leather", icon: FaTags },
    { name: "Footwear", icon: FaShoppingCart },
    { name: "Machinery", icon: FaCogs },
    { name: "Petroleum", icon: FaTint },
    { name: "Mining", icon: FaGlobe },
    { name: "Non Metal", icon: FaCube },
    { name: "Pharmaceuticals", icon: FaMedkit },
    { name: "Printing", icon: FaPrint },
    { name: "Plastic", icon: FaRecycle },
    { name: "Publishing", icon: FaBook },
    { name: "Rubber", icon: FaLifeRing },
    { name: "Wood", icon: FaTree },
    { name: "Automotive", icon: FaCar }
  ];
  return (
    <section id="industries" className="p-10 pt-22 bg-gray-100">
        <div className="pb-10 text-center">
          <h1 className=" text-3xl font-semibold mb-4 mt-2 text-slate-700">Applicable for Industries</h1>
          <div className="w-20 border border-b-2 border-blue-900 mx-auto rounded-lg mb-4"></div>
          <p className=" text-gray-600 mb-6">Below are the sectors where TRUERP is best for!</p>
        </div>
          <div className="px-20 grid xl:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map(({ name, icon: Icon }, index) => (
              <div key={index} className="bg-white rounded-lg p-2 py-3 border border-slate-300 shadow-sm text-center">
                <Icon className="mx-auto text-3xl text-blue-900 mb-1" />
                <p className="font-semibold">{name}</p>
              </div>
            ))}
          </div>
      </section>
  )
}
