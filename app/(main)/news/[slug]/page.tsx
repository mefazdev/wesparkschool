import React from "react";
import Component from "./Component";
import { RawDraftContentState } from "draft-js";
 

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
type Params = Promise<{ slug: string }>

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};


export default async function page(props:{params:Params}) {
  const params = await props.params;
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`);
  const newses = await res.json();
  const news = newses.find((news: News) => createSlug(news?.title) === slug);
  if (!news) {
    return <div>News not found</div>;
  }
  return <div className="pb-32 ">
 
 <Component news={news}/>
  </div>
}
