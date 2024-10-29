import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader array={["dictionary"]} title="Dictionary page" />

      <p className="dark:text-white">dictionary</p>
    </>
  );
}
