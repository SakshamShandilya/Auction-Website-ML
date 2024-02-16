"use client";
import React from "react";
import AppProvider from "../../context/AppContext";
import { ProductProvider } from "../../context/ProductContext";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <AppProvider>
                <ProductProvider>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{
                                delay: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </ProductProvider>
            </AppProvider>
        </ThemeProvider>
    );
};

export default Providers;
