import React from "react";
import { Code2, Database, Globe, Server, Layers, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Core Languages",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["C++","javascript"],
    },
    {
      name: "Frontend Development",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS",],
    },
    {
      name: "Frameworks",
      icon: <Layers className="w-5 h-5" />,
      skills: ["React.js", "Express.js"],
    },
    {
      name: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "MySQL",],
    },
  ];

  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
            </div>
            <div className="ml-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="relative bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-1/2 -left-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
