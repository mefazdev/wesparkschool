"use client";
import Image from "next/image";
import React, {  useState } from "react"; 
import { LiaSpinnerSolid } from "react-icons/lia";
 

export default function Header() {
 
  const [logouting, setLogouting] = useState(false);
  const logOut = async () => {
    setLogouting(true);
    const res = await fetch("/api/admin/logout");
     

    if (res.ok) {
      window.location.href = "/admin/login";
      setLogouting(false);
    }
  };
  return (
    <div className="w-full bg-primary py-1">
      <div className=" px-3 md:px-0 py-2 md:py-0 md:w-11/12  mx-auto flex justify-between items-center ">
        <div className="h-16 w-14 relative">
          <Image src={"/images/logo2.png"} alt="" fill />
        </div>

        <button
          disabled={logouting}
          onClick={logOut}
          className="bg-gray-100 p-1 px-4 rounded text-red-500"
        >
          {logouting ? (
            <LiaSpinnerSolid className="text-xl animate-spin" />
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </div>
  );
}
