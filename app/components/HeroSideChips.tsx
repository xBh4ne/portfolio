import data from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSideChips() {
	const { t } = useLanguage();

	return (
		<div className="flex-col flex  gap-12 max-md:flex-row max-md:flex-wrap ">
			{t.hero.heroSideChips.map((chip: any) => (
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
