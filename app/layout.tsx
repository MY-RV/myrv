import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from '@next/font/google';

import "./globals.css";

import CustomCursorShadow  from './components/customCursor/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "MY-RV",
  description: "MYRV Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={'./favicon.ico'} />
      </Head>
      <body className={`bg-[#09100c]  ${inter.className} mx-auto max-w-screen-xl  font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 scroll-hidden`}>
        <CustomCursorShadow />
        {children}
      </body>
    </html>
  );
}
