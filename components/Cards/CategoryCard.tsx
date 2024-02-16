import React from 'react'
import Mobile from "../../src/assets/img/mobile.jpg";
import { ImHammer2 } from 'react-icons/im';
import { FaHeart } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const CategoryCard = () => {
    return (
        <div>
            <div className="flex items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg shadow flex-row pr-8 md:max-w-xl">
                <img className="object-cover p-2 rounded-t-lg h-auto w-32 lg:w-48 md:rounded-none rounded-l-lg" src={Mobile.src} alt="product image" />
                <div className="flex flex-col justify-between p-4 lg:px-8 leading-normal">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product Name</h5>
                    <p className="font-medium mb-1 text-base lg:leading-6 leading-5 text-mobile"><span className="text-gray-600 dark:text-gray-300">Current Bid: </span>$ 790.89</p>
                    <div className='flex flex-row gap-2 mt-1 '>
                        <button className='bg-mobile-light text-mobile dark:bg-gray-800 hover:text-mobile-light hover:bg-mobile dark:hover:bg-mobile p-3 rounded'><ImHammer2 /></button>
                        <button className='bg-mobile-light text-mobile dark:bg-gray-800 hover:text-mobile-light hover:bg-mobile dark:hover:bg-mobile p-3 rounded'><FaHeart /></button>
                        {/* <button className='bg-mobile-light text-mobile dark:bg-gray-800 hover:text-mobile-light hover:bg-mobile dark:hover:bg-mobile p-3 rounded'><BsSearch /></button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard