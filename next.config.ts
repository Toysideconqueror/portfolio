import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất ra trang tĩnh (thư mục `out`) để deploy lên Cloudflare Pages
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
