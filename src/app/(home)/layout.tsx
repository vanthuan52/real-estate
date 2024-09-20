import React from "react";
import MainFooter from "@/components/MainFooter/MainFooter";
import { configResponsive } from "ahooks/lib";
import variables from "@/styles/_variables.module.scss";
import "./layout.scss";
import dynamic from "next/dynamic";
import MainHeader from "@/components/MainHeader/MainHeader";

configResponsive({
  sm: parseInt(variables.breakpointSM),
  md: parseInt(variables.breakpointMD),
  lg: parseInt(variables.breakpointLG),
  xl: parseInt(variables.breakpointXL),
  "2xl": parseInt(variables.breakpoint2XL),
});

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
