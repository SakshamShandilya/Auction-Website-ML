"use client";
import AuctionHero from "@/components/AuctionPage/AuctionHero";
import LatestProducts from "@/components/AuctionPage/LatestProducts";
import React, { useEffect, useContext } from "react";

import RealEstate1 from "@/assets/real-estate/realEstate1.jpg";
import RealEstate2 from "@/assets/real-estate/realEstate2.jpg";
import RealEstate3 from "@/assets/real-estate/realEstate3.jpg";
import RealEstate4 from "@/assets/real-estate/realEstate4.jpg";

import { ProductContext } from "context/ProductContext";

const images = [RealEstate1, RealEstate2, RealEstate3, RealEstate4];
const titles = [
    "Find Your Perfect Home Sweet Home: Join Our Real Estate Auction Now!",
    "Own A Piece Of Paradise With Our Spectacular Real Estate Auction Properties!",
    "Invest Wisely Into The Future With Our Selection Of Prime Real Estate Auctions!",
    "Unleash The Potential Of Your Financial Growth Through Our Exclusive Real Estate Auctions!",
];

type Props = {};
const page = (props: Props) => {
    const { products, realestates, setRealestates, getRealestates } =
        useContext(ProductContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        getRealestates();
    }, []);
    return (
        <div className="px-4 md:px-16">
            <AuctionHero images={images} title={titles} />
            <LatestProducts
                endDate={realestates[0]?.soldDate}
                latestProducts={realestates.slice(0, 4)}
            />
        </div>
    );
};

export default page;
