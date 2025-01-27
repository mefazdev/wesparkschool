import Image from "next/image";
import React from "react";
import { poppins } from "../../ui/fonts";
import moment from "moment";
import Link from "next/link";
import { RawDraftContentState } from "draft-js";

type Img = {
  url: string;
  publicId: string;
};
type News = {
  title: string;
  content: RawDraftContentState;
  image: Img;
  date: string;
};
export default async function News() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`);
  const newses = await res.json();

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, ""); // Remove leading or trailing hyphens
  };

  return (
    <div>
      <div className="relative h-[50vh] lg:h-[70vh] ">
        <Image
          src={"/images/camp-3.jpg"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute pt-10 lg:pt-0 z-10 inset-0 bg-primary bg-opacity-80    ">
          <div className="flex justify-center items-center h-full">
            <h1
              className={`${poppins.className} text-white font-semibold text-3xl lg:text-4xl`}
            >
              {" "}
              News & Upadtes
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pb-40">
        <div className="pt-10 lg:pt-20 lg:w-10/12 px-4 lg:px-0 mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
          {newses.map((news: News) => (
            <div key={news.title}>
              <div className="relative h-[200px] lg:h-[300px]">
                <Image
                  src={news.image.url}
                  fill
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="p-4 lg:p-8 bg-white">
                <p className="text-gray-500 text-sm lg:text-base">
                  {" "}
                  {moment(news.date).format("DD MMM YYYY")}
                </p>
                <div>
                  <h2
                    className={`${poppins.className} mt-1 lg:text-lg lg:font-bold`}
                  >
                    {news.title}
                  </h2>
                  <div className="mt-4">
                    <Link
                      href={`/news/${createSlug(news.title)}`}
                      className="p-2 md:p-2 px-5 md:px-4 bg-secondary text-white font-semibold  "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
