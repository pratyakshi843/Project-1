import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative md:mx-12 mt-20">
      <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center lg:gap-36 gap-8 lg:h-full px-4 lg:px-0">

        <img
          src="../../Graphic/banner.jpg"
          className="-z-[1] h-80 lg:h-[500px]"
          alt="Banner"
          data-aos="fade-up"
        />

        <div className="text-center md:text-left  lg:ml-20 mt-4 lg:mt-10">
          <h1
            className="text-3xl lg:text-5xl font-bold leading-tight"
            data-aos="fade-down"
          >
            Graphic Designing Service
          </h1>
          <p
            className="py-4 text-sm text-center md:text-left lg:text-base mx-10 lg:mx-0"
            data-aos="fade-up"
          >
            A leading digital marketing agency dedicated to helping businesses
            thrive in the digital age. With a team of experienced professionals,
            we provide innovative and effective solutions to elevate your online
            presence and drive tangible results.
          </p>

          <button
            className="btn btn-primary text-sm lg:text-base text-white rounded-full px-6 lg:px-8 mt-4"
            data-aos="fade-up"
          >
            let's Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
