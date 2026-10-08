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
		const animations = [
			{
				selector: "#about-title",
				type: "words",
				stagger: 0.05,
				x: -50,
				duration: 0.6,
				triggerId: "about-title",
			},
			{
				selector: "#about-subtitle",
				type: "words",
				stagger: 0.04,
				x: 50,
				duration: 0.5,
				triggerId: "about-subtitle",
			},
			{
				selector: "#about-description",
				type: "lines",
				stagger: 0.08,
				x: 50,
				duration: 0.5,
				triggerId: "about-description",
			},
		];

		animations.forEach(
			({ selector, type, stagger, x, duration, triggerId }) => {
				const splitElement = new SplitText(selector, { type });

				gsap.from(splitElement[type === "words" ? "words" : "lines"], {
					opacity: 0,
					x: x,
					duration: duration,
					ease: "power2.out",
					stagger: stagger,
					scrollTrigger: {
						trigger: `#${triggerId}`,
						start: "top 60%",
						toggleActions: "play none none reverse",
					},
				});
			},
		);
	}, []);

	return (
		<section className="px-5" id="about-me">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 items-start">
					<div className="md:sticky top-20 overflow-hidden">
						<h2 id="about-title">{t.about.title}</h2>
					</div>

					<div className="flex flex-col gap-10 overflow-hidden">
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
