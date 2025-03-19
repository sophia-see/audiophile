import Title from '@/components/ui/Title'
import React from 'react'
import Products from './components/Products';
import Categories from '@/components/Categories';


export default function page() {
  return (
    <div>
      <div className='py-[32px] flex justify-center bg-black text-white'>
        <Title text="Headphones" />
      </div>

      <Products />

      <Categories className='pt-[120px] pb-[120px]'/>
    </div>
  )
}
