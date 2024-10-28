import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import HeaderSection from "@/components/HeaderSection";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <HeaderSection /> */}
      <Blog />
      {/* {children} */}
      <Footer />
    </>
  );
}
