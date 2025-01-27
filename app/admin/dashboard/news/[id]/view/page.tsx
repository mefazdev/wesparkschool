import React from 'react'
import Component from './Component'; 
 

type Params = Promise<{ id: string }>
export default async function page(props:{params:Params}) {
  const params = await props.params;
  const {id} = params
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/${id}/view`,{
     
      }) 
      
    const data = await res.json();
 
 
  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="py-20 px-6 lg:px-6 lg:w-8/12 mx-auto ">
 
 {data && <Component data={data}/> }
     </div>
  </div>
  )
}


 