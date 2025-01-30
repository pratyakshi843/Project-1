import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import shops_Data from "../Data/shops_Data";

function ShopsTemplate() {
    const { category } = useParams();
    let filteredProducts = [];

    if (category === "shops") {
      filteredProducts = shops_Data;
    }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[85vh] text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
          Our Trusted Shops
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-4xl leading-relaxed">
          Discover our partner shops across India offering top-notch electronics
          and exceptional services. Years of partnership and excellence
          guaranteed!
        </p>
      </div>

      <div className="py-16 px-5 bg-gray-100 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Partners</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the details of our partnered shops, their expertise, and
            locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shops_Data.map((shop, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {shop.name}
                </h3>
                <p className="text-gray-600 mb-4">{shop.briefDescription}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <GiAchievement className="mr-2 text-yellow-500" />
                  <span>{shop.yearsWithUs} years with us</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MdLocationOn className="mr-2 text-red-500" />
                  <span>{shop.address}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaStar className="mr-2 text-yellow-500" />
                  <span>{shop.rating} / 5</span>
                </div>
                <div className="text-sm text-gray-800">
                  <strong>Services:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    {shop.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopsTemplate;
