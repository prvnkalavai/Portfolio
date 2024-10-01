import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Azure', icon: '/icons/azure.svg' },
    { name: 'Azure DevOps', icon: '/icons/azuredevops.svg' },
    { name: 'PowerShell', icon: '/icons/powershell.svg' },
    { name: 'Azure SQL', icon: '/icons/azuresqldatabase.svg' },
    { name: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
    { name: 'SonarQube', icon: '/icons/sonarqube.svg' },
    { name: 'Vault', icon: '/icons/vault.svg' },
    { name: 'Bash', icon: '/icons/bash.svg' },
    { name: 'C#', icon: '/icons/csharp.svg' },
    { name: '.NET', icon: '/icons/dot-net.svg' },
    { name: '.NET Core', icon: '/icons/dotnetcore.svg' },
    { name: 'Dynatrace', icon: '/icons/dynatrace.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Github', icon: '/icons/github.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
    { name: 'Terraform', icon: '/icons/terraform.svg' },
    { name: 'Bicep', icon: '/icons/bicep.png' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Nodejs', icon: '/icons/nodejs.svg' },
    { name: 'NPM', icon: '/icons/npm.svg' },
    { name: 'Nuget', icon: '/icons/nuget.svg' },
    { name: 'JFrog', icon: '/icons/jfrog.svg' },
    { name: 'LaunchDarkly', icon: '/icons/launchdarkly.svg' },
    { name: 'Visual Studio', icon: '/icons/visualstudio.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' },
    { name: 'YAML', icon: '/icons/yaml.svg' },
    { name: 'JSON', icon: '/icons/json.svg' },
    { name: 'Markdown', icon: '/icons/markdown.svg' },
    { name: 'HTML', icon: '/icons/html5.svg' },
    { name: 'CSS', icon: '/icons/css3.svg' },
    { name: 'JS', icon: '/icons/javascript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Power Platform', icon: '/icons/powerplatform.svg' },
    { name: 'Windows', icon: '/icons/windows.svg' },
    { name: 'Linux', icon: '/icons/linux.svg' }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;