import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
	return (
		<header className="flex w-full bg-transparent px-5 py-10 sticky top-0" >
			<div className="container mx-auto">
				<nav className="flex justify-between w-full">
					<Logo />
					<ul className="flex font-instrument text-xl text-black gap-8 items-center">
						<Navigation />
					</ul>
				</nav>
			</div>
		</header>
	);
}
