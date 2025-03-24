import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !contact) {
      toast.error("❌ Please fill all fields");
      return;
    }

    toast.info("🔄 Sending message...");
    setLoading(true);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/query`, {
        fullname,
        email,
        contact,
        message,
      });

      toast.success(data.message);
      setFullname("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch (error) {
      toast.error("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-gray-100 text-gray-900 min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f9f9f9] via-[#f2f2f2] to-[#eaeaea]">
        <Navbar />
        <div className="flex-grow flex justify-center items-center p-6">
          <ToastContainer />

          <div className="container w-full mt-20 max-w-4xl mx-auto p-8 rounded-2xl shadow-lg bg-white text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Contact Us</h1>

            <form onSubmit={submitHandler} className="space-y-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="font-semibold">Full Name</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold">Email</span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold">Contact Number</span>
                  <input
                    type="tel"
                    placeholder="Your Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold">Message</span>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <Footer className="bg-gray-100 text-gray-800 py-6 text-center" />
      </div>
    </motion.div>
  );
};

export default Contact;