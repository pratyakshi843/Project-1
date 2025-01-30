import React from "react";
import { FaPenNib, FaPalette, FaShapes, FaMagic } from "react-icons/fa";

const GraphicDesignServices = () => {
  const services = [
    {
      icon: (
        <FaPenNib className="text-5xl rounded-full p-2 bg-blue-100 text-blue-500 mx-auto" />
      ),
      title: "Logo Design",
      description:
        "Create unique and memorable logos to represent your brand effectively.",
    },
    {
      icon: (
        <FaPalette className="text-5xl rounded-full p-2 bg-green-100 text-green-500 mx-auto" />
      ),
      title: "Brand Identity",
      description:
        "Build a cohesive brand identity with visually appealing designs.",
    },
    {
      icon: (
        <FaShapes className="text-5xl rounded-full p-2 bg-purple-100 text-purple-500 mx-auto" />
      ),
      title: "Illustration",
      description:
        "Custom illustrations tailored to bring your ideas to life with creativity.",
    },
    {
      icon: (
        <FaMagic className="text-5xl rounded-full p-2 bg-yellow-100 text-yellow-500  mx-auto" />
      ),
      title: "Marketing Materials",
      description:
        "Design engaging marketing materials like brochures, banners, and posters.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50 my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Graphic Design Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignServices;
