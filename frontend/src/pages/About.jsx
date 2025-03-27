import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {animate, motion} from 'motion/react'
import Picture from "../assets/WhatsApp Image 2025-03-25 at 23.38.29_9a323701.jpg";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=""
      >
    <>
      <Navbar />
      <div className="container  flex flex-col md:flex-row w-11/12 mx-auto px-4 py-12 gap-8">

        {/* Left Section - Profile Image */}
        <motion.div

        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{animate:0.2}}

        className="md:w-1/3 flex flex-col mt-30 items-center">
          <img
            src={Picture}
            alt="Profile Picture"
            className="w-60 h-60 rounded-full shadow-lg object-cover border-4 border-indigo-500"
          />
          <p className="mt-4 text-lg font-semibold text-gray-700">I am a passionate developer.</p>
        </motion.div>

        {/* Right Section - About Me */}
        <div className="md:w-2/3 mt-20 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
    About Me
  </h1>

  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
    Hello! My name is <span className="text-blue-500 font-bold">Preetabh Awasthi</span>, and I am a
    <span className="text-red-500 font-bold"> Full-Stack Web Developer</span> with expertise in
    <span className="text-green-500 font-bold"> JavaScript</span> and
    <span className="text-indigo-500 font-bold"> MongoDB</span>.
    I specialize in <span className="text-purple-500 font-bold">React.js</span>,
    <span className="text-yellow-500 font-bold">Node.js</span>,
    <span className="text-orange-500 font-bold">Express.js</span>, and
    <span className="text-teal-500 font-bold">MongoDB</span>, with experience in integrating
    <span className="text-pink-500 font-bold">Razorpay</span> for payments and
    <span className="text-cyan-500 font-bold">Cloudinary</span> for file storage.
  </p>

  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
    I am also working on an advanced <span className="text-indigo-500 font-bold">voice assistant project</span> using
    <span className="text-blue-500 font-bold">Python</span>, exploring AI-powered automation.
    Along with development, I have hands-on experience with
    <span className="text-green-500 font-bold">GitHub Premium</span> and
    <span className="text-purple-500 font-bold">Render for deployment</span>.
  </p>

  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
    My journey in web development started with a curiosity for technology and has grown into a passion
    for building innovative digital solutions. Whether it's designing sleek
    <span className="text-yellow-500 font-bold"> UI/UX</span>, optimizing backend performance,
    or implementing payment gateways, I love tackling challenges and continuously learning.
  </p>

  <p className="text-lg mt-4 text-gray-700 leading-relaxed">
    When I’m not coding, I explore new technologies, contribute to open-source projects, and
    stay updated with industry trends. I believe in
    <span className="text-orange-500 font-bold">lifelong learning</span> and
    <span className="text-teal-500 font-bold">teamwork</span>, ensuring every project meets high standards of quality and efficiency.
  </p>
</div>

      </div>

      {/* Study Information Section */}
      <div className="study-info mt-16 px-6 py-8 bg-white rounded-xl shadow-lg w-11/12 mx-auto border border-gray-300">
  <h2 className="text-3xl font-bold text-gray-800 text-center">📚 Study Information</h2>
  <div className="mt-6 text-lg text-gray-700 leading-relaxed">
    <p><strong className="text-blue-600">📌 School:</strong> W.C.A Inter College, Barabanki</p>
    <p><strong className="text-red-500">✅ 10th Percentage:</strong> 86%</p>
    <p><strong className="text-orange-500">✅ 12th Percentage:</strong> 65%</p>
    <p><strong className="text-green-600">🎓 College:</strong> Jawahar Lal Nehru National PG College Barabanki</p>
    <p><strong className="text-indigo-600">📖 Current Study:</strong> BCA - 2nd Semester</p>
  </div>
</div>


      <Footer />
    </>
    </motion.div>
  );
};

export default About;
