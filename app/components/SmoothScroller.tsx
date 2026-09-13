"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { setupGsap } from "../utils/gsapConfig";

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

		const smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 3,
			effects: true,
		});

		return () => smoother.kill();
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
