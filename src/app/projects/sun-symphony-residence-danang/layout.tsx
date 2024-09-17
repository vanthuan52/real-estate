import type { Metadata, ResolvingMetadata } from "next";
import Header from "@/components/Header/Header";
import { DEFAULT_LOCALE, META_CONTENT_SUN_SYMPHONY } from "@/utils/constant";

export const metadata: Metadata = {
  title: "Sun Symphony Residenc Da Nang",
  description: "Sun Symphony Residenc Da Nang",
};

// type Props = {
//   params: {};
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: META_CONTENT_SUN_SYMPHONY[DEFAULT_LOCALE].title,
//     description: META_CONTENT_SUN_SYMPHONY[DEFAULT_LOCALE].description,
//     keywords: META_CONTENT_SUN_SYMPHONY[DEFAULT_LOCALE].keywords,
//     alternates: META_CONTENT_SUN_SYMPHONY[DEFAULT_LOCALE].alternates,
//     openGraph: META_CONTENT_SUN_SYMPHONY[DEFAULT_LOCALE].openGraph,
//   };
// }

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
