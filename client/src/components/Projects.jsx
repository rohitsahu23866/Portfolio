// src/components/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'Flappy Bird',
    description: `Technologies Used: Python (Pygame) 
     Developed a Flappy Bird game using Python and Pygame. Implemented mechanics like gravity, collision detection, and scoring, with modular code for easy maintenance.`,
    link: 'https://github.com/rohitsahu23866/Flappybird.git',
  },
  {
    title: 'Algorithm Visualizer',
    description: `Technologies Used: React, Tailwind CSS, JavaScript
Developed a web application to visualize sorting algorithms like Bubble Sort, Quick Sort, Merge Sort, and Selection Sort. Utilized React for dynamic rendering and Tailwind CSS for a sleek UI, providing real-time algorithm visualization.`,
    link: 'https://github.com/rohitsahu23866/AlgorithmVisualizer.git',
  },
  {
    title: 'Calculator',
    description: `Technologies Used: React, Tailwind CSS, JavaScript
Built a calculator web application with React for dynamic functionality and JavaScript for accurate calculations. Designed a responsive interface using Tailwind CSS for a seamless user experience.`,
    link: 'https://github.com/rohitsahu23866/Calculator.git',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-4 block">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
