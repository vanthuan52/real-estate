import Footer from "@/components/FptPlaza3/Footer/Footer";
import Header from "@/components/FptPlaza3/Header/Header";
import type { Metadata } from "next";
import React from "react";

import "./page.scss";

export const metadata: Metadata = {
  title: "FPT Plaza 3",
  description: "FPT Plaza 3",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
