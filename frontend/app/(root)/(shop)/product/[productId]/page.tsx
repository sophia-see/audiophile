import BackButton from '@/components/ui/BackButton';
import { fetchProductById } from '@/lib/api';
import React from 'react'
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import ProductActionButtons from './components/ProductActionButtons';

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>
}

export default async function ProductPage({params}: ProductPageProps) {
  const productId = (await params).productId;
  const product = (await fetchProductById(parseInt(productId ?? ""))).data[0] as ProductType;

  const { title, description, image, price, isNew } = product;
  
  return (
    <div 
      className={`
        mx-[24px] md:mx-[40px] lg:mx-lg-custom xl:mx-auto 
        xl:max-w-[1100px]
        mt-[16px] mb-[120px] md:mt-[33px] lg:mt-[79px]
      `}
    >
      <BackButton />
      <div className='mt-[24px] grid grid-cols-1 gap-[32px] md:grid-cols-[281px_1fr] md:gap-[69px] md:items-center lg:mt-[56px] lg:grid-cols-[440px_1fr] xl:grid-cols-[540px_1fr] xl:gap-[125px]'>
        <ProductImage
          imageSrcs={image}
          imageAlt={title}
        />
        <div className='flex flex-col gap-8'>
          <ProductDetails 
            isNew={isNew}
            title={title}
            description={description}
            price={price}
          />
          <ProductActionButtons />
        </div>        
      </div>

    </div>
  )
}
