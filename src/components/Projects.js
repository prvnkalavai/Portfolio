import React from 'react';

const Projects = () => {
  const projects = [
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
    },
    {
      title: 'Portfolio Website',
      description: [
        'Developed the portfolio website using Node.js, npm, React and Tailwind CSS',
        'Hosted the website on Azure using Static Web Apps and Azure DNS',
        'Used Entra ID, Azure Communication Services for SMTP, and Azure DevOps for CI/CD'
      ]
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <ul className="list-disc pl-5 text-justify">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;