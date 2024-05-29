"use client";

import { Logo } from "@/components/common";
import { HamburgerIcon, SearchIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { useNavScroll } from "@/lib/hooks";
import { cnJoin } from "@/lib/utils/cn";

function NavBar() {
	const { headerRef, isScrolled } = useNavScroll();

	return (
		<header
			ref={headerRef}
			className={cnJoin(
				"sticky inset-[0_0_auto_0] z-[500] flex w-full items-center justify-between bg-white/90 px-6 py-[17px] backdrop-blur-md [transition:box-shadow_0.8s_ease] lg:px-[102px] lg:py-5",
				isScrolled && "shadow-[0_4px_8px_hsl(150,20%,25%,0.25)]"
			)}
		>
			<Logo className="min-w-fit max-lg:h-[46px] max-lg:w-[60px]" />

			<nav className="min-w-fit max-lg:hidden">
				<ul className="flex font-medium lg:gap-[56px] lg:text-[22px]">
					<li>Home</li>
					<li>Library</li>
					<li>About us</li>
					<li>Contact us</li>
				</ul>
			</nav>

			<div className="flex min-w-fit items-center gap-8 max-lg:hidden">
				<button className="rounded-[8px] border-2 border-medinfo-primary lg:p-5">
					<SearchIcon />
				</button>

				<Button size={{ lg: "large" }}>Join Us</Button>
			</div>

			<button className="lg:hidden">
				<HamburgerIcon />
			</button>
		</header>
	);
}

export default NavBar;
