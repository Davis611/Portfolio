import React from 'react';
import { Card } from '@/components/ui/card';

const ProjectCard = ({ title, description, link }) => (
  <div className="rounded-2xl shadow-md p-4 bg-white">
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">
        View Project
      </a>
    </Card>
  </div>
);

export default ProjectCard;