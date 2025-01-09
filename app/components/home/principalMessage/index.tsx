import { montserrat } from "@/app/ui/fonts";
import React from "react";

export default function PrincipalMessage() {
  return (
    <div className="mt-20 md:mt-32">
      <div className="px-4 lg:px-0 lg:w-9/12 mx-auto">
      <div className="flex items-center">
      <h5 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Principal&apos;s Message</h5>
     
  <div className="flex-1 h-[2px] bg-gray-200 ml-4"></div>
</div>
          <div className={`${montserrat.className} mt-6`}>
        <p>
          Welcome to We Spark International School! It&apos;s a joy to have you
          here. At We Spark, we&apos;re more than just a school – we&apos;re a community
          that sparks curiosity, growth, and a love for learning in every
          student. Guided by our Mission and Vision, we&apos;re committed to creating
          an environment where every child finds their spark to lead, innovate,
          and make a difference. Together, we&apos;re shaping a generation ready to
          thrive in a changing world with sustainability at heart.
        </p>

<div className="md:float-end mt-4">
    <p className="font-semibold">Saiful Ameen PM</p>
    <p >Principal, WeSpark International School</p>
</div>
        </div>
      
        {/* 
Principal, WeSpark International School */}
      </div>
    </div>
  );
}
