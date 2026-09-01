import { ArrowRightCircle } from "lucide-react";
import { MoveUpRight } from "lucide-react";

export default function Button({
	children,
	arrow,
	onClick,
	submit,
	addClass,
	disabled,
	external,
}: {
	children: any;
	arrow?: boolean;
	external?: boolean;
	onClick?: any;
	submit?: boolean;
	addClass?: string;
	disabled?: boolean;
}) {
	return (
		<button
			disabled={disabled}
			type={submit ? "submit" : "button"}
			onClick={onClick}
			className={` ${addClass} hover:bg-white border hover:text-black border-black  transition duration-200 align-middle items-center flex gap-3 cursor-pointer bg-black text-xl text-white px-8 py-4 rounded-full font-bebas`}
		>
			{children}
			{arrow && <ArrowRightCircle />}
			{external && <MoveUpRight />}
		</button>
	);
}
