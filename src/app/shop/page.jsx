import React from "react";
import BestSelling from "@/components/BestSelling";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import Banner from "@/components/Banner";

export default function page() {
  return (
    <>
      <PageHeader array={["shop"]} title="Shop page" />
      <Products />
      <Banner />
      <BestSelling />
    </>
  );
}
