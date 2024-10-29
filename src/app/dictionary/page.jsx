import Banner from "@/components/Banner";
import CategoryProducts from "@/components/CategoryProducts";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader array={["dictionary"]} title="Dictionary page" />
      <CategoryProducts />
      <Banner />
    </>
  );
}
