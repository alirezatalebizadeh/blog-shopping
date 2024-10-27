import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "coffee shop | hotCoffee",
  description: "hotCofee is the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
