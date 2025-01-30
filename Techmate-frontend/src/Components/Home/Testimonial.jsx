import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gradient-to-r from-blue-200 via-green-100 to-green-50">
      <div
        className="text-center mb-10 space-y-4 px-6 md:px-0"
        data-aos="fade-up"
      >
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
          What our happy clients say
        </h1>
        <p className="text-center text-xl font-bold text-gray-500 md:text-2xl">
          Several selected clients, who already believe in our service.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="text-gray-600 pt-8" id="reviews">
          <div className="mx-4 sm:mx-10 md:mx-20 px-6 md:px-12 xl:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 space-y-10">
              {/* Six Testimonial Cards */}
              {[
                {
                  img: "https://randomuser.me/api/portraits/women/12.jpg",
                  name: "Daniella Doe",
                  role: "Mobile Developer",
                  feedback:
                    "Working with this team has been an incredible experience. Their attention to detail and dedication to the project made all the difference. I couldn’t be happier with the outcome!",
                },
                {
                  img: "https://randomuser.me/api/portraits/women/14.jpg",
                  name: "Jane Doe",
                  role: "Marketing Specialist",
                  feedback:
                    "The service was exceptional from start to finish. They helped us transform our marketing strategies and reach our target audience in ways we never thought possible. Highly recommend!",
                },
                {
                  img: "https://randomuser.me/api/portraits/women/18.jpg",
                  name: "Yanick Doe",
                  role: "Software Developer",
                  feedback:
                    "This team really understood our technical requirements and delivered high-quality solutions that exceeded expectations. The collaboration was smooth, and they’re definitely a partner we trust.",
                },
                {
                  img: "https://randomuser.me/api/portraits/women/2.jpg",
                  name: "Emily Davis",
                  role: "Mobile Developer",
                  feedback:
                    "I was impressed by the level of professionalism and expertise this team brought to the table. Their work has significantly improved the user experience in our mobile application.",
                },
                {
                  img: "https://randomuser.me/api/portraits/women/62.jpg",
                  name: "Andy Doe",
                  role: "Project Manager",
                  feedback:
                    "I’ve worked with several teams in the past, but this one stands out for its creativity and efficiency. They provided innovative solutions and ensured everything was delivered on time.",
                },
                {
                  img: "https://randomuser.me/api/portraits/women/19.jpg",
                  name: "Yanndy Doe",
                  role: "Mobile Developer",
                  feedback:
                    "The support from this team has been outstanding. They not only provided the services we asked for but also went above and beyond to offer solutions that helped us optimize our processes.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                  data-aos="zoom-in"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={testimonial.img}
                      alt={`${testimonial.name} avatar`}
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700">
                        {testimonial.name}
                      </h6>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-8">{testimonial.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
