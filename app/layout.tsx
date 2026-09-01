import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Jason Bini | Junior Fullstack Web Developer",
	description:
		"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy. Specializing in React, Next.js, TypeScript and modern web design. Available for freelance projects.",
	keywords: [
		// English
		"Jason Bini",
		"Fullstack Developer",
		"Junior Developer",
		"Web Developer Italy",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Frontend Developer",
		"Backend Developer",
		"UI Design",
		"Web Design",
		"Freelance Developer",
		"Portfolio",
		// Italiano
		"Sviluppatore Web",
		"Sviluppatore Fullstack",
		"Sviluppatore Junior",
		"Sviluppatore React",
		"Sviluppatore Italia",
		"Sviluppatore Freelance",
		"Siti Web",
		"Progettazione Web",
		"Portfolio Sviluppatore",
	],
	authors: [{ name: "Jason Bini" }],
	creator: "Jason Bini",
	icons: {
		icon: "/favicon.svg",
	},
	openGraph: {
		title: "Jason Bini | Junior Fullstack Web Developer",
		description:
			"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy. Specializing in React, Next.js, TypeScript and modern web design.",
		url: "https://www.jasonbini.dev",
		siteName: "Jason Bini Portfolio",
		locale: "en_US",
		alternateLocale: "it_IT",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jason Bini | Junior Fullstack Web Developer",
		description:
			"Portfolio of Jason Bini, a Junior Fullstack Web Developer based in Italy.",
		creator: "@jasonbini",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it" className="scroll-smooth">
			<body className="bg-white h-auto ">
				{children}
			</body>
		</html>
	);
}
