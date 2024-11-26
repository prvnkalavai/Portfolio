import React from 'react';
import portfolioApp from '../assets/portfolioapp.png'; 
import storyfairyApp from '../assets/storyfairycollage.jpg'; 

const Projects = () => {
  const clientProjects = [
    {
      title: 'Build/Release Engineer',
      description: [
        'CI/CD Pipelines: Developed and maintained CI/CD pipelines for .NET applications on Azure DevOps and TFVC, reducing deployment times by over 90%.',
        'Automation with PowerShell: Authored custom PowerShell scripts for automating bug reports, email notifications, and SQL script deployments, improving system reliability.',
        'Azure DevOps Administration: Administered Azure DevOps Agent pools, deployment agents, and managed Azure Artifacts Feed and custom NuGet packages.',
        'Code Quality Management: Built and administered SonarQube dashboard for code quality analysis, ensuring high standards of code integrity.'
      ]
    },
    {
      title: 'Lead DevOps Engineer',
      description: [
        'Automated CI/CD Pipelines: Designed and implemented CI/CD pipelines for .NET applications using TFS, Azure DevOps, and PowerShell, reducing deployment times and streamlining workflows.',
        'SQL and SSIS Automation: Engineered automated SQL Database and SSIS Package builds/releases using Azure DevOps and PowerShell, enhancing operational efficiency.',
        'Windows Administration: Managed over 150 web and application servers with 99% uptime, and led migrations across multiple Windows Server versions.',
        'Quality and Security: Performed code quality analysis with SonarQube, security scans with CheckMarx, and automated testing with various tools, ensuring robust application performance.'
      ]
    },
    {
      title: '.NET and SQL Developer',
      description: [
        'SQL Database Development: Created advanced functions, triggers, and stored procedures using SQL Server Management Studio and Microsoft PDW.',
        'SSIS Development: Transformed and loaded terabytes of data between Oracle, PDW, and SQL databases, improving data process and load times.',
        'Incident Resolution: Provided quick resolutions for incident and problem tickets for Development and SRE teams.',
        'Application Development: Developed and maintained Class Library Applications, .NET WCF Services, Console Applications, WEB APIs, and Entity Framework solutions.'
      ]
    },
    {
      title: 'Business Rules Developer',
      description: [
        'Enterprise Application Development: Designed and developed enterprise applications and business-critical systems using FICO Blaze Advisor 6.9.2.',
        'Rules-Based Solutions: Developed and implemented rules-based solutions in Structured Rule Language (SRL) using FICO Business Rules Engine.',
        'Business Requirements Transformation: Transformed business requirements into rules using Rule Flows, Rule Sets, Functions, and Decision Table Metaphors.',
        'Integration with .NET: Engineered and deployed .NET Wrapper services and Class Library applications for seamless integration of rules workflow with external applications.'
      ]
    },
    {
      title: '.NET WPF Developer',
      description: [
        'UI Development: Developed responsive UI screens for a Customer Care portal in WPF, enhancing user satisfaction through intuitive design.',
        'Design Patterns: Implemented MVVM and Façade design patterns.',
        'Data Access Optimization: Optimized data access layer performance by using LINQ for executing stored procedures on SQL Server.'
      ]
    }
  ];
  const personalProjects = [
    {
      title: 'Personal Portfolio',
      image: portfolioApp,
      description: [
        'My personal portfolio website built using Azure Functions, React JS, Node.js, npm, HTML, and CSS, showcasing my skills and projects.',
        'Hosted the website on Azure using Static Web Apps, CloudFlare and Azure DNS',
        'Used Entra ID, Azure Functions, Azure Communication Services for SMTP, and Github Actions/Azure DevOps for CI/CD'
      ]
      //,tags: ['React', 'Tailwind CSS', 'Azure Functions', 'Azure Static Web Apps', 'Azure Communication Services', 'Github Actions/Azure DevOps']
    },
    {
      title: 'Storyfairy - AI Generated bedtime Storyteller',
      image: storyfairyApp,
      description: [
        'An AI powered bedtime Storyteller application with custom story & image generation built using Python, Azure Functions, Open AI, Gemini, Replicate, and React Typescript',
        'Hosted the website on Azure as a Static Web Apps with Azure Function serving a managed backend API',
        'Used Cloudflare and Azure DNS for domain services and Github Actions/Azure DevOps for CI/CD',
        'Utilized Azure Storage/Blob Containers, and Azure CosmosDB for backend data storage and retrieval',
        'Implemented Azure AD B2C for custom user management and authentication and Azure Key Vault for secret management'
      ]
      //,tags: ['Python', 'Azure Functions', 'OpenAI', 'React', 'Replicate', 'Azure Static Web Apps', 'Azure Storage/Blob Containers', 'Github Actions/Azure DevOps']
    }
  ];

  const renderProject = (project, index) => {
    return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />}
          <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
          {Array.isArray(project.description) ? ( 
            <ul className="list-disc pl-5 text-justify">
              {project.description.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 mb-4">{project.description}</p>
          )}
          {project.tags && (
              <div className="flex flex-wrap">
                {project.tags.map((tag) => (
                    <span key={tag} className="bg-purple-500 text-white px-2 py-1 rounded-full mr-2 text-sm mb-2">{tag}</span>
                ))}
              </div>
          )}
        </div>
    );
  };


  return (
      <section id="projects" className="min-h-screen py-12 bg-white-100"> {/* Section background color changed */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

          {/* Client Projects Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {clientProjects.map(renderProject)}
          </div>

          {/* Personal Projects Section */}
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map(renderProject)}
          </div>
        </div>
      </section>
  );
};

export default Projects;