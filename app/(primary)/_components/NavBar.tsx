import { HamburgerIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/ui";

function NavBar() {
	return (
		<header className="flex items-center justify-between px-[2.4rem] py-[1.7rem] lg:px-[10.2rem] lg:py-[2rem]">
			<Logo className={"shrink-0 max-lg:h-[4.6rem] max-lg:w-[6rem]"} />

			<nav className="shrink-0 max-lg:hidden">
				<ul className="flex font-medium lg:gap-[5.6rem] lg:text-[2.2rem]">
					<li>Home</li>
					<li>Library</li>
					<li>About us</li>
					<li>Contact us</li>
				</ul>
			</nav>

			<div className="flex shrink-0 items-center gap-[3.2rem] max-lg:hidden">
				<button className="rounded-[8px] border-2 border-medinfo-primary lg:p-[2rem]">
					<SearchIcon />
				</button>

				<button className="rounded-[8px] bg-medinfo-primary font-medium text-white lg:px-[3.2rem] lg:py-[1.8rem] lg:text-[2rem]">
					Join Us
				</button>
			</div>

			<button className="lg:hidden">
				<HamburgerIcon />
			</button>
		</header>
	);
}

export default NavBar;
