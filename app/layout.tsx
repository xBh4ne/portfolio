import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/app/components/SmoothScroller";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/app/components/sections/Header";
import ReturnToTop from "@/app/components/ReturnToTop";

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
		<html lang="en" className="scroll-smooth">
			<body className="bg-white h-auto">
				<LanguageProvider>
					<SmoothScroller
						overlay={
							<>
								<Header />
								<ReturnToTop />
							</>
						}
					>
						{children}
					</SmoothScroller>
				</LanguageProvider>
			</body>
		</html>
	);
}
