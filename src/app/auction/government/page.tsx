"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";
// import CarFilter from "@/components/AuctionPage/CarFilter";
import React, { useState, useContext, useEffect } from "react";

import Govt1 from "@/assets/govt/government1.jpg";
import Govt2 from "@/assets/govt/government2.jpg";
import Govt3 from "@/assets/govt/government3.jpg";
import Govt4 from "@/assets/govt/government4.jpg";

const images = [Govt1, Govt2, Govt3, Govt4];
const titles = [
    "Invest in your country's future through government tenders and construction contracts.",
    "Get the chance to work with the government and help build a better tomorrow.",
    "Secure your business's future with lucrative government contracts.",
    "Join hands with the government and contribute to the nation's growth.",
];

import { ProductContext } from "context/ProductContext";
type Props = {};
const page = (props: Props) => {
    const { products, govt, setGovt, getGovernment } =
        useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getGovernment();
    }, []);
    return (
        <div className="px-4 md:px-16 gap-4">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                endDate={govt && govt[0]?.soldDate}
                latestProducts={govt.slice(0, 4)}
            />
        </div>
    );
};

export default page;
