import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.jasonbini.dev"),
	title: "Jason Bini | Junior Fullstack Web Developer",
	description:
		"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy. Specializing in React, Next.js, TypeScript and modern web design. Available for freelance projects.",
	authors: [{ name: "Jason Bini" }],
	creator: "Jason Bini",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
		],
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Jason Bini | Junior Fullstack Web Developer",
		description:
			"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy. Specializing in React, Next.js, TypeScript and modern web design.",
		url: "https://www.jasonbini.dev",
		siteName: "Jason Bini Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Jason Bini - Fullstack Web Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Jason Bini | Junior Fullstack Web Developer",
		description:
			"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy.",
		creator: "@jasonbini",
		images: ["/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth ">
			<body className="bg-white">
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
