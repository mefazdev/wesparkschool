"use client";
import { montserrat } from "@/app/ui/fonts";
import React, { useEffect, useRef } from "react";
import {   FaCreativeCommons  } from "react-icons/fa";
 
import { PiParkDuotone  } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineSportsHandball } from "react-icons/md";

import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineSafety } from "react-icons/ai";
import { RiParentFill } from "react-icons/ri";

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => (
  <div className="w-fit  flex gap-3   ">
    <button
      onClick={previous}
      className="shadow shadow-gray-500 text-white text-3xl rounded-full p-1 bg-primary "
    >
      <MdKeyboardArrowLeft />
    </button>
    <button
      onClick={next}
      className="shadow shadow-gray-500 text-white text-3xl rounded-full p-1 bg-primary"
    >
      <MdKeyboardArrowRight />
    </button>
  </div>
);
export default function Amenities() {

  useEffect(() => {
      import("aos").then((aos) => {
        aos.init({});
      });
    }, []);
  const docs = [
    {
      title: "Safety and Security",
      content: [
        "24/7 CCTV Surveillance",
        "GPS-enabled Bus Transport",
        "Secured Campus",
      ],
      icon: <AiOutlineSafety  className="text-secondary text-4xl" />,
    },
    {
      title: "Learning Facilities",
      content: [
        "Tech-powered Smart Classrooms",
        "Comprehensive Library",
        "STEM & Robotics Labs",
        "Language Lab",
        "Coding and Game",
      ],
      icon: <PiParkDuotone  className="text-secondary text-4xl" />,
    },
    {
      title: "Parental Involvement",
      content: ["Parent Engagement Programes", "Smart Parent Portal"],
      icon: <RiParentFill className="text-secondary text-4xl" />,
    },
    {
      title: "Green and Eco-Friendly Initiatives",
      content: ["Eco Park and Butterfly Garden"],
      icon: <RiParentFill className="text-secondary text-4xl" />,
    },
    {
      title: "Recreational and Physical Development",
      content: ["Swimming Pool",
        "Sports Arena",
        "Indoor Play Zone",
        "Outdoor Adventure Zone"],
      icon: <MdOutlineSportsHandball className="text-secondary text-4xl" />,
    },

    {
        title: "Creative and Cultural Spaces",
        content: ["Cultural Performance Auditorium"],
        icon: <FaCreativeCommons className="text-secondary text-4xl" />,
      },
    
  ];
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const carouselRef = useRef<Carousel>(null);

  return (
    <div
      className="bg-[#1b2434] relative text-white py-16 md:py-20  mt-20 md:mt-40 overflow-auto bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/camp.jpg")',

        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 z-10 bg-primary bg-opacity-90 group-hover:bg-opacity-70 group-hover:transition-opacity duration-400 ease-linear"></div>

      <div data-aos="flip-up"  className="lg:w-10/12 mx-auto z-20 relative">
        <h4 className="text-xl md:text-2xl font-semibold text-center">School Amenities</h4>
        <div className="mt-8">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            itemClass="p-1 lg:px-4"
          >
            {docs.map((doc) => (
              <div
                className="bg-[#1b2434]    rounded p-6 h-full"
                key={doc.title}
              >
                <div className="bg-primary h-16 w-16 rounded-full flex justify-center items-center mx-auto">
                  {doc.icon}
                </div>
                <h5 className="mt-1 text-lg text-center text-secondary">
                  {" "}
                  {doc.title}
                </h5>

                <ul
                  className={`${montserrat.className} text-gray-300 mt-2 text-center`}
                >
                  {doc.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Carousel>

          <div className="w-fit mx-auto mt-6">
            <CustomButtonGroup
              next={() => carouselRef.current?.next(1)}
              previous={() => carouselRef.current?.previous(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
