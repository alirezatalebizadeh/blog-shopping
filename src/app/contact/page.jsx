import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <div className="container my-5">
      <PageHeader array={["contact"]} title="Contact page" />
      <Banner />
      <ContactUs />
    </div>
  );
}
