"use client";

import Image from "next/image";
import Button from "../Button";
import { useLanguage } from "@/context/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	const { t } = useLanguage();

	useGSAP(() => {
		// 👇 un ScrollTrigger separato per ogni card
		gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
			gsap.from(card, {
				opacity: 0,
				x: -500,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: card,
					start: "top 50%",
					toggleActions: "play none none reverse",
				},
			});
		});

		gsap.from("#title", {
			opacity: 0,
			x: -100,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: "#Projects",
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from("#desc", {
			opacity: 0,
			x: 100,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: "#Projects",
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<section className="px-5 mt-80" id="Projects">
			<div className="container mx-auto">
				<div className="flex flex-col gap-20">
					<div className="flex justify-between items-center max-md:flex-wrap gap-5">
						<h2 id="title">{t.projects.title}</h2>
						<p id="desc">{t.projects.description}</p>
					</div>

					{t.projects.items.map((project) => (
						<div
							key={project.name}
							className="project-card flex flex-col gap-5 max-md:border-b max-md:pb-5 border-gray-300" // 👈 classe invece di id
						>
							<Image
								unoptimized
								className="w-full h-[70vh] object-cover object-top border border-gray-300 rounded-4xl max-md:rounded-2xl overflow-clip max-md:h-50"
								height={1000}
								width={1000}
								alt={project.name}
								src={project.image}
							/>

							<div className="flex justify-between items-start gap-10 max-md:gap-5 max-md:flex-wrap w-full">
								<div className="flex flex-col">
									<h3 className="text-nowrap">{project.name}</h3>
									<p>{project.year}</p>
								</div>
								<div className="flex gap-10 items-center max-md:flex-wrap max-md:gap-5">
									<p>{project.description}</p>
									<div>
										{project.url ? (
											<a
												rel="noopener noreferrer"
												target="_blank"
												href={project.url}
											>
												<Button external>{t.projects.buttons.visit}</Button>
											</a>
										) : (
											<Button
												disabled
												addClass="disabled:opacity-70 disabled:cursor-not-allowed! hover:bg-black! hover:text-white!"
											>
												{t.projects.buttons.offline}
											</Button>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
