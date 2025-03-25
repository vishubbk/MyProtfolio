import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ComingSoon = [
  {
    name: 'College Website ',
    description: 'A dynamic college website with student portal and event management.',
  },
  {
    name: 'Amazon ',
    description: 'An Amazon-inspired frontend with modern UI and interactive features.',
  },
  {
    name: 'Uber Clone',
    description: 'A ride-sharing platform with booking and real-time tracking.',
  },
];

const AdvanceProjects = [
  {
    name: 'Fullstack Mall',
    description: 'A full-stack e-commerce solution with secure payments and admin dashboard.',
  },
  {
    name: 'To-Do App',
    description: 'A task management app with real-time updates and user authentication.',
  },
  {
    name: 'Profolio',
    description: 'A professional portfolio website with animations and interactive elements.',
  },
];

const BasicProjects = [
  {
    name: 'NetFlix App',
    description: 'A streaming service UI replica with content browsing functionality.',
  },
  {
    name: 'Amazon Frontend Only',
    description: 'A simple Amazon homepage clone using HTML, CSS, and JavaScript.',
  },
  {
    name: 'Digital Clock',
    description: 'A real-time digital clock displaying hours, minutes, and seconds.',
  },
  {
    name: 'Festival Projects',
    description: 'A collection of themed projects for different festivals and celebrations.',
  },
  {
    name: 'YouTube Clone',
    description: 'A video-sharing platform with user authentication and streaming features.',
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="main absolute mt-25">
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold text-center mb-6">Coming Soon Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ComingSoon.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Advance Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AdvanceProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Basic Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BasicProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center p-4">
        <h2 className="text-xl font-bold">Visit Our GitHub Profile</h2>
        <p className="text-gray-600 mt-2">Explore more of our projects and contributions on GitHub.</p>
        <a
          href="https://github.com/vishubbk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline"
        >
          GitHub Profile
        </a>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default Projects;
