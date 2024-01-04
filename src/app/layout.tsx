import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Blog App",
  description: "Blog Application created using NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0b21]`}>
        <div className="m-auto flex min-h-[100vh] min-w-[300px] max-w-7xl flex-col justify-between p-4">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
