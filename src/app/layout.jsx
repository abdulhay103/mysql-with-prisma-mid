import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "mySQL With Prisma",
    description: "Learning project with Ostad",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader height={3} color="green" />
                <Toaster position="top-center" />
                <NavBar />
                {children}
            </body>
        </html>
    );
}
