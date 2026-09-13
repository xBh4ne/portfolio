"use client";

import { useState, useEffect } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		setIsScrolled(window.scrollY > 0);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useGSAP(() => {
		gsap.from("header", {
			opacity: 0,
			y: -100,
			duration: 1,
			delay: 1.5,
			ease: "bounce.out",
		});
	});

	return (
		<header className="flex w-full bg-transparent py-10 max-md:py-3 fixed top-0 px-5 z-10 pointer-events-none">
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
