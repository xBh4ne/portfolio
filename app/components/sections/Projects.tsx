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
		gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 200 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					delay: index * 0.2,
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						toggleActions: "restart none none reverse", // ✅
					},
				},
			);
		});

		gsap.fromTo(
			"#title",
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: "#projects",
					start: "top 80%",
					toggleActions: "restart none none reverse",
				},
			},
		);

		gsap.fromTo(
			"#desc",
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: "#projects",
					start: "top 80%",
					toggleActions: "restart none none reverse",
				},
			},
		);
	});

	return (
		<section className="px-5 mt-80 overflow-clip!" id="projects">
			<div className="container mx-auto ">
				<div className="flex flex-col gap-20">
					<div className="flex justify-between items-center max-md:flex-wrap gap-5">
						<h2 id="title">{t.projects.title}</h2>
						<p id="desc">{t.projects.description}</p>
					</div>

					<div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 ">
						{t.projects.items.map((project) => (
							<div
								key={project.name}
								className="project-card flex flex-col gap-5 max-md:border-b max-md:pb-5 border-gray-300"
							>
								<Image
									unoptimized
									className=" aspect-video object-cover object-top border border-gray-300 rounded-4xl max-md:rounded-2xl overflow-clip max-md:h-50"
									height={1000}
									width={1000}
									alt={project.name}
									src={project.image}
								/>

								<div className="flex flex-col justify-between items-start gap-5  max-md:flex-wrap w-full">
									<div className="flex flex-col">
										<h3 className="text-nowrap">{project.name}</h3>
										<p>{project.year}</p>
									</div>
									<div className="flex flex-col gap-5 items-start max-md:flex-wrap ">
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
			</div>
		</section>
	);
}
