import React from "react";
import Component from "./Component";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const { slug } = params;
  // const res = await fetch(`https://spark-salahzain-teck-salahzaintecks-projects.vercel.app/api/news`,
  //   {cache:'no-store'}
  // );
  // const newses = await res.json();
  // const news = newses.find((news: News) => createSlug(news?.title) === slug);
  // if (!news) {
  //   return <div>News not found</div>;
  // }

  return (
    <div className="pb-32 ">
      <Component slug={slug} />
    </div>
  );
}
