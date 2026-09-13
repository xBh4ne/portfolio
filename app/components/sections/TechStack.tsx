"use client";

import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
	const { t } = useLanguage();

	useGSAP(() => {
		gsap.from(".tech-stack", {
			opacity: 0,
			y: 50,
			duration: 0.8,
			ease: "power2.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: "#Features",
				start: "top 30%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<section className="my-80 px-5" id="Tech Stack">
			<div className="container mx-auto ">
				<div className="flex flex-col gap-10 ">
					<div className="flex justify-between items-center flex-wrap">
						<h3 className="tech-stack">Tech Stack</h3>
						<p className="tech-stack">{t.techStack.description}</p>
					</div>
					<div className="grid grid-cols-4  w-full max-md:grid-cols-2">
						{t.techStack.stacks.map((stack) => (
							<div
								key={stack}
								className="tech-stack flex justify-start max-md:justify-center items-center w-full p-10 border-l max-md:border-none border-gray-300 gap-3 flex-wrap"
							>
								<Image
									className="h-20 w-20"
									unoptimized
									width={1000}
									height={1000}
									alt={stack}
									src={`https://skillicons.dev/icons?i=${stack}`}
								/>
								<span className="text-3xl font-bebas text-gray ">{stack}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
