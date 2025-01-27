"use client";
import { convertFromRaw, RawDraftContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  news:News ;
}
const Component: React.FC<CustomComponentProps> = ({ news }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (news.content) {
      const rawContent = news.content;
      const contentState = convertFromRaw(rawContent);
      const html = stateToHTML(contentState);
      setHtmlContent(html);
    }
  }, []);

  return (
    <div className="min-h-[100vh]">
      <div className="relative  h-[60vh] ">
        <Image src={news.image.url} alt="" fill className="object-cover" />

        <div className="absolute bg-primary/30 inset-0 bg-gradient-to-r from-black/80 via-primary/10 to-transparent z-10">
          <div className="flex h-full  items-end px-4 lg:px-0 pb-20 lg:pl-20 ">
            <div>
              <h6 className="lg:text-lg text-secondary">
                {moment(news.date).format("DD MMM YY ")}
              </h6>
              <h1 className="text-2xl lg:text-5xl font-bold text-white">{news.title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 md:w-11/12 lg:w-10/12 mx-auto pt-10 lg:pt-20">
        <p
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></p>
      </div>
    </div>
  );
};

export default Component;
