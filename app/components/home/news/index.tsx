import { poppins } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";



export default function News() {

    const docs =[
        {
            title:'Lipsum generator: Lorem Ipsum - All the facts',
            image:'/images/foundation.jpeg'
        },
         
    ]
  return (
    <div className="mt-20 md:mt-32 px-6 lg:px-0 lg:w-[88%] mx-auto ">
      <div className="flex items-center">
        <h5 className="text-xl md:text-2xl font-bold text-lightPrime whitespace-nowrap">
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
       {docs.map((doc)=>(
         <div key={doc.image} 
        //  className="shadow p-4"
         >
         <div className="relative h-64 rounded-t">
           <Image
             src= {doc.image}
             alt=""
             fill
             className="object-cover rounded-t"
           />
         </div>

         <div className="pt-4 p-4 shadow">
           <p className="font-semibold text-gray-400 text-[14px]">
             JAN 9 2025
           </p>
           <h5 className={`${poppins.className} md:text-l font-semibold text-lightPrime mt-2`}>
           Laid the foundation stone for Spark International School, starting at Edakkara
           </h5>

           <button className="p-2 md:p-3 px-5 md:px-8 bg-secondary text-white font-semibold  mt-4">
             Read More
           </button>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
}
