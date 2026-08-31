"use client";

import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { X, Menu } from "lucide-react";

interface NavigationProps {
	isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isAnimating = useRef<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const initialLeft = useRef<number>(0);

	function centerWrapper() {
		if (!wrapperRef.current) return;
		const wrapperWidth = wrapperRef.current.offsetWidth;
		const viewportCenter = window.innerWidth / 2;
		const wrapperCenter = initialLeft.current + wrapperWidth / 2;
		const offset = viewportCenter - wrapperCenter;

		gsap.to(wrapperRef.current, {
			x: offset,
			ease: "elastic.out(0.3, 0.8)",
			duration: 1,
		});
	}

	function resetWrapper() {
		if (!wrapperRef.current) return;
		gsap.to(wrapperRef.current, {
			x: 0,
			ease: "elastic.out(0.3, 0.8)",
			duration: 1,
		});
	}

	// ✅ Funzione dedicata per chiudere il menu con animazione
	function closeMenu() {
		if (!isOpen || isAnimating.current) return;
		isAnimating.current = true;

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

		setIsOpen(false);
	}

	// Salva la posizione iniziale al mount
	useEffect(() => {
		if (wrapperRef.current) {
			initialLeft.current = wrapperRef.current.getBoundingClientRect().left;
		}
	}, []);

	// Reagisce al cambio di isScrolled
	useEffect(() => {
		if (isScrolled) {
			centerWrapper();
		} else {
			resetWrapper();
		}
	}, [isScrolled]);

	// ✅ Chiudi il menu quando si scrolla
	useEffect(() => {
		const handleScroll = () => closeMenu();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen]);

	// ✅ Chiudi il menu quando si clicca fuori
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!wrapperRef.current) return;
			if (!wrapperRef.current.contains(e.target as Node)) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	function handleClick() {
		if (isAnimating.current) return;

		if (!isOpen) {
			isAnimating.current = true;

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

			setIsOpen(true);
		} else {
			closeMenu();
		}
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
		<div
			ref={wrapperRef}
			className={`flex flex-col ${isScrolled ? "items-center" : "items-end"} gap-4`}
		>
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
								// ✅ Chiudi il menu al click sulla voce
								onClick={closeMenu}
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
