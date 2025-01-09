import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Features from "./Features";

export default function About() {
  return (
    <div className="mt-20 md:mt-32 ">
      <div
        className="relative w-full  overflow-auto bg-cover bg-center   "
        style={{
          backgroundImage: 'url("/images/camp.jpg")',

          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 z-10 bg-primary bg-opacity-90 group-hover:bg-opacity-70 group-hover:transition-opacity duration-400 ease-linear"></div>
        <div className="grid lg:grid-cols-4 gap-7  py-10 md:py-20  relative z-20 lg:w-11/12 mx-auto px-4 lg:px-0">
          <div>
            <div className="relative h-16 w-10 md:h-24 md:w-16 mx-auto">
              <Image
                src={"/images/logo2.png"}
                fill
                alt="logo"
                className="object-cover"
              />
            </div>

            <h2 className="text-white text-xl md:text-2xl font-semibold text-center mt-4">
              ABOUT WE SPARK
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p
              className={`${montserrat.className} text-gray-300 text-lg md:text-xl leading-normal lg:leading-loose`}
            >
              Every child is uniquely gifted, with their own learning style and
              growth pace. A team of seasoned educators, with over 40 years of
              expertise, has crafted a personalized approach to unlock each
              child&apos;s potential.{" "}
            </p>
            <p
              className={`${montserrat.className} text-white md:text-lg mt-6 leading-relaxed`}
            > 
              Welcome to We Spark International School, where cultural heritage
              meets holistic development. Our interconnected national and
              international curriculum delivers exceptional education. Within a
              nurturing environment, we uphold the values of freedom, equity,
              ethics, and democracy. By integrating these principles into our
              teaching, we empower students to thrive in an ever-changing world.
            </p>
            <div className=" m-auto mt-6 w-fit md:m-0 md:mt-8">
              <Link className="" href={"/"}>
                <span className="text-white flex items-center gap-3 font-semibold ">
                  Read More <FaLongArrowAltRight className="text-xl mt-1" />
                </span>
              </Link>
            </div>{" "}
          </div>
          <div></div>
        </div>
      </div>

      <Features />
    </div>
  );
}
