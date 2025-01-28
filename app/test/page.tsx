'use client'
import React from 'react'

export default function page() {

  const getNewses = async () => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/limit`,{
    // cache: 'no-store', 


  })
  const data = await res.json();
  console.log(data)

}
  return (
    <div>page

      <button onClick={getNewses}>CLick</button>
    </div>
  )
}
