"use client"

import React from 'react'
import useDeviceSize from '@/hooks/use-device-size';
import ItemCard from './ItemCard';

interface ProductsProps {
  items: ProductType[];
}

export default function Products({items}: ProductsProps) {
  const { currSize } = useDeviceSize();
  
  return (
    <div className='mt-[64px] mx-[24px] flex flex-col gap-[120px] md:mx-[40px] md:mt-[120px] lg:mt-[160px] lg:mx-lg-custom xl:max-w-[1100px] xl:mx-auto'>
      {items.map((item, index) => (
        <ItemCard 
          key={item.title} 
          id={item.id}
          title={item.title} 
          image={item.image} 
          description={item.description} 
          isNew={item.isNew}
          currSize={currSize}
          isImageFirst={index % 2 == 0}
        />
      ))}
    </div>
  )
}
