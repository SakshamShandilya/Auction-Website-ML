'use client'
import Link from "next/link";
import React, { useState } from "react";
import Logo from '../../src/assets/BIdBazaar.png';

type Props = {};

const Navbar = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-14" src={Logo.src} alt="" />
          <span className="ml-3 text-xl">BidBazaar</span>
        </Link>
        <nav className="md:ml-4 md:py-2 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Home</Link>
          {/* <Link href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Reverse-Auction</Link> */}
          <Link href="/create" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Create-Auction</Link>


          <button onClick={handleDropdownClick} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mr-2 hover:text-white hover:bg-mobile font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Auction</button>
          {showDropdown && (
            <div className="absolute mt-56 ml-40 w-40  bg-white rounded-md overflow-hidden shadow-xl z-10">
              <Link
                href="/auction/bikes"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Bike
              </Link>
              <Link
                href="/auction/mobiles"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Mobile
              </Link>
              <Link
                href="/auction/cars"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Cars
              </Link>
              <Link
                href="/auction/laptops"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Laptops
              </Link>
              <Link
                href="/auction/government"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Government
              </Link>
              <Link
                href="/auction/real-estate"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-mobile hover:text-white"
              >
                Real Estate
              </Link>
            </div>
          )}


          <Link href="/profile" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Dashboard</Link>
          {/* <a href="/about" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">About</a> */}
          {/* <a href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Contact</a> */}
        </nav>
        {
          typeof window !== 'undefined' && localStorage.getItem("isLogin") && localStorage.getItem("isLogin") === "true"
            ?
            <button onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem("isLogin");
                localStorage.removeItem("uname");
                localStorage.removeItem("user");
                localStorage.removeItem("id");
                window.location.href = "/";
              }
            }} className="inline-flex text-white items-center bg-mobile border-0 py-2 px-4 focus:outline-none hover:bg-mobile-light hover:text-mobile rounded text-base mt-4 md:mt-0">
              LogOut
            </button>
            :
            <Link href='/login'>
              <button className="inline-flex text-white items-center bg-mobile border-0 py-2 px-4 focus:outline-none hover:bg-mobile-light hover:text-mobile rounded text-base mt-4 md:mt-0">
                Login
              </button>
            </Link>
        }
      </div>
    </header>
  );
};

export default Navbar;
