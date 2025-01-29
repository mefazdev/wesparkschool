"use client";
import React, { useEffect } from "react";

import Image from "next/image";
import { montserrat, poppins } from "@/app/ui/fonts";
import Features from "./Features";

export default function Admission() {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
         
      });
    });
  }, []);
  return (
    <div className="-mt-16 mx-auto w-11/12 relative z-10  " id="admission">
      <Features />

      <div
        className={`${poppins.className} grid grid-cols-1 lg:grid-cols-2   `}
      >
        {/* Left Image Section */}
        <div data-aos="fade-right" className="relative w-full h-80 lg:h-full">
          <Image
            src="/images/girl.jpg"
            alt="Girl"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Image and Content Section */}
        <div
          data-aos="fade-up"
          className="relative w-full  overflow-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/camp.jpg")',

            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute z-10 inset-0 bg-primary bg-opacity-90    "></div>
          <div className="p-4 md:p-12 opacity-100  text-white relative z-20">
            <h5 className="text-white font-bold text-xl md:text-3xl z-50">
              Apply for Admission
            </h5>
            <p className="md:text-lg font-semibold text-secondary mt-3">
              Fall 2025 applications are now open
            </p>

            <p
              className={`${montserrat.className} text-white font-normal mt-2`}
            >
              We blend the richness of cultural heritage with an innovative
              international curriculum, creating a harmonious learning
              environment where academics, creativity, and character building go
              hand in hand. Guided by values of equity, ethics, freedom, and
              democracy, we prepare our students to excel in a rapidly evolving
              world while remaining grounded in integrity and compassion.
            </p>

            <div className="mt-8">
              <a
                href="https://forms.gle/2iZ2fDAm4YCtkWQv7"
                target="_blank"
                className="bg-secondary p-2 md:p-3 px-4 md:px-7 text-white "
              >
                {" "}
                APPLY NOW
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
