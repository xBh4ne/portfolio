"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import { X, Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
	isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isAnimating = useRef<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const { t } = useLanguage();

	const getCenterOffset = useCallback((): number => {
		if (!wrapperRef.current) return 0;
		const rect = wrapperRef.current.getBoundingClientRect();
		const currentX = gsap.getProperty(wrapperRef.current, "x") as number;
		const naturalCenterX = rect.left + rect.width / 2 - currentX;
		const viewportCenter = window.innerWidth / 2;
		return viewportCenter - naturalCenterX;
	}, []);

	useGSAP(
		() => {
			if (!wrapperRef.current) return;

			gsap.to(wrapperRef.current, {
				x: isScrolled ? getCenterOffset() : 0,
				ease: "elastic.out(0.3, 0.8)",
				duration: 1,
			});

			const handleResize = () => {
				if (!wrapperRef.current || !isScrolled) return;
				gsap.to(wrapperRef.current, {
					x: getCenterOffset(),
					duration: 0.3,
					ease: "power2.out",
				});
			};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		},
		{ dependencies: [isScrolled, getCenterOffset], scope: wrapperRef },
	);

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

	useEffect(() => {
		const handleScroll = () => closeMenu();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!wrapperRef.current) return;
			if (!wrapperRef.current.contains(e.target as Node)) closeMenu();
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
					height: "auto",
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

	function handleNavClick(
		e: React.MouseEvent<HTMLAnchorElement>,
		section: string,
	) {
		e.preventDefault();
		e.stopPropagation();
		closeMenu();

		const el = document.querySelector(`#${section}`);
		if (!el) return;

		const smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.scrollTo(el, true, "top top");
		} else {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}

	function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
		gsap.to(e.currentTarget, {
			paddingLeft: "2.5rem",
			color: "var(--color-primary)",
			duration: 0.3,
			ease: "power2.out",
		});
	}

	function handleMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
		gsap.to(e.currentTarget, {
			paddingLeft: "1.5rem",
			color: "var(--color-white)",
			duration: 0.3,
			ease: "power2.inOut",
		});
	}

	return (
		<div
			ref={wrapperRef}
			className={`flex flex-col ${isScrolled ? "items-center" : "items-end"} gap-4 pointer-events-auto`}
		>
			<Button onClick={handleClick} addClass="max-md:p-4">
				{isOpen ? (
					<>
						{!isScrolled && (
							<span className="max-md:hidden">{t.navbar.menu.label.close}</span>
						)}
						<X />
					</>
				) : (
					<>
						{!isScrolled && (
							<span className="max-md:hidden">{t.navbar.menu.label.open}</span>
						)}
						<Menu />
					</>
				)}
			</Button>

			<div className="absolute top-30 max-md:top-20 hidden bg-black text-white! rounded-4xl p-6 w-80 shadow-lg gsap">
				<nav>
					<ul>
						{t.navbar.menu.voices.map(
							(menuVoice: { id: string; label: string }) => (
								<li
									key={menuVoice.id}
									className="list-none last:bg-white last:rounded-full text-white last:text-black!"
								>
									<a
										href={`#${menuVoice.id}`}
										onClick={(e) => handleNavClick(e, menuVoice.id)}
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
										className="block  p-3 px-6 rounded-full cursor-pointer "
									>
										{menuVoice.label}
									</a>
								</li>
							),
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
}
