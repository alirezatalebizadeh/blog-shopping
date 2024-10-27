import Banner from "@/components/Banner";
import CategoryProducts from "@/components/CategoryProducts";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Banner />
      <CategoryProducts />
    </>
  );
}
