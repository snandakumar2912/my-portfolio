import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faJava,
  faAws,
  faCss3,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  // Define your technical skills and their proficiency levels
  const skills = [
    { name: "Java", icon: faJava, level: 80 },
    { name: "AWS", icon: faAws, level: 90 },
    { name: "React", icon: faReact, level: 75 },
    { name: "HTML5", icon: faHtml5, level: 90 },
    { name: "CSS3", icon: faCss3, level: 85 },
    { name: "JavaScript", icon: faJs, level: 80 },
    { name: "Node.js", icon: faNodeJs, level: 25 },
    
  ];

  // Function to calculate gradient color based on skill level
  const getProgressBarColor = (level) => {
    let color = "";
    if (level >= 80) {
      color = "linear-gradient(to right, #34D399, #22D3EE)";
    } else if (level >= 50) {
      color = "linear-gradient(to right, #FBBF24, #F87171)";
    } else {
      color = "linear-gradient(to right, #F87171, #EF4444)";
    }
    return color;
  };

  return (
    <div>
      <center><h2 className="text-3xl font-bold mb-4">Skills</h2></center>

      {/* Display skills using progress bars */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="p-4 bg-white rounded-md shadow-md">
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-2xl text-teal-500 mr-2"
            />
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {`${skill.level}%`}
                  </span>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-2">
                <div
                  className="absolute top-0 h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: getProgressBarColor(skill.level),
                    transition: "width 1s ease-in-out, background 1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
