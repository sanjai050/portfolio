
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Magnetic from '@/lib/animations/Magnetic';
import Rounded from '@/lib/animations/Rounded';

function ContactUsSection() {
    return (
        <section id='contact' className="h-screen relative overflow-hidden bg-grey-2 text-white text-gainsboro">
            <div className="container sizer h-full relative">
                <div className='w-36 h-36 absolute left-1/2 transform -translate-x-1/2 top-20 rounded-full shadow-md overflow-hidden'>
                    <Image
                        src={'/assets/my/3.jpg'}
                        alt="Sanjai Kumar .M | Contact Us"
                        className='w-full h-full object-cover'
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[8vw] uppercase font-semi bold">Have an idea?</h1>
                    <div className='flex flex-col gap-0 text-center justify-center items-center'>

                        <Link
                            href="mailto:sanjaikumar9123@gmail.com"
                            target="_blank"
                            className="px-4 uppercase font-bold text-lg w-fit "
                        >
                            <Rounded>
                                <div className=''>
                                    <p className="text-lg max-[400px]:text-sm max-[363px]:text-[10px] ">Drop me an email:</p>
                                    <div className="w-full h-full text-lg max-[400px]:text-sm max-[363px]:text-[10px]">
                                        <p>sanjaikumar9123@gmail.com</p>

                                    </div>
                                </div>
                            </Rounded>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom absolute bottom-0 text-[16px] w-full py-5">
                <div className="flex justify-between sizer">
                    <Magnetic>
                        <Link href="#hero" className="text-center hover:font-semibold">
                            Back to top
                        </Link>
                    </Magnetic>
                    <div className='flex gap-4'>
                     
                        <Magnetic>
                            <Link href="https://www.linkedin.com/in/msanjaikumar/" target='_blank'>LinkedIn</Link>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection