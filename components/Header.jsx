"use client"
import React, { useEffect, useState, useRef } from 'react'
import Logo from './elements/Logo'
import Menu from '@/components/Menu'
import Navigator from './elements/Navigator'
import PagePadding from './PagePadding'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";
import Gallery from '@/components/Gallery3'




const HeaderDrawer = ({ children }) => {
  return (<Drawer direction='left'>
  <DrawerTrigger>{children}</DrawerTrigger>
  <DrawerContent className='w-[320px] h-full'>
  <nav className='w-[320px] h-full border-r-[1px] border-neutral-600 '>
        <div className='p-[24px]'><Logo total={true}/></div>
        <div className='bg-[#d6b79a] h-full'><Navigator /></div>
      </nav>
  </DrawerContent>
</Drawer>
  );
}



const Header = ({children}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();
  let slides = [
    "/Image/main.jpg"
     ,
    "/Image/main1.jpg"
     ,
    "/Image/main2.jpg"
    ,
    "/Image/main3.jpg"
     ,
     "/Image/main4.jpg"
     ,
     "/Image/main5.jpg"
   ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      // console.log("-->scrollValue", scrollValue);
      setIsScrolled(scrollValue !== 0);
    };

    headRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    }
  }, []);



  return (
    <header ref={headRef} className="overflow-y-auto w-full h-full">
      <section className="relative top-0 w-full">
        <div className='sticky top-100 w-full'><Gallery images={slides} /></div>
      </section>
   
      <section className={cn('absolute w-full top-0 left-0 flex lg:h-[55px] sm:h-[40px] z-10 items-start lg:justify-center sm:justify-between', 
        isScrolled&&"bg-white", homeCategory === "다함단식하우스"&&"lg:h-[90px] sm:h-[80px]")}>
      <div className='flex flex-col'>
      <div className='md:absolute sm:absolute lg:relative lg:w-[1100px] w-full items-center lg:justify-between sm:justify-between'>
        
          <section className='flex md:bg-white bg-[#d6b79a] flex-row items-center lg:h-[50px] sm:h-[40px]'>
              <HeaderDrawer>
                <article className='lg:hidden ml-2 sm:pr-10'>
              <GiHamburgerMenu className={"md:text-black text-white"} size={30} />
                </article>
                </HeaderDrawer>

              <article>
              <Menu total={true} />
              </article>
          </section>

      </div>    
      <hr className="h-0.5 border-t-0 hidden lg:block bg-neutral-100 opacity-100 dark:opacity-50"/>
      <div className='mt-1' />
      <div className='flex w-full items-center justify-start'>
      <div className={cn('hidden h-[0px]', homeCategory === "다함단식하우스"&&"block h-[50px]")}>
        <article className={cn("md:absolute sm:absolute lg:relative hidden top-0 left-0 lg:w-[1100px] w-full", 
          homeCategory === "다함단식하우스"&&"block")}>
              <Menu2 total={true} />
        </article>
          <hr className="my-1 border-1 bg-neutral-200 opacity-100 dark:opacity-50"/>
        </div>
        </div>
        </div>
      </section>
      
      <section>{children}</section>
 
    </header>
  )
}

export default Header
