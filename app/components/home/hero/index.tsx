"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {   poppins  } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useState } from "react";
 
import clsx from "clsx";

export default function Hero() {
 
  const [showContent, setShowContent] = useState(true);

 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows:false,
    fade: true,
    pauseOnHover: false,
    beforeChange: () => setShowContent(false), // Hide content before slide change
    afterChange: () => {
 
      setShowContent(true);
      //   setTimeout(() => setShowContent(true), 300); // Show content after delay
    },
  };

  const docs = [
    {
      caption: "Shaping Minds, Sparking Success",
      title: "WE SPARK",
      subTitiel: "INTERNATIONAL SCHOOL",
      image: "/images/camp-1.jpg",
    },
    {
      caption: "Shaping Minds, Sparking Success",
      title: "WE SPARK",
      subTitiel: "INTERNATIONAL SCHOOL",
      image: "/images/camp-2.jpg",
    },
    {
      caption: "Shaping Minds, Sparking Success",
      title: "WE SPARK",
      subTitiel: "INTERNATIONAL SCHOOL",
      image: "/images/camp-3.jpg",
    },
  ];

 

  return (
    <div>
      <Slider {...settings}>
        {docs.map((doc) => (
          <div className="relative h-[70vh] lg:h-[90vh] " key={doc.image}>
            <Image src={doc.image} alt="" fill className="object-cover" />

            <div className="absolute  inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent z-10"></div>
            <div
              className={clsx(
                "absolute inset-0 flex flex-col  justify-center text-white z-20 w-11/12 mx-auto transition-opacity  ease-linear duration-500",
                {
                  "opacity-100": showContent,
                  "opacity-0": !showContent,
                }
              )}
            >
              <p className={`${poppins.className} text-lg md:text-2xl `}>
                Shaping Minds, Sparking Success
              </p>
              <div
                className={clsx(
                  "bg-[#18243BE6] px-6 p-4 lg:w-7/12 xl:w-6/12 mt-3   transition-transform ease-linear duration-300",
                  {
                    "translate-x-0": showContent,
                    "translate-x-8": !showContent,
                  }
                )}
              >
                <h1 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-wide">WE SPARK </h1>
                <p className="text-lg md:text-3xl font-bold tracking-wide">
                  INTERNATIONAL SCHOOL
                </p>
              </div>

              <a href="#admission">
              <button
                className={clsx(
                  "mt-6 w-fit px-3 md:px-5 p-2 md:p-3 bg-white text-primary border-l-8 border-secondary  transition-transform ease-linear duration-300",
                  {
                    "-translate-x-0": showContent,
                    "-translate-x-4":!showContent
                  }
                )}
              >
                Take A Tour
              </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
