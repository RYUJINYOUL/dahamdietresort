import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
    <div className='lg:my-10 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>규칙안내</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
       
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='mt-10' />
      

          <div className='text-[15px] lg:w-[1100px] text-center'></div>
          
          <p>
            1.&nbsp;다이어트에&nbsp;방해가&nbsp;되는&nbsp;음식
            <br />
            &nbsp;&nbsp;&nbsp;(고칼로리/고당류)&nbsp;식품들은&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;이용기간동안&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;반입이&nbsp;불가합니다.
          </p>

       
          <div className='mt-10' />
         <p>
            2.&nbsp;긍정적이고,&nbsp;건강한&nbsp;마음으로&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;서로&nbsp;돕고&nbsp;배려합니다.
          </p>


          <div className='mt-10' />
          <p>
            3.&nbsp;타인에게&nbsp;피해가&nbsp;가는&nbsp;행동&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;(음주/도박/고성방가/폭력)
            <br />
            퇴실조치합니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;**입소비는&nbsp;단식과프로그램진행&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비이며,
            <br />
            &nbsp;&nbsp;숙박과&nbsp;시설이용은&nbsp;원하는분께
            <br />
            &nbsp;&nbsp;서비스로제공됩니다.
          </p>

            <div className='mt-10' />
            <p>
              4.&nbsp;다함의&nbsp;운동프로그램은&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;절대&nbsp;강압적이지&nbsp;않습니다.&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;본인의&nbsp;컨디션과&nbsp;체력에&nbsp;따라&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;점차&nbsp;참여율을&nbsp;높여가시는것을&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;권장합니다!!
            </p>


           <div className='mt-10' />
            <p>
              5.&nbsp;단식의&nbsp;일정은&nbsp;인바디&nbsp;체크와&nbsp;&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;컨디션&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;체력상태&nbsp;에&nbsp;따라&nbsp;상담후에&nbsp;함께&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;진행합니다.&nbsp;
            </p>
            

           <div className='mt-10' />  
         
          <div className='mt-10' />
        </div>

      


      </section>
       <section className='flex justify-center items-center'>
       <div className='w-[1100px] flex flex-row items-center gap-8'>
      
     
        </div>
       </section>
       <div className='h-[150px]'/>
         <Footer />
       </div>
       
  )
}

export default page
