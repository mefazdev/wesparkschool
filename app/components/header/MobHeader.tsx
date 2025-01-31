"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function MobHeader() {
  const [menu, setMenu] = useState(false);
 
  const [careers,setCareers]=useState(false)
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

          <div className="bg-white p-2 rounded  relative flex items-center">
            <button
              className="flex gap-2 items-center w-full"
              onClick={() => setCareers(!careers)}
            >
              Career
              <MdOutlineKeyboardArrowRight className="text-lg" />
            </button>

            {careers && (
              <div className="  absolute right-0 top-0 mt-1 mr-2 w-7/12 p-3 rounded grid gap-1 bg-[#000000d2] ">
                <a onClick={()=>setCareers(false)} href="https://forms.gle/PgUKUhCJsficqspj9" target="_blank">
                  {" "}
                  <div className="bg-secondary text-white  p-2 px-3 rounded">
                    Becoma a Teacher
                  </div>
                </a>
                <a onClick={()=>setCareers(false)}
                  href="https://forms.gle/eB5wQ7apirLJ3Ut9A" target="_blank">
                  <div className="bg-secondary text-white  p-2 px-3 rounded">
                  Other Careers
                  </div>
                </a>
                
              </div>
            )}
          </div>
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
