'use client'
import { montserrat } from "@/app/ui/fonts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram} from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa6";

export default function Footer() {
    const [careers,setCareers]=useState(false)
  const features = [
    "Personalized Education",
    "Language & Communication",
    "Physical and Mental Wellness",
    "Eco-Exploratory Learning",
    "Experiential & Global Learning",
    "Health and Nutrition",
    "Cultural & Artistic Enrichment",
  ];
  const amenities = [
    "Secured Campus",
    "Comprehensive Library",
    "STEM & Robotics Labs",
    "Smart Parent Portal",
    "Eco Park and Butterfly Garden",
    "Coding and Game Design Studio",
    "Creative and Cultural Spaces",
  ];
  return (
    <div>
      <div className={`${montserrat.className} bg-[#181818]  py-20 font-light`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-[86%] mx-auto text-white">
          <div className="border-b-2 pb-4 border-secondary">
            <div className="relative h-20 w-52">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 ">
              <address className="not-italic text-gray-300/90">
                Spark Valley, Narokkavu, <br />
                Kunnummalpotty P. O, <br />
                Edakkara, Malappuram-679331
              </address>
              <div className="mt-4">
                <a href="tel:+916238400700">+91 6238 400 700 </a> <br />
                <a href="tel:+916282400700"> +91 6282 400 700</a> <br />
                <div className="mt-2">
                  <a href="mailto:info@wesparkschool.in">
                    info@wesparkschool.in
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-4 text-secondary">
                <a target="_blank" href="https://www.facebook.com/bharatkatimes?mibextid=ZbWKwL">
                  <FaFacebookSquare />
                </a>
                <a target="_blank" href="https://www.instagram.com/we_spark_international_school/?igsh=MWc3bG44MndzOHJ1MQ%3D%3D">
                  <FaInstagram />
                </a>
                <a  target="_blank" href="https://youtube.com/@wesparkinternationalschool?si=zNhQcvHQgqrxAYxe">
                  <FaYoutube className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h6 className="font-semibold text-lg">Quick Links</h6>
            <div className="border border-secondary mt-2" />
            <div className="mt-3 text-gray-300/80">
              <ul className="grid gap-2">
                <li>
                  <Link href={"/"} className="hover:text-white">
                  Home
                  </Link>
                </li>
                <li>
                  <Link href={"/about"} className="hover:text-white">
                  About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://forms.gle/2iZ2fDAm4YCtkWQv7"
                    target="_blank"
                    className="hover:text-white"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  {/* <Link href={"/"} className="hover:text-white"> */}
                  Our Team
                  {/* </Link> */}
                </li>
                <li>
                  <Link href={"/news"} className="hover:text-white">
                  News & Updates
                  </Link>
                </li>
                <li className="relative">
                  <button  className={clsx("hover:text-white",{
                    "text-white font-semibold":careers
                  })}
                   onClick={() => setCareers(!careers)}>
                  Careers
                  </button>
                   {careers && (
                                <div className="  absolute left-20 -top-8         rounded  ">
                                  <a onClick={()=>setCareers(false)} href="https://forms.gle/PgUKUhCJsficqspj9" target="_blank">
                                    {" "}
                                    <div className="bg-primary text-white  p-2 px-6 rounded-t hover:bg-secondary">
                                      Become a Teacher
                                    </div>
                                  </a>
                                
                                  <a onClick={()=>setCareers(false)}
                                    href="https://forms.gle/eB5wQ7apirLJ3Ut9A" target="_blank">
                                    <div className="bg-primary text-white  p-2 px-6 rounded-b border-t border-secondary hover:bg-secondary" >
                                    Other Careers
                                    </div>
                                  </a>
                                  
                                </div>
                              )}
                </li>
                <li>
                  <Link href={"/contact"} className="hover:text-white">
                  Contact
                  </Link>
                </li>
                <li>
                  <Link href={"/admin/login"} className="hover:text-white">
               Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-lg">Key Features</h6>
            <div className="border border-secondary mt-2" />
            <div className="mt-3 text-gray-300/80">
              <ul className="grid gap-2">
                {features.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-lg">Key Amenities</h6>
            <div className="border border-secondary mt-2" />
            <div className="mt-3 text-gray-300/80">
              <ul className="grid gap-2">
                {amenities.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${montserrat.className} bg-[#202020] py-4 px-4`}>
        <div className="lg:w-[87%] mx-auto">
          <p className="text-gray-400 text-sm">
            Copyright All Right Reserved 2025
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
