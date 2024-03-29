"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

import { Providers } from "./providers";
import Head from "@/app/head";
import Index from "@/components/WhatsAppButton";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
            <head /> will contain the components returned by the nearest parent
            head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
      <Head />

      <body className="scrolldiv dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Index />
        </Providers>
      </body>
    </html>
  );
}
