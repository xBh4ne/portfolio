import React from "react";
import Image from "next/image";

const stacks = [
	"html",
	"css",
	"javascript",
	"typescript",
	"tailwind",
	"react",
	"nextjs",
	"astro",
	"git",
	"github",
	"figma",
	"vscode",
];

export default function TechStack() {
	return (
		<section className="my-80 px-5" id="Tech Stack">
			<div className="container mx-auto ">
				<div className="flex flex-col gap-10">
					<div className="flex justify-between items-center">
						<h3>Tech Stack</h3>
						<p>Handpicked tools for modern web development.</p>
					</div>
					<div className="grid grid-cols-4 w-full ">
						{stacks.map((stack) => (
							<div
								key={stack}
								className="flex justify-center items-center w-full p-10 border border-gray-300 gap-3"
							>
								<Image
									className="h-20 w-20"
									unoptimized
									width={1000}
									height={1000}
									alt={stack}
									src={`https://skillicons.dev/icons?i=${stack}`}
								/>
								<span className="text-3xl font-bebas text-gray">{stack}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
