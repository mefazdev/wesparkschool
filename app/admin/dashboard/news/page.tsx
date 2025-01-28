'use client'
import React, { useEffect, useState }  from "react";
import Component from "./Component";
 

 export default   function News() {
  // const data = await getData();

  const [data,setData] = useState([]);
    
   const fetchData = async  ()=>{
      try {
        const res = await fetch(`/api/news/limit`,{
          // cache: 'no-store',
        });
        const newses = await res.json();
        setData(newses);
      } catch (error) {
        console.log(error)
      }
   }
  
   useEffect(() => {
    fetchData()
   }, [])
 
//  helll
   return (
   <div className="bg-gray-50 min-h-screen">
     <div className="py-20 px-6 lg:px-6 lg:w-11/12 mx-auto ">
       
       <Component data={data}/>
      </div>
   </div>
  );
}


// async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`,{
//     // cache: 'no-store', 
//   }); // Replace with your API or server call
   
//   const data = await res.json();
 
//   return data;
// }