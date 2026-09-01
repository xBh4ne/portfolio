import Image from "next/image";
import Button from "../Button";
import HeroSideChips from "../HeroSideChips";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DownloadCV from "../DownloadCV";

export default function Hero() {
	return (
		<section className="px-5" id="Home">
			<div className="container mx-auto">
				<div className="flex flex-col items-center gap-3 mt-10 absolute left-1/2 -translate-x-1/2 bottom-8">
					<ChevronDown className="text-gray" />
				</div>

				<div className="flex w-full h-[80vh] justify-between items-center">
					<div className="flex flex-col items-start w-1/3 gap-5">
						<span className="font-instrument text-4xl text-black">
							Hey, I&apos;m Jason,
						</span>
						<h1>
							A Junior
							<span className="font-libre block text-primary">Fullstack</span>
							Web Developer
						</h1>
						<p>
							Every brand has a story. I help you tell it, through bold design,
							clean code and experiences that don&apos;t just capture attention,
							but turn every visitor into a client.
						</p>
						<div className="flex gap-5">
							<a href="#Contact Me">
								<Button arrow>Contact Me</Button>
							</a>
							<DownloadCV />
						</div>
					</div>
					<HeroSideChips />
					<Image
						width={1000}
						height={1000}
						className="object-top object-cover h-[90vh] w-162 absolute top-0 left-1/2 -translate-x-1/2 -z-10 rounded-b-full"
						alt="hero-image"
						src="/images/hero-image.png"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
