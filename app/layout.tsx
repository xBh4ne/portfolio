import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="it">
			<head>
				<meta charSet="utf-8" />
				<link rel="stylesheet" href="src/styles/global.css" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width" />
				<title>Jason Bini</title>
			</head>
			<body className="bg-white">{children}</body>
		</html>
	);
}
