"use client";

import Image from "next/image";
import Button from "../Button";
import HeroSideChips from "../HeroSideChips";
import { ChevronDown } from "lucide-react";
import DownloadCV from "../DownloadCV";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
	const { t } = useLanguage();

	useGSAP(() => {
		const tl = gsap.timeline({ delay: 1 });

		tl.from("#hero-overtitle", {
			y: 100,
			duration: 1,
			opacity: 0,
			ease: "power2.out",
		})
			.from(
				"#hero-image",
				{ y: -300, duration: 1, opacity: 0, ease: "power2.out" },
				"-=80%",
			)
			.from(
				"#hero-title",
				{ y: 100, duration: 1, opacity: 0, ease: "power2.out" },
				"-=50%",
			)
			.from(
				"#hero-side-chips",
				{ x: 100, duration: 1, opacity: 0, ease: "power2.out" },
				"-=90%",
			)
			.from(
				"#hero-subtitle",
				{ y: 100, duration: 1, opacity: 0, ease: "power2.out" },
				"-=50%",
			)
			.from(
				"#hero-button-group",
				{ y: 100, duration: 1, opacity: 0, ease: "power2.out" },
				"-=50%",
			)
			.from("#hero-chevron", { opacity: 0, duration: 0.5 }, "-=30%")
			.add(() => {
				gsap.to("#hero-chevron", {
					y: -15,
					duration: 1,
					ease: "none",
					repeat: -1,
					yoyo: true,
				});
			});
	});

	return (
		<section className="px-5" id="home">
			<div className="container mx-auto relative">
				<div className="flex flex-col items-center gap-3 mt-10 absolute left-1/2 -translate-x-1/2 bottom-28 max-md:hidden">
					<ChevronDown id="hero-chevron" className="text-gray" />
				</div>

				<div className="flex w-full h-[110vh] justify-between items-center max-md:h-auto max-md:py-20 max-md:flex-col max-md:items-start gap-10">
					<div className="flex flex-col items-start w-1/3 gap-5 max-md:w-full">
						<span
							id="hero-overtitle"
							className="font-instrument text-4xl text-black"
						>
							{t.hero.overTitle}
						</span>
						<h1 id="hero-title">
							{t.hero.title.partOne}
							<span className="font-libre block text-primary">
								{t.hero.title.highlight}
							</span>
							{t.hero.title.partTwo}
						</h1>
						<p id="hero-subtitle">{t.hero.description}</p>
						<div id="hero-button-group" className="flex gap-5 flex-wrap">
							<a href="#contact-me">
								<Button arrow>{t.hero.buttons.primary}</Button>
							</a>
							<DownloadCV>{t.hero.buttons.secondary}</DownloadCV>
						</div>
					</div>
					<div id="hero-side-chips">
						<HeroSideChips />
					</div>
					<Image
						id="hero-image"
						width={1000}
						height={1000}
						className="object-top object-cover h-[90vh] w-162 absolute top-0 left-1/2 -translate-x-1/2 -z-10 rounded-b-full sepia-30 max-2xl:opacity-10!"
						alt="hero-image"
						src="/images/hero-image.png"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
