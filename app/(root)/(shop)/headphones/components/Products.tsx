"use client"

import React from 'react'
import useDeviceSize from '@/hooks/use-device-size';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import Title from '@/components/ui/Title';

const HEADPHONES = [
  {
    isNew: true,
    title: "XX99 Mark II Headphones",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: {
      base: "/assets/product-xx99-mark-two-headphones",
      preview: "/image-category-page-preview.jpg",
      full: "/image-product.jpg"
    }
  },
  {
    title: "XX99 Mark I Headphones",
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: {
      base: "/assets/product-xx99-mark-one-headphones",
      preview: "/image-category-page-preview.jpg",
      full: "/image-product.jpg"
    }
  },
  {
    title: "XX59 Headphones",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: {
      base: "/assets/product-xx59-headphones",
      preview: "/image-category-page-preview.jpg",
      full: "/image-product.jpg"
    }
  },
]

interface ImageType {
  base: string;
  preview: string;
  full: string;
}

interface ItemCardProps {
  title: string;
  image: ImageType;
  description: string;
  isNew?: boolean;
  currSize: string;
}

function ItemCard (props: ItemCardProps) {
  const {
    image,
    title,
    description,
    isNew = false,
    currSize
  } = props;

  return (
    <div className='flex flex-col gap-8 items-center'>
      <div className='relative w-full h-[352px] aspect-auto rounded-[8px] overflow-hidden'>
        <Image
          src={`${image.base}/${currSize}${image.preview}`}
          alt={title}
          fill
        />
      </div>
      <div className='flex flex-col gap-6 items-center text-center'>
        {isNew && (
          <div className='uppercase text-[14px] tracking-[10px] text-brown'>
            New Product
          </div>
        )}
        <Title text={title} />
        <Paragraph text={description} />
        <Button>See Product</Button>
      </div>
    </div>
  )
}

export default function Products() {
  const { currSize } = useDeviceSize();

  return (
    <div className='mt-[64px] mx-[24px] flex flex-col gap-[120px]'>
      {HEADPHONES.map(item => (
        <ItemCard 
          key={item.title} 
          title={item.title} 
          image={item.image} 
          description={item.description} 
          isNew={item.isNew}
          currSize={currSize}
        />
      ))}
    </div>
  )
}
