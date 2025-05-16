"use client"
import React from 'react'
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Footer from '@/components/Footer'
import { IoPersonOutline } from "react-icons/io5";
import useAuth from '@/hooks/useAuth';
import PagePadding from '@/components/PagePadding';
import Phone from '@/components/ui/phone';


const Page = () => {
   useAuth

  return (
    <div>
    <div className='w-[1100px] w-full md:flex flex-col items-center justify-center'>
      <PagePadding>
        <div className='mt-7' />
        <div className='md:w-[1100px] w-full gap-10'>
        <div className='relative md:w-[1100px] w-full md:h-[1100px] h-[370px]'>
       <Image
          alt="mediaItem"
          className="object-cover"
          // width={530}
          // height={353}
          fill
          src={"/Image/main.jpg"}
        />  
        </div>
        </div>
        <div className='mt-1'/>
          <Phone />
          <div className='mt-7'/>
       </PagePadding>  
       
      <Footer />
     <div className='mt-10'/>  
   </div>
  </div>
  )
}

export default Page

