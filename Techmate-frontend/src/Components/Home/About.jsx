import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        id="aboutus"
        className="hero bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-10 md:py-20"
      >
        <div className="hero-content flex flex-col lg:flex-row gap-10 lg:gap-40 items-center">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="../../images/about.png"
              className="max-w-xs md:max-w-sm lg:max-w-md rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              alt="About Us"
              data-aos="fade-up"
            />
            <img
              src="../../images/Ellipse2.png"
              className="absolute -bottom-8 md:-bottom-16 -right-4 md:-right-16 -z-10 w-20 md:w-32 lg:w-40 opacity-50"
              alt="Background Ellipse"
            />
          </div>

          {/* Text Section */}
          <div
            className="relative text-center lg:text-left px-4 md:px-0"
            data-aos="fade-down"
          >
            <img
              src="../../images/Rectangle4.png"
              className="hidden md:block absolute -top-8 md:-top-16 -left-8 md:-left-16 -z-10 w-24 md:w-32 lg:w-40 opacity-40"
              alt="Background Rectangle"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
              About Us
            </h1>
            <div className=" flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 mt-4">
              <div
                className="flex items-center gap-4 flex-col shadow-lg p-5 rounded-md bg-white"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <FontAwesomeIcon
                  icon={faPalette}
                  className="text-2xl text-blue-900 bg-blue-200 p-2 rounded-2xl"
                />
                <p className="text-sm md:text-base text-gray-600">
                  Expert graphic design solutions to bring your visions to life.
                </p>
              </div>
              <div
                className="flex items-center gap-4 flex-col shadow-lg p-5 rounded-md bg-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-2xl text-purple-900 bg-purple-200 p-2 rounded-2xl"
                />
                <p className="text-sm md:text-base text-gray-600">
                  Innovative tech solutions for businesses and individuals.
                </p>
              </div>
              <div
                className="flex items-center gap-4 flex-col shadow-lg p-5 rounded-md bg-white"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="text-2xl text-green-900 bg-green-200 p-2 rounded-2xl"
                />
                <p className="text-sm md:text-base text-gray-600">
                  Engineering state-of-the-art electronics tailored for you.
                </p>
              </div>
            </div>
            <p className="py-4 text-sm md:text-base text-gray-600 leading-relaxed">
              At Techmate, we’re dedicated to providing exceptional services in
              graphic design, electronics, and more. Our team of experts strives
              to bring your visions to life through creative designs and
              innovative solutions.
            </p>
            <p className="py-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Our values are rooted in commitment, innovation, and excellence.
              Every project we undertake is infused with a passion for quality,
              ensuring that our clients receive nothing short of the best.
            </p>
            <p className="py-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Together, let’s redefine the possibilities of design and
              technology!
            </p>
            <button
              className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300"
              data-aos="fade-up"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
