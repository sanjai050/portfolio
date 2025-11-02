'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'
import { motion } from 'framer-motion';
import { menuSlide, scale, slide } from '../animations/anim';
import Link from 'next/link';

function Nav() {

    const navItems = [
        {
            title: "Home",
            href: "#home",
        },
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Work",
            href: "#work",
        },
        {
            title: "Projects",
            href: "#projects",
        },
        {
            title: "Achievements",
            href: "#achievements",
        },
        {
            title: "Contact",
            href: "#contact",
        },
    ]


    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body2}>
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <Link_ key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link_>
                        })
                    }
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}

function Link_({ data, isActive, setSelectedIndicator }: any) {
    // console.log(data)
    const { title, href, index } = data;

    return (
        <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
            <Link href={href}>{title}</Link>
        </motion.div>

    )
}

function Footer() {
    return (
        <div className={styles.footer}>
            <Link className='cursor-pointer hover:text-[#4c89f9]' href="https://www.linkedin.com/in/msanjaikumar/" target="_blank"><p>LinkedIn</p></Link>
            {/* <Link className='cursor-pointer hover:text-[#4c89f9]' href="https://github.com/sanjaikumar" target="_blank"><p>GitHub</p></Link>
            <Link className='cursor-pointer hover:text-[#4c89f9]' href="https://sanjaikumar.medium.com/" target="_blank"><p>Medium</p></Link>
            {/* <Link className='cursor-pointer hover:text-[#4c89f9]' href="https://www.kaggle.com/sanjaikumar" target="_blank"><p>Kaggle</p></Link> */}
            <Link className='cursor-pointer hover:text-[#4c89f9]' href="https://www.instagram.com/sanjaikumar/" target="_blank"><p>Instagram</p></Link>
        </div>
    )
}



function Curve() {

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <svg className={styles.svgCurve}>
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}


export default function SideBar() {

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <>
            <div className={styles.main}>

                <div className={styles.header}>
                    <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>

            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}





