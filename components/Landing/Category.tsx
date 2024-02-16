import React from "react";
import Mobile from "../../src/assets/img/mobile.jpg";
import CategoryCard from "../Cards/CategoryCard";

const Category = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center w-full gap-10">
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center bg-mobile"
                style={{
                    backgroundImage: `url(${Mobile})`,
                    height: "420px",
                    width: "350px",
                }}
            >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold">
                                Phone
                            </h2>
                            <h4 className="mb-6 text-xl font-semibold">
                                # Products
                            </h4>
                            <button
                                type="button"
                                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-mobile hover:bg-opacity-10 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-1">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
};

export default Category;
