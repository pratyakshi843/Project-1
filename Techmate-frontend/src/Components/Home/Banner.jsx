import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stat from "./Stat";
import { Link } from "react-router-dom";

function Banner() {

  function serviceScroll() {
    let service = document.querySelector("#Services");
    console.log(service)
    if (service) {
      service.scrollIntoView({ behavior: "smooth" });
    }
  }


  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center lg:gap-36 gap-8 lg:h-full px-4 lg:px-0">
        <img
          src="../../images/banner.png"
          className="z-0 h-72 lg:h-[600px] md:w-[45vw]"
          alt="Banner"
          data-aos="fade-up"
        />

        <img
          src="../../images/Rectangle.png"
          className="hidden md:block absolute -bottom-12 lg:-bottom-24 lg:right-[4rem] right-4 w-32 lg:w-auto -z-30"
          alt="Rectangle"
          data-aos="fade-down"
        />

        <div className="text-center  lg:ml-20 mt-4 lg:mt-10">
          <h1
            className="text-3xl lg:text-5xl font-bold leading-tight"
            data-aos="fade-down"
          >
            Techmate today
          </h1>
          <p
            className="py-4 text-sm lg:text-base mx-10 lg:mx-0"
            data-aos="fade-up"
          >
            A leading digital marketing agency dedicated to helping businesses
            thrive in the digital age. With a team of experienced professionals,
            we provide innovative and effective solutions to elevate your online
            presence and drive tangible results.
          </p>

          <Stat />

          <Link
            to="#Services"
            className="btn btn-primary text-sm lg:text-base text-white rounded-full px-6 lg:px-8 mt-4"
            data-aos="fade-up"
            onClick={()=>serviceScroll()}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
