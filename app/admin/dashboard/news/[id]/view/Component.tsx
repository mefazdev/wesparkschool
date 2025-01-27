"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw, RawDraftContentState } from "draft-js";
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
  data: News;
}
const Component: React.FC<CustomComponentProps> = ({ data }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (data.content) {
      const rawContent = data.content;
      const contentState = convertFromRaw(rawContent);
      const html = stateToHTML(contentState);
      setHtmlContent(html);
    }
  }, []);
  return (
    <div>
      <div className="bg-white">
        <div className="relative h-[400px]   mx-auto">
   {data?.image?.url && <Image src={data.image.url} alt="" layout="fill" objectFit="cover" />}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-bold ">{data?.title}</h1>
        <div>
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Component;
