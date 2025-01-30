import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import AOS from "aos";

function Signup() {
  const navigate = useNavigate();
  const [signinfo, setsigninfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setsigninfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signinfo;
    if (!name || !email || !password) {
      return handleError("Please enter the complete details");
    }

    try {
      const url = "https://techmate-backend-17y1.onrender.com/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinfo),
      });
      const result = await response.json();
      if (!result.success) {
        return handleError(result.message);
      }else{
        handleSuccess("Signup Successfully");
        saveCookie( "Token" , result.token , 1);
        navigate("/");
      }
      
    } catch (error) {
      handleError(error.message || "An error occurred during signup");
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../Electronics/bg.avif)", // Same image as Login
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          className="hero-content text-neutral-content text-center p-4 "
          data-aos="fade-up"
        >
          <div
            className="glass rounded-2xl lg:p-10 md:w-[98vw] w-[80vw]"
            style={{ backgroundImage: "none" }}
          >
            <div
              className="hero-content flex-col lg:flex-row"
              data-aos="zoom-in"
            >
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-bold text-white">
                  Join Us Today!
                </h1>
                <p className="py-4 text-gray-200 text-sm lg:text-base">
                  Create an account to access exclusive features, personalized
                  content, and stay connected with our community. It's quick and
                  easy!
                </p>
              </div>
              <div
                className="card bg-base-100 md:p-4 shadow-2xl mt-4"
                data-aos="fade-left"
              >
                <form
                  className="card-body md:w-auto w-[75vw]"
                  onSubmit={handlesubmit}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="input input-bordered text-gray-800"
                      required
                      onChange={handlechange}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered text-gray-800"
                      required
                      onChange={handlechange}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      className="input input-bordered text-gray-800"
                      required
                      onChange={handlechange}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      data-aos="zoom-in"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="text-center mb-4 mx-4">
                  <p className="text-slate-600">
                    Already have an account?{" "}
                    <Link to="/login" className="link text-blue-500">
                      Log in here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
