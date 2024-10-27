import Banner from "@/components/Banner";
import CategoryProducts from "@/components/CategoryProducts";
import CoffeeBanner from "@/components/CoffeeBanner";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Banner />
      <CategoryProducts />
      <CoffeeBanner />
      <Blog />
    </>
  );
}
