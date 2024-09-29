import React, { useState } from 'react';
import profileImage from '../assets/Praveen.jpg'; // Update with your actual filename
import resumePDF from '../assets/PraveenKalavai.pdf'; // Update with your actual filename

const About = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src={profileImage} alt="Profile" className="rounded-full w-full h-auto object-cover" />
          </div>
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-lg mb-6">
                I am a seasoned DevOps Engineer with over a decade of experience in optimizing and automating builds and deployments for .NET applications, SSIS solutions, and SQL Server database projects. 
                My expertise spans across Azure DevOps, PowerShell, CI/CD pipelines. I hold multiple Microsoft certifications, showcasing my commitment to continuous learning and excellence in the field.
                I love to bridge the gap between development and operations, ensuring smooth and efficient software delivery pipelines.
              </p>
              <p className="text-lg mb-6">
                I am passionate about DevOps and AI and love exploring the latest advancements in the field of AI and playing around with them in my free time. 
              </p>
            </div>
            <div className="flex space-x-4">
              <a href={resumePDF} download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Download Resume
              </a>
              <button
                onClick={() => setShowContact(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p>Email: praveenkalavai@outlook.com</p>
            <p>Phone: (502) 905-8171</p>
            <button
              onClick={() => setShowContact(false)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;