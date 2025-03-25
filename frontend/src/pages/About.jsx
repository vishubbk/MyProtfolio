import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Picture from "../assets/WhatsApp Image 2025-03-25 at 23.38.29_9a323701.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col md:flex-row w-11/12 mx-auto px-4 py-12 gap-8">

        {/* Left Section - Profile Image */}
        <div className="md:w-1/3 flex flex-col mt-30 items-center">
          <img
            src={Picture}
            alt="Profile Picture"
            className="w-60 h-60 rounded-full shadow-lg object-cover border-4 border-indigo-500"
          />
          <p className="mt-4 text-lg font-semibold text-gray-700">I am a passionate developer.</p>
        </div>

        {/* Right Section - About Me */}
        <div className="md:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-indigo-700">About Me</h1>
          <p className="text-lg mt-4 text-gray-800 leading-relaxed">
            Hello! My name is **Preetabh Awasthi**, and I am a **Full-Stack Web Developer**
            with expertise in JavaScript and MongoDB. I have a deep passion for creating efficient,
            scalable, and user-friendly web applications. I specialize in **React.js, Node.js, Express.js,
            and MongoDB**, along with experience in integrating **Razorpay for payment processing**
            and **Cloudinary for file storage**.
          </p>

          <p className="text-lg mt-4 text-gray-800 leading-relaxed">
            I am also working on an advanced **voice assistant project** using **Python**, exploring
            the power of AI in automation. Along with development, I have hands-on experience
            with **GitHub Premium** and **Render for deployment**.
          </p>

          <p className="text-lg mt-4 text-gray-800 leading-relaxed">
            My journey in web development started with a curiosity for technology and has grown
            into a passion for building innovative digital solutions. Whether it's designing sleek
            **UI/UX**, optimizing backend performance, or implementing payment gateways, I love
            tackling challenges and continuously learning.
          </p>

          <p className="text-lg mt-4 text-gray-800 leading-relaxed">
            When I’m not coding, I explore new technologies, contribute to open-source projects,
            and stay updated with industry trends. I believe in **lifelong learning and teamwork**,
            making sure that every project I work on meets high standards of quality and efficiency.
          </p>
        </div>
      </div>

      {/* Study Information Section */}
      <div className="study-info mt-16 px-4 py-8 bg-gray-100 rounded-xl shadow-lg w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 text-center">📚 Study Information</h2>
        <div className="mt-6 text-lg text-gray-800 leading-relaxed">
          <p><strong>📌 School:</strong> W.C.A Inter College, Barabanki</p>
          <p><strong>✅ 10th Percentage:</strong> 86%</p>
          <p><strong>✅ 12th Percentage:</strong> 65%</p>
          <p><strong>🎓 College:</strong> Jawahar Lal Nehru National PG College Barabanki</p>
          <p><strong>📖 Current Study:</strong> BCA - 2nd Semester</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
