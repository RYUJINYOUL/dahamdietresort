"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"


export default function Menu2(props) {
  const { push } = useRouter();
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState2();
  let total = props
  const homeCategoryList = [
     {
      label: "다함단식하우스",
      src: "/",
    },
    {
      label: "다함이야기",
      src: "/dastory",
    },
    {
      label: "예약및입소절차비용안내",
      src: "/dastory/reser",
    },
    {
      label: "프로그램",
      src: "/dastory/pro",
    },
    {
      label: "준비물안내",
      src: "/dastory/jun",
    },
    {
      label: "규칙안내",
      src: "/dastory/gyu",
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
    slideRight()

}, [headerImageSrc]);





const slideRight = () => {
  var slider = document.getElementById('nav2');
  // slider.scroll(100, 400)
  // console.log(slider.offsetWidth)
  if (headerImageSrc === "/dastory/reser") {
    slider.scroll(100, 200)
  }
  if (headerImageSrc === "/dastory/pro") {
    slider.scroll(200, 400)
  }
  if (headerImageSrc === "/dastory/jun") {
    slider.scroll(300, 500)
  }
  if (headerImageSrc === "/dastory/gyu") {
    slider.scroll(500, 600)
  }
};
  
  return (
    <nav id="nav2" className="md:m-0 ml-5 w-full+10 flex gap-2 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[38px] md:px-10 md:text-[14px] text-[13px] text-white min-w-fit px-2 flex justify-center items-center border border-transparent rounded-lg hover:bg-gray-200",
            total.total&&"md:text-black text-[#aaa]",
            item.label === homeCategory &&
              "font-semibold text-black"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


