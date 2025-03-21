"use client"

import NewProductBadge from '@/components/ui/NewProductBadge';
import Paragraph from '@/components/ui/Paragraph';
import Title from '@/components/ui/Title';
import React from 'react'

interface ProductDetailsProps {
  isNew?: boolean;
  title: string;
  description: string;
  price: number;
}

export default function ProductDetails(props: ProductDetailsProps) {
  const {
    isNew = false,
    title,
    description,
    price
  } = props;

  return (
    <div className='flex flex-col gap-6 md:gap-[17px]'>
      {isNew && <NewProductBadge />}
      <div className='flex flex-col gap-6'>
        <Title text={title} />
        <Paragraph text={description} />
        <div className='font-bold text-[18px] tracking-[1.29px]'>$ {price.toLocaleString()}</div>
      </div>
    </div>
  )
}
