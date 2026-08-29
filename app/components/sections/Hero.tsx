import Image from "next/image";
import Button from "../Button";
import HeroSideChip from "../HeroSideChip";

const heroSideChips = [
	{ title: "15+", description: "Years Experience" },
	{ title: "280+", description: "Projects Delivered" },
	{ title: "*99%", description: "Clients Satisfaction" },
	{ title: "50", description: "Clients Worldwide" },
];

export default function Hero() {
	return (
		<section className="px-5">
			<div className="container mx-auto">
				<div className="flex w-full h-[80vh] justify-between items-center">
					<div className="flex flex-col items-start w-1/3 gap-5">
						<span className="font-instrument text-4xl text-black">
							Hey, I&apos;m Jason,
						</span>
						<h1>
							A Junior
							<span className="font-libre block text-primary">Fullstack</span>
							Web Developer
						</h1>
						<p>
							Every brand has a story. I help you tell it, through bold design,
							clean code and experiences that don&apos;t just capture attention,
							but turn every visitor into a client.
						</p>
						<Button arrow>Contact Me</Button>
					</div>
					<div className="flex-col flex  gap-12">
						{heroSideChips.map((chip) => (
							<HeroSideChip
								title={chip.title}
								description={chip.description}
								key={chip.description}
							/>
						))}
					</div>
					<Image
						width={1000}
						height={1000}
						className="object-top object-cover h-[90vh] w-162 absolute top-0 left-1/2 -translate-x-1/2 -z-10 rounded-b-full"
						alt="hero-image"
						src="/images/hero-image.png"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
