import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/projects",
  //   async redirects() {
  //     return [
  //       {
  //         source: "/",
  //         destination: "/projects",
  //         basePath: false,
  //         permanent: false,
  //       },
  //     ];
  //   },
  //   images: {
  //     domains: ["img.youtube.com"]
  //   },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
