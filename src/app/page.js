import Banner from "@/components/Banner";
import CategoryProducts from "@/components/CategoryProducts";
import CoffeeBanner from "@/components/CoffeeBanner";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import BestSelling from "@/components/BestSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Banner />
      <CategoryProducts />
      <BestSelling />
      <CoffeeBanner />
      <Blog />
      <ContactUs />
    </>
  );
}
