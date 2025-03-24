import React from "react";

const TopLanguages = () => {
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

  return (
    <div className="mt-10 px-4 py-12 bg-gray-100 text-gray-900 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-10">
        🚀 Top Programming Languages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white rounded-xl border border-gray-300 shadow-lg transition transform hover:scale-105"
          >
            {/* Language Image */}
            <img
              src={lang.img}
              alt={lang.name}
              className="w-24 h-24 rounded-lg bg-gray-200 p-2 shadow-md mb-4"
            />

            {/* Language Name */}
            <h3 className="text-2xl font-semibold text-indigo-600">{lang.name}</h3>

            {/* Language Description */}
            <p className="text-lg font-semibold text-gray-700 text-center mt-2 px-4">
              {lang.test}
            </p>

            {/* Read More Button */}
            <a
              href={lang.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Read More →
            </a>

            {/* Decorative Shadow Effect */}
            <div className="absolute inset-0 bg-indigo-500 opacity-10 rounded-xl blur-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLanguages;
