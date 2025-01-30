import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

function Sale() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let all = "";

  return (
    <div>
      <div
        className="hero my-20"
        style={{
          backgroundImage: "url(../../../Electronics/bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center my-20">
          <div className="" data-aos="fade-up" data-aos-duration="1500">
            <h1
              className="mb-5 text-5xl font-extrabold text-white"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              Big Electronics Sale – Up to 50% Off!
            </h1>
            <p
              className="mb-5 text-xl text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Discover the latest gadgets and devices at unbeatable prices.
              Whether you're looking for a new smartphone, laptop, or home
              electronics, we’ve got you covered with amazing discounts on
              top-rated products.
            </p>
            <p
              className="mb-5 text-lg text-white"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Don’t miss out on our exclusive offers! Shop now and save big on
              the best in tech.
            </p>
            <div
              className="mt-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <Link
                to={`/category/${all}`}
                className="btn btn-primary px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
