import { Download } from "lucide-react";
import Button from "./Button";

export default function DownloadCV() {


	
	return (
		<a href="/jasonbini-cv.pdf" download={"Jason-Bini-CV"}>
			<Button addClass="bg-white! border text-black! hover:bg-black! hover:text-white!">
				Download CV <Download />
			</Button>
		</a>
	);
}
