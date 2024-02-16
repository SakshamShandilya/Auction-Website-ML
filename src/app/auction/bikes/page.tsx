"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";
import AuctionFilter from "@/components/AuctionPage/BikesFilter";

import React, { useState, useContext, useEffect } from "react";

import Bike1 from "@/assets/bikes/bike1.jpg";
import Bike2 from "@/assets/bikes/bike2.jpg";
import Bike3 from "@/assets/bikes/bike3.jpg";
import Bike4 from "@/assets/bikes/bike4.jpg";

const images = [Bike1, Bike2, Bike3, Bike4];
const titles = [
    "Get on two wheels - join our bike auction today!",
    "Don't miss out on great deals at our bike auction event.",
    "Pedal your way to savings at our next bike auction.",
    "Celebrate cycling culture by joining our upcoming bike auction.",
];

import { ProductContext } from "context/ProductContext";

type Props = {};
const page = (props: Props) => {
    const { products, bikes, setBikes, getBikes } = useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getBikes();
    }, []);

    return (
        <div className="px-4 md:px-16 gap-4">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                latestProducts={bikes.slice(0, 4)}
                // endDate={bikes[0]?.soldDate}
            />
            <AuctionFilter />
        </div>
    );
};

export default page;
