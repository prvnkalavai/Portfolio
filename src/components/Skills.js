import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Azure', icon: 'azure.svg' },
    { name: 'Azure DevOps', icon: 'azuredevops.svg' },
    { name: 'PowerShell', icon: 'powershell.svg' },
    { name: 'Azure SQL', icon: 'azuresqldatabase.svg' },
    { name: 'SQL Server', icon: 'microsoftsqlserver.svg' },
    { name: 'SonarQube', icon: 'sonarqube.svg' },
    { name: 'Vault', icon: 'vault.svg' },
    { name: 'Bash', icon: 'bash.svg' },
    { name: 'C#', icon: 'csharp.svg' },
    { name: '.NET', icon: 'dot-net.svg' },
    { name: '.NET Core', icon: 'dotnetcore.svg' },
    { name: 'Dynatrace', icon: 'dynatrace.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Github', icon: 'github.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Kubernetes', icon: 'kubernetes.svg' },
    { name: 'Postman', icon: 'postman.svg' },
    { name: 'Terraform', icon: 'terraform.svg' },
    { name: 'Bicep', icon: 'bicep.png' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'Nodejs', icon: 'nodejs.svg' },
    { name: 'NPM', icon: 'npm.svg' },
    { name: 'Nuget', icon: 'nuget.svg' },
    { name: 'JFrog', icon: 'jfrog.svg' },
    { name: 'LaunchDarkly', icon: 'launchdarkly.svg' },
    { name: 'Visual Studio', icon: 'visualstudio.svg' },
    { name: 'VS Code', icon: 'vscode.svg' },
    { name: 'YAML', icon: 'yaml.svg' },
    { name: 'JSON', icon: 'json.svg' },
    { name: 'Markdown', icon: 'markdown.svg' },
    { name: 'HTML', icon: 'html5.svg' },
    { name: 'CSS', icon: 'css3.svg' },
    { name: 'JS', icon: 'javascript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Power Platform', icon: 'powerplatform.svg' },
    { name: 'Windows', icon: 'windows.svg' },
    { name: 'Linux', icon: 'linux.svg' }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
              <img src={`${process.env.PUBLIC_URL}/icons/${skill.icon}`} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;