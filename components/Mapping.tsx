import React from 'react'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { PiCalendarCheck } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { IoWifiOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import Map from "@/components/map"

const Mapping = () => {
  return (
    <div className='lg:my-10 p-3.5'>
    <section className='flex flex-col justify-center items-center'>
    <div className='lg:mt-13' />
      <div className='flex flex-col'>
        <div className='lg:text-start font-semibold text-center text-[20px] lg:w-[1100px] w-screen'>오시는 길</div>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>
      <div className='mt-5' />
      

        <section className='flex justify-center items-center'>
        <div className='md:w-[1100px] md:h-[500px] w-[640px] h-[500px]'>
          <Map />
        </div>
        </section>


        <div className='mt-8' />
    
    <div className='md:block hidden'>
    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[15px]'>다함 단식 하우스</div>
          <div className='mt-1' />
          <div className='lg:text-start font-semibold text-[#d6b79a] text-center text-[26px]'>인천광역시 중구 을왕동 741-10</div>
          <div className='mt-8' />
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#d6b79a] text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/entry/place/13492349?c=13.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#d6b79a] text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/search/%EC%98%81%EC%A2%85%EB%8B%A4%ED%95%A8%EB%8B%A8%EC%8B%9D%ED%95%98%EC%9A%B0%EC%8A%A4/place/13492349?c=15.00,0,0,0,dh&isCorrectAnswer=true")}}>지도에서 보기</div>
          </div>
        </div>  
      </div>
    </section>

    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiMiniMapPin className='text-[20px] text-gray-400'/>
          <div className=''>오시는길</div>
          </div>
          <div className='lg:text-start text-center text-[15px]'>
             <span className='text-[15px] text-[#888] text-start'>
          - 공항 픽업은 미리 예약해주시면 이용가능합니다
          <br /> 비용은 1만원입니다.
          <br />
          <br />- 인천공항 (1터미널)3층 출국장 7번게이트에서 <br /> 111번이나306번
          승차하시고
          <br /> 을왕리 해수욕장 하차하시어 전화주시면 <br /> 바로 픽업해 드립니다.{" "}
          <br /> 공항에서 을왕리 까지 (15분~20분소요)
          <br /> 을왕리해수욕장에서 단식하우스까지
          <br /> 차로2분 걸어서 5분거리 입니다.
          <br />
          <br />- 공항 리무진버스/ KTX/ 공항철도/ <br /> 비행기 등을 이용하여 국내 국외
          어디서든 <br /> 아주 편리하게 찾아 오실수 있으십니다. <br /> 인천국제공항
          20분거리 다함단식하우스♡♡
        </span>
          </div>
        </div>  
        
      </div>
      </section>

      <div className='mt-7' />
    
      <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiPhone className='text-[20px] text-gray-400'/>
          <div className=''>전화번호</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'><a href="tel:010-3896-0696" className="_callTel">
            010-3896-0696
          </a></div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>



       <div className='mt-7' />
    
      <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <FaCircleExclamation className='text-[20px] text-gray-400'/>
          <div className=''>이용안내</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            {" "}
            <span className="flex flex-row gap-12">
              <span className="flex flex-col gap-2 ">
                  <PiCalendarCheck className='text-[30px] text-[#888]' />
                  <span className="sub_title text-[15px] text-[#888]">예약</span>
              </span>
              <span className="flex flex-col gap-2">
                  <AiOutlineCar className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">주차</span>
              </span>
             <span className="flex flex-col items-center justify-center gap-2">
                  <IoWifiOutline className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">무선인터넷</span>
              </span>
            </span>{" "}
          
          </div>
          </div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>


      <section className='flex flex-col justify-center items-center'>
           <div className='mt-7' />
      <div className='w-[1100px] flex flex-col'>
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <IoIosPerson className='text-[20px] text-gray-400'/>
          <div className=''>사업자정보</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'>
             <div className="flex flex-col">
            {" "}
            <span className="flex text-[15px] text-[#888] flex-row gap-22">
              <span className="sub_title">상호</span>
              <span className="sub_text">다함 단식하우스</span>
            </span>{" "}
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-19">
              <span className="sub_title">대표자</span>
              <span className="sub_text">고기영</span>
            </span>{" "}
            <div className='mt-1' />
           <span className="flex flex-row text-[15px] text-[#888] gap-13">
              <span className="sub_title">사업자번호</span>
              <span className="sub_text _taxNum">121-20-46015</span>
            </span>
          </div>
          </div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>


      </div>


      

    <section className='md:hidden block'>
    <div className='flex flex-row gap-2'>
          <div className='flex rounded-md flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#d6b79a] text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/entry/place/13492349?c=13.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 rounded-md lg:text-start text-center text-[15px] p-2 bg-[#d6b79a] text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p?title=%ED%9D%99%EA%B4%91%EA%B3%A0%EA%B8%B0%ED%9A%8D&lng=126.8065872&lat=37.3413429&zoom=13&type=0&c=13.00,0,0,0,dh")}}>지도에서 보기</div>
          </div>
        </div>  
    </section>

    <section className='md:hidden block flex justify-center items-center'>
    <div className='flex md:p-0 p-3 flex-col w-full'>
      <div className='md:mt-10 mt-5' />
      <div className='md:text-[15px] text-[#222] font-bold text-start'>다함 단식 하우스</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'>인천광역시 중구 을왕동 741-10</div>
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>전화번호</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'><a href="tel:010-3896-0696" className="_callTel">
            010-3896-0696
          </a></div>
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>오시는길</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>
          <span className='text-[15px] text-[#888] text-start'>
          - 공항 픽업은 미리 예약해주시면 이용가능합니다
          <br /> 비용은 1만원입니다.
          <br />
          <br />- 인천공항 (1터미널)3층 출국장 7번게이트에서 <br /> 111번이나306번
          승차하시고
          <br /> 을왕리 해수욕장 하차하시어 전화주시면 <br /> 바로 픽업해 드립니다.{" "}
          <br /> 공항에서 을왕리 까지 (15분~20분소요)
          <br /> 을왕리해수욕장에서 단식하우스까지
          <br /> 차로2분 걸어서 5분거리 입니다.
          <br />
          <br />- 공항 리무진버스/ KTX/ 공항철도/ <br /> 비행기 등을 이용하여 국내 국외
          어디서든 <br /> 아주 편리하게 찾아 오실수 있으십니다. <br /> 인천국제공항
          20분거리 다함단식하우스♡♡
        </span>
        </div>
        <div className='mt-5' />  
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>주차정보</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'>다함내 전용주차장 있습니다.</div>
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>사업자정보</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>

          <div className="flex flex-col">
            {" "}
            <span className="flex text-[15px] text-[#888] flex-row gap-22">
              <span className="sub_title">상호</span>
              <span className="sub_text">다함 단식하우스</span>
            </span>{" "}
           <span className="flex flex-row text-[15px] text-[#888] gap-19">
              <span className="sub_title">대표자</span>
              <span className="sub_text">고기영</span>
            </span>{" "}
           <span className="flex flex-row text-[15px] text-[#888] gap-13">
              <span className="sub_title">사업자번호</span>
              <span className="sub_text _taxNum">121-20-46015</span>
            </span>
          </div>
        </div>
        
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>이용안내</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>

          <div className="flex flex-col">
            {" "}
            <span className="flex flex-row gap-12">
              <span className="flex flex-col gap-2 ">
                  <PiCalendarCheck className='text-[30px] text-[#888]' />
                  <span className="sub_title text-[15px] text-[#888]">예약</span>
              </span>
              <span className="flex flex-col gap-2">
                  <AiOutlineCar className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">주차</span>
              </span>
             <span className="flex flex-col items-center justify-center gap-2">
                  <IoWifiOutline className='text-[30px] text-[#888]'/>
                  <span className="sub_title text-[15px] text-[#888]">무선인터넷</span>
              </span>
            </span>{" "}
          
          </div>
        </div>


        <div className='mt-5' />
      </div>  
     </section>  
     </div>
  )
}

export default Mapping
