import React from 'react';
import ai102Badge from '../assets/ai102.png';
import az700Badge from '../assets/az700.png';
import az104Badge from '../assets/az104.png';
import az400Badge from '../assets/az400.png';
import az305Badge from '../assets/az305.png';
import az900Badge from '../assets/az900.png';
import ai900Badge from '../assets/ai900.png';
import pl900Badge from '../assets/pl900.png';

const Certifications = () => {
  const certifications = [
    { name: 'Azure Solutions Architect Expert', image: az305Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/336FCA8087562825?sharingId=7FD14F990E6FE75F' },
    { name: 'DevOps Engineer Expert', image: az400Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/182ECE3F5F0859E7?sharingId=7FD14F990E6FE75F' },
    { name: 'Azure Administrator Associate', image: az104Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/AD97E9CA8DE32D8A?sharingId=7FD14F990E6FE75F' },
    { name: 'Azure Network Engineer Associate', image: az700Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/847EDB9440DF15A5?sharingId=7FD14F990E6FE75F' },
    { name: 'Azure AI Engineer Associate', image: ai102Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/891D36CCAF66C22F?sharingId=7FD14F990E6FE75F' },
    { name: 'Azure Fundamentals', image: az900Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/6579D14324B9834?sharingId=7FD14F990E6FE75F' },
    { name: 'Azure AI Fundamentals', image: ai900Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/6B633788CDF10063?sharingId=7FD14F990E6FE75F' },
    { name: 'Power Platform Fundamentals', image: pl900Badge, url: 'https://learn.microsoft.com/api/credentials/share/en-us/prvnkalavai/B7B2E1DDA6643E71?sharingId=7FD14F990E6FE75F' }
  ]
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <a 
              key={cert.name} 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <img src={cert.image} alt={cert.name} className="w-32 h-32 object-contain mb-4" />
              <p className="text-center">{cert.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


//