import { Download } from "lucide-react";
import Button from "./Button";
import data from "@/locales/en.json";
import { PropsWithChildren } from "react";

export default function DownloadCV({ children }: PropsWithChildren) {
	return (
		<a href="/jasonbini-cv.pdf" download={"Jason-Bini-CV"}>
			<Button addClass="bg-white! border text-black! hover:bg-black! hover:text-white!">
				{children} <Download />
			</Button>
		</a>
	);
}
