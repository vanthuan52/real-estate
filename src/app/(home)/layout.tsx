import React from "react";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";

import "./layout.scss";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100VH" }}>
      <MainHeader />
      <div style={{ flex: 1 }}>{children}</div>
      <MainFooter />
    </div>
  );
}
