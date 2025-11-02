'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import HeaderScroller from "@/lib/widgets/HeaderScroller";

export default function AboutSection() {

    const paragraph1 = [
        `I am a B.Tech Mechanical Engineering graduate from Sri Manakula Vinayagar Engineering College (2020-2024) with a CGPA of 8.07. I have worked as a Graduate Apprentice at BRIGHT BROTHERS Ltd, Thirubhuvanai, Puducherry, where I brought 15 months of professional experience in quality control and manufacturing excellence.`,
        `My expertise lies in managing QC activities of production line controlling, PPM calculation, defects identification, and implementing continuous process improvements to achieve zero defects. I am proficient in using 7QC tools and have comprehensive knowledge of quality core tools including APQP, PPAP, FMEA, MSA, SPC, and 8D problem solving methodologies.`,
        `I am passionate about implementing Kaizen improvements and error-proofing techniques (POKA-YOKE) in manufacturing processes. With certifications in Python, C Programming, Azure Fundamentals, and specialized training in Quality Control and Manufacturing, I am committed to driving operational excellence and ensuring the highest quality standards in production environments.`,
    ];


    const paragraph = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: paragraph,
        offset: ["start 0.7", "start 0.2"],
    });

    const totalParaWords = paragraph1.reduce((acc, para) => {
        return acc + para.split(" ").length;
    }, 0);

    let paraIndices = 0;

    return (

        <motion.section
        id="about"
            className="rounded-t-[50px] overflow-hidden h-fit bg-gradient-to-br from-white to-[#f6f6f6] w-full">

            <HeaderScroller text='about' />

            <div className="relative  pb-8 max-[830px]:pb-0 flex sizer items-center justify-between max-[1000px]:flex-col max-[1000px]:justify-center">
                <div className="person relative -top-24 max-[1000px]:left-2 -left-10 max-[1000px]:-top-32" id="person-1">
                    <div className="creators-container">
                        <div
                            className="container-inner"
                            style={{
                                clipPath:
                                    "path('M 390 400 C 390 504.934 304.934 590 200 590 C 95.0659 590 10 504.934 10 400 V 10 H 200 H 390 Z')",
                            }}
                        >
                            <div className="circle bg-gradient-to-br from-[#262829] to-[#3F4143]"></div>
                            <motion.div
                                initial={{ opacity: 1, y: 100, scale:0.9  }}
                                whileInView={{ opacity: 1, y: 0, scale:1  }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: false,amount: 0.3}}
                                className="shadow-lg"
                            >
                                <Image
                                    className="creators-img img1"
                                    src="/assets/my/2.jpg"
                                    alt="Sanjai Kumar .M"
                                    width={200}
                                    height={500}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="about-text relative max-[1000px]:-top-20 text-lg font-medium text-blackText">
                    <motion.div
                        className="about-right text-[1.2rem] leading-[1.5] font-semibold tracking-wide max-[600px]:text-lg max-[400px]:text-[16px]"
                        ref={paragraph}
                        id="about-right"
                    >
                        {paragraph1.slice(0, 2).map((para, index) => (
                            <div className="flex flex-wrap text-justify whitespace-normal mb-4" key={index}>
                                {para.split(" ").map((word) => {
                                    const start = paraIndices / totalParaWords;
                                    const end = start + 1 / totalParaWords;
                                    paraIndices = paraIndices + 1;
                                    return (
                                        <Word
                                            key={paraIndices}
                                            range={[start, end]}
                                            progress={scrollYProgress}
                                        >
                                            {word}
                                        </Word>
                                    );
                                })}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </motion.section>

    )
}


const Word = ({
    children,
    range,
    progress,
}: {
    children: any;
    range: any;
    progress: any;
}) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="mr-[6px] leading-[1.5] whitespace-normal relative">
            <span
                dangerouslySetInnerHTML={{ __html: children }}
                className="absolute opacity-[0.3]"
            ></span>
            <motion.span
                dangerouslySetInnerHTML={{ __html: children }}
                style={{ opacity }}
            ></motion.span>

        </span>
    );
};

