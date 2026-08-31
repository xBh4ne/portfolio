import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
			{
				protocol: "https",
				hostname: "lipsum.app",
			},
		],
	},

	reactCompiler: true,
};

export default nextConfig;
