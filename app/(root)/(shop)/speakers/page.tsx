import Title from '@/components/ui/Title'
import React from 'react'
import Categories from '@/components/Categories';
import { SPEAKERS } from '@/lib/constants';
import Products from '@/components/Products';


export default function page() {
  return (
    <div>
      <div className='py-[32px] flex justify-center bg-black text-white md:py-[105px] lg:py-[98px]'>
        <Title text="Speakers" />
      </div>

      <Products items={SPEAKERS}/>

      <Categories className='pt-[120px] pb-[120px] md:mx-[40px] lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom'/>
    </div>
  )
}
