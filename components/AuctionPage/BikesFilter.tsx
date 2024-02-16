import React, { useState, useEffect, useContext } from "react";
import { Product } from "@/types/Product";
import { ProductContext } from "context/ProductContext";

import ProductCard from "../Cards/ProductCard";
const BikesFilter = () => {
    const { products, getAllProducts, bikes, getBikes, setBikes, setProducts } =
        useContext(ProductContext);

    const [showFilters, setShowfilters] = useState(true);
    const [check, setCheck] = useState({
        New: false,
        Used: false,
        ForParts: false,

        High: false,
        Low: false,

        HighBid: false,
        LowBid: false,
    });

    const {
        New,
        Used,
        ForParts,

        High,
        Low,

        HighBid,
        LowBid,
    } = check;

    const changeHandler = (e: any) => {
        setCheck({
            ...check,
            [e.target.name]: e.target.checked,
        });
    };

    const applyFilters = (e: any) => {
        setCheck({
            ...check,
            New: false,
            Used: false,
            ForParts: false,

            High: false,
            Low: false,

            HighBid: false,
            LowBid: false,
        });

        if (New) {
            setProducts(
                bikes.filter((product: Product) => product.condition === "New")
            );
        } else if (Used) {
            setProducts(
                bikes.filter((product: Product) => product.condition === "Used")
            );
        } else if (ForParts) {
            setProducts(
                bikes.filter(
                    (product: Product) => product.condition === "ForParts"
                )
            );
        } else if (High) {
            setProducts(
                bikes.sort((a: Product, b: Product) => b.price - a.price)
            );
        } else if (Low) {
            setProducts(
                bikes.sort((a: Product, b: Product) => a.price - b.price)
            );
        } else if (HighBid) {
            setProducts(
                bikes.sort((a: Product, b: Product) => b?.bids - a?.bids)
            );
        } else if (LowBid) {
            setProducts(
                bikes.sort((a: Product, b: Product) => a?.bids - b?.bids)
            );
        }
    };

    useEffect(() => {
        getBikes();
    }, []);

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
                <p className=" text-sm leading-3 text-gray-600 font-normal mb-2">
                    Auctions - Bikes - Filters
                </p>
                <div className=" flex justify-between items-center mb-4">
                    <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
                        Bikes
                    </h2>

                    {/*  filters Button (md and plus Screen) */}
                    <button
                        onClick={() => setShowfilters(!showFilters)}
                        className=" cursor-pointer sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
                    >
                        <svg
                            className=" mr-2"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 4V8"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 12V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 4V14"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 18V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 4V5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 9V20"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Filters
                    </button>
                </div>
                <p className=" text-xl leading-5 text-gray-600 font-Low">
                    {bikes?.length} Products
                </p>

                {/* Filters Button (Small Screen)  */}

                <button
                    onClick={() => setShowfilters(!showFilters)}
                    className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
                >
                    <svg
                        className=" mr-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 4V8"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 12V20"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 4V14"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 18V20"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18 4V5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18 9V20"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Filters
                </button>
            </div>

            <div
                id="filterSection"
                className={
                    "relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " +
                    (showFilters ? "block" : "hidden")
                }
            >
                {/* Cross button Code  */}
                <div
                    onClick={() => setShowfilters(false)}
                    className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
                >
                    <svg
                        className=" lg:w-6 lg:h-6 w-4 h-4"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 1L1 25"
                            stroke="#1F2937"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 1L25 25"
                            stroke="#27272A"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                {/* Material Section */}
                <div>
                    <div className=" flex space-x-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-Low text-gray-800 ">
                            Condition
                        </p>
                    </div>
                    <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="New"
                                name="New"
                                value="New"
                                checked={New}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="New"
                                    >
                                        New
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="Used"
                                name="Used"
                                value="Used"
                                checked={Used}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="Used"
                                    >
                                        Used
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="ForParts"
                                name="ForParts"
                                value="ForParts"
                                checked={ForParts}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="For Parts"
                                    >
                                        For Parts
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                {/* Size Section */}
                <div>
                    <div className=" flex space-x-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 5H14"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 7L14 5L12 3"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5 3L3 5L5 7"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19 10V21"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17 19L19 21L21 19"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 12L19 10L17 12"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z"
                                stroke="#1F2937"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-Low text-gray-800 ">
                            Price
                        </p>
                    </div>
                    <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                        <div className=" flex md:justify-center md:items-center items-center justify-start ">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="High"
                                name="High"
                                value="High"
                                checked={High}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="High"
                                    >
                                        High
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center ">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="Low"
                                name="Low"
                                value="Low"
                                checked={Low}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="Low"
                                    >
                                        Low
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                {/* Collection Section */}

                <div>
                    <div className=" flex space-x-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.8">
                                <path
                                    d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14 7H20"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 4V10"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-Low text-gray-800 ">
                            Bids
                        </p>
                    </div>
                    <div className=" flex mt-8 space-x-8">
                        <div className=" flex justify-center items-center">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="LS"
                                name="HighBid"
                                value="LS"
                                checked={HighBid}
                                onChange={changeHandler}
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="LS"
                                    >
                                        High Bid
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center">
                            <input
                                className="w-4 h-4 mr-2"
                                type="checkbox"
                                id="LxL"
                                name="LowBid"
                                checked={LowBid}
                                onChange={changeHandler}
                                value="LxL"
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                    <label
                                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                        htmlFor="LxL"
                                    >
                                        Low Bid
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                    <button
                        onClick={applyFilters}
                        className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-Low py-4 px-10 text-white bg-gray-800"
                    >
                        Apply Filter
                    </button>
                </div>
            </div>

            <>
                {bikes.length > 0 ? (
                    <div className="flex flex-wrap justify-center items-center">
                        {bikes.map((bike) => (
                            <ProductCard
                                key={bike.id}
                                product={bike}
                                endDate={bike.soldDate}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <p className="text-2xl font-Low text-gray-800">
                            No Bikes Found
                        </p>
                    </div>
                )}
            </>
        </div>
    );
};

export default BikesFilter;
