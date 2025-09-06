import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const ConvertBlack = useRef(null);
  const ConvertWhite = useRef(null);

  // Major Projects
  const MajorProjects = [
    {
      name: "Fullstack Mall",
      description:
        "A full-stack e-commerce solution with secure payments, cart, and admin dashboard.",
      image:
        "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500",
    },
    {
      name: "Ride Booking App",
      description:
        "Real-time ride booking app with location tracking, pricing engine, and Razorpay integration.",
      image:
        "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=500",
    },
  ];

  // Minor Projects
  const MinorProjects = [
    {
      name: "To-Do App",
      description: "Task manager with real-time updates and auth system.",
      image:
        "https://images.unsplash.com/photo-1671418285905-acc08f6c4b59?w=500",
    },
    {
      name: "Weather App",
      description: "Get live weather updates using OpenWeather API.",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500",
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio showcasing skills and work.",
      image:
        "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=500",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(ConvertBlack.current, {
          scrollTrigger: {
            trigger: ConvertBlack.current,
            start: "top -=500",
            toggleActions: "play none none reverse",
          },
          backgroundColor: "black",
          color: "white",
        });
      },

      "(min-width: 769px)": function () {
        gsap.to(ConvertBlack.current, {
          scrollTrigger: {
            trigger: ConvertBlack.current,
            start: "top -=300",
            toggleActions: "play none none reverse",
          },
          backgroundColor: "black",
          color: "white",
          duration: 1,
        });
      },
    });
  });
useGSAP(() => {
  ScrollTrigger.matchMedia({
    // 📱 Mobile
    "(max-width: 768px)": function () {
      gsap.to(ConvertWhite.current, {
        scrollTrigger: {
          trigger: ConvertWhite.current,
          start: "top top", // ✅ "top of element" meets "top of viewport"
          end: "bottom top", // optional: jab element khatam ho jaye
          toggleActions: "play none none reverse",
          markers: true, // debugging ke liye
        },
        backgroundColor: "black",
        color: "white",
        duration: 0.8,
      });
    },

    // 💻 Desktop
    "(min-width: 769px)": function () {
      gsap.to(ConvertWhite.current, {
        scrollTrigger: {
          trigger: ConvertWhite.current,
          start: "top -=300", // ✅ jyada realistic
          toggleActions: "play none none reverse",
          markers: true,
        },
        backgroundColor: "white",
        color: "black",
        duration: 1,
      });
    },
  });
});


  return (
    <div ref={ConvertBlack} className="min-h-screen flex flex-col">
      <div ref={ConvertWhite}>
      {/* Navbar */}
      <Navbar />

      {/* Projects Section */}
      <div className="px-6 py-20 max-w-7xl mx-auto flex-1">
        {/* Hero Intro */}
        <div className="h-[50vh] rounded-2xl flex flex-col justify-center items-center text-center px-6 mt-20  shadow-lg">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            🚀 Projects That Define Me
          </h2>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            Here are some of my **Major** and **Minor** projects that showcase
            my skills and creativity.
          </p>
        </div>

        {/* Major Projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            🌟 Major Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {MajorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mt-3">{project.description}</p>
                  <div className="mt-5">
                    <span className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                      Major Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            🔹 Minor Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {MinorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      Minor Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <div className="text-center mt-28">
          <h2 className="text-3xl font-bold text-blue-700">
            Visit My GitHub Profile
          </h2>
          <a
            href="https://github.com/vishubbk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default Projects;
