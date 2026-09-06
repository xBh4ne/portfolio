import { ImageResponse } from "next/og";

// Dimensioni standard OG
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "#0a0a0a", // Sfondo scuro — cambia col tuo colore
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "sans-serif",
				padding: "60px",
			}}
		>
			{/* Badge ruolo */}
			<div
				style={{
					background: "#1a1a2e",
					color: "#6366f1", // Il tuo colore accent
					border: "1px solid #6366f1",
					borderRadius: "999px",
					padding: "8px 24px",
					fontSize: "18px",
					marginBottom: "24px",
					letterSpacing: "2px",
					textTransform: "uppercase",
				}}
			>
				Available for freelance
			</div>

			{/* Nome principale */}
			<h1
				style={{
					fontSize: "80px",
					fontWeight: "bold",
					color: "#ffffff",
					margin: "0 0 16px 0",
					textAlign: "center",
					lineHeight: 1.1,
				}}
			>
				Jason Bini
			</h1>

			{/* Sottotitolo */}
			<p
				style={{
					fontSize: "32px",
					color: "#a1a1aa",
					margin: "0 0 48px 0",
					textAlign: "center",
				}}
			>
				Junior Fullstack Web Developer
			</p>

			{/* Tech stack pills */}
			<div
				style={{
					display: "flex",
					gap: "16px",
				}}
			>
				{["React", "Next.js", "TypeScript"].map((tech) => (
					<div
						key={tech}
						style={{
							background: "#1f1f1f",
							color: "#e4e4e7",
							border: "1px solid #3f3f46",
							borderRadius: "8px",
							padding: "8px 20px",
							fontSize: "20px",
						}}
					>
						{tech}
					</div>
				))}
			</div>

			{/* URL del sito in basso */}
			<p
				style={{
					position: "absolute",
					bottom: "40px",
					fontSize: "20px",
					color: "#52525b",
				}}
			>
				jasonbini.dev
			</p>
		</div>,
		{ ...size },
	);
}
