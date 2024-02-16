"use client";
import React, { useState, useEffect, useContext } from "react";
import { Product } from "@/types/Product";
import { Colors } from "@/types/Color";
import MainAuctionPage from "@/components/ProductPage/MainAuctionPage";
import { useRouter } from "next/navigation";
// import { colors } from "config";

import LatestProducts from "@/components/AuctionPage/LatestProducts";

import AppProvider from "context/AppContext";
import { ProductContext } from "context/ProductContext";

const page = ({ params }: any) => {
    const { products, getAllProducts, setProducts } =
        useContext(ProductContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log("useEffect");
        getAllProducts();
        // console.log(products);
    }, []);

    const router = useRouter();
    const id = params["id"].toString();
    // console.log(id);

    // fetch the product data from the server or context api
    // const [products, setProducts] = useState<Product[] | null>(null);
    const product: Product = products.find(
        (product: Product) => product._id === id
    );
    const moreProducts: Product[] = products.filter(
        (product: Product) => product._id !== id
    );

    // const product = products[3];
    // const moreProducts = products;

    // console.log(products);
    // console.log(colors[product.category]);
    return (
        <div>
            <MainAuctionPage
                // type={product.category}
                // color={colors[product.category]}
                product={product}
                moreProducts={moreProducts}
            />
            {/* <LatestProducts latestProducts={products.slice(0, 4)} /> */}
        </div>
    );
};

export default page;
