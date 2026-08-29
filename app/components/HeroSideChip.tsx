interface HeroSideChipProps {
	title: string;
	description: string;
}

export default function HeroSideChip({
	title,
	description,
}: HeroSideChipProps) {
	return (
		<div className="flex flex-col items-end">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
