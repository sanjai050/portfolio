'use client';

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from './style.module.scss';

export default function CircleBtm({bgColor="#f6f6f6"}: {bgColor?: string}) {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end 20%"],
    });
  
    const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);
    return (
      <section ref={ref} className={`w-full h-auto bottom-0 z-10 absolute bg-[${bgColor}] `}>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle} style={{ backgroundColor: bgColor }}></div>
        </motion.div>
      </section>
    )
  }