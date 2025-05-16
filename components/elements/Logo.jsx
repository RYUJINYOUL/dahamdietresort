"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";

function Logo(props) {
    const { push } = useRouter();
    let total = props
    const onClickLogo = () =>{
        push("/", {scroll: false});
    }


  return (
    <section className='items-center'>
        {/* <div className="lg:hidden">
        <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
        />
        </div> */}
        <div className='cursor-pointer flex flex-row items-center' onClick={onClickLogo} >
            <Image className='rounded-4xl border-1 border-[#cdad8f] mr-3 lg:w-[30px] lg:h-[30px] w-[30px] h-[30px]' alt='logo' width={60} height={60} src={"/Image/logo.jpg"} />
            <div className={cn('font-semibold md:text-[22px] text-[18px] text-[#cdad8f] cursor-pointer', total.total&&"text-[#cdad8f]")} onClick={onClickLogo}>다함단식하우스</div>
        </div>
       
    </section>
  )
}

export default Logo
