import Image from "next/image";
import Button from "../Button";
import { url } from "node:inspector/promises";

const projects = [
	{
		name: "Sarnano Comix",
		description:
			"An event website for a local comic and pop-culture festival at Sarnano, featuring the program, guests, and all the practical info visitors need.",
		year: 2023,
		image: "/images/projects/sarnanocomix.png",
		url: "https://www.sarnanocomix.it",
	},
	{
		name: "Ostudio",
		description:
			"A clean, elegant website for an architecture studio based in Venice, showcasing its projects, approach, and studio identity.",
		year: 2024,
		image: "/images/projects/ostudio.png",
		url: "https://www.ostudio.it",
	},
	{
		name: "Hoverbox",
		description:
			"A one-page landing site for a small two-person web design service offering simple, fixed-price websites to clients without the overhead of a registered business.",
		year: 2022,
		image: "/images/projects/hoverbox.png",
		url: "",
	},
	{
		name: "Recap",
		description:
			'A high-school computer science project exploring the idea of "burying" digital time capsules by archiving your memories online instead of in the ground.',
		year: 2020,
		image: "/images/projects/recap.png",
		url: "",
	},
];

export default function Projects() {
	return (
		<section className="px-5 mt-80" id="Projects">
			<div className="container mx-auto ">
				<div className="flex flex-col gap-20">
					<div className="flex justify-between items-center max-md:flex-wrap gap-5">
						<h2>Projects</h2>
						<p>
							Explore my recent web development projects, and discover how i can
							transform your vision into reality.
						</p>
					</div>

					{projects.map((project) => (
						<div
							key={project.name}
							className="flex flex-col gap-5 max-md:border-b max-md:pb-5 border-gray-300"
						>
							<Image
								unoptimized
								className="w-full h-180  object-cover object-top border border-gray-300 rounded-4xl max-md:rounded-2xl overflow-clip max-md:h-50"
								height={1000}
								width={1000}
								alt={project.name}
								src={project.image}
							/>

							<div className="flex justify-between items-center gap-10 max-md:gap-5 max-md:flex-wrap w-full">
								<h3>{project.name}</h3>
								<div className="flex gap-10 items-center   max-md:flex-wrap max-md:gap-5">
									<p>{project.description}</p>

									<div className="flex w-auto max-md:justify-between max-md:w-full justify-end items-center gap-10 max-md:gap-5">
										<p>{project.year}</p>

										{project.url ? (
											<a
												rel="noopener noreferrer"
												target="_blank"
												href={project.url}
											>
												<Button external>Visit</Button>
											</a>
										) : (
											<Button
												disabled
												addClass=" disabled:opacity-70 disabled:cursor-not-allowed! hover:bg-black! hover:text-white!"
											>
												Offline
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
