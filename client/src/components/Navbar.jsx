// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-around">
        <li><a href="#about" className="hover:underline">About Me</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><button onClick={handleDownloadResume} className="text-white hover:underline">Download Resume</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
