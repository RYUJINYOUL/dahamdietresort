"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"


export default function Menu(props) {
  const { push } = useRouter();
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
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
      src: "/qu",
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
    slideRight()
}, []);


const slideRight = () => {
  var slider = document.getElementById('nav');
    console.log(headerImageSrc)
  // console.log(slider.scrollWidth)
  // if (headerImageSrc === "/dastory") {
  //   slider.scroll(100, 200)
  // }
  if (headerImageSrc === "/si") {
    slider.scroll(200, 400)
  }
  if (headerImageSrc === "/qu") {
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


