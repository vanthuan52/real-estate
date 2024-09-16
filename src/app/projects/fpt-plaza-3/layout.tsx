import type { Metadata } from "next";
import React from "react";

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
      <div style={{ background: "red", height: 60 }}>Header</div>
      {children}
    </React.Fragment>
  );
}
