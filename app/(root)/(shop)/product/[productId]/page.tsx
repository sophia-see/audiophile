import React from 'react'

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>
}

export default async function ProductPage({params}: ProductPageProps) {
  const productId = (await params).productId;
  
  return (
    <div>
      ProductID : {productId}
    </div>
  )
}
