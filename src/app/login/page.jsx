"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "alireza@gmail.com" && password === "alireza@881") {
      router.push("/");
      console.log("success");
    } else {
      setError("ایمیل یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-grow p-2 outline-none text-gray-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="flex-grow p-2 outline-none text-gray-600"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // تغییر وضعیت نمایش رمز عبور
                className="ml-2 "
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 h-5 text-gray-400"
                  >
                    {/* آیکون چشم باز */}
                    <path d="M8 3C4.571 3 1.425 5.686.153 8.314a.86.86 0 0 0 0 .742C1.425 10.314 4.571 13 8 13s6.575-2.686 7.847-4.314a.86.86 0 0 0 0-.742C14.575 5.686 11.429 3 8 3Zm0 8c-1.933 0-3.5-1.567-3.5-3.5S6.067 4.5 8 4.5s3.5 1.567 3.5 3.5S9.933 11 8 11Zm0-1.5A2 2 0 1 1 8 5.5a2 2 0 0 1 0 4Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 h-5 text-gray-400"
                  >
                    {/* آیکون چشم بسته */}
                    <path d="M13.359 11.876 14.718 13.235 13.305 14.648l-1.57-1.57c-1.072.718-2.317 1.19-3.735 1.19-3.429 0-6.575-2.686-7.847-4.314a.86.86 0 0 1 0-.742A9.928 9.928 0 0 1 6.973 3.13l-.738-.738L7.646.98 8.707 2.04c1.072-.718 2.317-1.19 3.735-1.19 3.429 0 6.575 2.686 7.847 4.314a.86.86 0 0 1 0 .742 9.938 9.938 0 0 1-4.93 3.97Zm-1.415-1.415a8.062 8.062 0 0 0-7.776-1.42L2.025 8.086A8.036 8.036 0 0 0 8 12.5c1.418 0 2.663-.472 3.735-1.19Z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="mt-2 text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative text-center">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>
        <div className="mt-4 text-center flex items-center gap-1">
          <p className="text-gray-600">
            Donot have an account?
            <Link
              href="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up now
            </Link>
            <span>/</span>
            <Link
              href="/"
              className="text-blue-500 font-semibold hover:underline"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
