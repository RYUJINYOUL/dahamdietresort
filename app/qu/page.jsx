"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import Question from '@/components/Question'
import Footer from '@/components/Footer'
import Page from "./write/page"

const page = () => {


  return (
  <div className='relative top-8'>
    <section className='flex justify-center items-center m-4'>
    <div className="md:w-[1100px] w-full lg:mt-10 pt-3.5">
    <Tabs defaultValue="account" className="w-full">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="account">공지사항</TabsTrigger>
      <TabsTrigger value="password">공지사항 글쓰기</TabsTrigger>
    </TabsList>


    <TabsContent value="account">
        <Page />
    </TabsContent>


    <TabsContent value="password">
        <Question />
    </TabsContent>
  </Tabs>
  </div>
    </section>
    <Footer />
    </div>
  )
}

export default page
