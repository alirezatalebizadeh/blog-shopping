import Banner from "@/components/Banner";
import CategoryProducts from "@/components/CategoryProducts";
import CoffeeBanner from "@/components/CoffeeBanner";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import BestSelling from "@/components/BestSelling";
import { Suspense } from "react";
import LoadingComponent from "@/components/LoadingComponent";

export default async function Home() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Hero />
      <Products />
      <Banner />
      <CategoryProducts />
      <BestSelling />
      <CoffeeBanner />
      <Blog />
      <ContactUs />
    </Suspense>
  );
}
