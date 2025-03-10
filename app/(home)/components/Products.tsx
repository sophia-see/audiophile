"use client"

import Button from '@/components/ui/Button'
import Paragraph from '@/components/ui/Paragraph'
import Title from '@/components/ui/Title'
import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'

export default function Products() {
  const { currSize } = useDeviceSize();

  return (
    <section 
      className='py-[120px] flex flex-col gap-6 mx-6 md:py-[96px] md:mx-[40px] md:gap-8 lg:mx-lg-custom lg:py-[168px] xl:mx-auto xl:max-w-[1100px]'
    >
      {/* first item */}
      <div 
        className={`
          relative 
          py-[55px] px-[24px] 
          flex flex-col items-center gap-8 
          text-white bg-brown 
          rounded-[8px] 
          overflow-hidden
          md:pt-[52px] md:pb-[64px] md:gap-[64px] 
          lg:flex-row lg:pb-0 lg:px-[40px]
          xl-1440:px-[95px]
        `}
      >
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[558px] h-[558px] aspect-square">
          <Image
            src={"/assets/home/desktop/pattern-circles.svg"}
            alt="circles"
            width={600}
            height={600}
            className="w-[558px] h-[558px] aspect-square"
          />
        </div>
        <div className='z-10 w-[172px] h-[200px] relative md:w-[197px] md:h-[237px] lg:w-[310px] lg:h-[393px] xl-1440:w-[410px] xl-1440:h-[493px] lg:absolute lg:left-1/2 lg:-translate-x-[110%] lg:top-1/2 lg:-translate-y-1/2 xl-1440:top-[102%] xl-1440:-translate-y-full'>
          <Image
            src={"/assets/home/desktop/image-speaker-zx9.png"}
            alt='ZX9 Speaker'
            fill
            className='aspect-auto'
          />
        </div>
        <div className='z-10 flex flex-col items-center gap-6 text-center md:max-w-[349px] lg:ml-auto lg:text-start lg:items-start lg:pt-[100px] lg:pb-[90px] xl-1440:pt-[133px] xl-1440:pb-[124px]'>
          <Title variant='extra' text='ZX9 SPEAKER' />
          <Paragraph className='opacity-75' text='Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.' />
          <Button variant='black' className='mt-[40px]'>See Product</Button>
        </div>
      </div>

      {/* second item */}
      <div className='w-full h-[327px] relative rounded-[8px] overflow-hidden'>
        <div className='-z-10 absolute inset-0  rounded-[8px] overflow-hidden'>
          <Image
            src={`/assets/home/${currSize}/image-speaker-zx7.jpg`}
            alt='ZX7 Speaker'
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='px-6 flex flex-col gap-8 h-full w-full place-content-center md:px-[62px] lg:px-[95px]'>
          <Title text='ZX7 SPEAKER' />
          <Button variant='outline' className='w-fit'>See Product</Button>
        </div>
      </div>

      {/* third item */}
      <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-[11px]'>
        <div className='w-full h-[200px] rounded-[8px] overflow-hidden relative md:h-[320px]'>
          <Image
            src={`/assets/home/${currSize}/image-earphones-yx1.jpg`}
            alt='YX1 Earphones'
            fill
            className='aspect-auto'
          />
        </div>
        <div className='flex-grow-0 pl-6 flex flex-col gap-8 place-content-center w-full h-[200px] rounded-[8px] bg-gray md:pl-[41px] md:h-[320px] lg:pl-[95px]'>
          <Title text='YX1 EARPHONES' />
          <Button variant='outline' className='w-fit'>See Product</Button>
        </div>
      </div>
    </section>
  )
}
