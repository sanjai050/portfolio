'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeaderScroller({ text = "about" }: { text: string }) {
    const scrollTextRef = useRef(null);

    return (
        <header className="py-2">
            <div className="overflow-x-hidden relative h-auto">
                <motion.div
                    ref={scrollTextRef}
                    className="flex whitespace-nowrap"
                    animate={{
                        x: '-100%', // Move the text out of the screen to the left
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,      // Loop the animation infinitely
                            repeatType: 'loop',    // Ensure it's a smooth looping
                            duration: 20,          // Adjust duration for the speed of scroll
                            ease: 'linear',        // Make the scrolling smooth
                        },
                    }}
                >
                    {Array.from({ length: 18 }).map((_, index) => (
                        <h1
                            key={index}
                            className="mr-10 font-bold text-blackText uppercase text-9xl max-md:text-6xl leading-normal"
                        >
                            {text}
                        </h1>
                    ))}
                </motion.div>
            </div>
        </header>
    );
}
