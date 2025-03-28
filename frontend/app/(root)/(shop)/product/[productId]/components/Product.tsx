import { fetchProductById } from '@/lib/api';
import React from 'react'
import ProductDetails from './ProductDetails';

interface ProductProps {
  params: Promise<{ productId: string }>;
}

export default async function Product({ params }: ProductProps) {
  const productId = parseInt((await params).productId);
  
  if (isNaN(productId)) {
    return <div>Product not found</div>;
  }

  const productRes = await fetchProductById(productId);

  if (!productRes?.length) {
    return <div>Product not found</div>;
  }

  const product = productRes as ProductType;

  return (
    <ProductDetails id={productId} initialData={product} />
  );
}
