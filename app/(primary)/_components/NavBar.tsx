import { HamburgerIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/ui";

function NavBar() {
	return (
		<header className="flex items-center justify-between px-[24px] py-[17px] lg:px-[102px] lg:py-[20px]">
			<Logo className={"shrink-0 max-lg:h-[46px] max-lg:w-[60px]"} />

			<nav className="shrink-0 max-lg:hidden">
				<ul className="flex font-medium lg:gap-[56px] lg:text-[22px]">
					<li>Home</li>
					<li>Library</li>
					<li>About us</li>
					<li>Contact us</li>
				</ul>
			</nav>

			<div className="flex shrink-0 items-center gap-[32px] max-lg:hidden">
				<button className="rounded-[8px] border-2 border-medinfo-primary lg:p-[20px]">
					<SearchIcon />
				</button>

				<button className="rounded-[8px] bg-medinfo-primary font-medium text-white lg:px-[32px] lg:py-[18px] lg:text-[20px]">
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
