"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Logo() {
	const logoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				gsap.to(logoRef.current, {
					opacity: 0,
					y: -10,
					duration: 0.3,
					ease: "power2.out",
					pointerEvents: "none",
				});
			} else {
				gsap.to(logoRef.current, {
					opacity: 1,
					y: 0,
					duration: 0.3,
					ease: "power2.out",
					pointerEvents: "auto",
				});
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={logoRef} className="flex items-center align-middle gap-4">
			<div className="w-5 h-5 bg-black rounded-full" />
			<span className="font-bebas text-3xl">Jason Bini</span>
		</div>
	);
}
