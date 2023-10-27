import ModalProvider from "@/providers/modal-provider";
import "./globals.css";
import type { Metadata } from "next";
import ToastProvider from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

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
      <ThemeProvider defaultTheme="light" attribute="class" />
      <ModalProvider />
      <ToastProvider />
      <body className="grainy">
        <div>{children}</div>
      </body>
    </html>
  );
}
