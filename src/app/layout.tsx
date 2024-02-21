import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Россия – моя страна!",
  icons: '/RSV_transparent_bg.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className=" py-[100px] max-w-[1600px] m-auto px-4">
      <NextTopLoader color="#755691" />
      <Header />
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
