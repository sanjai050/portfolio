'use client';

import Preloader from "@/components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import AboutSection from "@/sections/AboutSection";
import AchievemntsSection from "@/sections/AchievementSection";
import HeroSection from "@/sections/HeroSection";
import WorkExperienceSection from "@/sections/WorkExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactUsSection from "@/sections/ContactUsSection";
import SideBar from "@/lib/widgets/SideBar";
import CustomCursor from "@/lib/widgets/CustomCursor";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2500)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []
  )


  return (
    <main>
      {width > 1024 && <CustomCursor />}

      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <motion.div
        className="w-full overflow-hidden landing-page"
      >

        <SideBar />

        <HeroSection />

        <AboutSection />

        <AchievemntsSection />

        <WorkExperienceSection />


        <ProjectsSection />

        <ContactUsSection />

      </motion.div>
    </main>
  );
}
