import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-slate-100">
      <header className="text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-2">
          My Portfolio
        </motion.h1>
        <p className="text-gray-600">Projects I've built using modern web technologies</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              link={project.link} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;