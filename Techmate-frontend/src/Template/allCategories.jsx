import React from "react";
import Categories from "../Data/Categories";
import { Link } from "react-router-dom";

const AllCategories = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[85vh] text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
        <h1 className="text-6xl font-extrabold uppercase drop-shadow-lg">
          Welcome to TechMate
        </h1>
        <p className="mt-6 text-xl max-w-4xl leading-relaxed">
          Discover the best deals on the latest electronics! Explore categories
          like{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Smartphones
          </span>
          ,{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Laptops
          </span>
          ,{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Cameras
          </span>
          ,{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Home Appliances
          </span>
          ,{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Gaming Consoles
          </span>
          ,{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Wearable Tech
          </span>
          , and{" "}
          <span className="font-bold text-cyan-200 drop-shadow-md">
            Audio Systems
          </span>
          .
        </p>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-5 bg-gray-100 md:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          All Available Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-60 object-cover"
                src={category.image}
                alt={category.category}
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category.category}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/category/${category.category}`}
                  className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
