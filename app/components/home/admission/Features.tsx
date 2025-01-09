import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { RiRobot2Fill } from "react-icons/ri";

export default function Features() {
  const docs = [
    {
      title: "Tech Powered Smart",
      subTitle: "Classrooms",
      icon: (
        <AiOutlineFundProjectionScreen className="text-gray-700 text-5xl" />
      ),
    },
    {
      title: "STEM & Robotics",
      subTitle: "Lab",
      icon: <RiRobot2Fill className="text-gray-700 text-5xl" />,
    },
    {
      title: "Coding & Game",
      subTitle: "Design Studio",
      icon: <FaLaptopCode className="text-gray-700 text-5xl" />,
    },
    {
      title: "Digital Media",
      subTitle: "Lab",
      icon: <GrMultimedia className="text-gray-700 text-5xl" />,
    },
  ];
  return (
    <div className="bg-white p-10 xl:p-12 grid md:grid-cols-2 xl:grid-cols-4 gap-10 rounded-t">
      {docs.map((doc) => (
        <div className="flex  tems-center gap-6 md:gap-3 " key={doc.title}>
          {doc.icon}
          <div>
            <p className="text md:text-xl font-semibold text-primary text-center">
              {doc.title}
              <br />
             
            </p>
            <p className="text-gray-500 font-normal text-[15px] md:text-lg">
                {doc.subTitle}
              </p>
          </div>
        </div>
      ))}
    </div>
  );
}
