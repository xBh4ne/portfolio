import Navigation from "../Navigation";

export default function Header() {
	return (
		<header className="flex w-full bg-transparent px-5 py-10">
			<div className="container mx-auto">
				<nav className="flex justify-between w-full">
					<div className="flex items-center align-middle gap-4">
						<div className="w-5 h-5 bg-black rounded-full" />
						<span className="font-bebas text-3xl">Jason Bini</span>
					</div>
					<ul className="flex font-instrument text-xl text-black gap-8 items-center">
						<Navigation />
					</ul>
				</nav>
			</div>
		</header>
	);
}
