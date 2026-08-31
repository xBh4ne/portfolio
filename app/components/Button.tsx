import { ArrowRightCircle } from "lucide-react";

export default function Button({
	children,
	arrow,
	onClick,
	submit,
	addClass,
}: {
	children: any;
	arrow?: boolean;
	onClick?: any;
	submit?: boolean;
	addClass?: string;
}) {
	return (
		<button
			type={submit ? "submit" : "button"}
			onClick={onClick}
			className={` ${addClass} align-middle items-center flex gap-3 cursor-pointer bg-black text-xl text-white px-8 py-4 rounded-full font-bebas`}
		>
			{children}
			{arrow && <ArrowRightCircle />}
		</button>
	);
}
