"use client"

import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import { ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";
import { redirect } from 'next/navigation'

const CATEGORIES = [
  {
    name: "Headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    path: "/headphones"
  },
  {
    name: "Speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    path: "/speakers"
  },
  {
    name: "Earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    path: "/earphones"
  },
]

export default function Categories() {
  return (
    <section className='my-[96px] flex flex-col gap-[68px] mx-4 md:flex-row md:gap-[10px] xl:max-w-[1100px] xl:mx-auto'>
      {CATEGORIES.map(({ name, image, path }) => (
        <div
          key={name}
          className={`
            w-full relative cursor-pointer 
            pt-[52px]
          `}
          onClick={() => redirect(path)}
        >
          <div className='absolute top-0 left-1/2 -translate-x-1/2'>
            <motion.div 
              className="w-[150px] h-[150px] origin-bottom"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image 
                src={image} 
                alt={name} 
                fill
                className="object-contain"
                loading='lazy'
              />
            </motion.div>
          </div>
          <div className='bg-gray rounded-[8px] flex flex-col items-center pb-[22px]'>
            <div className="mt-[88px] flex flex-col">
              <div className="font-bold text-[15px] tracking-[1.07px] uppercase text-center">{name}</div>
              <Button variant="ghost" icon={ChevronRight} className=''>Shop</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
