import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import Features from "./components/sections/Features";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import ContactMe from "./components/sections/ContactMe";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Jason Bini",
	url: "https://www.jasonbini.dev",
	image: "https://www.jasonbini.dev/opengraph-image.png",
	jobTitle: "Junior Fullstack Web Developer",
	description: "Portfolio of Jason Bini...",
	sameAs: [
		"https://github.com/xBh4ne",
		"https://linkedin.com/in/jasonbini",
		"https://twitter.com/jasonbini",
	],
	knowsAbout: [
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"Web Development",
		"UI Design",
	],
	address: {
		"@type": "PostalAddress",
		addressCountry: "IT",
	},
};

export default function Home() {
	return (
		<>
			<script
				id="json-ld-person"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<Hero />
			<Features />
			<TechStack />
			<About />
			<Projects />
			<ContactMe />
			<Footer />
		</>
	);
}
