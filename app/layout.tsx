import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Jason Bini",
	description: "Portfolio",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it" className="scroll-smooth">
			<body className="bg-white h-auto">{children}</body>
		</html>
	);
}
