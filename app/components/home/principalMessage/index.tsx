'use client'
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useEffect } from "react";

export default function PrincipalMessage() {

   useEffect(() => {
      import("aos").then((aos) => {
        aos.init({});
      });
    }, []);
  return (
    <div data-aos="fade-right"  className="mt-20 md:mt-32">
      <div className="px-4 lg:px-0 lg:w-11/12 xl:w-9/12 mx-auto">
        <div className="flex items-center">
          <h5 className="text-xl md:text-2xl font-bold text-secondBlue whitespace-nowrap">
            Principal&apos;s Message
          </h5>

          <div className="flex-1 h-[2px] bg-gray-200 ml-4"></div>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 md:gap-10 mt-8  ">
        <div className="relative h-44 w-44 md:h-56 md:w-56 mx-auto">
            <Image src={'/images/princ.jpg'} fill alt="" className="object-cover rounded-full shadow"/>
          </div>
          <div className={`${montserrat.className} lg:mt-6  lg:col-span-3`}>
            <p>
              Welcome to We Spark International School! It&apos;s a joy to have
              you here. At We Spark, we&apos;re more than just a school –
              we&apos;re a community that sparks curiosity, growth, and a love
              for learning in every student. Guided by our Mission and Vision,
              we&apos;re committed to creating an environment where every child
              finds their spark to lead, innovate, and make a difference.
              Together, we&apos;re shaping a generation ready to thrive in a
              changing world with sustainability at heart.
            </p>

            <div className="md:float-en mt-4">
              <p className="font-semibold text-secondary">Saiful Ameen PM</p>
              <p className="text-gray-500">Principal, WeSpark International School</p>
            </div>
          </div>

        
       
       
        </div>

        {/* 
Principal, WeSpark International School */}
      </div>
    </div>
  );
}
