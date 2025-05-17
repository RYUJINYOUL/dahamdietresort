import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const phone = () => {
  return (
     <div className="bg-[#d6b79a] h-[89px] w-full md:w-[1100px] md:flex flex-row lg:px-8 border-[#cdad8f]">
              <div className="h-[89px] w-full grid grid-cols-3 divide-x-1 divide-[#cdad8f] md:flex md:flex-row md:items-center md:justify-evenly">
                  
                 <div href="tel:010-3896-0696" className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
                  <BsTelephone className='text-[20px] md:text-[30px] text-white'/>
                  <div className='text-white text-center text-[15px] md:text-[20px]'>전화상담</div>
                 </div> 
             

        
                <div href="sms:010-3896-0696" className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
                  <FaRegEnvelope className='text-[20px] text-white md:text-[30px]'/>
                  <div className='text-white text-center text-[15px] md:text-[20px]'>문자상담</div>
                </div> 
            
              
            
                <div href="sms:010-3896-0696" className='flex md:flex-row flex-col items-center justify-center gap-2.5'>
                  <IoPersonOutline className='text-[20px] text-white md:text-[30px]'/>
                  <div className='text-white text-center text-[15px] md:text-[20px]'>카톡상담</div>
                </div>
              

                  </div>
              </div>
  )
}

export default phone
