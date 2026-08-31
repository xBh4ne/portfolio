import Image from "next/image";
import Button from "../Button";

const projects = [
	{
		name: "Aurum Studio",
		description:
			"Brand identity and landing page for a luxury interior design studio based in Milan. Built with Next.js and GSAP animations.",
		year: 2025,
		image: "https://lipsum.app/id/12/1600x900",
	},
	{
		name: "Trackly",
		description:
			"A minimalist habit tracking web app with a clean dashboard, streak system and weekly reports. Built with React, TypeScript and Supabase.",
		year: 2025,
		image: "https://lipsum.app/id/47/1600x900",
	},
	{
		name: "Folio OS",
		description:
			"An interactive portfolio concept designed as a desktop operating system, with draggable windows and a custom file explorer.",
		year: 2024,
		image: "https://lipsum.app/id/83/1600x900",
	},
	{
		name: "Mercato",
		description:
			"A fullstack e-commerce platform for local artisan food producers, featuring a custom CMS, cart system and Stripe payments.",
		year: 2024,
		image: "https://lipsum.app/id/61/1600x900",
	},
];

export default function Projects() {
	return (
		<section className="px-5 mt-80">
			<div className="container mx-auto ">
				<div className="flex flex-col gap-20">
					<div className="flex justify-between items-center ">
						<h2>Projects</h2>
						<p>
							Explore my recent web development projects, and discover how i can
							transform your vision into reality.
						</p>
					</div>

					{projects.map((project) => (
						<div key={project.name} className="flex flex-col gap-5">
							<Image
								unoptimized
								className="w-full h-150 rounded-4xl"
								height={1000}
								width={1000}
								alt="cover"
								src={project.image}
							/>
							<div className="flex justify-between items-center">
								<h3>{project.name}</h3>
								<div className="flex gap-10 items-center">
									<p>{project.description}</p>
									<p>{project.year}</p>
									<Button>Visit</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
