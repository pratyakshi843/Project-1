import React from "react";
import { FaCheckCircle, FaCrown, FaStar } from "react-icons/fa";
import checkoutHandle from "../../Payment/Payment";
import { useNavigate } from "react-router-dom";

const PricingCards = () => {
  const navigate = useNavigate();

  const handlePayment = async (amount) => {
    await checkoutHandle(amount, navigate);
  };

  const pricingOptions = [
    {
      icon: <FaCheckCircle className="text-4xl text-blue-500 mx-auto" />,
      title: "Basic Plan",
      price: 999,
      description:
        "Ideal for individuals and small businesses just starting out. Get essential graphic design services at an affordable price.",
      services: ["Logo Design", "Social Media Post", "Business Card"],
      buttonLabel: "Buy Now",
    },
    {
      icon: <FaStar className="text-4xl text-green-500 mx-auto" />,
      title: "Standard Plan",
      price: 1499,
      description:
        "Perfect for growing businesses. Enjoy more comprehensive design services tailored to your needs.",
      services: [
        "Logo Design",
        "Social Media Post",
        "Business Card",
        "Brochure Design",
        "Banner Design",
      ],
      buttonLabel: "Buy Now",
    },
    {
      icon: <FaCrown className="text-4xl text-yellow-500 mx-auto" />,
      title: "Premium Plan",
      price: 1999,
      description:
        "The best choice for established businesses. Get premium design solutions to elevate your brand.",
      services: [
        "Logo Design",
        "Social Media Post",
        "Business Card",
        "Brochure Design",
        "Banner Design",
        "Flyer Design",
        "Packaging Design",
      ],
      buttonLabel: "Buy Now",
      isPremium: true,
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card ${
                option.isPremium
                  ? "bg-yellow-100 border-yellow-500"
                  : "text-primary-content bg-white"
              } shadow-lg w-96 mx-auto flex flex-col justify-between`}
            >
              <div className="card-body flex-grow">
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h2 className="text-gray-600 text-center text-xl font-semibold">
                  {option.title}
                </h2>
                <p className="text-center text-gray-700 mt-2">
                  {option.description}
                </p>
                <p className="text-center text-4xl font-bold text-gray-800 mt-4">
                  Rs.{option.price}
                </p>
                <ul className="text-center text-gray-600 space-y-1 mt-4">
                  {option.services.map((service, i) => (
                    <li key={i} className="flex items-center justify-start">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-actions justify-center mt-6 mb-4">
                <button
                  className="btn btn-primary text-white"
                  onClick={() => {
                    handlePayment(option.price);
                  }}
                >
                  {option.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
