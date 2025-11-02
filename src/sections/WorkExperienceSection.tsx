'use client';

import CircleBtm from "@/components/CircleBTM";
import { we_data } from "@/lib/data/data";
import HeaderScroller from "@/lib/widgets/HeaderScroller";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


function WorkExperienceSection() {
    const timelineRef = useRef(null);
    const [timelineHeight, setTimelineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element: any = timelineRef.current;
            if (!element) return;

            const { top, height } = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && top + height > 0) {
                const progress = Math.min(1, Math.max(0, (windowHeight - top) / height));
                setTimelineHeight(progress * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Trigger on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <motion.section id="work" className="overflow-vissible relative  h-fit bg-gradient-to-br from-white to-[#f6f6f6] w-full">
            <div className="sticky top-0 w-full h-full">
                <HeaderScroller text="work experience" />
                <div className="sizer m-auto pb-10 max-md:pt-10">
                    <div className="relative">
                        <div
                            ref={timelineRef}
                            className="timeline relative  text-blackText max-w-[1200px] my-[100px] mx-auto"
                        >
                            <motion.div
                                className="absolute timeline2 top-0 left-1/2 -translate-x-1/2 bg-blackText/50 rounded-full"
                                style={{
                                    width: "4px",
                                    height: `${timelineHeight}%`,
                                    zIndex: 0,
                                }}
                                viewport={{ once: false }}
                                initial={{ height: "0%" }}
                                animate={{ height: `${timelineHeight}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />

                            {we_data.map((we, index) => (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 10,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 0,
                                    }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    key={index}
                                    className={`cont z-[1] my-24 py-[10px] px-[50px] relative w-1/2 ${index % 2 !== 0 ? "left-1/2" : ""
                                        }
                                max-[800px]:w-full max-[800px]:left-0
                                `}
                                >
                                    <div
                                        className={`w-10 h-10 overflow-hidden shadow-lg bg-white flex items-center justify-center absolute ${index % 2 !== 0
                                            ? "left-[-20px]"
                                            : "right-[-20px]"
                                            } top-1/2 transform -translate-y-1/2 z-[1]
                                        max-[800px]:left-0 max-[800px]:transulate-y-0`}
                                    >
                                        <Image
                                            src={we.image}
                                            alt={we.alt}
                                            width={100}
                                            height={100}
                                            priority
                                        />
                                    </div>

                                    <div className="card py-[20px] px-[30px] bg-white shadow-sm relative">
                                        <h1 className="font-bold text-lg">{we.company}</h1>
                                        <h3>{we.role}</h3>
                                        <small className="font-light">{we.duration}</small>
                                        <ul className="fong-thin text-sm list-item">
                                            {we.description.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-2 list-disc"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item,
                                                    }}
                                                ></li>
                                            ))}
                                        </ul>
                                        <div
                                            className={`
                                        ${index % 2 === 0
                                                    ? "left-container-arrow-we"
                                                    : "right-container-arrow-we"
                                                }
                                            `}
                                        ></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CircleBtm />
        </motion.section>
    );
}

export default WorkExperienceSection;
