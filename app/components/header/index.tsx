import { poppins } from '@/app/ui/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'
import { TiThMenuOutline } from 'react-icons/ti'
 
export default function Header() {
  return (
    <div className={`${poppins.className} bg-white`} >
        <div className='bg-primary hidden md:grid'>
            <div className='w-11/12 mx-auto py-2 text-white flex items-center justify-between'>
              <div className='flex items-center gap-4 text-[15px]'>
              <div className='flex items-center gap-1'>
              <IoMail className='text-xl'/>
              <a href=""  >info@wesparkschool.com</a>
              </div>
              <div className='flex items-center gap-1'>
              <IoMdCall className='text-xl'/>
              <a href="">+91 6238 400 700</a>
              </div>
              </div>

              <div className='flex gap-2 items-center'>
                <a target="_blank" href="https://www.facebook.com/bharatkatimes?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                <a target="_blank" href="https://www.instagram.com/we_spark_international_school/?igsh=MWc3bG44MndzOHJ1MQ%3D%3D"><FaInstagram /></a>
                <a target="_blank" href="https://youtube.com/@wesparkinternationalschool?si=zNhQcvHQgqrxAYxe"><FaYoutube  className='text-lg'/></a> 
              </div>
            </div>
        </div>

        <div className='px-3 md:px-0 py-2 md:py-0 md:w-11/12  mx-auto flex justify-between items-center '>
          <div className='h-14 w-32 lg:h-20 lg:w-52 relative'>
            <Image src={'/images/logo.png'} alt='' fill/>
          </div>
 
          <nav className='hidden lg:grid'>
            <ul className='flex gap-2 lg:gap-4 font-semibold text-primary '>
               <Link href='/'>Home</Link>
               <Link href='/'>About</Link>
            
               <a href="https://forms.gle/2iZ2fDAm4YCtkWQv7" target="_blank">Admission</a>
               <Link href={'/'}> Our Team</Link>
               <Link href='/'>News & Updates</Link>
               <Link href='/'>Career</Link>
               <Link href='/'>Contact</Link>
             
            </ul>
          </nav>
          <TiThMenuOutline className='text-primary text-3xl lg:hidden' />
        </div>
    </div>
  )
}
