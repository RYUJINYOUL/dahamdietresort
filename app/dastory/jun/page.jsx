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
          <div className='lg:text-start font-semibold text-center text-[20px]'>준비물안내</div>
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
            src={"/Image/mosaDUsMSW.jpeg"}
          />
        <div className='mt-10' />
     
        <div className='md:mt-10 mt-0' />
  
          
     
        <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
          <ul>
            {" "}
            <li style={{ color: "color1" }}>
              <span className="text-[30px] text-[#ccc]">.</span>
              <span className='text-[16px] text-[#333333]'>
                워킹용&nbsp;런닝화&nbsp;2켤레&nbsp;중요!&nbsp;
                <br />
                (실내용/실외용)&nbsp;
                <br />
              </span>
            </li>{" "}
              
            <li style={{ color: "color1" }}>
               <span className="text-[30px] text-[#ccc]">.</span>
              <span className='text-[16px] text-[#333333]'>
                세면도구,화장지,화장품등
                <br />
                개인용품
              </span>
            </li>{" "}
     
            <li style={{ color: "color1" }}>
              <span className="text-[30px] text-[#ccc]">.</span>
                  <span className='text-[16px] text-[#333333]'>
                    운동복(상하의3~4벌),평상복,양말</span>
            </li>{" "}
         
            <li style={{ color: "color1" }}>
              <span className="text-[30px] text-[#ccc]">.</span>
              <span className='text-[16px] text-[#333333]'>
                실내슬리퍼,&nbsp;모자,우산,물티슈
              </span>
            </li>{" "}

            <li style={{ color: "color1" }}>
               <span className="text-[30px] text-[#ccc]">.</span>
              <span className='text-[16px] text-[#333333]'>
                본인&nbsp;필요에&nbsp;의한&nbsp;상비약&nbsp;
              </span>
            </li>{" "}
        
            <li style={{ color: "color1" }}>
               <span className="text-[30px] text-[#ccc]">.</span>
              <span className='text-[16px] text-[#333333]'>
                사우나&nbsp;가실분들&nbsp;목욕&nbsp;용품&nbsp;등
                <br />
                이외의&nbsp;개인적으로&nbsp;필요하신&nbsp;
                <br />
                모든물품
              </span>
            </li>{" "}
          </ul>

       
          <div className='mt-10' />
          <p className='text-[16px] text-[#333333]'>
            본인이&nbsp;필요하다고&nbsp;생각되는&nbsp;
            <br />
            모든&nbsp;물건&nbsp;모두&nbsp;가져오세요^^&nbsp;
            <br />
            생활하시는데&nbsp;편리하십니다&nbsp;
          </p>


          <div className='mt-10' />
           <p className='text-[16px] text-[#333333]'>
          목이&nbsp;예민하신불들&nbsp;
          <br />
          쓰시던&nbsp;베개&nbsp;가져오시면&nbsp;편안하십니다.^^
        </p>

          <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
    
        <h4 className='text-[20px] text-center'>
          짐이&nbsp;많으신&nbsp;경우&nbsp;
          <br />
          미리&nbsp;택배로&nbsp;보내&nbsp;놓으시면&nbsp;됩니다
        </h4>
        
        <div className='mt-5' />

        <p className='text-[16px] text-[#333333] text-center'>인천시&nbsp;중구&nbsp;을왕동&nbsp;741-10&nbsp;다함</p>
        
      </div>
      <div className='mt-5'/>
                <Phone />
        <div className='mt-7'/>
      </section>
       </div>
        <Footer />
    </div>   
  )
}

export default page
