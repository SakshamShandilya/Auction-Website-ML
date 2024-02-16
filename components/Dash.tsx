"use client";
import React, { useState, useEffect, useContext } from "react";
// import img1 from "../src/assets/img/download1.png"
import { AppContext } from "context/AppContext";
import Image from "next/image";
import { Product } from "@/types/Product";
import { ProductContext } from "context/ProductContext";
type Props = {};

const Dash = (props: Props) => {
    const { getDashDetails, itemsSold, itemsBought } = useContext(AppContext);

    const { products, getAllProducts } = useContext(ProductContext);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userId = localStorage.getItem("id");
            getAllProducts();
            getDashDetails(userId);
        }
    }, []);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    return (
        <div className="px-8">
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Overview
            </h4>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total products purchased
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            150
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total Auctions held
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            25
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Unsold Auctions
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            10
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Sold Auctions
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            15
                        </p>
                    </div>
                </div>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Auctions Held History
            </h4>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(itemsSold) && itemsSold.length > 0 ? (
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {itemsSold.map(
                                    (item: Product, index: number) => {
                                        return (
                                            <tr className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                            <img
                                                                className="object-cover w-full h-full rounded-full"
                                                                src={
                                                                    `https://avatars.dicebear.com/api/initials/${item?.buyer}.svg` ||
                                                                    `https://avatars.dicebear.com/api/initials/${item?.seller}.svg`
                                                                }
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                            <div
                                                                className="absolute inset-0 rounded-full shadow-inner"
                                                                aria-hidden="true"
                                                            ></div>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {item?.buyer ||
                                                                    "John Doe"}
                                                            </p>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                {item?.category}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm font-bold">
                                                    {item?.name}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    ₹{item?.price}
                                                </td>
                                                <td className="px-4 py-3 text-xs">
                                                    {/* <span className="px-2 py-1 font-semibold leading-tight  rounded-full "> */}
                                                    <span
                                                        className={`${
                                                            item?.status ===
                                                            "Sold"
                                                                ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                                : item?.status ===
                                                                  "Unsold"
                                                                ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                                : "text-yellow-600 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                        }`}
                                                    >
                                                        {item?.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {/* {item?.createDate} */}
                                                    {item?.soldDate &&
                                                        new Date(
                                                            item?.soldDate
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            options
                                                        )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
                                <div className="font-medium text-gray-900">
                                    No data found
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Purchased Items History
            </h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(itemsBought) && itemsBought.length > 0 ? (
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {itemsBought.map(
                                    (item: Product, index: number) => {
                                        return (
                                            <tr className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                            <img
                                                                className="object-cover w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                            <div
                                                                className="absolute inset-0 rounded-full shadow-inner"
                                                                aria-hidden="true"
                                                            ></div>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {item?.buyer ||
                                                                    "John Doe"}
                                                            </p>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                {item?.category}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm font-bold">
                                                    {item?.name}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    ₹{item?.price}
                                                </td>
                                                <td className="px-4 py-3 text-xs">
                                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                        Approved
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {item?.soldDate &&
                                                        new Date(
                                                            item.soldDate
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            options
                                                        )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-4 text-sm">
                                                        <button
                                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Edit"
                                                        ></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
                                <div className="font-medium text-gray-900">
                                    No data found
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dash;
