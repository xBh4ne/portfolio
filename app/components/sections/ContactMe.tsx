"use client";

import Button from "../Button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactMe() {
	// ✅ Tutto dentro il componente
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const { name, email, subject, message } = form;

		const mailto = `mailto:jasonbini@tuta.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\n${message}`,
		)}`;

		window.location.href = mailto;
	}

	return (
		<section className="px-5 mt-80" id="Contact Me">
			<div className="container mx-auto">
				<div className="grid grid-cols-2">
					<div className="flex flex-col gap-16">
						<h2>Get In Touch</h2>
						<div className="flex flex-col gap-8">
							<div>
								<h6>Email:</h6>
								<p>jasonbini@tuta.io</p>
							</div>
							<div>
								<h6>Phone:</h6>
								<p>+39 3334343274</p>
							</div>
							<div>
								<h6>Address:</h6>
								<p>Viale Giovanni XXIII, Tolentino (MC), 62029, Italy</p>
							</div>
							<div className="flex flex-col gap-2">
								<h6>Follow Me:</h6>
								<div className="flex gap-4 items-center">
									<div className="flex gap-5">
										<Link href="https://github.com/xBh4ne">
											<Image
												className="h-10 w-10"
												alt="github"
												height={100}
												width={100}
												src={"/images/icons/github.png"}
											/>
										</Link>
									</div>

									<div className="flex gap-5">
										<Link href="https://www.linkedin.com/in/jasonbini/">
											<Image
												className="h-10 w-10"
												alt="linkedin"
												height={100}
												width={100}
												src={"/images/icons/linkedin.png"}
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="flex flex-col gap-8">
						<div className="flex gap-4">
							<div className="flex flex-col gap-2 w-full">
								<label className="label" htmlFor="name">
									<h6>Name</h6>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder="Jason Bini"
									value={form.name}
									onChange={handleChange}
									className="input"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<label className="label" htmlFor="email">
									<h6>Email</h6>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="jason@example.com"
									value={form.email}
									onChange={handleChange}
									className="input"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="label" htmlFor="subject">
								<h6>Subject</h6>
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								required
								placeholder="I have a project for you..."
								value={form.subject}
								onChange={handleChange}
								className="input"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="label" htmlFor="message">
								<h6>Message</h6>
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={6}
								placeholder="Tell me about your project..."
								value={form.message}
								onChange={handleChange}
								className="input resize-none"
							/>
						</div>

						<Button submit addClass="justify-center mt-5">
							Send Message
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
