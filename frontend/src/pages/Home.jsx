import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TopLanguages from "../components/TopLanguages";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <motion.div
      className="bg-[#f6e9e9] text-gray-900 min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="container mt-20 min-h-[80vh] mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-8 gap-8">

        {/* Left - Profile Image */}
        <motion.div
          className="w-full md:w-[45%] p-6 rounded-lg shadow-lg flex flex-col items-center bg-[#EEEE]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full max-w-[400px] rounded-lg object-cover border-4 border-indigo-500"
            src="https://fetchpik.com/images/fetchpik.com-iconscout-sDIhKSkoUx.png"
            alt="Profile Picture"
          />
          <div className="social-links mt-4 flex justify-center gap-4">
            <a href="https://github.com/vishubbk" target="_blank" rel="noreferrer">
              <img
                className="w-28 hover:scale-105 transition-transform duration-300"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </div>
        </motion.div>

        {/* Right - Introduction */}
        <motion.div
          className="w-full md:w-[50%] p-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-4 text-center md:text-left">
            Hi, I am <span className="text-gray-900">Preetabh</span>
          </h1>
          <p className="text-lg text-center md:text-left">
            A Full-Stack Developer & Design Enthusiast.
          </p>
          <p className="mt-3 text-lg text-center md:text-left">
            Please visit the{" "}
            <a
              href="https://github.com/vishubbk"
              className="hover:text-indigo-600 underline transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>{" "}
            for the source code.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-indigo-500 mb-2">About Me</h2>
            <p className="text-lg">
              I specialize in creating{" "}
              <span className="font-bold text-indigo-600">modern, responsive web applications</span>
              using <span className="font-bold text-blue-600">React, Vite, and Tailwind CSS</span>.
              I have expertise in <span className="font-bold text-blue-600">JavaScript ,NodeJs ,ExpressJs</span>,{" "}
              <span className="font-bold text-blue-600">MongoDB</span>, and integrating{" "}
              <span className="font-bold text-red-500">payment gateways like Razorpay</span>.
              I also have experience with <span className="font-bold text-indigo-500">GitHub Premium</span>,{" "}
              <span className="font-bold text-indigo-500">Cloudinary</span> for file storage,
              and deploying applications using <span className="font-bold text-indigo-500">Render</span>.
              Additionally, I am working on a <span className="font-bold text-yellow-600">Major project</span>{" "}
              using <span className="font-bold text-yellow-600">Python</span>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Top Languages Section */}
      <motion.div
        className="py-16 px-6"
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <TopLanguages />
      </motion.div>


      {/* Top Languages Section */}
      <motion.div
        className="py-16 px-6"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >

      </motion.div>

<Footer/>
    </motion.div>
  );
};

export default Home;
