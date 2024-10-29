import React from "react";
import Blog from "@/components/Blog";
import PageHeader from "@/components/PageHeader";
import Banner from "@/components/Banner";

export default function page() {
  return (
    <>
      <PageHeader array={["blog"]} title="Blog page" />
      <Banner />
      <Blog />
    </>
  );
}
