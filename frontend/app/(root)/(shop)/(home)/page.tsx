import Categories from "@/components/Categories";
import Hero from "./components/Hero";
import BackdropBlur from "@/components/ui/BackdropBlur";
import Products from "./components/Products";
import { fetchProductById } from "@/lib/api";

const FEATURED_PRODUCT_ID = 21;


export default async function Home() {
  const heroProduct = (await fetchProductById(FEATURED_PRODUCT_ID)).data[0];

  console.log({ heroProduct })

  return (
    <main className="relative">
      <BackdropBlur />
      <Hero product={heroProduct}/>
      <Categories className="pb-0 md:pb-0 lg:pb-0 md:mx-[40px] lg:mx-lg-custom"/>
      <Products />
    </main>
  )
}
