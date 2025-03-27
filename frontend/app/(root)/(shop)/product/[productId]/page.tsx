import BackButton from '@/components/ui/BackButton';
import { fetchProductById } from '@/lib/api';
import React from 'react'
import MainDetails from './components/MainDetails';
import dynamic from 'next/dynamic';

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>
}

const OtherDetails = dynamic(() => import("./components/OtherDetails"), {
  loading: () => <div>Loading</div>
})

const ProductGallery = dynamic(() => import("./components/ProductGallery"), {
  loading: () => <div>Loading</div>
})

const Suggestions = dynamic(() => import("./components/Suggestions"), {
  loading: () => <div>Loading</div>
})

export default async function ProductPage({params}: ProductPageProps) {
  const productId = (await params).productId;
  const product = (await fetchProductById(parseInt(productId ?? ""))).data[0] as ProductType;

  const { title, description, image, price, isNew, features, inclusions } = product;
  
  return (
    <div 
      className={`
        mx-[24px] md:mx-[40px] lg:mx-lg-custom xl:mx-auto 
        xl:max-w-[1100px]
        mt-[16px] mb-[120px] md:mt-[33px] lg:mt-[79px]
      `}
    >
      <BackButton />
      <MainDetails 
        isNew={isNew}
        title={title}
        description={description}
        price={price}
        image={image}
      />
      <OtherDetails features={features} inclusions={inclusions} />
      <ProductGallery image={image}/>
      <Suggestions />
    </div>
  )
}
