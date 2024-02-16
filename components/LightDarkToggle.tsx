"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useTheme } from "next-themes";

const LightDarkToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div className="fixed bottom-4 right-4">
            {currentTheme === "dark" ? (
                <button
                    className="bg-black-700 hover:bg-black rounded-md border-purple-400 border-2 p-2"
                    onClick={() => setTheme("light")}
                >
                    <Image src="/sun.svg" alt="logo" height={25} width={25} />
                </button>
            ) : (
                <button
                    className="bg-gray-100 rounded-md border-purple-400 border-2 p-2 hover:bg-gray-300"
                    onClick={() => setTheme("dark")}
                >
                    <Image src="/moon.svg" alt="logo" height={25} width={25} />
                </button>
            )}
        </div>
    );
};

export default LightDarkToggle;
