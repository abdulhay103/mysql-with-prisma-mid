// Import necessary modules and libraries
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
    // Define state variables
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValues;

    // Handle input field changes
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    // Handle login button click
    const onClickHandler = async () => {
        setLoading(true);
        const config = { method: "POST", body: JSON.stringify(inputValues) };

        try {
            const response = await fetch("/api/login", config);
            const data = await response.json();

            if (data.error) {
                // Handle server-side error
                console.error("Server Error:", data.error);
            } else if (email.length == 0) {
                alert("Invalid Email");
            } else if (password.length == 0) {
                alert("Invalid Password");
            } else {
                toast.success("Login Successful");
                router.replace("/dashboard");
            }
        } catch (error) {
            // Handle network error
            console.error("Network Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-gradient-to-tr from-white via-gray-100 to-green-100 min-h-screen flex justify-center items-center px-6 py-14">
            <div className="w-full md:w-1/3 rounded-lg border-slate-400 bg-white py-8 px-6 md:lg:px-10 flex flex-col items-center">
                <h3 className="text-2xl font-bold pb-8 text-green-500">
                    User Login
                </h3>
                <div className="flex flex-col gap-8 w-full">
                    <input
                        onChange={(e) =>
                            onChangeHandler("email", e.target.value)
                        }
                        value={email}
                        className="px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        onChange={(e) =>
                            onChangeHandler("password", e.target.value)
                        }
                        value={password}
                        className="px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button
                    onClick={onClickHandler}
                    className={`px-8 mt-8 py-3 border border-green-500 bg-green-500 text-white text-lg font-semibold rounded-md ${
                        isLoading
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-transparent hover:text-black"
                    }`}
                    type="button"
                    disabled={isLoading}
                >
                    {isLoading ? "Connecting..." : "Login"}
                </button>
                <p className="text-gray-600 text-lg py-3">
                    If you aren't registered?
                    <Link
                        href="/register"
                        passHref
                        className="px-3 underline cursor-pointer text-orange-400"
                    >
                        Click Here!
                    </Link>
                </p>
            </div>
        </main>
    );
}
