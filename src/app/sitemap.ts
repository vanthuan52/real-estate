MAIN_DOMAIN;
import { MAIN_DOMAIN } from "@/utils/constant";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Google's limit is 50,000 URLs per sitemap
  let homePagePerLocale: any = [];
  return [
    {
      url: `${MAIN_DOMAIN}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${MAIN_DOMAIN}/project/`,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
