"use client";
import { montserrat } from "@/app/ui/fonts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import MobHeader from "./MobHeader";

export default function Header() {
  const [showContactRow, setShowContactRow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowContactRow(false);
      } else {
        setShowContactRow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathName = usePathname();
  return (
    <div>
      <div
        className={`${montserrat.className} bg-white top-0 sticky z-50 hidden lg:grid`}
      >
        <div
          className={clsx("bg-secondBlue   transition-transform duration-300", {
            "translate-y-0 hidden md:grid": showContactRow,
            "-translate-y-full hidden ": !showContactRow,
          })}
        >
          <div className="w-11/12 mx-auto py-2 text-white flex items-center justify-between">
            <div className="flex items-center gap-4 text-[15px]">
              <div className="flex items-center gap-1">
                <IoMail className="text-xl" />
                <a href="">info@wesparkschool.com</a>
              </div>
              <div className="flex items-center gap-1">
                <IoMdCall className="text-xl" />
                <a href="">+91 6238 400 700</a>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <a
                target="_blank"
                href="https://www.facebook.com/bharatkatimes?mibextid=ZbWKwL"
              >
                <FaFacebookSquare />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/we_spark_international_school/?igsh=MWc3bG44MndzOHJ1MQ%3D%3D"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://youtube.com/@wesparkinternationalschool?si=zNhQcvHQgqrxAYxe"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <div className=" px-3 md:px-0 py-2 md:py-0 md:w-11/12  mx-auto flex justify-between items-center ">
            <div className="h-16 w-36  xl:h-20 xl:w-52 relative">
              <Image src={"/images/logo.png"} alt="" fill />
            </div>

            <nav className="hidden lg:grid">
              <ul className="flex gap-2 lg:gap-4 text-[17px] text-primary font-semibold">
                <li className="group">
                  <Link href="/">Home</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/",
                      }
                    )}
                  ></div>
                </li>
                <li className="group">
                  <Link href="/about">About</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/about",
                      }
                    )}
                  ></div>
                </li>
                <li className="group">
                  <a href="https://forms.gle/2iZ2fDAm4YCtkWQv7" target="_blank">
                    Admission
                  </a>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {}
                    )}
                  ></div>
                </li>

                <li className="group">
                  <Link href={"/"}> Our Team</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/team",
                      }
                    )}
                  ></div>
                </li>

                <li className="group">
                  <Link href="/news">News & Updates</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/news",
                      }
                    )}
                  ></div>
                </li>

                <li className="group">
                  <Link href="/">Career</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/career",
                      }
                    )}
                  ></div>
                </li>

                <li className="group">
                  <Link href="/contact">Contact</Link>
                  <div
                    className={clsx(
                      "border border-secondary opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-200",
                      {
                        "opacity-100": pathName === "/contact",
                      }
                    )}
                  ></div>
                </li>
              </ul>
            </nav>
            <TiThMenuOutline className="text-primary text-3xl lg:hidden" />
          </div>
        </div>
      </div>
      <MobHeader />
    </div>
  );
}
