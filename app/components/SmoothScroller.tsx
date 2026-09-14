// SmoothScroller.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface SmoothScrollerProps {
	children: React.ReactNode;
	overlay?: React.ReactNode;
}

export default function SmoothScroller({
	children,
	overlay,
}: SmoothScrollerProps) {
	useEffect(() => {
		if (typeof window === "undefined") return;

		const isMobile = window.matchMedia("(max-width: 767px)").matches;
		if (isMobile) return; // ☢️ su mobile non parte nulla

		const smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 2,
			effects: true,
		});

		// 🔗 Intercetta i click su tutti i link con hash
		const handleHashClick = (e: MouseEvent) => {
			const anchor = (e.target as HTMLElement).closest("a");
			if (!anchor) return;

			const href = anchor.getAttribute("href");
			if (!href?.startsWith("#")) return;

			const selector = href.slice(1); // rimuove il # → "projects"
			if (!selector) return; // ⛔ era solo "#", skippa

			const el = document.querySelector(`#${selector}`);
			if (!el) return;

			e.preventDefault();
			smoother.scrollTo(el, true, "top top");
		};

		document.addEventListener("click", handleHashClick);

		return () => {
			document.removeEventListener("click", handleHashClick);
			smoother.kill();
		};
	}, []);

	return (
		<div id="smooth-wrapper">
			<div id="smooth-overlay" style={{ position: "relative", zIndex: 50 }}>
				{overlay}
			</div>
			<div id="smooth-content">{children}</div>
		</div>
	);
}
