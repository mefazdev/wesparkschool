"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobHeader() {
  const [menu, setMenu] = useState(false);
  const pathName = usePathname();

  return (
    <div className="lg:hidden   fixed w-full bg-white  z-50">
      <div className="flex justify-between items-center  p-2 px-4  ">
        <Link href={"/"}>
          {" "}
          <div className="relative h-12 w-28 rounded   transition ease-linear duration-200">
            <Image
              src={"/images/logo.png"}
              className="  rounded"
              fill
              alt="logo"
            />
          </div>
        </Link>

        <div className="relative  ">
          <RiMenu3Fill
            onClick={() => setMenu(true)}
            className={clsx(
              " text-2xl  absolute right-0   -mt-2 transition-all duration-300 ",
              {
                "opacity-0 invisible  translate-x-3": menu,
                "visibl   duration-400 transition": !menu,
              }
            )}
          />
          <AiOutlineClose
            onClick={() => {
              setMenu(false);
            }}
            className={clsx(
              " absolute right-0 -mt-2 text-2xl transition-all duration-300  ",
              {
                "opacity-0 invisible -translate-y-3 ": !menu,
                " translate-y-0 duration-400 transition visible": menu,
              }
            )}
          />
        </div>
      </div>

      <div
        className={clsx(
          " pb-12 absolute  rounded w-full m-auto  bg-primary/60 bg-opacity-80",
          {
            invisible: !menu,
            "visible  ": menu,
          }
        )}
      >
        <div
          className={clsx(
            "rounded m-auto w-11/12  p-2 transition-all ease-linear duration-200 grid gap-2",
            {
              "translate-y-6": menu,
            }
          )}
        >
          <Link href={"/"} className="text-base" onClick={() => setMenu(false)}>
            <div
              className={clsx(" p-2 rounded ", {
                "bg-secondary text-white": pathName == "/",
                "bg-white": pathName != "/",
              })}
            >
              Home
            </div>
          </Link>
          <Link
            href={"/about"}
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded", {
                "bg-secondary text-white": pathName == "/about",
                "bg-white": pathName != "/about",
              })}
            >
              About US
            </div>
          </Link>
          <a
            href="https://forms.gle/2iZ2fDAm4YCtkWQv7"
            target="_blank"
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded", {
                "bg-white": pathName != "/admission",
              })}
            >
              Admission
            </div>
          </a>
          <Link
            href={"/team"}
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded  ", {
                "bg-secondary text-white": pathName == "/team",
                "bg-white": pathName != "/team",
              })}
            >
              Our Team
            </div>
          </Link>
          <Link
            href={"/news"}
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded   ", {
                "bg-secondary text-white": pathName == "/news",
                "bg-white": pathName != "/news",
              })}
            >
              News & Updates
            </div>
          </Link>
          <a
            // href="https://forms.gle/2iZ2fDAm4YCtkWQv7"
            // target="_blank"
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded", {
                "bg-white": pathName != "/career",
              })}
            >
              Career
            </div>
          </a>
          <Link
            href={"/contact"}
            className="  text-base"
            onClick={() => setMenu(false)}
          >
            <div
              className={clsx(" p-2 rounded   ", {
                "bg-secondary text-white": pathName == "/contact",
                "bg-white": pathName != "/contact",
              })}
            >
              Contact
            </div>
          </Link>

          {/* <a
            className="w-full md:w-6/12 lg:w-full shadow bg-[#25D366 text-lg    p-2.5 rounded-lg flex items-center justify-center gap-3 bg-gray-50"
            href="whatsapp://send?phone=+971566435998"
            data-action="share/whatsapp/share"
          >
            <BsWhatsapp className="text-[#25D366] text-3xl " />
            <p> Chat with us</p>
          </a> */}
        </div>
      </div>
    </div>
  );
}
