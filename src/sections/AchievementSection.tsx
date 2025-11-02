'use client';

import { motion } from "framer-motion";
import React from "react";
import HeaderScroller from "@/lib/widgets/HeaderScroller";
import { achv_data } from "@/lib/data/data";

export default function AchievemntsSection() {
    return (
        <motion.section
            id="achievements"
            className="overflow-hidden h-fit pb-10 bg-blackBg w-full"
        >
            <HeaderScroller text="achievements" />
            <div className="sizer m-auto pb-10 max-md:pt-10">
                <AchievementsLayout />
            </div>
        </motion.section>
    );
}

function AchievementsLayout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {achv_data.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    className="bg-gradient-to-br from-[#2a2c35] to-[#1f2128] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col"
                >
                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl flex-shrink-0">
                            {card.icon}
                        </div>
                        <div className="flex-1">
                            <span className="text-sm text-blue-400 font-semibold">{card.year}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed text-justify flex-grow">
                        {card.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
