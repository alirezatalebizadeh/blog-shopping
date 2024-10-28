import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 bg-gray-100 flex justify-center items-center h-[100vh]">
      <Image
        className="w-30 h-30 md:w-[150px] md:h-[150px]"
        src="/images/app-logo.png"
        alt="Logo"
        width={300}
        height={300}
      />
    </div>
  );
}
