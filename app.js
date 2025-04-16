import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-4xl font-bold">Aryan Gupta</h1>
        <p className="text-lg text-gray-400 mt-2">AI Integrated Full Stack Developer</p>
      </header>

      <section id="about" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm Aryan, an AI Integrated Full Stack Developer passionate about building scalable, impactful software
          solutions. I specialize in modern web technologies, integrating AI to bring intelligence to every project I touch.
        </p>
      </section>

      <section id="projects" className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <a href="https://github.com/aryanorastar/ThaparSocitiesHub" className="text-blue-400 hover:underline">ThaparSocietiesHub</a> – Centralized hub for all societies at Thapar.
          </li>
          <li>
            <a href="https://github.com/aryanorastar/StartupFinance" className="text-blue-400 hover:underline">StartupFinance</a> – A finance tracker for new-age startups.
          </li>
          <li>
            <a href="https://github.com/aryanorastar/ThaparTracker" className="text-blue-400 hover:underline">ThaparTracker</a> – Smart lost & found platform for college campus.
          </li>
          <li>
            <a href="https://github.com/aryanorastar/ThaparGo" className="text-blue-400 hover:underline">ThaparGo</a> – Student navigation system around Thapar.
          </li>
        </ul>
      </section>

      <section id="skills" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          <span className="bg-gray-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Firebase</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Supabase</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">HTML</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">CSS</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Git</span>
        </div>
      </section>

      <section id="contact" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-4">I'm open to freelance work, collaborations, or just a good tech chat!</p>
        <div className="flex gap-6 text-xl">
          <a href="mailto:aryangupts05@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/aryan-gupta-72a532211" className="hover:text-blue-400" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/aryanorastar" className="hover:text-blue-400" target="_blank"><FaGithub /></a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Aryan Gupta. All rights reserved.
      </footer>
    </div>
  );
}
