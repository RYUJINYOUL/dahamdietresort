import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'
import Phone from '@/components/ui/phone';

function page (){
  return (
    <div className='relative top-20'>
       <div className='lg:my-10 p-3.5'>
      <div className='md:mt-0 mt-3' />

      <section className='flex flex-col justify-center items-center'>
    
        
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>예약 및 입소절차 비용안내</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[210px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[890px]"/>
       </div>
       </div>
    
        <div className='md:mt-8 mt-1' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/reser.jpeg"}
          />
        <div className='mt-10' />
       
        <div className='md:mt-10 mt-0' />
      

        <div className='mt-5' />
        <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
        <div className='md:text-[20px]  font-semibold text-[#d6b79a] text-[17px] text-start'>예약안내</div>
          <div className='md:mt-5 mt-3' />
          <p className='text-[16px] text-[#333333]'>
            다함단식원은&nbsp;입소가능하신&nbsp;방에&nbsp;
            <br />
            제한이&nbsp;있기&nbsp;때문에
            <br />
            일정을&nbsp;신중하게&nbsp;해주시고
            <br />
            예약을&nbsp;진행해주시기바랍니다.
            <br />
            예약금&nbsp;환불은&nbsp;불가합니다.
          </p>
         <div className='md:mt-10 mt-3' />
             <div className='mt-10' />
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
              <div className='mt-10' />
          <div className='md:text-[20px]  font-semibold text-[#d6b79a] text-[17px] text-start'>입소 예약과 문의사항</div>
          <div className='md:mt-5 mt-3' />
         <p className='text-[16px] text-[#333333]'>
            카톡이나&nbsp;전화상담&nbsp;문자를&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용해&nbsp;주시기&nbsp;바랍니다.
          </p>
 
             <div className='mt-10' />
          <div className='md:mt-10 mt-3' />
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
              <div className='mt-10' />
        <div className='md:text-[20px]  font-semibold text-[#d6b79a] text-[17px] text-start'>다함하우스 입소절차</div>
          <div className='md:mt-5 mt-3' />
        <ul>
          {" "}
          <li style={{ color: "color1" }}>
            <span className="f_h">1</span>
            <span className='text-[16px] text-[#333333]'>
              step1.&nbsp;전화및&nbsp;카톡상담&nbsp;후&nbsp;
            </span>
          </li>{" "}
          <div className='mt-2'/>
          <li style={{ color: "color1" }}>
            <span className="f_h">2</span>
             <span className='text-[16px] text-[#333333]'>
              step2.&nbsp;입소날짜결정&nbsp;및&nbsp;예약&nbsp;
            </span>
          </li>{" "}
          <div className='mt-2'/>
          <li style={{ color: "color1" }}>
            <span className="f_h">3</span>
             <span className='text-[16px] text-[#333333]'>
              step3.&nbsp;예약날짜&nbsp;통보</span>
          </li>{" "}
          <div className='mt-2'/>
          <li style={{ color: "color1" }}>
            <span className="f_h">4</span>
             <span className='text-[16px] text-[#333333]'>
              step4.&nbsp;다함하우스&nbsp;입소</span>
          </li>{" "}
        </ul>
        </div>  
      
       
      <div className='mt-9'/>
                <Phone />
        <div className='mt-7'/>
      </section>
      
       <div className='mt-20'/>
       </div>
       <Footer />
     </div>  
  )
}

export default page
