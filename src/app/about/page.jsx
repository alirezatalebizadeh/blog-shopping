import Banner from "@/components/Banner";
import CoffeeBanner from "@/components/CoffeeBanner";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader array={["about"]} title="About page" />

      <Banner />
      <CoffeeBanner />
    </>
  );
}
