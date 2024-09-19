"use client";

import React from "react";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";
import { configResponsive } from "ahooks/lib";

import variables from "@/styles/_variables.module.scss";

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
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
