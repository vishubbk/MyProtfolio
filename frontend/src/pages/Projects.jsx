import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ComingSoon = [
  {
    name: 'College Website',
    description: 'A dynamic college website with student portal and event management.',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxlZ2UlMjB3ZWJzaXRlfGVufDB8fDB8fHww',
  },
  {
    name: 'Amazon',
    description: 'An Amazon-inspired frontend with modern UI and interactive features.',
    image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww',
  },
  {
    name: 'Uber Clone',
    description: 'A ride-sharing platform with booking and real-time tracking.',
    image: 'https://images.unsplash.com/photo-1554260570-83dc2f46ef79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG8lMjBEbyUyMEFwcHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const AdvanceProjects = [
  {
    name: 'Fullstack Mall',
    description: 'A full-stack e-commerce solution with secure payments and admin dashboard.',
    image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww',
  },
  {
    name: 'To-Do App',
    description: 'A task management app with real-time updates and user authentication.',
    image: 'https://images.unsplash.com/photo-1671418285905-acc08f6c4b59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRvJTIwRG8lMjBBcHB8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Portfolio',
    description: 'A professional portfolio website with animations and interactive elements.',
    image: 'https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9ydGZvbGlvfGVufDB8fDB8fHww',
  },
];

const BasicProjects = [
  {
    name: 'Netflix App',
    description: 'A streaming service UI replica with content browsing functionality.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D',
  },

  {
    name: 'Digital Clock',
    description: 'A real-time digital clock displaying hours, minutes, and seconds.',
    image: 'https://media.istockphoto.com/id/1713415826/photo/modern-wall-clock.webp?a=1&b=1&s=612x612&w=0&k=20&c=lmy4xvwMvadx5knSaoPClvxk454LTxrpNYVAKONODRg=',
  },
  {
    name: 'Festival Projects',
    description: 'A collection of themed projects for different festivals and celebrations.',
    image: 'https://plus.unsplash.com/premium_photo-1664304095595-e428558e8161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'YouTube Clone',
    description: 'A video-sharing platform with user authentication and streaming features.',
    image: 'https://media.istockphoto.com/id/836871030/photo/watching-two-hand-holding-mobile-phone-with-play-and-share-icon-on-screen-and-blur-desk-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=92DRUw9uaBkHpad63sxHwNpnwIXRzsriUilKhBOt2AU=',
  },
];

const Projects = () => {
  return (
    <div className="bg-blue-50 min-h-screen relative">
      <Navbar />
      <div className="absolute top-24 left-0 w-full px-6 py-12"> {/* Absolute positioning */}
        {/* Coming Soon Projects */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Coming Soon Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ComingSoon.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-blue-700">{project.name}</h2>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Projects */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-16 mb-10">Advanced Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AdvanceProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-blue-700">{project.name}</h2>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Basic Projects */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-16 mb-10">Basic Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BasicProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-blue-700">{project.name}</h2>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-blue-700">Visit Our GitHub Profile</h2>
          <p className="text-gray-600 mt-2">Explore more of our projects and contributions on GitHub.</p>
          <a
            href="https://github.com/vishubbk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projects;
