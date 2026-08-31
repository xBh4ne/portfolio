export default function About() {
	return (
		<section className="px-5">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-5">
					<div>
						<h2>Modern Web. Human Touch.</h2>
					</div>
					<div className="flex flex-col gap-10">
						<span className="font-instrument text-4xl text-black">
							My name is Jason Bini and I'm a Junior Fullstack Web Developer
							based in Italy.
						</span>
						<p>
							"I build modern, high-performance web applications with a strong
							focus on user experience and brand identity. My stack revolves
							around React, Next.js, TypeScript and Tailwind CSS on the
							frontend, paired with backend tools that keep everything running
							smoothly under the hood. I got into web development because I was
							fascinated by the power of the internet to tell stories, connect
							people and grow businesses. That fascination never left, it just
							evolved into a professional skill set. Today, I channel that
							energy into every project I work on, treating each one as a unique
							challenge to solve creatively and technically. I'm constantly
							learning, constantly improving and constantly looking for
							opportunities to work on products that make a real difference for
							real people."
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
