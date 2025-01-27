"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function Page() {
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(false);
  const router = useRouter();

  const login = async () => {
    setVerify(true);
    setError("");
    const res = await fetch(`/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    setVerify(false);
    if (res.ok) {
      router.push("/admin/dashboard/news");
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };
  return (
    <div className="bg-gray-700 h-screen flex justify-center items-center">
      <div className="bg-white p-10 w-10/12 lg:w-4/12 rounded-lg">
        
          <div className="relative h-[70px] w-[55px] mx-auto">
            <Image src={"/images/logo2.png"} fill alt="" className="object-cover" />
          </div>
      

        <div className="mt-6 grid gap-4 relative">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={clsx(
              "placeholder:text-gray-500 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-[#64b846] active:border-[#64b846] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input "
              // {
              //   "border-red-400": error.length,
              // }
            )}
          />
          <div
            className={clsx(
              "placeholder:text-gray-500 w-full relative rounded-lg border-[1.5px] border-stroke bg-transparent  text-black outline-none transition focus:border-[#64b846] active:border-[#64b846] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input   "
            )}
          >
            <input
              className="bg-white outline-none w-full px-5 py-2 rounded-lg"
              type={!showPW ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPW ? (
              <FaEye
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPW(true)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPW(false)}
              />
            )}
          </div>
          <p className="absolute   text-red-600 bottom-9">{error}</p>
          <div className="flex mt-3">
            <button
              onClick={login}
              className="m-auto  bg-gray-700 text-white h-10 flex justify-center items-center w-20 rounded"
            >
              {/* Login */}

              {verify ? <LiaSpinnerSolid className=" animate-spin" /> : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}