import Image from "next/image";
import PagePadding from '@/components/PagePadding';

const Footer = () => {


return (
     
    <section>
    
     <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
     </section>       
     <PagePadding>     
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
                   <span className="item_description"><a href="tel:010-3896-0696" className="_callTel">
                      010-3896-0696
                    </a></span>
                 </li>
                <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">주소 : </span>
                   <span className="item_description"> 인천광역시 중구 을왕동 741-10</span>
                 </li>
                <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">사업자정보 : </span>
                   <span className="item_description">121-20-46015</span>
                 </li>
                 <div className='mt-5'/>  
                 
                 <a href='https://m.search.naver.com/search.naver?query=%EB%8B%A4%ED%95%A8+%EB%8B%A8%EC%8B%9D%ED%95%98%EC%9A%B0%EC%8A%A4%40' target='_blank'>
                 <li className='text-[#959595] p-2 text-[13px] border-1 border-[#9d9d9d]'>
                   <span className="item_title">다함 단식하우스@ </span>
                 </li>
                 </a>
               </ul>
           </div>
         </div>
          </PagePadding> 
      <div className='mt-7'/>    
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
     </section>
 )
}

export default Footer;