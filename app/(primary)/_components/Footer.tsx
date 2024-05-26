import { CopyrightIcon } from "@/components/icons";
import { IconBox } from "@/components/primitives";
import { Logo } from "@/components/ui";

function Footer() {
	return (
		<footer className="flex flex-col gap-[4.4rem] bg-medinfo-primary px-[2.4rem] py-[4rem] text-white lg:flex-row lg:items-start lg:justify-between lg:px-[10.2rem] lg:py-[5.6rem]">
			<div className="mt-[2rem] flex flex-col">
				<Logo type="footer" className="max-lg:h-[4.6rem] max-lg:max-w-[6rem]" />

				<div className="mt-[2rem] flex items-center gap-[0.4rem] text-[1.4rem] text-white lg:text-base">
					<CopyrightIcon />
					<p>2023 MedInfo Nigeria. All rights reserved.</p>
				</div>
			</div>

			<div className="text-[1.8rem]">
				<h3 className="text-[2rem] text-medinfo-secondary-darker">Quick links</h3>

				<ul className="mt-[2.4rem] space-y-[1.6rem]">
					<li>About us</li>
					<li>FAQs</li>
					<li>Library</li>
				</ul>
			</div>

			<div className="text-[1.8rem]">
				<h3 className="text-[2rem] text-medinfo-secondary-darker">Contact us</h3>

				<ul className="mt-[2.4rem] space-y-[1.6rem]">
					<li className="flex items-center gap-[1.2rem]">
						<IconBox icon="bi:telephone" className="size-[2.2rem]" />
						<p>+234 8123 456 789</p>
					</li>

					<li className="flex items-center gap-[1.2rem]">
						<IconBox icon="mynaui:envelope" className="size-[2.2rem]" />
						<p>tezonteam@gmail.com</p>
					</li>

					<li className="flex gap-[1.6rem]">
						<IconBox icon="mynaui:brand-facebook" className="size-[2.2rem]" />
						<IconBox icon="akar-icons:instagram-fill" className="size-[2.2rem]" />
						<IconBox icon="lucide:linkedin" className="size-[2.2rem]" />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
