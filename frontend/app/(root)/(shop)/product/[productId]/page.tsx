import BackButton from '@/components/ui/BackButton';
import { fetchProductById, fetchRandomProductsExceptId } from '@/lib/api';
import React, { Suspense } from 'react';
import MainDetails from './components/MainDetails';
import dynamic from 'next/dynamic';
import Categories from '@/components/Categories';

const OtherDetails = dynamic(() => import("./components/OtherDetails"), {
  loading: () => <div>Loading</div>,
});

const ProductGallery = dynamic(() => import("./components/ProductGallery"), {
  loading: () => <div>Loading</div>,
});

const Suggestions = dynamic(() => import("./components/Suggestions"), {
  loading: () => <div>Loading</div>,
});

interface ProductPageProps {
  params: { productId: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.productId);

  if (isNaN(productId)) {
    return <div>Product not found</div>;
  }

  const [productRes, suggestedProductsRes] = await Promise.all([
    fetchProductById(productId),
    fetchRandomProductsExceptId(productId)
  ]);

  if (!productRes?.data?.length) {
    return <div>Product not found</div>;
  }

  const product = productRes.data[0] as ProductType;
  const suggestedProducts = suggestedProductsRes as ProductType[];
  

  return (
    <div
      className={`
        mx-[24px] md:mx-[40px] lg:mx-lg-custom xl:mx-auto 
        xl:max-w-[1100px]
        mt-[16px] md:mt-[33px] lg:mt-[79px]
      `}
    >
      <BackButton />
      <MainDetails 
        isNew={product.isNew}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <OtherDetails features={product.features} inclusions={product.inclusions} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGallery image={product.image} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Suggestions products={suggestedProducts} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories className='pt-[120px] pb-[120px] !mx-0 lg:pt-[160px] lg:pb-[160px] lg:mx-lg-custom' />
      </Suspense>
    </div>
  );
}
