'use client';

import { motion } from "framer-motion";
import React from "react";
import HeaderScroller from "@/lib/widgets/HeaderScroller";
import { projects_data } from "@/lib/data/data";
import SkillsSection from "./SkillsSection";

export default function ProjectsSection() {
    return (
        <section id="projects" className="overflow-hidden bg-blackBg w-full h-fit ">
            <HeaderScroller text="Projects" />
            <div className="sizer m-auto pb-10 max-md:pt-10 overflow-hidden">
                <ProjectsLayout />
                <div className="w-full h-[1px] bg-blackText/50 rounded-full"></div>
                <SkillsSection />
            </div>
        </section>
    );
}

function ProjectsLayout() {
    return (
        <div className="relative grid grid-cols-1 gap-6 text-white max-w-4xl mx-auto">
            {projects_data.map((card, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.15 * index }}
                        className="bg-gradient-to-br from-[#2a2c35] to-[#1f2128] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
                    >
                        {/* Icon or Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
                                🔧
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    {card.title}
                                </h3>
                            </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                                {card.duration}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="text-gray-300 text-base leading-relaxed mb-6">
                            <p className="text-justify">{card.description}</p>
                        </div>

                        {/* Technologies */}
                        {card.technologies && card.technologies.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {card.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Impact */}
                        {card.impact && (
                            <div className="pt-4 border-t border-gray-700/50">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">💡</span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-blue-400 mb-1">Impact</h4>
                                        <p className="text-sm text-gray-300">{card.impact}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
