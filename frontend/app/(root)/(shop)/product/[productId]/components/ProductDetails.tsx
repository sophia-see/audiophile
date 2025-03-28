"use client"

import dynamic from 'next/dynamic';
import React from 'react'
import MainDetails from './MainDetails';
import OtherDetails from './OtherDetails';
import { useProductById } from '@/hooks/useProducts';

interface ProductDetailsProps {
  id: number; 
  initialData: ProductType;
}


const ProductGallery = dynamic(() => import("./ProductGallery"), {
  loading: () => <div>Loading Gallery...</div>,
});

export default function ProductDetails({ id, initialData }: ProductDetailsProps) {
  const { data, isLoading } = useProductById(id, initialData);

  
  if (isLoading)
    return <div>Loading...</div>
  
  if (!data) {
    return <div>Product not found</div>;
  }
  
  const product = data[0];

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
