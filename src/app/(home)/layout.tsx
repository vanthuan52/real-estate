import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
