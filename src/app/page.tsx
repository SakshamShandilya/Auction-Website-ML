import Image from "next/image";

import Filter from "../../components/Landing/Filter";
import Features from "../../components/Landing/Features";
import Hero from "../../components/Landing/Hero";
import HeroTry from "@/components/Landing/Herotry";
import Testimonials from "../../components/Landing/Testimonials";
import Gallery from "../../components/Landing/Gallery";
import Category from "@/components/Landing/Category";

export default function Home() {
    return (
        <main className="dark:text-blue-400 text-green-400">
            <HeroTry />
            <Gallery />
            <Filter />
            {/* <Features />
            <Testimonials /> */}
        </main>
    );
}
