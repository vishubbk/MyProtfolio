import React from "react";
import { motion } from "framer-motion";
import { ExternalLink ,Link} from "lucide-react";

const TopLanguages = () => {
 const languages = [
  // 🟢 Basic / Core
  {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML", // Official MDN Docs
  },
  {
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS", // Official MDN Docs
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", // Official MDN Docs
  },

  // 🟡 Frontend
  {
    name: "React.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    link: "https://react.dev/", // Official React Docs
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    link: "https://tailwindcss.com/docs", // Official Docs
  },
  {
    name: "GSAP",
    img: "https://www.svgrepo.com/show/306156/greensock.svg",
    link: "https://gsap.com/docs/v3/", // Official GSAP Docs
  },

  // 🔵 Backend
  {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    link: "https://nodejs.org/docs", // Official Node.js Docs
  },
  {
    name: "Express.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    link: "https://expressjs.com/en/5x/api.html", // Official Express Docs
  },
  {
    name: "Axios",
    img: "https://axios-http.com/assets/logo.svg",
    link: "https://axios-http.com/docs/intro", // Official Axios Docs
  },

  // 🟣 Database & Storage
  {
    name: "MongoDB",
    img: "https://www.svgrepo.com/show/439231/mongodb.svg",
    link: "https://www.mongodb.com/docs/manual/", // Official MongoDB Docs
  },
  {
    name: "Mongoose",
    img: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4",
    link: "https://mongoosejs.com/docs/", // Official Docs
  },
  {
    name: "Cloudinary",
    img: "https://www.svgrepo.com/show/353566/cloudinary.svg",
    link: "https://cloudinary.com/documentation", // Official Docs
  },

  // 🟠 Deployment
  {
    name: "Render",
    img: "https://avatars.githubusercontent.com/u/40662031?s=200&v=4",
    link: "https://render.com/docs", // Official Render Docs
  },

  // 🟡 Payment & Auth
  {
    name: "Razorpay",
    img: "https://razorpay.com/assets/razorpay-logo.svg",
    link: "https://razorpay.com/docs/", // Official Docs
  },
  {
    name: "JWT (JSON Web Tokens)",
    img: "https://jwt.io/img/pic_logo.svg",
    link: "https://datatracker.ietf.org/doc/html/rfc7519", // Official RFC Spec
  },
  {
    name: "bcrypt.js",
    img: "https://img.icons8.com/?size=100&id=24895&format=png&color=000000",
    link: "https://github.com/dcodeIO/bcrypt.js", // Official GitHub Repo
  },

  // 🔧 Tools
  {
    name: "Git",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    link: "https://git-scm.com/doc", // Official Docs
  },
  {
    name: "GitHub",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://docs.github.com/", // Official Docs
  },
  {
    name: "Postman",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    link: "https://learning.postman.com/docs/getting-started/introduction/", // Official Docs
  },
];


  const roadmap = [
    {
      title: "Learn HTML & CSS",
      desc: "Structure and style your webpages.",
      color: "bg-blue-500",
    },
    {
      title: "Master JavaScript",
      desc: "Build dynamic and interactive web experiences.",
      color: "bg-green-500",
    },
    {
      title: "Explore Frontend Frameworks",
      desc: "React, Vue, or Angular for scalable interfaces.",
      color: "bg-purple-500",
    },
    {
      title: "Backend Development",
      desc: "Node.js, Express, Django, and more.",
      color: "bg-yellow-500",
    },
    {
      title: "Database Management",
      desc: "Use SQL or NoSQL databases effectively.",
      color: "bg-red-500",
    },
    {
      title: "Deployment & DevOps",
      desc: "Learn to host, deploy, and manage your projects.",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Top Languages Section */}
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
            🚀 MY SKILLS
          </h2>

          <div
            className="w-[90%] m-auto h-full grid gap-6 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.11 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-auto h-48 flex flex-col justify-center gap-4 items-center 
                      bg-white border border-gray-200 rounded-2xl shadow-md 
                      hover:bg-[#e9e0e0] hover:text-[#000000] hover:scale-105 
                      transition-all duration-300 cursor-pointer"
                >
                  <img
                    className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                    src={lang.img}
                    alt={lang.name}
                  />

                  <p className="text-lg font-semibold">{lang.name}</p>
                  <a href={lang.link} target="_blank">
                    <Link className="w-5 text-blue-950"/>
                  </a>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mt-20 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            📍 Web Development Roadmap
          </h2>
          <div className="relative border-l-4 border-gray-200 pl-6">
            {roadmap.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative mb-10"
              >
                <div
                  className={`absolute -left-5 w-4 h-4 rounded-full mt-3  ${step.color}`}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLanguages;
