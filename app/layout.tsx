import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nada Que Perder",
  description: "NQP - Nada Que Perder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider />
        <ToastProvider />

        <div className=" mx-10 my-10 md:flex">
          <Navbar />
          <div className="md:ml-[210px] w-full">{children}</div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
