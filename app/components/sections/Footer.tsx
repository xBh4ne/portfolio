import React from "react";
import Image from "next/image";
import JasonBiniLogo from "../JasonBiniLogo";

export default function Footer() {
	return (
		<footer className="px-5 h-auto mt-50 mb-5">
			<div className="container mx-auto">
				<div className="w-full h-full flex flex-col justify-center items-center gap-0">
					<JasonBiniLogo className="w-full h-full text-black opacity-20" />
					<span className="opacity-20 font-instrument text-black text-xl">
						© 2026 Jason Bini - All Rights Reserved
					</span>
				</div>
			</div>
		</footer>
	);
}
