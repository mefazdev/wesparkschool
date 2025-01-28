"use client";
import Hero from "../components/home/hero";
import Admission from "../components/home/admission";
import About from "../components/home/about";
import PrincipalMessage from "../components/home/principalMessage";
import News from "../components/home/news";
import Amenities from "../components/home/amenities";
import { useEffect, useState } from "react";

export default function Home() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/limit`,{
  //   // cache: 'no-store',
  // });
  // const newses = await res.json();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/news/limit`, {
        // cache: 'no-store',
      });
      const newses = await res.json();
      setData(newses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <Hero />

      <Admission />

      <About />
      <PrincipalMessage />
      <Amenities />
      <News data={data} />
    </div>
  );
}

// async function getNewses() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/limit`,{
//     // cache: 'no-store',
//   }); // Replace with your API or server call

//   const data = await res.json();

//   return data;
// }
