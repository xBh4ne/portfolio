const heroSideChips = [
	{ title: "1+", description: "Years Experience" },
	{ title: "4+", description: "Projects Delivered" },
	{ title: "*95%", description: "Clients Satisfaction" },
	{ title: "4", description: "Total Clients" },
];

export default function HeroSideChips() {
	return (
		<div className="flex-col flex  gap-12 max-md:flex-row max-md:flex-wrap ">
			{heroSideChips.map((chip) => (
				<div
					key={chip.description}
					className="flex flex-col items-end max-md:items-start"
				>
					<h2>{chip.title}</h2>
					<p>{chip.description}</p>
				</div>
			))}
		</div>
	);
}
