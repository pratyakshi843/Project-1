import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import shops_Data from "../Data/shops_Data";

function SearchShops() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredShops, setFilteredShops] = useState(shops_Data); // Filtered results

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = shops_Data.filter(
      (shop) =>
        shop.name.toLowerCase().includes(query) ||
        shop.address.toLowerCase().includes(query)
    );
    setFilteredShops(filtered);
  };

  return (
    <div className="py-8 px-5 bg-gradient-to-r from-purple-200 via-blue-300  to-white md:px-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Search Shops</h1>
        <p className="mt-2 text-lg text-gray-600">
          Find trusted shops by name or location.
        </p>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Search Results */}
      {filteredShops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
                <p className="flex items-center text-gray-600 mt-2">
                  <MdLocationOn className="mr-2 text-red-500" />
                  {shop.address}
                </p>
                <p className="flex items-center text-gray-600 mt-2">
                  <GiAchievement className="mr-2 text-yellow-500" />
                  {shop.years} years with us
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Services:</strong> {shop.services.join(", ")}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    {shop.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No shops found matching your search.
        </p>
      )}
    </div>
  );
}

export default SearchShops;
