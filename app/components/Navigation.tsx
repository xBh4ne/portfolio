"use client";

import { useRef, useState } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { X, Menu } from "lucide-react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isAnimating = useRef<boolean>(false);

	function handleClick() {
		if (isAnimating.current) return;
		isAnimating.current = true;

		if (!isOpen) {
			gsap.fromTo(
				".gsap",
				{ opacity: 0, y: -20, display: "none", height: 0 },
				{
					opacity: 1,
					y: 0,
					display: "block",
					duration: 0.5,
					ease: "power2.out",
					height: "310",
					onComplete: () => {
						isAnimating.current = false;
					},
				},
			);

			gsap.fromTo(
				".gsap li",
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 0.4,
					ease: "power2.out",
					stagger: 0.08,
					delay: 0.2,
				},
			);
		} else {
			gsap.to(".gsap li", {
				opacity: 0,
				x: -30,
				duration: 0.2,
				ease: "power2.in",
				stagger: { each: 0.05, from: "end" },
				onComplete: () => {
					gsap.to(".gsap", {
						height: 0,
						opacity: 0,
						y: -20,
						duration: 0.3,
						ease: "power2.in",
						onComplete: () => {
							gsap.set(".gsap", { display: "none" });
							gsap.set(".gsap li", { opacity: 0, x: -30 });
							isAnimating.current = false;
						},
					});
				},
			});
		}

		setIsOpen(!isOpen);
	}
	
	function handleMouseEnter(e: React.MouseEvent<HTMLLIElement>) {
		gsap.to(e.currentTarget, {
			paddingLeft: "2.5rem",
			color: "var(--color-primary)",
			duration: 0.3,
			ease: "power2.out",
		});
	}

	function handleMouseLeave(e: React.MouseEvent<HTMLLIElement>) {
		gsap.to(e.currentTarget, {
			paddingLeft: "1.5rem",
			color: "var(--color-white)",
			duration: 0.3,
			ease: "power2.inOut",
		});
	}

	const menuVoices = [
		"Home",
		"Tech Stack",
		"About Me",
		"Projects",
		"Contact me",
	];

	return (
		<div className="flex flex-col items-end gap-4">
			<Button onClick={handleClick}>
				{isOpen ? (
					<>
						Close <X />
					</>
				) : (
					<>
						Menu <Menu />
					</>
				)}
			</Button>

			<div className="absolute top-30 hidden bg-black text-white! rounded-4xl p-6 w-80 shadow-lg gsap">
				<nav>
					<ul>
						{menuVoices.map((menuVoice) => (
							<li
								key={menuVoice}
								className="p-3 px-6 cursor-pointer list-none last:text-black! last:bg-white rounded-full"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<a href={"#" + menuVoice}>{menuVoice}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}
