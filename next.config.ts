import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
		],
	},

	reactCompiler: true,
};

export default nextConfig;
