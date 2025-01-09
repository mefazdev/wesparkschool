'use client'
import { montserrat } from "@/app/ui/fonts";
import React, { useRef } from "react";
import { FaBrain, FaGlobeAmericas } from "react-icons/fa";
import { GiHealingShield } from "react-icons/gi";
import { IoIosBody } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { PiTreePalm } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => (
    <div className="w-fit  flex gap-3   ">
      <button
        onClick={previous}
        className="shadow shadow-gray-500 text-white text-3xl rounded-full p-1 "
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        onClick={next}
        className="shadow shadow-gray-500 text-white text-3xl rounded-full p-1 "
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
export default function Features() {
  const docs = [
    {
      title: "Innovative Personalized Education",
      content: [
        "AI-Integrated Learning",
        "Entrepreneurship & Innovation Labs",
        "Innovation Hub",
      ],
      icon: <FaBrain className="text-secondary text-4xl" />,
    },
    {
      title: "Language & Communication",
      content: ["100% English Campus", "Multilingual Proficiency  Programs","Global Language Proficiency"],
      icon: <IoLanguage className="text-secondary text-4xl" />,
    },
    {
      title: "Physical and Mental Wellness",
      content: ["Wellness Centre", "Advanced Sports Program", "Horse Riding"],
      icon: <IoIosBody className="text-secondary text-4xl" />,
    },
    {
      title: "Eco-Exploratory Learning",
      content: [
        "Outdoor Education Program",
        "Nature Immersion Activities",
        "Sustainability Workshops",
      ],
      icon: <PiTreePalm className="text-secondary text-4xl" />,
    },
    {
      title: "Experiential & Global Learning",
      content: [
        "Global Citizenship Education",
        "International Exchange Programs",
        "Experiential Learning",
        "Opportunities",
      ],
      icon: <FaGlobeAmericas className="text-secondary text-4xl" />,
    },
    {
      title: "Health and Nutrition",
      content: ["Dedicated Medical Care Room","Mental Health Support", "Nutritious Breakfast and Lunch"],
      icon: <GiHealingShield className="text-secondary text-4xl" />,
    },
    {
      title: "Cultural & Artistic Enrichment",
      content: ["Creative Arts Programs", "Cultural Immersion Activities","Performance & Exhibition Opportunities"],
      icon: <GiHealingShield className="text-secondary text-4xl" />,
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
    <div className="bg-[#1b2434] text-white py-10 md:py-20">
        
      <div className="lg:w-10/12 mx-auto">
      <h4 className="text-xl md:text-2xl font-semibold text-center">Our Unique Features</h4>
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
            className="bg-primary     rounded p-6 h-full"
            key={doc.title}
          >
            <div className="bg-[#1b2434] h-16 w-16 rounded-full flex justify-center items-center mx-auto">
              {doc.icon}
            </div>
            <h5 className="mt-1 text-lg text-center"> {doc.title}</h5>

            <ul className={`${montserrat.className} text-gray-300 mt-2 text-center`}>
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
