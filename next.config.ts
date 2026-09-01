import type { NextConfig } from "next";

module.exports = {
	allowedDevOrigins: ["192.168.1.82"],
};

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
