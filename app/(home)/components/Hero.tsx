"use client"

import Button from '@/components/ui/Button'
import Paragraph from '@/components/ui/Paragraph'
import Title from '@/components/ui/Title'
import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  const { currSize } = useDeviceSize();

  return (
    <section className="flex justify-center lg:justify-start xl:max-w-[1100px] xl:mx-auto h-[calc(700px-90px)] md:h-[calc(729px-90px)]">
      <div className='bg-[#191919] brightness-[65%] w-full h-[700px] absolute left-0 right-0 -top-5 -z-10 md:h-[729px] md:top-0'>
        <Image
          src={`/assets/home/${currSize}/image-header.jpg`}
          alt='black headphones'
          fill
          className='object-cover object-center mix-blend-normal xl:mx-auto xl:max-w-[1440px]'
          priority
        />
      </div>
      <div 
        className={`
          my-[108px] mx-[24px] 
          text-center text-white 
          md:max-w-[379px] 
          lg:mx-0 lg:text-start lg:ml-lg-custom 
          xl:mx-0
        `}
        >
        <div className='opacity-50 text-[14px] tracking-[10px] uppercase'>New Product</div>
        <Title 
          variant='extra' text='XX99 Mark II Headphones' 
          className='mt-[16px] mb-[24px] md:mt-[24px]'
        />
        <Paragraph 
          text='Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.' 
          className='opacity-75'  
        />
        <Button className='mx-auto mt-[28px] md:mt-[40px] lg:mx-0'>See Product</Button>
      </div>
    </section>
  )
}
