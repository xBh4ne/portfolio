"use client";

import Button from "../Button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadCV from "../DownloadCV";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ContactMe() {
	const { t } = useLanguage();

	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	useGSAP(
		() => {
			if (!document.querySelector("#contact-title")?.textContent) return;

			const titleSplit = new SplitText("#contact-title", { type: "words" });

			gsap.from(titleSplit.words, {
				opacity: 0,
				y: 40,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.05,
				scrollTrigger: {
					trigger: "#contact-title",
					start: "top 50%",
					toggleActions: "play none none reverse",
				},
			});

			gsap.from(".contact-info-item", {
				opacity: 0,
				x: -40,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.15,
				scrollTrigger: {
					trigger: "#contact-left",
					start: "top 50%",
					toggleActions: "play none none reverse",
				},
			});

			gsap.from(".form-field", {
				opacity: 0,
				y: 40,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.15,
				scrollTrigger: {
					trigger: "#contact-form",
					start: "top 50%",
					toggleActions: "play none none reverse",
				},
			});
		},
		{ dependencies: [t] },
	);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const { name, email, subject, message } = form;
		const mailto = `mailto:${t.contactMe.form.submit.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\n${message}`,
		)}`;
		window.location.href = mailto;
	}

	return (
		<section className="px-5 mt-80" id="contact-me">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-20 max-md:grid-cols-1">
					<div id="contact-left" className="flex flex-col gap-5">
						<h2 id="contact-title">{t.contactMe.title}</h2>
						<div className="flex flex-col items-start gap-8">
							<div className="contact-info-item">
								<DownloadCV>{t.contactMe.downloadCv}</DownloadCV>
							</div>

							{t.contactMe.contacts.map((contact) => (
								<div className="contact-info-item" key={contact.label}>
									<h6>{contact.label}:</h6>
									<p>{contact.info}</p>
								</div>
							))}

							<div className="contact-info-item flex flex-col gap-2">
								<h6>{t.contactMe.social.label}:</h6>
								<div className="flex gap-4 items-center">
									{t.contactMe.social.items.map((item) => (
										<div key={item.icon} className="flex gap-5">
											<Link href={item.link}>
												<Image
													className="h-10 w-10"
													alt={item.icon}
													height={100}
													width={100}
													src={`/images/icons/${item.icon}.png`}
												/>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<form
						id="contact-form"
						onSubmit={handleSubmit}
						className="flex flex-col gap-8"
					>
						<div className="form-field flex gap-4 max-md:flex-wrap">
							<div className="flex flex-col gap-2 w-full">
								<label className="label" htmlFor="name">
									<h6>{t.contactMe.form.name.label}</h6>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder={t.contactMe.form.name.placeholder}
									value={form.name}
									onChange={handleChange}
									className="input"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<label className="label" htmlFor="email">
									<h6>{t.contactMe.form.email.label}</h6>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder={t.contactMe.form.email.placeholder}
									value={form.email}
									onChange={handleChange}
									className="input"
								/>
							</div>
						</div>

						<div className="form-field flex flex-col gap-2">
							<label className="label" htmlFor="subject">
								<h6>{t.contactMe.form.subject.label}</h6>
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								required
								placeholder={t.contactMe.form.subject.placeholder}
								value={form.subject}
								onChange={handleChange}
								className="input"
							/>
						</div>

						<div className="form-field flex flex-col gap-2">
							<label className="label" htmlFor="message">
								<h6>{t.contactMe.form.message.label}</h6>
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={6}
								placeholder={t.contactMe.form.message.placeholder}
								value={form.message}
								onChange={handleChange}
								className="input resize-none"
							/>
						</div>

						<div className="form-field">
							<Button submit addClass="justify-center mt-5">
								{t.contactMe.form.submit.label}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
