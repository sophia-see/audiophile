import Categories from "@/components/Categories";
import Hero from "./components/Hero";
import BackdropBlur from "@/components/ui/BackdropBlur";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="relative">
      <BackdropBlur />
      <Hero />
      <Categories className="pb-0 md:pb-0 lg:pb-0 md:mx-[40px] lg:mx-lg-custom"/>
      <Products />
    </main>
  )
}
