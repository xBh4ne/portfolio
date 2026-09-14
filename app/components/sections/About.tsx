"use client";

import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
	const { t } = useLanguage();

	useGSAP(() => {

		const titleSplit = new SplitText("#about-title", { type: "words" });
		const subtitleSplit = new SplitText("#about-subtitle", { type: "words" });
		const descSplit = new SplitText("#about-description", { type: "lines" });

		gsap.from(titleSplit.words, {
			opacity: 0,
			x: -50,
			duration: 0.6,
			ease: "power2.out",
			stagger: 0.05,
			scrollTrigger: {
				trigger: "#about-title",
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from(subtitleSplit.words, {
			opacity: 0,
			x: 50,
			duration: 0.5,
			ease: "power2.out",
			stagger: 0.04,
			scrollTrigger: {
				trigger: "#about-subtitle",
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from(descSplit.lines, {
			opacity: 0,
			x: 50,
			duration: 0.5,
			ease: "power2.out",
			stagger: 0.08,
			scrollTrigger: {
				trigger: "#about-description",
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<section className="px-5" id="about-me">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
					<div>
						<h2 id="about-title">{t.about.title}</h2>
					</div>
					<div className="flex flex-col gap-10">
						<span
							id="about-subtitle"
							className="font-instrument text-4xl text-black"
						>
							{t.about.subtitle}
						</span>
						<p id="about-description">"{t.about.description}"</p>
					</div>
				</div>
			</div>
		</section>
	);
}
