import { Metadata } from "next";
export const NODE_ENV = process.env.NODE_ENV || "development";
export const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:5001/api/v1";
export const SERVER_DOMAIN =
  process.env.NEXT_PUBLIC_SERVER_DOMAIN || "http://localhost:5001";
export const MAIN_DOMAIN =
  process.env.NEXT_PUBLIC_MAIN_DOMAIN || "http://localhost:3002";
export const SERVER_PROTOCOL =
  process.env.NEXT_PUBLIC_SERVER_PROTOCOL || "http";
export const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST || "localhost";
export const SERVER_PORT = parseInt(
  process.env.NEXT_PUBLIC_SERVER_PORT || "5001"
);

export const openGraphImages = [{ url: "/opengraph-image.png" }];

export const DEFAULT_LOCALE = "vi";
export type MetaContent = {
  vi: Metadata;
  en: Metadata;
};

export const META_CONTENT: any = {
  vi: {
    title: "Danang Real Estate",
    keywords: "Danang Real Estate",
    description: "Danang Real Estate",
    metadataBase: new URL(MAIN_DOMAIN),
    openGraph: {
      type: "website",
      url: `${MAIN_DOMAIN}/`,
      title: "Danang Real Estate",
      description: "Danang Real Estate",
      siteName: "Danang Real Estate",
      images: openGraphImages,
    },
  },
};

export const META_CONTENT_SUN_SYMPHONY: any = {
  vi: {
    title: "Sun symphony",
    keywords: "Sun symphony",
    description: "Sun symphony",
    metadataBase: new URL(MAIN_DOMAIN),
    openGraph: {
      type: "website",
      url: `${MAIN_DOMAIN}/`,
      title: "Sun symphony",
      description: "Sun symphony",
      siteName: "Sun symphony",
      images: openGraphImages,
    },
  },
};

export const META_CONTENT_FPT_PLAZA: any = {
  vi: {
    title: "FPT Plaza 3",
    keywords: "FPT Plaza 3",
    description: "FPT Plaza 3",
    metadataBase: new URL(MAIN_DOMAIN),
    openGraph: {
      type: "website",
      url: `${MAIN_DOMAIN}/`,
      title: "FPT Plaza 3",
      description: "FPT Plaza 3",
      siteName: "FPT Plaza 3",
      images: openGraphImages,
    },
  },
};
