import React from "react";
import BestSelling from "@/components/BestSelling";
import PageHeader from "@/components/pageHeader";
import Products from "@/components/Products";

export default function page() {
  return (
    <div className="">
      <PageHeader array={["shop"]} title="Shop page" />
      <Products />
      <BestSelling />
    </div>
  );
}
