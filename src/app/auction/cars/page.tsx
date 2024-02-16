"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";
import CarFilter from "@/components/AuctionPage/CarFilter";
import React, { useState, useContext, useEffect } from "react";

import Car1 from "@/assets/cars/car1.jpg";
import Car2 from "@/assets/cars/car2.jpg";
import Car3 from "@/assets/cars/car3.jpg";
import Car4 from "@/assets/cars/car4.jpg";

const images = [Car1, Car2, Car3, Car4];
const titles = [
    "Bid for the ride of your dreams at our car auction.",
    "Rev up your bidding power and snag a car on auction.",
    "Get behind the wheel of your next adventure with a car auction",
    "Find your perfect match on wheels at our car auction.",
];

import { ProductContext } from "context/ProductContext";
type Props = {};
const page = (props: Props) => {
    const { products, cars, setCars, getCars } = useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getCars();
    }, []);
    return (
        <div className="px-4 md:px-16 gap-4">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                endDate={cars[0]?.soldDate}
                latestProducts={cars.slice(0, 4)}
            />
            <CarFilter />
        </div>
    );
};

export default page;
