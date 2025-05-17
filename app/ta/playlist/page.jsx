// import { getFirestore, collection, where, doc, onSnapshot, query} from "firebase/firestore";
// import app from '../../firebase.js';
import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'
import moment from 'moment';
import PlayListCarousel4 from '@/components/PlayListCarousel4'

// import PlayListCarousel4 from '@/components/PlayListCarousel4';
// import UserIcon from "@/components/UserIcon";


const page = async (props) => {
   const timeFromNow = timestamp => moment(timestamp).format('YYYY-MM-DD');
   const name = await props.searchParams.name
   const des= await props.searchParams.des
   const date= await props.searchParams.date
   const title= await props.searchParams.title
   let url= await props.searchParams.url


     // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
       // addMessagesListener(new Map(categoryList2).get(homeCategory), reg)
    //    addMessagesListener(col, key)
    
    //    return () => {
    //    }
    //  }, [ col ])
   
   
    //  const addMessagesListener = async (col, key) => {
   
    //  const tweetsQuery = doc(db2, col, key)
    //     await onSnapshot(tweetsQuery, (doc) => { // <---- 
    //       setMessages(doc.data())
    //      });
    //  };


  return (
    <div className='relative top-8'>
   <div className='p-3.5 w-full'>
      <div className='pt-5' />
      <section className="flex gap-[50px] flex-col justify-center items-center">
        {/* <div className="relative">
 
          <PlayListCarousel4
              playlistArray={url}/>
        </div> */}
        <div className='flex flex-col lg:w-[1100px] w-full'>
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-full'>
      
          <div className='lg:text-start font-semibold text-center text-[20px]'>{title}</div>

          <div className='lg:text-end text-center text-[14px]'>{name} |  {timeFromNow(date)}</div>

       </div>
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
          <div className='text-[15px] min-h-[500px] text-start'>{des}</div>
          <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
        </div>

      </section>
       <section className='flex justify-center items-center'>
       <div className='w-[1100px] flex flex-row items-center gap-8'>
       <Image
          alt="mediaItem"
          className="object-contain"
          width={130}
          height={130}
          src={"/Image/mosap8kp6l.jpeg"}
        />  
        <div className='text-[13px]'>다함단식원입니다.</div>
        </div>
       </section>
       </div>
           <Footer />
       </div>
  )
}

export default page
