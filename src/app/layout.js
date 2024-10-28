import "./globals.css";


export const metadata = {
  title: "coffee shop | hotCoffee",
  description: "hotCofee is the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">{children}</body>
    </html>
  );
}
