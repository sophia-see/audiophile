"use client"

import React from 'react'
import useDeviceSize from '@/hooks/use-device-size';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
import Title from '@/components/ui/Title';
import Link from 'next/link';
import { toProductUrl } from '@/lib/utils';
import { motion, useScroll, useTransform } from "framer-motion";
import NewProductBadge from './ui/NewProductBadge';
// import { CategoryType, fetchProducts } from '@/lib/api';

interface ItemCardProps {
  id: number;
  title: string;
  image: ProductImageType;
  description: string;
  isNew?: boolean;
  currSize: string;
  isImageFirst?: boolean;
}

function ItemCard (props: ItemCardProps) {
  const {
    id,
    image,
    title,
    description,
    isNew = false,
    currSize,
    isImageFirst = true
  } = props;
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "0.8 1"],
  });

  // Transform animations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div
      className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between"
    >
      <motion.div
        ref={ref}
        style={{
          opacity: opacity,
          scale: scale, // Subtle scale-in
          y: translateY, // Parallax effect
        }}        
        className="relative w-full h-[352px] aspect-auto rounded-[8px] overflow-hidden lg:w-[540px] lg:h-[500px]"
      >
        <Image
          src={`${image[currSize as keyof ProductImageType].preview}`}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </motion.div>
      <div className={`${isImageFirst ? "" : "lg:order-first"} flex flex-col gap-6 items-center text-center lg:w-[345px] xl:w-[445px] lg:text-start lg:items-start`}>
        {isNew && (
          <NewProductBadge />
        )}
        <Title text={title} />
        <Paragraph text={description} />
        <Link href={toProductUrl(id, title)}>
          <Button>
              See Product
          </Button>
        </Link>
      </div>
    </div>
  )
}

interface ProductsProps {
  items: ProductType[];
}

export default function Products({items}: ProductsProps) {
  const { currSize } = useDeviceSize();
  // const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await fetchProducts(CategoryType.headphones);
  //     if (data) setProducts(data.data);

  //     console.log({ products })
  //   };
  //   getProducts();
  // }, [products]);

  return (
    <div className='mt-[64px] mx-[24px] flex flex-col gap-[120px] md:mx-[40px] md:mt-[120px] lg:mt-[160px] lg:mx-lg-custom xl:max-w-[1100px] xl:mx-auto'>
      {items.map((item, index) => (
        <ItemCard 
          key={item.title} 
          id={item.id}
          title={item.title} 
          image={item.image} 
          description={item.description} 
          isNew={item.isNew}
          currSize={currSize}
          isImageFirst={index % 2 == 0}
        />
      ))}
    </div>
  )
}
