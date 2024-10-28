import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import LoadingComponent from "@/components/LoadingComponent";
import Navbar from "@/components/Navbar";

export default function layout({ children }) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Navbar />
      {children}
      <Footer />
    </Suspense>
  );
}
