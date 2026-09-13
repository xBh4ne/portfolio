"use client";

import React from "react";
import JasonBiniLogo from "../JasonBiniLogo";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
	const { t } = useLanguage();

	useGSAP(() => {
		gsap.from("#footer-logo", {
			opacity: 0,
			y: 60,
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#footer-logo",
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from("#footer-copyright", {
			opacity: 0,
			y: 20,
			duration: 0.6,
			ease: "power2.out",
			delay: 0.3,
			scrollTrigger: {
				trigger: "#footer-copyright",
				start: "top 100%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<footer className="px-5 h-auto mt-50 mb-5">
			<div className="container mx-auto">
				<div className="w-full h-full flex flex-col justify-center items-center gap-0">
					<JasonBiniLogo
						id="footer-logo"
						className="w-full h-full text-black opacity-20"
					/>
					<span
						id="footer-copyright"
						className="opacity-20 font-instrument text-black text-xl mb-5"
					>
						{t.footer.copyright}
					</span>
				</div>
			</div>
		</footer>
	);
}
