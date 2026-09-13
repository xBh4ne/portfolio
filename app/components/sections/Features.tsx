"use client";

import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
	const { t } = useLanguage();

	useGSAP(() => {
		gsap.from(".feature-card", {
			opacity: 0,
			y: 50,
			duration: 0.8,
			ease: "power2.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: "#Features",
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<section className="my-20 px-5" id="Features">
			<div className="container mx-auto">
				<div className="flex justify-between items-start gap-10 max-md:flex-wrap with-separator">
					{t.features.map((column) => (
						<div
							key={column.description}
							className="feature-card flex flex-col h-auto gap-5"
						>
							<h6>{column.title}</h6>
							<p className="subtitle">{column.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
