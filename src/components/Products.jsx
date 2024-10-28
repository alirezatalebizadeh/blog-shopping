import React from "react";
import { Suspense } from "react";
import HeaderSection from "./HeaderSection";
import ProductItem from "./ProductItem";

export default async function Products({ props }) {
  //  !Fetch coffee products from the API
  const response = await fetch("https://fake-coffee-api.vercel.app/api", {
    cache: "no-store", // Optional: prevents caching if you want fresh data on each request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch coffee products");
  }

  const products = await response.json();
  // console.log("products componenet", products);

  return (
    <section className="products pt-8 md:pt-24 lg:pt-48">
      <div className="container">
        {/* <!--//! Section-Header --> */}
        <HeaderSection title="New products" subTitle="Made from coffee beans" />

        {/* //!products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-8 md:pb-20">
          {products.slice(0, 10).map((product) => (
            <Suspense fallback="Loading ..." key={product._id}>
              <ProductItem product={product} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}

// {
//   "_id": "6424335b59f9f6fdd657d2e1",
//   "id": 1,
//   "name": "Signature Blend",
//   "description": "A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.",
//   "price": 12.99,
//   "region": "Central America",
//   "weight": 500,
//   "flavor_profile": [
//       "Dark Chocolate",
//       "Black Cherry"
//   ],
//   "grind_option": [
//       "Whole Bean",
//       "Cafetiere",
//       "Filter",
//       "Espresso"
//   ],
//   "roast_level": 3,
//   "image_url": "https://iili.io/H8Y78Qt.webp"
// }
