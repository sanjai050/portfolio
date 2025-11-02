'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import Reveal from "../lib/animations/Reveal";
import Magnetic from "@/lib/animations/Magnetic";
import styles from './style.module.scss';
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "@/lib/animations/Rounded";

function HeroSection() {


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".parallax-background", {
            yPercent: 150,
            scrollTrigger: {
                trigger: ".landing-page",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // pin: true,
                // markers: true,
            }
        });


    }, []);


    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9, y: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                duration: 1, delay: 2.8
                , ease: [0.76, 0, 0.24, 1]
            }}
            id="hero"
            className="relative top-0 h-screen overflow-hidden bg-background w-full">

            <nav className="absolute top-0 text-white z-[1] w-full h-24 ">
                <div className="nav sizer h-full flex justify-between items-center">
                    <div>
                        <Magnetic>
                            <div>
                                <Link href="/">
                                    <div className={styles.logo}>
                                        <p className={styles.copyright}>©</p>
                                        <div className={styles.name}>
                                            <p className={styles.codeBy}>Code by</p>
                                            <p className={styles.dennis}>Sanjai Kumar .M</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Magnetic>
                    </div>
                    {/* <div>
                        <div className="social-buttons flex flex-wrap gap-3 items-center relative  max-[950px]:float-right">
                            <Parallax speed={-0.2} className="flex justify-center items-center">
                                <div
                                    data-scroll
                                    data-scroll-speed="0.21"
                                    data-scroll-delay="0.01"
                                    className="relative w-fit rounded-full"
                                >
                                    <Reveal>
                                        <a
                                            href="https://github.com/THARUNESHWAR-369"
                                            target="_blank"
                                            data-text='Github'
                                        >
                                            <div className="overlay relative bg-gainsboro max-[950px]:bg-transparent w-full h-full rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    // width="40"
                                                    viewBox="0 0 24 24"
                                                    className="w-[40px] max-[550px]:w-[32px]"
                                                >
                                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </Reveal>
                                </div>
                            </Parallax>

                            <Parallax speed={-0.2} className="flex justify-center items-center">
                                <div
                                    data-scroll
                                    data-scroll-speed="0.2"
                                    data-scroll-delay="0.05"
                                    className="relative w-fit rounded-full"
                                >
                                    <Reveal>
                                        <a
                                            href="https://www.linkedin.com/in/tharuneshwar-s/"
                                            target="_blank"
                                            data-text='LinkedIn'
                                        >
                                            <div className="overlay relative bg-gainsboro max-[950px]:bg-transparent rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    className="w-[40px] max-[550px]:w-[32px]"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#0078d4"
                                                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                                                    ></path>
                                                    <path
                                                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                                                        opacity=".05"
                                                    ></path>
                                                    <path
                                                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                                                        opacity=".07"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </Reveal>
                                </div>
                            </Parallax>


                        </div>
                    </div> */}
                </div>
            </nav>

            <div className="absolute top-0 w-full h-full">
                <div className="relative left-0 network-img w-full h-full">
                    <Image
                        src={'/assets/bg-elements/network.png'}
                        alt="AI Network | Hero Background Image"
                        className="w-[70%] h-full object-cover opacity-80 "
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>

            <div className="hero-img parallax-background max-w-fit absolute top-0 float-right right-0 w-fit h-full">

                {/* Gear Symbol - Top Right */}
                <div className="absolute top-20 right-1/2 max-md:right-16 max-sm:right-8 max-sm:top-32 z-[-10] max-[1000px]:opacity-20 move-up-down-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        ⚙️
                    </div>
                </div>

                {/* Wrench Symbol - Middle Right */}
                <div className="absolute top-1/3 right-[75%] max-md:right-12 max-sm:right-6 z-[-10] max-[1000px]:opacity-20 move-dowb-up-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        🔧
                    </div>
                </div>

                {/* Chart Symbol - Lower Right */}
                <div className="absolute top-1/2 right-40 max-md:right-20 max-sm:right-10 z-[-10] max-[1000px]:opacity-20 move-up-down-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        📊
                    </div>
                </div>

                {/* Factory Symbol - Upper Right */}
                <div className="absolute top-1/4 right-16 max-md:right-8 max-sm:right-4 max-sm:top-48 z-[-10] max-[1000px]:opacity-20 move-dowb-up-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        🏭
                    </div>
                </div>

                {/* Checkmark Symbol - Middle Lower Right */}
                <div className="absolute bottom-1/3 right-28 max-md:right-14 max-sm:right-7 z-[-10] max-[1000px]:opacity-20 move-up-down-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        ✅
                    </div>
                </div>

                {/* Target Symbol - Bottom Right */}
                <div className="absolute bottom-24 right-1/2 max-md:right-18 max-sm:right-9 max-sm:bottom-32 z-[-10] max-[1000px]:opacity-20 move-dowb-up-rotate">
                    <div className="w-20 h-20 max-sm:w-14 max-sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center text-4xl max-sm:text-2xl shadow-lg">
                        🎯
                    </div>
                </div>

                <Image
                    src={'/assets/bg-elements/circle-light.png'}
                    alt="Sanjai Kumar .M | Hero Background Image"
                    className="w-full h-full  top-0 object-cover max-[1000px]:opacity-30 z-[1]  "
                    width={2000}
                    height={2000}
                />
                <Image
                    src={'/assets/bg-elements/ring-1.png'}
                    alt="Sanjai Kumar .M | Hero Background Image"
                    className="absolute p-[7rem] h-full top-0 object-cover max-[1000px]:opacity-30 spin-clockwise"
                    width={2000}
                    height={2000}
                />

                <Image
                    src={'/assets/bg-elements/ring-2.png'}
                    alt="Sanjai Kumar .M | Hero Background Image"
                    className="absolute p-[9rem] h-full top-0 object-cover max-[1000px]:opacity-30 spin-counterclockwise"
                    width={2000}
                    height={2000}
                />

                <Image
                    src={'/assets/my/1.jpg'}
                    alt="Sanjai Kumar .M | Hero Background Image"
                    className="absolute p-[14rem] rounded-full max-sm:p-[8rem] max-[480px]:p-[7rem] max-[450px]:p-[4rem] max-[400px]:p-[3rem] max-[350px]:p-[2rem] max-sm:top-16 max-w-full w-full left-0 top-0 object-cover max-[1000px]:opacity-30"
                    width={2000}
                    height={2000}
                />

            </div>

            <div className="sizer parallax-background flex-col relative max-md:items-center top-0 w-full h-full items-start justify-center gap-10 flex text-white left-0">
                <Reveal>
                    <h1 className=" max-md:max-w-full max-md:items-center max-md:text-center max-md:leading-[1.1]
          font-bold text-7xl max-lg:text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl max-w-[56vw]
          text-transparent drop-shadow-lg bg-clip-text bg-gradient-to-br from-white to-[#6e6e6e]
          ">Quality Control Engineer & Mechanical Engineering Graduate</h1>
                </Reveal>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}

                >
                    <Link
                        href="mailto:sanjaikumar9i25@gmail.com"
                        target="_blank"
                        className="uppercase font-bold text-sm w-fit "
                    >
                        <Rounded>
                            <div
                                className=" flex items-center gap-2 ">


                                <Phone size={20} className="relative z-[1]" />

                                <p>Contact</p>
                            </div>
                        </Rounded>
                    </Link>
                </motion.div>

            </div>
        </motion.section>

    )
}

export default HeroSection