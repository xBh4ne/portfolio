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

// Simple debounce utility function
const debounce = (func: Function, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	return (...args: any[]) => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

export default function Navigation({ isScrolled }: NavigationProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isAnimating = useRef<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	// Debounced closeMenu handler for scroll events
	const debouncedCloseMenuOnScroll = useCallback(
		debounce(() => {
			closeMenu();
		}, 150), // Debounce by 150ms
		[],
	);

	const { t } = useLanguage();

	// Memoized calculation for center offset (GSAP dependency)
	const getCenterOffset = useCallback((): number => {
		if (!wrapperRef.current || !window.innerWidth) return 0;
		const rect = wrapperRef.current.getBoundingClientRect();
		const currentX = gsap.getProperty(wrapperRef.current, "x") as number;
		// Calculate the center of the element relative to its natural position
		const elementCenterNaturalX = rect.left + rect.width / 2;

		// The target X offset needed is Viewport Center minus Element's Natural Center (adjusted by current transform)
		const viewportCenter = window.innerWidth / 2;
		return viewportCenter - (elementCenterNaturalX - currentX);
	}, []);

	useGSAP(
		() => {
			if (!wrapperRef.current) return;

			// Initial scroll positioning animation
			gsap.to(wrapperRef.current, {
				x: isScrolled ? getCenterOffset() : 0,
				ease: "elastic.out(0.3, 0.8)",
				duration: 1,
			});

			// Handle window resize to maintain centering when scrolled
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
		// Dependency array ensures GSAP runs when scroll state or offset calculation changes.
		{ dependencies: [isScrolled, getCenterOffset], scope: wrapperRef },
	);

	function closeMenu() {
		if (!isOpen || isAnimating.current) return;
		isAnimating.current = true;

		// Close animation sequence
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

	// Optimized scroll listener using debounce
	useEffect(() => {
		window.addEventListener("scroll", debouncedCloseMenuOnScroll);
		return () =>
			window.removeEventListener("scroll", debouncedCloseMenuOnScroll);
	}, [debouncedCloseMenuOnScroll]);

	// Click outside handler: only needs to run when a menu is open
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (e: MouseEvent) => {
			if (
				!wrapperRef.current ||
				wrapperRef.current.contains(e.target as Node)
			) {
				return;
			}
			closeMenu();
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]); // Dependency on isOpen is necessary to control the listener

	function handleClick() {
		if (isAnimating.current) return;

		if (!isOpen) {
			// Open animation sequence
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
		// Prevents default link behavior and stops event bubbling up to the button/wrapper if needed.
		e.preventDefault();
		e.stopPropagation();
		closeMenu();

		const el = document.querySelector(`#${section}`);
		if (!el) return;

		// Use ScrollSmoother first, then fallback to native smooth scroll
		const smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.scrollTo(el, true, "top top");
		} else {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<div
			ref={wrapperRef}
			className={`flex flex-col ${isScrolled ? "items-center" : "items-end"} gap-4 pointer-events-auto`}
		>
			{/* Button remains the entry point */}
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

			{/* Navigation Menu */}
			<div
				className={`absolute top-20 max-md:top-20 hidden bg-black text-white! rounded-4xl p-6 w-80 shadow-lg gsap transition-all duration-300 ease-out`}
			>
				<nav>
					<ul className="gsap">
						{" "}
						{/* Added gsap class here for animation targeting */}
						{t.navbar.menu.voices.map(
							(menuVoice: { id: string; label: string }) => (
								<li
									key={menuVoice.id}
									className="list-none last:bg-white last:hover:text-amber-400 last:rounded-full text-white last:text-black!"
								>
									<a
										href={`#${menuVoice.id}`}
										onClick={(e) => handleNavClick(e, menuVoice.id)}
										// Removed mouse handlers to rely on CSS for hover state if possible
										className="block p-3 pl-3 hover:pl-5 px-6 rounded-full cursor-pointer transition-all! duration-200!  ease-out"
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
