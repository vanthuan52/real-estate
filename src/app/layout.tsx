import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../styles/globals.scss";
import { DEFAULT_LOCALE, META_CONTENT } from "@/utils/constant";
import { configResponsive } from "ahooks";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const montserrat = localFont({
  src: "../assets/fonts/Montserrat-VariableFont_wght.ttf",
  weight: "100 900",
  variable: "--font-montserrat",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = {
  params: {};
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | null> {
  try {
    return {
      title: META_CONTENT[DEFAULT_LOCALE].title,
      description: META_CONTENT[DEFAULT_LOCALE].description,
      keywords: META_CONTENT[DEFAULT_LOCALE].keywords,
      metadataBase: META_CONTENT[DEFAULT_LOCALE].metadataBase,
      alternates: META_CONTENT[DEFAULT_LOCALE].alternates,
      openGraph: META_CONTENT[DEFAULT_LOCALE].openGraph,
      // robots: CATEGORY_META_CONTENT[locale].robots,
    };
  } catch (error: any) {
    return notFound();
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
