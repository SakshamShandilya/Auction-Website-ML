"use client";
import React, { useState, useEffect } from "react";

import Car1 from "@/assets/cars/car1.jpg";
import Car2 from "@/assets/cars/car2.jpg";
import Car3 from "@/assets/cars/car3.jpg";
import Car4 from "@/assets/cars/car4.jpg";

import Bike1 from "@/assets/bikes/bike1.jpg";
import Bike2 from "@/assets/bikes/bike2.jpg";
import Bike3 from "@/assets/bikes/bike3.jpg";
import Bike4 from "@/assets/bikes/bike4.jpg";

import Laptop1 from "@/assets/laptops/laptop1.jpg";
import Laptop2 from "@/assets/laptops/laptop2.jpg";
import Laptop3 from "@/assets/laptops/laptop3.jpg";
import Laptop4 from "@/assets/laptops/laptop4.jpg";

import Phone1 from "@/assets/mobiles/mobile1.jpg";
import Phone2 from "@/assets/mobiles/mobile2.jpg";
import Phone3 from "@/assets/mobiles/mobile3.jpg";
import Phone4 from "@/assets/mobiles/mobile4.jpg";

import RealEstate1 from "@/assets/real-estate/realEstate1.jpg";
import RealEstate2 from "@/assets/real-estate/realEstate2.jpg";
import RealEstate3 from "@/assets/real-estate/realEstate3.jpg";
import RealEstate4 from "@/assets/real-estate/realEstate4.jpg";

import Link from "next/link";

type Props = {};
const Gallery = (props: Props) => {
    const [carIndex, setCarIndex] = useState(0);
    const [bikeIndex, setBikeIndex] = useState(0);
    const [laptopIndex, setLaptopIndex] = useState(0);
    const [phoneIndex, setPhoneIndex] = useState(0);
    const [realEstateIndex, setRealEstateIndex] = useState(0);

    const carImages = [Car1, Car2, Car3, Car4];
    const bikeImages = [Bike1, Bike2, Bike3, Bike4];
    const laptopImages = [Laptop1, Laptop2, Laptop3, Laptop4];
    const phoneImages = [Phone1, Phone2, Phone3, Phone4];
    const realEstateImages = [
        RealEstate1,
        RealEstate2,
        RealEstate3,
        RealEstate4,
    ];

    // cars
    // useEffect(() => {
    //     const secondsBetweenChanges = 5;
    //     const interval = setInterval(() => {
    //         setCarIndex((prevIndex) =>
    //             prevIndex + 1 < carImages.length ? prevIndex + 1 : 0
    //         );
    //     }, secondsBetweenChanges * 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // bikes
    // useEffect(() => {
    //     const secondsBetweenChanges = 4;
    //     const interval = setInterval(() => {
    //         setBikeIndex((prevIndex) =>
    //             prevIndex + 1 < bikeImages.length ? prevIndex + 1 : 0
    //         );
    //     }, secondsBetweenChanges * 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // laptops
    // useEffect(() => {
    //     const secondsBetweenChanges = 3;
    //     const interval = setInterval(() => {
    //         setLaptopIndex((prevIndex) =>
    //             prevIndex + 1 < laptopImages.length ? prevIndex + 1 : 0
    //         );
    //     }, secondsBetweenChanges * 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // phones
    // useEffect(() => {
    //     const secondsBetweenChanges = 6;
    //     const interval = setInterval(() => {
    //         setPhoneIndex((prevIndex) =>
    //             prevIndex + 1 < phoneImages.length ? prevIndex + 1 : 0
    //         );
    //     }, secondsBetweenChanges * 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // real-estate
    // useEffect(() => {
    //     const secondsBetweenChanges = 4;
    //     const interval = setInterval(() => {
    //         setRealEstateIndex((prevIndex) =>
    //             prevIndex + 1 < realEstateImages.length ? prevIndex + 1 : 0
    //         );
    //     }, secondsBetweenChanges * 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <section className="text-gray-600 body-font h-sreen">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2 relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={phoneImages[phoneIndex].src}
                            />
                            <Link href="/auction/mobiles">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Mobiles
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={bikeImages[bikeIndex].src}
                            />
                            <Link href="/auction/bikes">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Bikes
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="md:p-2 p-1 w-full relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={carImages[carIndex].src}
                            />
                            <Link href="/auction/cars">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Cars
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block rounded-lg"
                                src={laptopImages[laptopIndex].src}
                            />
                            <Link href="/auction/laptops">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Laptops
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src="https://etimg.etb2bimg.com/thumb/msid-95701624,width-1200,resizemode-4/.jpg"
                            />
                            <Link href="/auction/government">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Government
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="md:p-2 p-1 w-1/2 relative hover:cursor-pointer rounded-lg">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={realEstateImages[realEstateIndex].src}
                            />
                            <Link href="/auction/real">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                    <span className="text-white font-bold text-3xl">
                                        Real Estate
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
