import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'
import Phone from '@/components/ui/phone';

function page (){
  return (
    <div>
       <div className='lg:my-10 p-3.5'>
      <div className='md:mt-0 mt-3' />
      
      <section className='flex flex-col justify-center items-center'>
        
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>다함이야기</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[90px] dark:opacity-50"/>
        </div>
        <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1010px]"/>
        </div>
        </div>

        <div className='md:mt-8 mt-1' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosap8kp6l.jpeg"}
          />
        <div className='mt-10' />

        <div className='md:mt-10 mt-0' />
      

        <div className='flex flex-row items-start lg:w-[1100px] w-full'>
           <p className='text-[16px] text-[#333333]'>
            일상속&nbsp;스트레스,&nbsp;폭식과&nbsp;과식,
            <br />
            나쁜생활습관&nbsp;&nbsp;망가진&nbsp;식이요법으로
            <br />
            인한&nbsp;비만&nbsp;과&nbsp;체력저하&nbsp;
            <br />
            반복된&nbsp;요요로&nbsp;고통받는분들과&nbsp;함께&nbsp;
            <br />
            건강을&nbsp;되찾고&nbsp;힐링하기위해&nbsp;모이는
            <br />
            공간입니다.
            <br />
            <br />
            공기좋고&nbsp;조용한곳,&nbsp;규칙적인&nbsp;식사와&nbsp;
            <br />
            운동에&nbsp;집중할수있는&nbsp;다함에서&nbsp;
            <br />
            집에서는&nbsp;하기힘든&nbsp;&nbsp;
            <br />
            절제된&nbsp;식이요법,단식
            <br />
            규칙적인&nbsp;운동과함께
            <br />
            편안한&nbsp;휴식의&nbsp;시간을&nbsp;가져보시기&nbsp;바랍니다.&nbsp;
            <br />
            <br />
            사통팔달&nbsp;교통망을&nbsp;가진
            <br />
            인천국제공항과&nbsp;
            <br />
            10분거리에&nbsp;있습니다.
            <br />
            <br />
            지방&nbsp;및&nbsp;인천&nbsp;수도권&nbsp;전국에&nbsp;계신
            <br />
            간헐적단식&nbsp;과&nbsp;효소단식&nbsp;
            <br />
            건강&nbsp;다이어트&nbsp;웰니스&nbsp;에&nbsp;
            <br />
            관심이&nbsp;있으신&nbsp;모든분들&nbsp;&nbsp;환영합니다.
            <br />
            <br />
            규칙적인&nbsp;식이요법과
            <br />
            과하지&nbsp;않고&nbsp;재밌는&nbsp;
            <br />
            효과좋은&nbsp;운동프로그램
            <br />
            <br />
            먹으면서&nbsp;즐겁게&nbsp;운동하고
            <br />
            망가진&nbsp;건강까지&nbsp;&nbsp;회복할수있는
            <br />
            간헐적&nbsp;단식요법
            <br />
            효소를&nbsp;통한&nbsp;짧고&nbsp;쉬운&nbsp;단식요법&nbsp;
            <br />
            천천히&nbsp;자연스럽게&nbsp;몸이&nbsp;&nbsp;가벼워지고,
            <br />
            회복되며,&nbsp;좋아지는&nbsp;체력을&nbsp;
            <br />
            경험해&nbsp;보시기&nbsp;바랍니다&nbsp;.&nbsp;
            <br />
            체중감량은&nbsp;저절로&nbsp;따라옵니다!
            <br />
            <br />
            방문해&nbsp;주셔서&nbsp;감사합니다&nbsp;.
          </p>
        </div>
        <div className='mt-10'/>
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
