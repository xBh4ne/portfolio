import Image from "next/image";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import Features from "./components/sections/Features";
import TechStack from "./components/sections/TechStack";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Features />
			<TechStack />
			<Footer />
		</>
	);
}
