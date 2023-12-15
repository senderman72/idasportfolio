import React from "react";
import "./Skills.css";
import Skillspic from "../assets/Skillspic.jpg";

export default function Skills() {
  const skills = [
    "Recruitment and Staffing",
    "Candidate Sourcing",
    "Interviewing and Assessment",
    "Talent Acquisition",
    "Employee Onboarding",
    "HR Policies and Compliance",
    "Employment Law",
    "Communication and Interpersonal Skills",
    "Negotiation Skills",
    "Data Analysis and Reporting",
    "HR Software and Tools",
    "Employee Relations",
  ];

  return (
    <div className="skill-section">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-circle">
            {skill}
          </div>
        ))}
      </div>
      <div>
        <img className="skills-pic " src={Skillspic} />
      </div>
    </div>
  );
}
