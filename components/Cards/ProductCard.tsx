import { Product } from "@/types/Product";
import { calculateTimeLeft } from "@/utils/TimeCounter";
import React, { useEffect, useState } from "react";
import Link from "next/link";
type Props = {
    endDate?: string | Date;
    product: Product;
};
const ProductCard = (props: Props) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        let date = new Date(props?.endDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        const endDate = new Date(`${year}-${month}-${day}`);

        // console.log(day);

        setTimeout(() => setTimeLeft(calculateTimeLeft(endDate)), 1000);
    }, [timeLeft]);

    return (
        <div className="!z-5 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4 shadow-md">
            <div className="linear bg-blue-900 hover:bg-blue-800 active:bg-blue-700 mb-2 min-w-full rounded-[10px] px-4 py-2 text-center text-base font-medium text-white transition duration-200">
                {timeLeft?.days} d: {timeLeft?.hours} h: {timeLeft?.minutes} m:{" "}
                {timeLeft?.seconds} s
            </div>
            <div className="h-full w-full">
                <div className="relative w-full">
                    <img
                        src={
                            props?.product?.images && props?.product?.images[0]
                        }
                        className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl max-h-40"
                        alt=""
                    />
                    <button className="text-blue-500 absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                    <div className="mb-2">
                        <p className="text-navy-700 text-lg font-bold">
                            {props?.product?.name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            By Owner
                        </p>
                    </div>
                    <div className="text-blue-500 mb-2 text-right">
                        <p className="text-right text-lg font-bold">
                            Current Bid
                        </p>
                        <p className="mt-1 text-sm font-medium md:mt-2">
                            {props?.product?.price}
                        </p>
                    </div>
                </div>
                <Link href={`/product/${props?.product?._id}`}>
                    <div className="flex items-center md:items-center">
                        <button className="linear bg-blue-900 hover:bg-blue-800 active:bg-blue-700 min-w-full rounded-[10px] px-4 py-2 text-base font-medium text-white transition duration-200">
                            Place Bid
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
