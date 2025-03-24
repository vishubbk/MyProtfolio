import React from "react";

const RecommentedRoadmap = () => {
  const languages = [
    {
      name: "JavaScript",
      test: "JavaScript is a dynamic, high-level language primarily used for web development, offering interactivity, powerful frameworks, and backend capabilities.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      name: "Python",
      test: "Python is a highly readable, versatile programming language used in web development, AI, machine learning, and automation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      link: "https://www.python.org/about/gettingstarted/",
    },
    {
      name: "Java",
      test: "Java is an object-oriented language known for its reliability and cross-platform capabilities, widely used in enterprise software and Android development.",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      link: "https://www.java.com/en/download/help/getting-started.html",
    },
    {
      name: "C#",
      test: "C# is a powerful, modern programming language designed by Microsoft, primarily used for Windows applications, game development, and cloud-based systems.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    },
    {
      name: "C++",
      test: "C++ is a fast and efficient programming language used in system software, game engines, and high-performance applications.",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      link: "https://cplusplus.com/doc/tutorial/",
    },
    {
      name: "PHP",
      test: "PHP is a popular scripting language for web development, used for creating dynamic websites, CMS platforms, and server-side applications.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      link: "https://www.php.net/manual/en/getting-started.php",
    },
  ];

  const roadmap = [
    { title: "Step 1: Learn HTML & CSS", desc: "Start with the basics of HTML & CSS to structure and style web pages.", color: "bg-blue-500" },
    { title: "Step 2: Master JavaScript", desc: "Understand JavaScript fundamentals to add interactivity.", color: "bg-green-500" },
    { title: "Step 3: Explore Frontend Frameworks", desc: "Learn React, Vue, or Angular to build dynamic UI.", color: "bg-purple-500" },
    { title: "Step 4: Backend Development", desc: "Get familiar with Node.js, Express, or Django for server-side development.", color: "bg-yellow-500" },
    { title: "Step 5: Database Management", desc: "Understand SQL (PostgreSQL, MySQL) or NoSQL (MongoDB) databases.", color: "bg-red-500" },
    { title: "Step 6: Deployment & DevOps", desc: "Deploy websites using Netlify, Vercel, or Render. Learn CI/CD basics.", color: "bg-indigo-500" },
  ];

  return (
    <div className="mt-10 px-4 py-12 bg-gray-100 text-gray-900 rounded-xl shadow-lg">
      {/* Recommended Languages */}
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-10">
        🚀 RoadMap Of WebDev...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white rounded-xl border border-gray-300 shadow-lg transition transform hover:scale-105"
          >
            <img src={lang.img} alt={lang.name} className="w-24 h-24 rounded-lg bg-gray-200 p-2 shadow-md mb-4" />
            <h3 className="text-2xl font-semibold text-indigo-600">{lang.name}</h3>
            <p className="text-lg font-semibold text-gray-700 text-center mt-2 px-4">{lang.test}</p>
            <a
              href={lang.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Read More →
            </a>
            <div className="absolute inset-0 bg-indigo-500 opacity-10 rounded-xl blur-md"></div>
          </div>
        ))}
      </div>

      {/* Roadmap Section */}
      <div className="mt-16 px-6 py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">📍 Web Development Roadmap</h2>
        <div className="relative border-l-4 border-gray-300 ml-6">
          {roadmap.map((step, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className={`w-6 h-6 ${step.color} rounded-full absolute -left-3 top-1`}></div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommentedRoadmap;
