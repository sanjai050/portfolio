'use client';

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderScroller from "@/lib/widgets/HeaderScroller";
import Slider from "react-slick";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { blogs_data } from "@/lib/data/data";
import Link from "next/link";
import Rounded from "@/lib/animations/Rounded";
import CircleBtm from "@/components/CircleBTM";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogsSection() {
    return (
        <motion.section
        id="blogs"
            className="overflow-vissible relative h-fit pb-32 bg-gradient-to-br from-white to-[#f6f6f6] w-full text-blackText"
        >
            <HeaderScroller text="blogs" />
            <div className="sizer max-md:py-10">
                <BlogsCarousel />
            </div>
            <CircleBtm />

        </motion.section>
    );
}

function BlogsCarousel() {



    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % blogs_data[0].images.length); // Cycle through images
        }, 5000);
        return () => clearInterval(interval);
    }, [blogs_data]);



    function SliderNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <ArrowRightCircle size={50} color="#1d1f2b" className={className} style={style}
                onClick={onClick} />
        );
    }

    function SliderPrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <ArrowLeftCircle size={50} color="#1d1f2b" className={className} style={style}
                onClick={onClick} />
        );
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        className: " mx-10",
        waitForAnimate: true,
        swipeToSlide: true,
        centerPadding: "60px",
        pauseOnHover: true,
        focusOnSelect: true,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true

                }
            }
        ]
    };

    return (

        <div className="">
            <Slider {...settings}>
                {blogs_data.map((card, index) => (
                    <div key={index} className="relative hover:shadow-xl px-2 w-[400px] max-w-[400px] mb-5">
                        <div className="flex">
                            <Image
                                src={card.images[currentImageIndex % card.images.length]}
                                alt={card.title}
                                width={500}
                                height={300}
                                className="transition-all duration-500 ease-linear transform"
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center text-blackText px-4 py-3">
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p>{card.description}</p>
                            <Link
                            href={card.link}
                            target="_blank"
                            className="px-3 uppercase font-bold mt-4 w-fit "
                        >
                            <Rounded>
                                <div className=''>
                                    <div className="w-full h-full text-sm">
                                        <p>Read more</p>

                                    </div>
                                </div>
                            </Rounded>
                        </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
}
