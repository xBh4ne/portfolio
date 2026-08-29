import { ArrowRightCircle } from "lucide-react";

export default function Button({
	children,
	arrow,
	onClick,
}: {
	children: any;
	arrow?: boolean;
	onClick?: any;
}) {
	return (
		<button
			onClick={onClick}
			className="align-middle items-center flex gap-3 cursor-pointer bg-black text-xl text-white px-8 py-4 rounded-full font-bebas"
		>
			{children}
			{arrow && <ArrowRightCircle />}
		</button>
	);
}
