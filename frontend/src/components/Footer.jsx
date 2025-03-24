import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Logo & Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#1853d3]">&lt;Leptop_tz/&gt;</h2>
          <p className="text-black text-sm mt-2">Your go-to platform for learning & growing in tech.</p>
        </div>



        {/* Social Media Links */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="https://www.instagram.com/leptop_tz?igsh=eDNqeWFkcDEyYzFt " className="text-black hover:text-black transition text-xl"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/preetabh-awasthi-070836290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-black hover:text-black transition text-xl"><FaLinkedin /></a>
          <a href="#" className="text-black hover:text-black transition text-xl"><FaFacebookF /></a>
          <a href="#" className="text-black hover:text-black transition text-xl"><FaTwitter /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} &lt;Leptop_tz/&gt;. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
