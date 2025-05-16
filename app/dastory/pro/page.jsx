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
          <div className='lg:text-start font-semibold text-center text-[20px]'>프로그램</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
        <div className='mt-8' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/pro.jpeg"}
          />
       
      

          <div className='text-[15px] lg:w-[1100px] w-full text-center'></div>
          <div className='mt-10' />

      <div class="relative flex flex-col lg:w-[1100px] w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table class="w-full text-left min-w-max">
          <thead className='bg-amber-100'>
            <tr>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  시간
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  내용
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  오전 8시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  인바디 체크 (수요일,퇴소날)
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  전신 스트레칭 
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  오전워킹 (4km-5km) <br /> *다양한 워킹코스*
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11시 30분
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  오전 식이요법시간 
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  오후 1시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  실내 유산소운동 <br /> (에어로빅/줌바등 )
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  을왕산 둘레길 (1시간코스 등산)
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4시30분
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  오후 식이요법 시간 
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  저녁 5시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  폼롤러운동
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  헬스장 추가 운동<br/>(클럽용런닝머신,마이마운틴로잉,싸이클 등)
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10시
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  소등 및 취침  
                </p>
              </td>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
       
          <div className='text-[13px] flex-col md:w-[1100px] w-full text-start'> 
            ** 단식원 앞 더위크 스파사우나 이용 가능 합니다.
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일요일은 프로그램이 없습니다.</div>
      
       
          <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
        <section className='flex flex-col justify-center items-center'>
          
                <div className='flex flex-col'>
            
             </div>
              <div className='mt-8' />
                <Image
                  alt="mediaItem"
                  className="object-contain"
                  width={1100}
                  height={724}
                  src={"/Image/mosaK8Ncv3.jpeg"}
                />
              <div className='mt-10' />
              <div className='flex flex-col'>
                <div className='mt-10' />
            
      
                <div className='text-[15px] lg:w-[1100px] text-center'></div>
                <div className='mt-5' />
              <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
                <div className='md:mt-5 mt-1' />
                <p>
                  1.&nbsp;여러&nbsp;사정에&nbsp;따라&nbsp;
                  <br />
                  &nbsp;&nbsp;&nbsp;프로그램이&nbsp;변경될수&nbsp;있습니다
                </p>

               <div className='md:mt-10 mt-3' />
            
                <div className='md:mt-10 mt-3' />
                    <div className='mt-10' />
               
                <div className='md:mt-5 mt-1' />
               <p>
                2.&nbsp;헬스장에서는&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;다양한&nbsp;운동&nbsp;프로그램으로&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;언제든&nbsp;운동&nbsp;하실수&nbsp;있습니다.&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;우천시에도&nbsp;운동에&nbsp;전혀&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;지장이&nbsp;없습니다.
              </p>

       
                   <div className='mt-10' />
                <div className='md:mt-10 mt-3' />
        
                    <div className='mt-10' />
                <div className='md:mt-5 mt-1' />
              <p>
                3.모든&nbsp;운동&nbsp;프로그램과&nbsp;일과는&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;개인의&nbsp;컨디션에&nbsp;따라&nbsp;&nbsp;&nbsp;
                <br />
                &nbsp;&nbsp;&nbsp;능동적으로&nbsp;참여하실수있도록
                <br />
                &nbsp;&nbsp;&nbsp;안내해&nbsp;드립니다.
                <br />
              </p>
          
                    <div className='mt-10' />
              </div>  
             
                <div className='mt-10' />
                
                <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                <div className='mt-10' />
              </div>
      
            </section>

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
