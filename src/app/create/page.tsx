"use client";
import Pictures from "@/components/CreateAuction/Pictures";
import Product from "@/components/CreateAuction/Product";
import Success from "@/components/CreateAuction/Success";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { IoIosArrowBack } from "react-icons/io";
import CarForm from "@/components/CreateAuction/SpecsForms/CarForm";
import BikeForm from "@/components/CreateAuction/SpecsForms/BikeForm";
import GovernmentForm from "@/components/CreateAuction/SpecsForms/GovernmentForm";
import RealEstateForm from "@/components/CreateAuction/SpecsForms/RealEstateForm";
import MobileForm from "@/components/CreateAuction/SpecsForms/MobileForm";
import LaptopForm from "@/components/CreateAuction/SpecsForms/LaptopForm";

type Props = {};
const page = (props: Props) => {
    // const [formNumber, setFormNumber] = useState(1);
    const { category, setCategory, formNumber, setFormNumber } =
        useContext(AppContext);
    return (
        <div className="md:p-8 bg-purple-50 flex items-start min-h-screen flex-col space-y-2">
            {/* back btn */}
            <div>
                <button
                    className="bg-mobile-light text-mobile shadow-lg rounded-lg py-1 px-2.5 flex text-xl items-center"
                    onClick={() => window.history.back()}
                >
                    <IoIosArrowBack className="w-5 h-5 mr-2" />
                    Back
                </button>
            </div>
            <div className="rounded-lg  shadow-lg w-full bg-white p-2 md:py-8">
                {category !== "" && (
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
                        {" "}
                        New Auction
                    </h1>
                )}
                <div>
                    {category === "" ? (
                        // Ask for categoty of product
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
                                {" "}
                                Select Category
                            </h1>
                            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                                <div className="-m-1 flex flex-wrap md:-m-2">
                                    <div className="flex w-1/2 flex-wrap">
                                        <div
                                            className="w-1/2 p-1 md:p-2 relative"
                                            onClick={() =>
                                                setCategory("Laptops")
                                            }
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Laptop
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-1/2 p-1 md:p-2 relative"
                                            onClick={() => setCategory("Cars")}
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Car
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full p-1 md:p-2 relative"
                                            onClick={() =>
                                                setCategory("Mobiles")
                                            }
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Mobile
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-1/2 flex-wrap">
                                        <div
                                            className="w-full p-1 md:p-2 relative"
                                            onClick={() =>
                                                setCategory("Real-Estate")
                                            }
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Real Estate
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-1/2 p-1 md:p-2 relative"
                                            onClick={() => setCategory("Bikes")}
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Bike
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-1/2 p-1 md:p-2 relative"
                                            onClick={() =>
                                                setCategory("Government")
                                            }
                                        >
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://etimg.etb2bimg.com/thumb/msid-95701624,width-1200,resizemode-4/.jpg"
                                            />
                                            {/* overlay */}
                                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                                <p className="text-white font-extrabold">
                                                    Government
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Show form according to category
                        <div className="p-5">
                            <div className="flex items-center space-x-2">
                                <h2 className="text-2xl">
                                    Category :{" "}
                                    <span className="text-purple-500 font-bold capitalize">
                                        {category}
                                    </span>
                                </h2>
                                {/* category reset btn */}
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                                    onClick={() => setCategory("")}
                                >
                                    Reset
                                </button>
                            </div>
                            <div className="mx-4 p-4">
                                <div className="flex items-center">
                                    <div
                                        className={`flex items-center ${
                                            formNumber === 1
                                                ? "text-white"
                                                : "text-mobile"
                                        } relative`}
                                        // onClick={() => setFormNumber(1)}
                                    >
                                        <div
                                            className={`${
                                                formNumber === 1 && "bg-mobile"
                                            } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-mobile flex items-center justify-center`}
                                        >
                                            <AiOutlineShoppingCart className="w-6 h-6" />
                                        </div>
                                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-mobile">
                                            Product
                                        </div>
                                    </div>
                                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-mobile"></div>

                                    <div
                                        className={`flex items-center ${
                                            formNumber === 2
                                                ? "text-white"
                                                : "text-mobile"
                                        } relative`}
                                        // onClick={() => setFormNumber(2)}
                                    >
                                        <div
                                            className={`${
                                                formNumber === 2 && "bg-mobile"
                                            } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-mobile flex items-center justify-center`}
                                        >
                                            <VscTools className="w-6 h-6" />
                                        </div>
                                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-mobile">
                                            Specs
                                        </div>
                                    </div>
                                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                                    <div
                                        className={`flex items-center ${
                                            formNumber === 3
                                                ? "text-white"
                                                : "text-mobile"
                                        } relative`}
                                        // onClick={() => setFormNumber(3)}
                                    >
                                        <div
                                            className={`${
                                                formNumber === 3 && "bg-mobile"
                                            } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-mobile flex items-center justify-center`}
                                        >
                                            <AiOutlineCamera className="w-6 h-6" />
                                        </div>
                                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                            Images
                                        </div>
                                    </div>
                                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                                    <div
                                        className={`flex items-center ${
                                            formNumber === 4
                                                ? "text-white"
                                                : "text-mobile"
                                        } relative`}
                                        // onClick={() => setFormNumber(4)}
                                    >
                                        <div
                                            className={`${
                                                formNumber === 4 && "bg-mobile"
                                            } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-mobile flex items-center justify-center`}
                                        >
                                            <MdDone className="w-6 h-6" />
                                        </div>
                                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                            Success
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {formNumber === 1 && <Product />}
                            {formNumber === 2 && (
                                <>
                                    {category === "Cars" && <CarForm />}
                                    {category === "Bikes" && <BikeForm />}
                                    {category === "Real-Estate" && (
                                        <RealEstateForm />
                                    )}
                                    {category === "Mobiles" && <MobileForm />}
                                    {category === "Laptops" && <LaptopForm />}
                                    {category === "Government" && (
                                        <GovernmentForm />
                                    )}
                                </>
                            )}
                            {formNumber === 3 && <Pictures />}
                            {formNumber === 4 && <Success />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
