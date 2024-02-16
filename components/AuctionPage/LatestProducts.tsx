"use client";
import { Product } from "@/types/Product";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { ImHammer2 } from "react-icons/im";
import QuickView from "./QuickView";
import LatestNewCard from "./LatestNewCard";
import { calculateTimeLeft } from "@/utils/TimeCounter";

type Props = {
    latestProducts: Product[];
    // endDate: string;
};
const LatestProducts = (props: Props) => {
    

    const [showQuickView, setShowQuickView] = useState(false);
    return (
        <section className="p-10">
            {/* create a div with heading in the center as "Latest Products" */}
            <div className="flex flex-col items-center justify-center py-6">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    Latest Products
                </h1>
                <div className="w-20 h-1 bg-indigo-500 rounded-full my-2"></div>
            </div>
            {/* create a div with flex layout and wrap the products in it */}
            <div className="justify-center items-center flex flex-row flex-1 flex-wrap gap-10">
                {props?.latestProducts &&
                    props?.latestProducts?.map(
                        (product: Product, index: number) => {
                            return (
                                product.soldDate===undefined?
                                null:
                                <LatestNewCard endDate={product.soldDate} product={product} key={index} />
                            );
                        }
                    )}
            </div>
        </section>
    );
};

export default LatestProducts;
