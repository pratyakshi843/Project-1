import React, { useEffect , useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons


function Contact() {
  const navigate = useNavigate();
  let [contact , setContact] = useState({
    name : "",
    email : "",
    subject : "",
    message : "",
  })

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  }

  const handlesubmit = async (e) => {
      e.preventDefault();
      const { name, email, subject, message } = contact;
  
      try {
        const url = "https://techmate-backend-17y1.onrender.com/contact/feedback";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
  
        const result = await response.json();
  
        if (!result.success) {
          return handleError(result.message || "Invalid Details");
        } else {
          handleSuccess("Your feedback save successfully");
          navigate("/");
        }
      } catch (error) {
        handleError(error.message || "An error occurred during feedback submission.");
      }
    };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12" id="contactUs">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Get in Touch with Us
      </h1>
      <p className="text-lg text-center text-gray-600">
        Have any questions, feedback, or inquiries? Our team is here to help
        you! Whether you're looking for product details, need assistance, or
        want to share your thoughts, feel free to reach out to us. We are always
        happy to assist you in any way we can.
      </p>
      <div className="flex justify-center items-center py-10 md:py-20 mx-5">
        <div className="relative flex flex-col lg:flex-row bg-slate-400 w-full max-w-6xl rounded-3xl overflow-hidden shadow-lg">
          <img
            src="../../images/Ellipse3.png"
            className="absolute -top-12 -left-10 w-20 md:w-32 lg:w-40"
            alt="Decorative"
          />

          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6 md:p-10 lg:p-20 bg-white border-2">
            <h1
              data-aos="fade-down"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left"
            >
              Contact Us
            </h1>
            <p
              className="py-4 md:py-6 text-sm md:text-base text-center lg:text-left text-slate-700"
              data-aos="fade-down"
            >
              We would love to hear from you! Whether you have a question,
              feedback, or want to collaborate, feel free to get in touch with
              us.
            </p>
            <div className="">
              <div
                className="text-sm md:text-base text-center lg:text-left text-slate-700"
                data-aos="fade-down"
              >
                <strong>Office Address:</strong> <br />
                123 Business St., Suite 400 <br />
                New York, NY 10001, USA <br />
                <br />
                <strong>Phone:</strong> +123 456 7890 <br />
                <strong>Email:</strong> contact@yourcompany.com
              </div>

              {/* Business Hours */}
              <div
                className="text-sm md:text-base text-center lg:text-left text-slate-700 mt-4"
                data-aos="fade-down"
              >
                <strong>Business Hours:</strong> <br />
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat - Sun: Closed
              </div>
            </div>
            {/* Social Media Icons Section */}
            <div className="flex justify-center items-center  space-x-6 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600 hover:text-blue-800"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-400 hover:text-blue-600"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-pink-600 hover:text-pink-800"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-700 hover:text-blue-900"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center w-full lg:w-1/2 bg-blue-900 p-6 md:p-8">
            <div
              className="card bg-base-100 w-full max-w-md shadow-2xl"
              data-aos="zoom-in"
            >
              <form className="card-body" onSubmit={handlesubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-700">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-700">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>

                {/* Added Subject Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-700">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of your message"
                    className="input input-bordered"
                    name="subject"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-700">Message</span>
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered"
                    name="message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
