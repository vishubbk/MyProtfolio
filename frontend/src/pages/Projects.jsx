import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    name: "College Website",
    description: "A dynamic college website with student portal and event management.",
    image: "https://img.freepik.com/premium-photo/university-admission-web-banner_1281315-2211.jpg",
    link: "#",
  },
  {
    name: "Amazon Clone",
    description: "Amazon-inspired frontend with modern UI and interactive features.",
    image: "https://img.freepik.com/premium-photo/cloud-technology-icon-smartphone_117856-2700.jpg",
    link: "#",
  },
  {
    name: "Uber Clone",
    description: "Ride-sharing platform with booking and real-time tracking.",
    image: "https://images.unsplash.com/photo-1554260570-83dc2f46ef79?w=500",
    link: "#",
  },
  {
    name: "Portfolio",
    description: "A professional portfolio website with animations and interactive elements.",
    image: "https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?w=500",
    link: "#",
  },
  {
    name: "Netflix UI",
    description: "A streaming service UI replica with content browsing functionality.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500",
    link: "#",
  },
];

const Projects = () => {
  const circleRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 25,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-white flex flex-col">
      <Navbar />

      {/* Rotating Circle */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 mt-20 ">
        <div
          ref={circleRef}
          className="relative w-[280px] h-[280px] sm:w-[250px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center"
        >
          {projects.map((project, i) => {
            const angle = (i / projects.length) * (2 * Math.PI);
            // radius responsive
            const radius = window.innerWidth < 640 ? 110 : window.innerWidth < 1024 ? 140 : 160;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 
                bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center 
                rounded-xl shadow-lg cursor-pointer hover:scale-110 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <span className="text-xs sm:text-sm font-semibold text-center px-2">
                  {project.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400">{selectedProject.name}</h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 sm:px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-sm sm:text-base"
            >
              Open Project
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
