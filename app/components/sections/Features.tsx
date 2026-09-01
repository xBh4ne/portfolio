const columns = [
	{
		title: "User-Centered Design",
		description:
			"I design interfaces that feel intuitive, reducing friction and making every interaction effortless.",
	},
	{
		title: "Brand Identity & Strategy",
		description:
			"I craft visual identities that communicate who you are and why people should choose you.",
	},
	{
		title: "Responsive & Modern Code",
		description:
			"Clean, performant and mobile-first code that delivers a flawless experience on any device.",
	},
	{
		title: "Results-Driven Development",
		description:
			"I build experiences engineered to convert visitors into clients and clicks into revenue.",
	},
];

export default function Features() {
	return (
		<section className="my-20 px-5" id="Features">
			<div className="container mx-auto">
				<div className="flex justify-between items-center gap-10 max-md:flex-wrap with-separator">
					{columns.map((column) => (
						<div key={column.description} className="flex flex-col gap-5">
							<h6>{column.title}</h6>
							<p className="subtitle">{column.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
