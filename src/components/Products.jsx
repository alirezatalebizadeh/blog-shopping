import React from "react";
import HeaderSection from "./HeaderSection";
import ProductItem from "./ProductItem";

export default function Products({ props }) {
  return (
    <section className="products pt-8 md:pt-24 lg:pt-48">
      <div className="container">
        {/* <!--//! Section-Header --> */}
        <HeaderSection title="New products" subTitle="Made from coffee beans" />

        {/* //!products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-8 md:pb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
