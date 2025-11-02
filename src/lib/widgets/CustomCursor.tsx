'use client';

import React, { useEffect } from 'react'
import { gsap } from 'gsap';

function CustomCursor({ text = "" }: { text?: string }) {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText: any = document.querySelector('.cursor-text');

        const onMouseMove = (event: any) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { duration: 0.5, x: clientX - 25, y: clientY - 25 });
        }

        const onMouseEnterLink = (event: any) => {
            const link = event.target;
            gsap.to(cursor, { scale: 2 })
            cursorText.style.display = 'block';

            if (link.getAttribute('data-text')) {
                const text = link.getAttribute('data-text');
                cursorText.innerText = text;
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 })
            cursorText.style.display = 'none';
            cursorText.innerText = "";
        }

        document.addEventListener('mousemove', onMouseMove);

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })



    }, []);
    return (
        <div id='custom-cursor' className='custom-cursor mix-blend-difference fixed top-0 left-0 w-[50px] h-[50px] rounded-[50%] pointer-events-none z-[550] p-[10px] flex justify-end items-center flex-col bg-white'>
            <span className='cursor-text text-white mix-blend-difference text-[8px] font-semibold tracking-[1px] hidden'>{text}</span>
        </div>
    )
}

export default CustomCursor
