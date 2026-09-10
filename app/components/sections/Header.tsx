"use client";

import { useState, useEffect } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";


export default function Header() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		// Controlla subito al mount (es. reload con pagina già scrollata)
		setIsScrolled(window.scrollY > 0);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="flex w-full bg-transparent py-10 max-md:py-3 sticky top-0 px-5 z-10 pointer-events-none">
			<div className="container mx-auto">
				<nav className="flex justify-between w-full">
					<Logo isScrolled={isScrolled} />
					<ul className="flex font-instrument text-xl text-black gap-8 items-center">
						<Navigation isScrolled={isScrolled} />
					</ul>
				</nav>
			</div>
		</header>
	);
}
