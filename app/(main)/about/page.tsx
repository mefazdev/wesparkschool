"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoIosBody  } from "react-icons/io";
import { GiHealingShield } from "react-icons/gi";
import { FaBrain, FaCreativeCommons, FaGlobeAmericas } from "react-icons/fa";
import { PiTreePalm } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { montserrat } from "@/app/ui/fonts";

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => (
  <div className="w-fit  flex gap-3   ">
    <button
      onClick={previous}
      className="shadow shadow-gray-500 text-primary text-3xl rounded-full p-1 "
    >
      <MdKeyboardArrowLeft />
    </button>
    <button
      onClick={next}
      className="shadow shadow-gray-500 text-primary text-3xl rounded-full p-1 "
    >
      <MdKeyboardArrowRight />
    </button>
  </div>
);

export default function About() {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({});
    });
  }, []);
  // hello
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const carouselRef = useRef<Carousel>(null);
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
      content: [
        "100% English Campus",
        "Multilingual Proficiency  Programs",
        "Global Language Proficiency",
      ],
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
      content: [
        "Dedicated Medical Care Room",
        "Mental Health Support",
        "Nutritious Breakfast and Lunch",
      ],
      icon: <GiHealingShield className="text-secondary text-4xl" />,
    },
    {
      title: "Cultural & Artistic Enrichment",
      content: [
        "Creative Arts Programs",
        "Cultural Immersion Activities",
        "Performance & Exhibition Opportunities",
      ],
      icon: <FaCreativeCommons className="text-secondary text-4xl" />,
    },
  ];

  

  return (
    <div className="pb-20">
      <div className="relative h-[60vh] lg:h-[80vh] ">
        <Image
          src={"/images/camp-1.jpg"}
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute  inset-0 bg-gradient-to-r from-black/70 via-primary/10 to-transparent z-10">
          <div className="flex h-full  items-end pb-20 pl-7 md:pl-20 ">
            <div>
              <h6 className="md:text-xl text-secondary">Know Us Better</h6>
              <h1 className="text-3xl md:text-5xl font-bold text-white">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-6 ">
        <div className="lg:w-10/12 mx-auto px-4 lg:px-0  ">
          {/* <h6 className="flex items-center text-[15px] text-gray-500">
            {" "}
            Home <IoMdArrowDropright className="text-xl text-gray-600" />{" "}
            <span className="text-secondary">About Us</span>
          </h6> */}

          <div className="grid lg:grid-cols-3 pt-5 md:pt-16   ">
            <div data-aos="fade-right" className="mt-6">
              <h3 className="text-3xl md:text-5xl font-bold text-primary">WE SPARK</h3>
              <p className="text-secondary md:text-lg">
                {" "}
                Shaping Minds, Sparking Success
              </p>
            </div>
            <div className="lg:col-span-2 mt-3 md:mt-0">
              <p className={`${montserrat.className}`}>
                Every child is uniquely gifted, with their own learning style
                and growth pace. A team of seasoned educators, with over 40
                years of expertise, has crafted a personalized approach to
                unlock each child&apos;s potential. <br />
                Welcome to We Spark International School, where cultural
                heritage meets holistic development. Our interconnected national
                and international curriculum delivers exceptional education.
                Within a nurturing environment, we uphold the values of freedom,
                equity, ethics, and democracy. By integrating these principles
                into our teaching, we empower students to thrive in an
                ever-changing world.
              </p>
            </div>
          </div>
        </div>

        <div className=" text-white mt-16 lg:mt-32">
          <div className="grid md:grid-cols-2 ">
            <div
              // data-aos="zoom-in"
              className="flex flex-col justify-center border-t border-secondary/60 py-8 px-4 md:px-8 lg:p-20  bg-primary"
            >
              <h5 className="text-2xl md:text-3xl font-bold text-secondary">Our Mission</h5>
              <p className={`${montserrat.className} mt-3`}>
                The mission of We Spark International School is to ignite a
                spark of harmony and support, creating an environment where
                students can uncover and nurture their inner potential. We
                strive to spark self-discipline, self-motivation, and a passion
                for excellence in learning. Together with parents and the wider
                community, our dedicated team inspires students to grow into
                independent, self-sufficient individuals who shine as
                responsible contributors to the global society.
              </p>
            </div>
            <div
              className="relative w-full  h-[250px] md:h-full overflow-auto bg-cover bg-center   "
              style={{
                backgroundImage: 'url("/images/camp-6.jpg")',

                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
          </div>
          <div className="grid md:grid-cols-2 ">
            <div
              className="relative w-full    overflow-auto bg-cover bg-center   "
              style={{
                backgroundImage: 'url("/images/camp-6.jpg")',

                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div
              // data-aos="zoom-in"
              className="flex flex-col justify-center py-8 px-4 md:px-8 lg:p-20  bg-primary"
              >
              <h5 className="text-2xl font-bold text-secondary  ">
                Our Vision
              </h5>
              <p className={`${montserrat.className} mt-3`}>
                To spark transformative change in education, becoming a hallmark
                of innovation, quality, and excellence. We aim to empower
                students with cutting-edge knowledge, nurturing their ability to
                leave a mark in an ever-changing, competitive world. With every
                spark, we ignite curiosity, creativity, and confidence,
                inspiring students to embark on journeys of growth, resilience,
                and success, lighting the way to a brighter future.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 px-4 lg:px-0 lg:w-11/12 mx-auto">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            itemClass="p-1 "
          >
            {docs.map((doc) => (
              <div
                className="bg-primary  text-white   rounded p-6 h-full"
                key={doc.title}
              >
                <div className="bg-[#1b2434] h-16 w-16 rounded-full flex justify-center items-center mx-auto">
                  {doc.icon}
                </div>
                <h5 className="mt-1 text-lg text-center"> {doc.title}</h5>

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
