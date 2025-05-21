"use client"
import React from "react"
// import Link from "next/link"
import { useEffect } from 'react'
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



export default function Menu2(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory2, setHomeCategory2, setHeaderImageSrc2, headerImageSrc2} = useUIState2();
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
    if (homeCategory2 === item.label) {
      setHeaderImageSrc2("");
      setHomeCategory2(item.label);
    } else {
      setHeaderImageSrc2(item.src);
      setHomeCategory2(item.label);
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
    slideRight()

}, [pathname]);





const slideRight = () => {
  var slider = document.getElementById('nav2');
  if (pathname === "/dastory") {
    slider.scroll(50, 100)
  }
  if (pathname === "/dastory/reser") {
    slider.scroll(100, 200)
  }
  if (pathname === "/dastory/pro") {
    slider.scroll(200, 400)
  }
  if (pathname === "/dastory/jun") {
    slider.scroll(300, 500)
  }
  if (pathname === "/dastory/gyu") {
    slider.scroll(500, 600)
  }
};
  
  return (
    <nav id="nav2" className="md:m-0 md:px-60 ml-5 w-full+10 flex gap-2 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[38px] md:text-[15px] text-[14px] text-white min-w-fit px-2 pt-2 flex justify-center items-center",
            total.total&&"md:text-black text-[#aaa]",
            item.label === homeCategory2 &&
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


