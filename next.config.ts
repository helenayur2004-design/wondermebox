import type { NextConfig } from "next";

const isTimewebBuild = process.env.TIMEWEB_STATIC === "1";

const nextConfig: NextConfig = {
  output: isTimewebBuild ? "export" : undefined,
  trailingSlash: isTimewebBuild,
};

export default nextConfig;
