"use client";

import Button from "./Button";
import { ArrowBigUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ReturnToTop() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const buttonRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		setIsScrolled(window.scrollY > 0);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	
	useEffect(() => {
		if (!buttonRef.current) return;

		if (isScrolled) {
			
			gsap.fromTo(
				buttonRef.current,
				{ y: 80, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
			);
		} else {
			
			gsap.to(buttonRef.current, {
				y: 80,
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
			});
		}
	}, [isScrolled]);

	return (
		<a
			ref={buttonRef}
			href="#"
			className="fixed bottom-10 right-10 opacity-0 pointer-events-none max-md:bottom-4 max-md:right-4"
			style={{ pointerEvents: isScrolled ? "auto" : "none" }}
		>
			<Button addClass="px-4! py-8">
				<ArrowBigUp />
			</Button>
		</a>
	);
}
