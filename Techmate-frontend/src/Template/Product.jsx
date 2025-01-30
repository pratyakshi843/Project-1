import React from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import categoriesData from "../Data/Data";
import hot_Deals_Data from "../Data/Hot_deal";
import popular_Week_Data from "../Data/popular_deals";
import checkoutHandle from "../Payment/Payment";

function Product() {
  const { category } = useParams();
  let filteredProducts = [];

  if (category === "Hot_Deals") {
    filteredProducts = hot_Deals_Data;
  }else if (category === "all") {
    filteredProducts = categoriesData;
  }else if (category === "popular_week") {
    filteredProducts = hot_Deals_Data;
  }else if (category === "popular_sales") {
    filteredProducts = popular_Week_Data;
  }else {
    filteredProducts = categoriesData.filter(
      (item) => item.category === category
    );
  }

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center h-[85vh] text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
          <h1 className="text-6xl font-extrabold uppercase drop-shadow-lg">
            Welcome to TechMate
          </h1>
          <p className="mt-6 text-xl max-w-4xl leading-relaxed">
            Discover unbeatable deals on the latest tech! From hot deals to
            popular electronics, TechMate is your one-stop shop for innovation.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100">
            Explore Now
          </button>
        </div>

        {/* Products Section */}
        <div className="py-16 px-5 bg-gray-100 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Latest Electronics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse through our handpicked collection of top-notch gadgets and
              electronics. Quality guaranteed!
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden"
                key={index}
              >
                <div className="w-full mt-5 flex items-center justify-center">
                  <img
                    className="w-96 h-60 "
                    src={
                      product.image ||
                      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    }
                    alt={product.name}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.title}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.briefDescription}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-purple-600">
                      {product.price}
                    </span>
                    <span className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />{product.rating}
                    </span>
                  </div>
                  <button
                    className="mt-6 w-full flex items-center justify-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                    onClick={() => checkoutHandle(product.price)}
                  >
                    <FaShoppingCart className="mr-2" /> Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
