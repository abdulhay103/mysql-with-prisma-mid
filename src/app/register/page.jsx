"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
    // Variables and States
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
    });
    let { firstName, lastName, email, mobile, password } = inputValues;

    // Setup onChange Handler
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    //Setup Data Submit Handler
    const onSubmitHandler = async () => {
        setLoading(true);
        const config = {
            method: "POST",
            "Content-Type": "application/json ",
            body: JSON.stringify(inputValues),
        };
        try {
            const res = await fetch("api/register", config);
            const resBody = await res.json();
            // console.log(resBody.status);
            if (resBody.error) {
                // Handle server-side error
                console.error("Server Error:", data.error);
            } else if (firstName.length == 0) {
                setAlert("Firts Name Is Empty");
            } else if (lastName.length == 0) {
                setAlert("Last Name Is Empty");
            } else if (email.length == 0) {
                setAlert("Email Address Is Empty");
            } else if (mobile.length == 0) {
                setAlert("Mobile Number Is Empty");
            } else if (password.length == 0) {
                setAlert("Password Is Empty");
            } else if (resBody.status === "Registration Fail") {
                toast.error(resBody.status);
            } else {
                toast.success(resBody.status);
                router.replace("/login");
            }
        } catch (error) {
            console.log(error.toString());
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="  bg-gradient-to-tr from-white via-gray-100 to-green-100">
            <div className=" min-h-screen inset-0 flex justify-center items-center px-6 py-14">
                <div className=" w-full md:lg:w-1/3 rounded-lg border-slate-400 my-16 bg-white py-8 px-6 md:lg:px-10 flex flex-col items-center">
                    <h3 className=" text-2xl font-bold pb-8 text-green-500">
                        User Register
                    </h3>
                    <div className=" flex flex-col gap-8 w-full">
                        <p>{alert}</p>
                        <input
                            onChange={(e) => {
                                onChangeHandler("firstName", e.target.value);
                            }}
                            value={firstName}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            required
                        />
                        <input
                            onChange={(e) => {
                                onChangeHandler("lastName", e.target.value);
                            }}
                            value={lastName}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            required
                        />
                        <input
                            onChange={(e) => {
                                onChangeHandler("email", e.target.value);
                            }}
                            value={email}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={(e) => {
                                onChangeHandler("mobile", e.target.value);
                            }}
                            value={mobile}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="Mobile Number"
                            required
                        />
                        <input
                            onChange={(e) => {
                                onChangeHandler("password", e.target.value);
                            }}
                            value={password}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        onClick={onSubmitHandler}
                        className="px-8 mt-8 py-3 border border-green-500 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-transparent hover:text-black"
                        type="submit"
                    >
                        {isLoading ? "Connecting..." : "Register"}
                    </button>
                    <p className=" text-gray-600 text-lg py-3">
                        If you have registered ?
                        <Link
                            href="/login"
                            className=" px-3 underline cursor-pointer text-orange-400"
                        >
                            Click Here!
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
