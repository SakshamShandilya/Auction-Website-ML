"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./auctionStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

type Props = {
    images: any;
    title: string[];
};

export default function AuctionHero(props: Props) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty(
                "--progress",
                1 - progress
            );
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {props.images &&
                    props.images.map((image: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center max-h-[70vh] min-w-screen object-contain">
                                    <img
                                        src={image.src}
                                        alt="Carousel Image"
                                        className="w-full "
                                    />
                                    {/* overlay */}
                                    <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 transition-all ease-in"></div>
                                    <div className="z-[11] absolute top-0 bottom-0 left-0 right-0 bg-transparent transition-all ease-in flex items-center justify-center">
                                        <p className="text-white font-extrabold text-lg md:text-3xl">
                                            {props.title[index]}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
