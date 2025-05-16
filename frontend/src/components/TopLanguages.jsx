import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const TopLanguages = () => {
  const languages = [
    {
      name: "JavaScript",
      test: "Versatile, powerful, and the backbone of interactive web development.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      name: "Python",
      test: "Beginner-friendly, great for AI, data science, and backend development.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      link: "https://www.python.org/about/gettingstarted/",
    },
    {
      name: "Java",
      test: "Robust and portable, widely used for Android and enterprise applications.",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      link: "https://www.java.com/en/download/help/getting-started.html",
    },
    {
      name: "C#",
      test: "Microsoft’s modern, scalable language ideal for desktop, web, and games.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    },
    {
      name: "C++",
      test: "High-performance language used in systems, games, and real-time software.",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      link: "https://cplusplus.com/doc/tutorial/",
    },
    {
      name: "PHP",
      test: "Popular server-side scripting language used in web and CMS development.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      link: "https://www.php.net/manual/en/getting-started.php",
    },
  ];

  const roadmap = [
    { title: "Learn HTML & CSS", desc: "Structure and style your webpages.", color: "bg-blue-500" },
    { title: "Master JavaScript", desc: "Build dynamic and interactive web experiences.", color: "bg-green-500" },
    { title: "Explore Frontend Frameworks", desc: "React, Vue, or Angular for scalable interfaces.", color: "bg-purple-500" },
    { title: "Backend Development", desc: "Node.js, Express, Django, and more.", color: "bg-yellow-500" },
    { title: "Database Management", desc: "Use SQL or NoSQL databases effectively.", color: "bg-red-500" },
    { title: "Deployment & DevOps", desc: "Learn to host, deploy, and manage your projects.", color: "bg-indigo-500" },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Top Languages Section */}
      <div className="max-w-7xl mx-auto">
       
        <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
    🚀 Top Programming Languages to Learn in 2025
  </h2>

  <div className="space-y-10">
    {languages.map((lang, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        {/* Image */}
        <div className="md:w-1/3 p-6 flex justify-center items-center bg-gray-100">
          <img
            src={lang.img}
            alt={lang.name}
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <span className="inline-block text-sm font-bold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full w-max mb-2">
            {lang.name}
          </span>
          <p className="text-gray-700 text-base mb-4">{lang.test}</p>
          <a
            href={lang.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            Learn More <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>


        {/* Roadmap Section */}
        <div className="mt-20 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">📍 Web Development Roadmap</h2>
          <div className="relative border-l-4 border-gray-200 pl-6">
            {roadmap.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative mb-10"
              >
                <div className={`absolute -left-5 w-4 h-4 rounded-full mt-3  ${step.color}`}></div>
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
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
