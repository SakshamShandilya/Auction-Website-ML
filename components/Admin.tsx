"use client";
import React, { useState, useEffect, useContext } from "react";
// import img1 from "../src/assets/img/download1.png"
import { AppContext } from "context/AppContext";
import Image from "next/image";
import { Product } from "@/types/Product";
import { ProductContext } from "context/ProductContext";
type Props = {};

const Admin = (props: Props) => {
    const { getAdminDetails, maxBid, maxRating, maxValue } =
        useContext(AppContext);

    const { products, getAllProducts } = useContext(ProductContext);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const userId = localStorage.getItem("id");
            getAllProducts();
            getAdminDetails(userId);
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
                Admin Dashboard
            </h4>

            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Max Value
            </h4>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(maxValue) && maxValue.length > 0 ? (
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
                                {maxValue.map(
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
                Max Bid
            </h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(maxBid) && maxBid.length > 0 ? (
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
                                {maxBid.map((item: Product, index: number) => {
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
                                                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                    Approved
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item?.soldDate &&
                                                    new Date(
                                                        item?.soldDate
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
                                })}
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
                Max Rating
            </h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(maxRating) && maxRating.length > 0 ? (
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
                                {maxRating.map(
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

export default Admin;
