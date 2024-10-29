import { Suspense } from "react";
import "./globals.css";
import LoadingComponent from "@/components/LoadingComponent";
import ClientWrapper from "./ClientWrapper";
import ClientComponent from "@/components/ClientSideProvider";

export const metadata = {
  title: "coffee shop | hotCoffee",
  description: "hotCofee is the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">
        <ClientComponent>
          <Suspense fallback={<LoadingComponent />}>
            <ClientWrapper>{children}</ClientWrapper>
          </Suspense>
        </ClientComponent>
      </body>
    </html>
  );
}
