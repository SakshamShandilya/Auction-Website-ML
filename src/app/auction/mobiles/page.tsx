"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";
import React, { useEffect, useContext, useState } from "react";

import Phone1 from "@/assets/mobiles/mobile1.jpg";
import Phone2 from "@/assets/mobiles/mobile2.jpg";
import Phone3 from "@/assets/mobiles/mobile3.jpg";
import Phone4 from "@/assets/mobiles/mobile4.jpg";

import AppProvider from "context/AppContext";
import { ProductContext } from "context/ProductContext";
import MobileFilter from "@/components/AuctionPage/MobileFilter";

const images = [Phone1, Phone2, Phone3, Phone4];
const titles = [
    "Upgrade your tech game with our mobile device auction!",
    "Bidding starts now for the latest and greatest mobile devices!",
    "Get your hands on the hottest mobile devices at unbeatable prices!",
    "Join the bidding war for top-of-the-line mobile devices and win big!",
];

type Props = {};
const page = (props: Props) => {
    const { products, mobiles, setMobiles, getMobiles } =
        useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getMobiles();
    }, []);
    return (
        <div className="px-4 md:px-16">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                endDate={mobiles[0]?.soldDate}
                latestProducts={mobiles.slice(0, 4)}
            />
            <MobileFilter />
        </div>
    );
};

export default page;
