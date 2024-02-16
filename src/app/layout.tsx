import "./globals.css";
import Providers from "@/utils/Providers";

import { name, description } from "../../config";
import Navbar from "../../components/Base/Navbar";
import Footer from "../../components/Base/Footer";
import LightDarkToggle from "../../components/LightDarkToggle";
import { Ubuntu } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

const ubuntu = Ubuntu({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

// export const metadata = {
//     title: { name },
//     description: { description },
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>Bid Bazaar</title>
            </head>
            <body className={ubuntu.className}>
                <Providers>
                    <div>
                        <Navbar />
                        {children}

                        <Footer />
                        <LightDarkToggle />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
