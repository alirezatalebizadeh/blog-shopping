import React from "react";
import Blog from "@/components/Blog";
import PageHeader from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader array={["blog"]} title="Blog page" />
      <Blog />
    </>
  );
}
