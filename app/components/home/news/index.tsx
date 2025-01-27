"use client";
import { poppins } from "@/app/ui/fonts";
import { RawDraftContentState } from "draft-js";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";


type Img={
  url:string;
  publicId:string;
}
type News={
  title:string;
  content:RawDraftContentState;
  image: Img;
  date:string;
}
interface CustomComponentProps {
  data: News[];
}
const News: React.FC<CustomComponentProps> = ({ data }) => {
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, ""); // Remove leading or trailing hyphens
  };

  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({});
    });
  }, []);
  return (
    <div
      data-aos="flip-up"
      className="mt-20 md:mt-32 px-6 lg:px-0 lg:w-[88%] mx-auto pb-32"
    >
      <div className="flex items-center">
        <h5 className="text-xl md:text-2xl font-bold text-secondBlue whitespace-nowrap">
          News & Updates
        </h5>
        <div className="flex-1 h-[2px] bg-gray-200 ml-4"></div>
      </div>
      <div className={` text-[15px] text-secondary mt-1`}>
        {/* <Link href="/"> */}
        View All News
        {/* </Link> */}
      </div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-4 mt-10">
        {data.map((doc:News) => (
          <div
            key={doc.title}
            //  className="shadow p-4"
          >
            <div className="relative h-64 rounded-t">
              <Image
                src={doc.image?.url}
                alt=""
                fill
                className="object-cover rounded-t"
              />
            </div>

            <div className="pt-4 shado">
              <p className="font-semibold text-gray-400 text-[14px]">
                {moment(doc?.date).format("DD MMM  YY")}
              </p>
              <h5
                className={`${poppins.className} md:text-l font-semibold text-lightPrime mt-2`}
              >
                {doc.title}
              </h5>

              <div className="mt-4 pb-2">
                <Link
                  href={`/news/${createSlug(doc.title)}`}
                  className="p-2 md:p-3 px-5 md:px-8 bg-secondary text-white font-semibold  "
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
