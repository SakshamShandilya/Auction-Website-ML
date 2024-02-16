"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";

import React, { useState, useContext, useEffect } from "react";

import Laptop1 from "@/assets/laptops/laptop1.jpg";
import Laptop2 from "@/assets/laptops/laptop2.jpg";
import Laptop3 from "@/assets/laptops/laptop3.jpg";
import Laptop4 from "@/assets/laptops/laptop4.jpg";

const images = [Laptop1, Laptop2, Laptop3, Laptop4];
const titles = [
    "Upgrade Your Tech Game: Join Our Laptop Auction Today!",
    "Experience High Performance Computing With Our Next Laptop Auction Event!",
    "Bid and Win Big On Your Dream Laptop At Our Exciting Auction!",
    "Become More Productive And Connected With Our Latest Laptop Auction Offerings!",
];

import AppProvider from "context/AppContext";
import { ProductContext } from "context/ProductContext";

type Props = {};
const page = (props: Props) => {
    const { products, laptops, setLaptops, getLaptops } =
        useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getLaptops();
    }, []);

    return (
        <div className="px-4 md:px-16 gap-4">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                endDate={laptops[0]?.soldDate}
                latestProducts={laptops.slice(0, 4)}
            />
        </div>
    );
};

export default page;
