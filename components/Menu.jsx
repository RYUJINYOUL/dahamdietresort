"use client"
import React from "react"

import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



export default function Menu(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
  const { homeCategory2, setHomeCategory2, setHeaderImageSrc2, headerImageSrc2} = useUIState2();
  let total = props
  const homeCategoryList = [
    {
      label: "다함단식하우스",
      src: "/",
    },
    {
      label: "다함시설",
      src: "/si",
    },
     {
      label: "공지사항",
      src: "/ta",
    },
    {
      label: "오시는길",
      src: "/map",
    },
  ];

 
  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory(item.label);
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
      push(item.src, {scroll: false})
    } 
  };

  useEffect(() => {
   
    if(pathname === "/") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("다함단식하우스");
    } else if (pathname === "/si") {
      setHomeCategory("다함시설");
    } else if (pathname === "/ta") {
      setHomeCategory("공지사항");
    } else if (pathname === "/map") {
      setHomeCategory("오시는길");
    } 
    else if (pathname === "/dastory") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("다함이야기");
    } else if (pathname === "/dastory/reser") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("예약및입소절차비용안내");
    } else if (pathname === "/dastory/pro") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("프로그램");
    } else if (pathname === "/dastory/jun") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("준비물안내");
    } else if (pathname === "/dastory/gyu") {
      setHomeCategory("다함단식하우스");
      setHomeCategory2("규칙안내");
    } 
    
  
    slideRight()
}, [ pathname ]);


const slideRight = () => {
  var slider = document.getElementById('nav');
  if (headerImageSrc === "/si") {
    slider.scroll(200, 400)
  }
  if (headerImageSrc === "/ta") {
    slider.scroll(300, 500)
  }
  if (headerImageSrc === "/map") {
    slider.scroll(500, 600)
  }
};
  
  return (
    <nav id="nav" className="md:m-0 ml-5 w-full+10 flex gap-3 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[55px] md:text-[16px] text-[15px] text-[#eeeeee] min-w-fit px-2 flex justify-center items-center hover:bg-gray-100",
            total.total&&"md:text-black text-white",
            item.label === homeCategory &&
              "underline underline-offset-8 md:text-[17px] text-[16px] text-white font-medium"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


