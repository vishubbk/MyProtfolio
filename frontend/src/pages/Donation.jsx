
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

// Animation Variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const demoLinks = [
  { name: "Link-1", url: "https://ewebotwp.com/home-01/" },
  { name: "Link-2", url: "https://ewebotwp.com/home-agency/" },
  { name: "Link-3", url: "https://ewebotwp.com/home-04/" },
  { name: "Link-4", url: "https://ewebotwp.com/home-05/" },
];


const Donation = () => {
  const ConvertBlack = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(ConvertBlack.current, {
          scrollTrigger: {
            trigger: ConvertBlack.current,
            start: "top -=400",
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
            start: "top =50",
            toggleActions: "play none none reverse",
            
          },
          backgroundColor: "black",
          color: "white",
          duration: 1,
        });
      },
    });
  });



  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="bg-gradient-to-r bg-[#EEEE] bg-opacity-50 backdrop-blur-lg min-h-screen"
    >
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center backdrop-blur-lg rounded-lg shadow-lg justify-evenly w-full h-auto px-6 py-12">
        {/* Left Section */}
        <motion.div variants={textVariants} initial="hidden" animate="visible" className="text-center md:text-left md:w-1/2 space-y-4 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Much Does It Cost to Build a Website in India?
            <span className="text-blue-600"> {new Date().getFullYear()} Pricing</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding website development costs can be challenging. We break down the expenses based on features, platforms, and technologies to help you plan efficiently.
          </p>
          <motion.ul variants={listVariants} initial="hidden" animate="visible" className="list-disc list-inside text-lg text-gray-800">
            <motion.li variants={listVariants}>100+ templates and pre-built elements</motion.li>
            <motion.li variants={listVariants}>Payment gateway integration</motion.li>
            <motion.li variants={listVariants}>SEO and search engine optimization (SEO/SMO)</motion.li>
            <motion.li variants={listVariants}>Email marketing and newsletter</motion.li>
            <motion.li variants={listVariants}>Mobile app development (iOS/Android)</motion.li>
            <motion.li variants={listVariants}>Domain registration and hosting</motion.li>
            <motion.li variants={listVariants}>SSL/TLS certificate</motion.li>
            <motion.li variants={listVariants}>Monitoring and analytics</motion.li>
            <motion.li variants={listVariants}>Support and maintenance</motion.li>
          </motion.ul>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div variants={imgVariants} initial="hidden" animate="visible" className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img className="w-[90%] md:w-[75%] border-4 border-blue-800 rounded-lg mt-10 shadow-lg" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Website Development" />
        </motion.div>
      </div>
      <div ref={ConvertBlack}>
      <div  className="">

        {/* Cost Breakdown Section */}
      <motion.div variants={textVariants} initial="hidden" animate="visible" className="w-[95vw] mx-auto my-10">
        <h1 className="font-semibold text-3xl text-center">💻 Website Development Cost in India</h1>
        <p className="text-lg  mt-6">
          Website development costs in India are budget-friendly, making it a preferred destination for businesses.
        </p>
        <motion.ul variants={listVariants} initial="hidden" animate="visible" className="list-disc list-inside  text-lg mt-4">
          <motion.li variants={listVariants}>Basic website (5-10 pages): ₹5,000 - ₹20,000 ($70– $250) <strong>👉Limited Time Offer👈</strong></motion.li>
          <motion.li variants={listVariants}>Small business website (10-12 pages): ₹10,000 - ₹25,000 ($160 – $300)</motion.li>
          <motion.li variants={listVariants}>E-commerce website (50-100 products): ₹20,000 - ₹50,000 ($400 – $1000)</motion.li>
        </motion.ul>
      </motion.div>


      {/* Domain Section */}
      <div className="w-[90vw] mx-auto my-10">
        <h1 className="text-2xl font-semibold  mb-5">🛠️ Domain Registration & Selection</h1>
        <p className="text-lg ">
          A domain name is the unique identity of your website. It’s essential to select a short, memorable, and SEO-friendly domain.
          In India, domain prices range from INR 100 to INR 6000 per year, depending on the popularity and extension.
        </p>

        <ul className="list-disc list-inside  text-lg mt-4">
          <li>Choose a short and easy-to-remember domain name.</li>
          <li>Use relevant keywords for SEO benefits.</li>
          <li>Avoid hyphens and numbers in domain names.</li>
          <li>Opt for popular extensions like <strong>.com, .in, .co, .net</strong>.</li>
        </ul>

        {/* Image */}
        <div className="flex justify-center mt-6">
          <img
            className="w-[80%] md:w-[50%] border-4 border-gray-600 rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbWFpbiUyQ3dlYnNpdGV8ZW58MHx8MHx8fDA%3D"
            alt="Domain Registration"
          />
        </div>

        {/* Useful Links */}
        <div className="mt-10  p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold ">🔗 Useful Domain Links</h2>
          <ul className="list-disc list-inside text-lg  mt-4">
            <li><a href="https://www.hostinger.in/" target="_blank" rel="noopener noreferrer">Buy a Domain</a></li>
            <li><a href="https://www.whois.com/" target="_blank" rel="noopener noreferrer">Check Domain Availability</a></li>
            <li><a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Free Hosting & Deployment</a></li>
          </ul>
        </div>
      </div>
      </div>
      

      {/* Why devlop the website */}
      <div className="w-[90vw] m-auto ">
        <h2 className="text-2xl font-semibold text-stone-400 mb-5">
          Why Should you build a website in India ??
        </h2>
        <p className="text-lg ">
          Keep in mind that almost every business is opting to build a website. Therefore it's likely that your competitors have already done so. Will you risk falling behind and losing customers? <a className="underline hover:text-blue-500 transition-all text-amber-700" href="https://www.graffiti9.com/blog/website-importance-stats/#:~:text=75%25%20of%20consumers%20admit%20to,any%20business%20through%20its%20website.">76% of people</a> say they won't do business with a company that doesn't have a website.
          If you're an entrepreneur or professional, having a website allows you to present your ideas and services to potential clients. No matter the size or nature of your organization, you need a website to serve as an online storefront. Websites play an essential role in attracting customers and expanding the reach of organizations of all sizes.
         </p>
      </div>


      {/* Cost Breakdown */}
      <div className="mt-6 w-[80vw] mx-auto bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">💰 Website Development Cost Breakdown</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>The website development costs in India range from <span className="font-semibold text-blue-600">₹10,000 to ₹2,50,000 ($150 – $3000)</span>.</li>
          <li>A basic website (5-10 pages) costs between <span className="font-semibold text-blue-600">₹10,000 to ₹20,000 ($150 – $250)</span>.</li>
          <li>A small business website (10-12 pages) costs between <span className="font-semibold text-blue-600">₹20,000 to ₹25,000 ($250 – $320)</span>.</li>
          <li>An e-commerce website (50-100 products) costs between <span className="font-semibold text-blue-600">₹35,000 to ₹1,00,000 ($420 – $1200)</span>.</li>
        </ul>
      </div>
      {/* demo website */}
      <div className="p-5">
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-5 flex justify-center">
        👨‍💻 Demonstration of a Website 👨‍💻
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image Section */}
        <img
          className="w-full sm:w-[60%] md:w-[30%] lg:w-[20%] border-4 border-gray-600 rounded-lg shadow-lg"
          src="https://media.istockphoto.com/id/852731970/photo/computer-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=yWA0-bPkk4UFqt0o9D2ZtLqTiXa2Fns3XrVPRf--IQA="
          alt="Demonstration of a Website"
        />

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-400">
            Website Design and Development
          </h3>
          <p className="text-sm md:text-base">
            This website was designed and developed by{" "}
            <span className="font-semibold text-blue-600">leptop_tz</span> using modern technology and a focus on
            user-friendly design.
          </p>
          <p className="text-sm md:text-base mt-2">
            The website is built using <strong>React, Node.js, and Tailwind CSS</strong>. It also includes a contact form
            and a payment gateway using <strong>Razorpay</strong>.
          </p>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center p-4 bg-gray-300 rounded-lg mt-8">
          {demoLinks.map((link, index) => (
  <a
    key={index}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 font-semibold transition-colors duration-300 hover:text-orange-500 text-sm md:text-base"
  >
    {link.name}
  </a>
))}

          </div>
        </div>
      </div>
    </div>
   

      <Footer /> </div>
    </motion.div>
  );
};

export default Donation;
