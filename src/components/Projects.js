import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Reduced deployment time by 40% using Jenkins and Docker.'
    },
    {
      title: 'Cloud Migration Project',
      description: 'Successfully migrated on-premise infrastructure to AWS, improving scalability.'
    },
    {
      title: 'ML Model Deployment Framework',
      description: 'Developed a framework for easy deployment of ML models in production.'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;