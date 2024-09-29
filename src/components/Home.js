import React from 'react';
import heroImage from '../assets/Praveen.jpg'; // Update with your actual filename

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">Praveen Kalavai</h1>
          <p className="text-2xl">DevOps Engineer | AI Enthusiast</p>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;