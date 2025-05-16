import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, projects }) => (
  <section className="mb-20">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-blue-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                {title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => {
  const ComingSoon = [
    {
      name: 'College Website',
      description: 'A dynamic college website with student portal and event management.',
      image: 'https://img.freepik.com/premium-photo/university-admission-web-banner_1281315-2211.jpg?ga=GA1.1.1734003033.1743057794&semt=ais_hybrid&w=740',
    },
    {
      name: 'Amazon',
      description: 'An Amazon-inspired frontend with modern UI and interactive features.',
      image: 'https://img.freepik.com/premium-photo/cloud-technology-icon-smartphone_117856-2700.jpg?ga=GA1.1.1734003033.1743057794&semt=ais_hybrid&w=740',
    },
    {
      name: 'Uber Clone',
      description: 'A ride-sharing platform with booking and real-time tracking.',
      image: 'https://images.unsplash.com/photo-1554260570-83dc2f46ef79?w=500',
    },
  ];

  const AdvanceProjects = [
    {
      name: 'Fullstack Mall',
      description: 'A full-stack e-commerce solution with secure payments and admin dashboard.',
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500',
    },
    {
      name: 'To-Do App',
      description: 'A task management app with real-time updates and user authentication.',
      image: 'https://images.unsplash.com/photo-1671418285905-acc08f6c4b59?w=500',
    },
    {
      name: 'Portfolio',
      description: 'A professional portfolio website with animations and interactive elements.',
      image: 'https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?w=500',
    },
  ];

  const BasicProjects = [
    {
      name: 'Netflix App',
      description: 'A streaming service UI replica with content browsing functionality.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500',
    },
    {
      name: 'Digital Clock',
      description: 'A real-time digital clock displaying hours, minutes, and seconds.',
      image: 'https://img.freepik.com/free-vector/digital-clock-concept-illustration_114360-12983.jpg?ga=GA1.1.1734003033.1743057794&semt=ais_hybrid&w=740',
    },
    {
      name: 'Festival Projects',
      description: 'A collection of themed projects for different festivals and celebrations.',
      image: 'https://plus.unsplash.com/premium_photo-1664304095595-e428558e8161?w=500',
    },
    {
      name: 'YouTube Clone',
      description: 'A video-sharing platform with user authentication and streaming features.',
      image: 'https://img.freepik.com/premium-photo/youtube-video-player-design-video-media-player-interface_41204-9571.jpg?ga=GA1.1.1734003033.1743057794&semt=ais_hybrid&w=740',
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <Section title="🚀 Coming Soon Projects" projects={ComingSoon} />
        <Section title="💻 Advanced Projects" projects={AdvanceProjects} />
        <Section title="📘 Basic Projects" projects={BasicProjects} />

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-blue-700">Visit Our GitHub Profile</h2>
          <p className="text-gray-600 mt-2">Explore more of our projects and contributions on GitHub.</p>
          <a
            href="https://github.com/vishubbk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
