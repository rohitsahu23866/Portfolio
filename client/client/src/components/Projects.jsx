// src/components/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of my first project.',
    link: 'http://example.com',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of my second project.',
    link: 'http://example.com',
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
