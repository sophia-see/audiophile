import { fetchProductById } from '@/lib/api';
import dynamic from 'next/dynamic';
import React from 'react'
import MainDetails from './MainDetails';
import OtherDetails from './OtherDetails';

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}


const ProductGallery = dynamic(() => import("./ProductGallery"), {
  loading: () => <div>Loading Gallery...</div>,
});

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const productId = parseInt((await params).productId);
  
  if (isNaN(productId)) {
    return <div>Product not found</div>;
  }

  const productRes = await fetchProductById(productId);

  if (!productRes?.data?.length) {
    return <div>Product not found</div>;
  }

  const product = productRes.data[0] as ProductType;

  return (
    <>
      <MainDetails 
        isNew={product.isNew}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
      />
      <OtherDetails features={product.features} inclusions={product.inclusions} />
      <ProductGallery image={product.image} />
    </>
  );
}
