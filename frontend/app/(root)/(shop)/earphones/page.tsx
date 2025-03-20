import Title from '@/components/ui/Title'
import React from 'react'
import Products from '@/components/Products';
import dynamic from 'next/dynamic';
import { CategoryType, fetchProducts } from '@/lib/api';

const Categories = dynamic(() => import('@/components/Categories'), {
  loading: () => <div>Loading categories...</div>,
});

export default async function page() {
  const products = (await fetchProducts(CategoryType.earphones)).data as ProductType[];
  
  return (
    <div>
      <div className='py-[32px] flex justify-center bg-black text-white md:py-[105px] lg:py-[98px]'>
        <Title text="Earphones" />
      </div>

      <Products items={products}/>

      <Categories className='pt-[120px] pb-[120px] md:mx-[40px] lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom'/>
    </div>
  )
}
