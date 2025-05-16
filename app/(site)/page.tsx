"use client"
import React from 'react'
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { BsTelephone } from "react-icons/bs";
import Footer from '@/components/Footer'
import { IoPersonOutline } from "react-icons/io5";
import useUIState from "@/hooks/useUIState";
import useAuth from '@/hooks/useAuth';


const Page = () => {
   useAuth
  const { push } = useRouter();
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
 

   const onClickCategory = (item:any ,src:any) => {
    if (homeCategory === item) {
      setHeaderImageSrc("");
      setHomeCategory(item);
    } else {
      setHeaderImageSrc(src);
      setHomeCategory(item);
      push(src)
    }
  };


  return (
    
    <div>
      <div className="bg-[#d6b79a] h-[89px] md:flex flex-row lg:px-8 border-[#cdad8f]">
          <div className="h-[89px] md:w-full grid grid-cols-3 divide-x-1 divide-[#cdad8f] md:flex md:flex-row md:items-center md:justify-evenly">
             <div className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
              <BsTelephone className='text-[20px] md:text-[30px] text-white'/>
              <div className='text-white text-center text-[15px] md:text-[20px]'>전화상담</div>
             </div> 
          <div className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
              <FaRegEnvelope className='text-[20px] text-white md:text-[30px]'/>
              <div className='text-white text-center text-[15px] md:text-[20px]'>문자상담</div>
            </div> 
          <div className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
              <IoPersonOutline className='text-[20px] text-white md:text-[30px]'/>
              <div className='text-white text-center text-[15px] md:text-[20px]'>카톡상담</div>
            </div> 
              </div>
          </div>
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    

      <div className='mt-7'/>
      <div className='md:mb-18 mb-4'>
      <div className='w-full flex flex-col justify-center items-center gap-3'>

       <Image
          alt="logo"
          className="object-cover rounded-full"
          width={70}
          height={70}
          src={"/Image/logo.jpg"}
        />  
     
          <ul className="list_info flex flex-col items-center">
              <li className='text-[#000000] text-[15px] font-semibold'>
                <span className="item_description">다함단식원</span>
              </li>
              <li className='text-[#959595] text-[13px]'>
                <span className="item_title">전화번호 : </span>
                <span className="item_description">010-3896-0696</span>
              </li>
             <li className='text-[#959595] text-[13px]'>
                <span className="item_title">주소 : </span>
                <span className="item_description"> 인천광역시 중구 을왕동 741-10</span>
              </li>
             <li className='text-[#959595] text-[13px]'>
                <span className="item_title">사업자정보 : </span>
                <span className="item_description">121-20-46015</span>
              </li>
            </ul>
        </div>
      </div>

       
     <div className='mt-10'/>  
    <Footer />
   </div>
  
  )
}

export default Page

