'use client';

import React from "react";
import { motion } from 'framer-motion';
import { SiCanva, SiAdobephotoshop, SiReact, SiHtml5, SiJavascript, SiCss3 } from 'react-icons/si';
import { MdVideoLibrary } from 'react-icons/md';
import { FaMicrosoft } from 'react-icons/fa';

const skillsData = [
  {
    category: "Technical Skills",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" }
    ],
  },
  {
    category: "Basic Skills",
    skills: [
      { name: "Microsoft Office", icon: FaMicrosoft, color: "#D83B01" },
      { name: "Video Editing", icon: MdVideoLibrary, color: "#FF6B6B" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" }
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-10 text-white">
      <div className="">
        <h2 className="text-3xl uppercase text-blackText font-semibold text-start mb-8">Skills</h2>
        {/* <HeaderScroller text="skills" /> */}

        <div className="flex flex-wrap justify-start items-center gap-3">
          {skillsData.map((category, index) => (
            <div key={index} className=" p-6 rounded-md">
              <h3 className="text-2xl font-semibold  mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      key={skillIndex}
                      className="px-4 py-2 bg-blackBg rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <IconComponent className="text-xl" style={{ color: skill.color }} />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
