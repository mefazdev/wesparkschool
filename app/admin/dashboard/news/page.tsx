import React  from "react";
import Component from "./Component";
 

 export default async function News() {
  const data = await getData();
 
//  helll
   return (
   <div className="bg-gray-50 min-h-screen">
     <div className="py-20 px-6 lg:px-6 lg:w-11/12 mx-auto ">
       
       <Component data={data}/>
      </div>
   </div>
  );
}


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`,{
    // cache: 'no-store', 
  }); // Replace with your API or server call
   
  const data = await res.json();
 
  return data;
}