import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPalette, FaMobileAlt, FaEllipsisH } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconStyles = "text-5xl md:text-6xl p-4 rounded-2xl shadow2";

  return (
    <>
      <div
        id="Services"
        className="my-16 mx-4 md:my-28 md:mx-20 py-10 px-6 md:px-16 rounded-2xl flex flex-col gap-10  items-center shadow3"
      >
        <div className="w-full md:w-1/2 text-center ">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
          >
            Our Services
          </h1>
          <p
            className="text-slate-500 font-medium text-sm md:text-base"
            data-aos="fade-down"
          >
            Discover our diverse range of offerings, from stunning graphic
            designs that elevate your brand to top deals on electronics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full md:gap-10 md:w-full items-center justify-between">
          <div
            className="w-full sm:w-[48%] md:w-full lg:w-[30%] p-8 bg-white rounded-xl border-2 flex flex-col items-center gap-4"
            data-aos="fade-down"
          >
            <FaPalette
              className={`${iconStyles} text-green-600 bg-green-100`}
            />
            <p className="text-center text-base md:text-xl font-semibold">
              Graphic Design
            </p>
            <p className="text-slate-500 text-sm md:text-base text-center">
              Elevate your brand with creative, customized graphic designs, from
              logos to marketing materials, crafted to perfection.
            </p>
          </div>

          <div
            className="w-full sm:w-[48%] md:w-full lg:w-[30%] p-8 bg-white rounded-xl border-2 flex flex-col items-center gap-4"
            data-aos="fade-down"
          >
            <FaMobileAlt
              className={`${iconStyles} text-purple-600 bg-purple-100`}
            />
            <p className="text-center text-base md:text-xl font-semibold">
              Electronic Deals
            </p>
            <p className="text-slate-500 text-sm md:text-base text-center">
              Access exclusive discounts on the latest electronic gadgets,
              including smartphones, laptops, and home appliances.
            </p>
          </div>

          <div
            className="w-full sm:w-[48%] md:w-full lg:w-[30%] p-8 bg-white rounded-xl border-2 flex flex-col items-center gap-4"
            data-aos="fade-down"
          >
            <FaEllipsisH
              className={`${iconStyles} text-orange-600 bg-orange-100`}
            />
            <p className="text-center text-base md:text-xl font-semibold">
              Many more..
            </p>
            <p className="text-slate-500 text-sm md:text-base text-center">
              Explore a wide array of additional services, needs, including tech
              support, product reviews, and personalized solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
