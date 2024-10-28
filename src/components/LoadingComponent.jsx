import Image from "next/image";

export default function LoadingComponent() {
  return (
    <div className="loading-overlay">
      <Image
        src="/images/big-logo.png"
        alt="Logo"
        width={300}
        height={300}
        className="w-20 h-20 md:w-[150px] md:h-[150px]"
      />
    </div>
  );
}
