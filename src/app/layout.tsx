import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const inter = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Maximize Earning With Wyld",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-black">
          <div className="pb-10">
            <Navbar />
          </div>
          <div className=" bg-black  m-0 p-0">{children}</div>

          <div className="bg-black">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
