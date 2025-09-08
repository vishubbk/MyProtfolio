import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {

  // Major Projects
  const MajorProjects = [
    {
      name: "Fullstack Mall",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "NodeJs",
        "Express",
        "React",
        "TailwindCSS",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500",
        link:"https://biggest-shop-mart.onrender.com/#/"
    },

    {
      name: "K72 WEBSITE CLONE",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "NodeJs",
        "Express",
        "React",
        "TailwindCSS",
      ],
      link:"https://k72-yt.onrender.com/#/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1_e_t8K22OShGSRTqe4PpQ_jNN-aWh20iw&s",
    },
  ];

  // Minor Projects
  const MinorProjects = [
    {
      name: "To-Do App",
      description: ["React", "NodeJs", "MongoDB", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1671418285905-acc08f6c4b59?w=500",
        link:"https://leptoptztodos.netlify.app/",
    },
    {
      name: "To-Do App2",
      description: ["React", "OpenWeather API", "TailwindCSS"],
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230518223324/Screenshot-from-2023-05-18-22-33-11.png",
        link:"https://url-short-p5mg.onrender.com/#/",
    },
     
    {
      name: "PASSWORD-MANAGER",
      description: ["React", "TailwindCSS", "GSAP"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1Hj9peSEEAZD6jdYr7yIEdKthmic6a4Svcxit0-K5u0jh9p23ti0qeRUGxQVywz_sO0&usqp=CAU",
          link:"https://url-short-p5mg.onrender.com/#/PasswordManager",
    },
    {
      name: "TEXT-TO-PDF-CONVERTER",
      description: ["React", "TailwindCSS", "GSAP"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzhSCBSrI10Yq-rBOKDQiH3QzdFShzTJf61kVQbLa5g6_4PwupzZm4LiiDObiYS4B6E0&usqp=CAU",
          link:"https://url-short-p5mg.onrender.com/#/PdfCovert",
    },
    {
      name: "QR-CODE-GENRATOR",
      description: ["React", "TailwindCSS",],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjnYzJHAaOwtrn1GqT0EJ3Bf33_JF5sAy0OrXyhjiZJ_UWQYM1FuaOFgFIBqadLwnNFY&usqp=CAU",
          link:"https://url-short-p5mg.onrender.com/#/QrCode",
    },
  ];



  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <div >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="h-[50vh] flex flex-col justify-center items-center text-center px-6 mt-20 shadow-lg rounded-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 drop-shadow-lg">
            🚀 Projects That Define Me
          </h2>
          <p className="text-lg md:text-xl max-w-2xl opacity-80">
            A showcase of my <span className="font-semibold">Major</span> and{" "}
            <span className="font-semibold">Minor</span> projects, blending
            creativity and technology.
          </p>
        </div>

        {/* Major Projects */}
        <div className="mt-20 ">
          <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            🌟 Major Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
            {MajorProjects.map((project, index) => (
              <div
                key={index}
                className="hover:border-blue-700 hover:border-2 border-0 transition-all bg-blue-100 rounded-2xl shadow-md hover:shadow-2xl  duration-400 "
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
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.description.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a target="_blank" href={project.link}>
                       <span className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                      Major Project
                    </span>
                    </a>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center ">
            🔹 Minor Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
            {MinorProjects.map((project, index) => (
              <div
                key={index}
                className="hover:border-blue-700 hover:border-2 border-0 transition-all bg-white  rounded-xl shadow-sm hover:shadow-lg  duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {project.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {project.description.map((tech, i) => (
                      <li
                        key={i}


                        
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <a target="_blank" href={project.link}>
                      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                      Minor Project
                    </span>
                    </a>
                    
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
