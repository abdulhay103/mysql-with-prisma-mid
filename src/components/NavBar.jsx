"use client";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
    const [isToggle, setIsToggole] = useState(false);
    const menuHandler = () => {
        setIsToggole(!isToggle);
    };
    return (
        <header className=" pt-4 fixed w-full bg-green-100 py-3 z-50">
            <div className=" container mx-auto">
                <div className="grid grid-cols-12 justify-between md:lg:items-center px-6 md:px-0 lg:px-0">
                    <div className=" col-span-6 md:lg:col-span-2">
                        <Link href="/">
                            Design
                            <span className=" text-orange-600">Agency</span>
                        </Link>
                    </div>
                    <div className="col-span-6 md:lg:hidden text-right">
                        <button onClick={menuHandler}>
                            {isToggle ? "Show Menu" : "Hide Menu"}
                        </button>
                    </div>
                    <div className="col-span-12 md:lg:col-span-10">
                        <div
                            className={
                                isToggle
                                    ? " hidden"
                                    : "flex flex-col md:lg:flex-row gap-3 md:lg:gap-6 items-center justify-end bg-white md:lg:bg-transparent rounded-xl md:lg:rounded-none mt-5 md:lg:mt-0 shadow md:lg:shadow-none py-5 "
                            }
                        >
                            <Link className=" px-3 py-2" href="/">
                                Home
                            </Link>
                            <Link className=" px-3 py-2" href="/about">
                                About
                            </Link>
                            <Link className=" px-3 py-2" href="/blog">
                                Blog
                            </Link>
                            <Link
                                className=" px-4 py-2 border-2 border-green-500 hover:border-2 bg-transparent hover:bg-green-500 hover:text-white rounded-lg"
                                href="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className=" px-4 py-2 bg-green-500 text-white hover:bg-transparent hover:text-black hover:border-2 border-2 rounded-lg border-green-500 hover:border-green-500"
                                href="/register"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
