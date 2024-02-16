import React from "react";
import TempImg from "../../src/assets/img/temp.jpg";
import { SellerReview } from "@/types/Product";
type Props = {
    review: SellerReview;
};

import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const ReviewCard = (props: Props) => {
    const goldenStars = Math.floor(props?.review?.rating);
    const blackStars = 5 - goldenStars;

    const stars = [];
    for (let i = 0; i < goldenStars; i++) {
        stars.push(
            <RiStarSFill
                key={i}
                className="inline-block mr-1"
                size={20}
                color="#FFC107"
            />
        );
    }
    for (let i = 0; i < blackStars; i++) {
        stars.push(
            <RiStarSLine
                key={i + goldenStars}
                className="inline-block mr-1"
                size={20}
                color="#FFC107"
            />
        );
    }
    return (
        <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden max-w-[350px] rounded-md">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-8 bg-white bg-opacity-40">
                <div className="flex flex-wrap items-center">
                    <img
                        className="mr-6 w-10 h-10 rounded-full"
                        src={`https://avatars.dicebear.com/api/initials/${props?.review?.name}.svg`}
                        alt=""
                    />
                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                        {props?.review?.name}
                    </h4>
                </div>
            </div>
            <div className="px-4 overflow-hidden md:px-8 pt-4 pb-4 bg-white flex flex-col space-y-2">
                <div className="w-full">
                    <p className="text-sm text-gray-500 w-full">
                        Added 2 months ago
                    </p>
                </div>
                <p className="max-w-2xl text-darkBlueGray-400 leading-loose">
                    {props?.review?.comment}
                </p>
            </div>
            <div className="px-4 md:px-8 pt-4 pb-4 bg-white flex flex-row space-x-2">
                <span className="mr-4 text-xl font-heading font-medium">
                    {props?.review?.rating}
                </span>

                <div className="inline-flex">{stars}</div>
            </div>
        </div>
    );
};

export default ReviewCard;
