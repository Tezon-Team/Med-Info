import { CopyrightIcon } from "@/components/icons";
import { IconBox } from "@/components/primitives";
import { Logo } from "@/components/ui";

function Footer() {
	return (
		<footer className="flex flex-col gap-[44px] bg-medinfo-primary px-[24px] py-[40px] text-white lg:flex-row lg:items-start lg:justify-between lg:px-[102px] lg:py-[56px]">
			<div className="mt-[20px] flex flex-col">
				<Logo type="footer" className="max-lg:h-[46px] max-lg:max-w-[60px]" />

				<div className="mt-[20px] flex items-center gap-[4px] text-[14px] text-white lg:text-base">
					<CopyrightIcon />
					<p>2023 MedInfo Nigeria. All rights reserved.</p>
				</div>
			</div>

			<div className="text-[18px]">
				<h3 className="text-[20px] text-medinfo-secondary-darker">Quick links</h3>

				<ul className="mt-[24px] space-y-[16px]">
					<li>About us</li>
					<li>FAQs</li>
					<li>Library</li>
				</ul>
			</div>

			<div className="text-[18px]">
				<h3 className="text-[20px] text-medinfo-secondary-darker">Contact us</h3>

				<ul className="mt-[24px] space-y-[16px]">
					<li className="flex items-center gap-[12px]">
						<IconBox icon="bi:telephone" className="size-[22px]" />
						<p>+234 8123 456 789</p>
					</li>

					<li className="flex items-center gap-[12px]">
						<IconBox icon="mynaui:envelope" className="size-[22px]" />
						<p>tezonteam@gmail.com</p>
					</li>

					<li className="flex gap-[16px]">
						<IconBox icon="mynaui:brand-facebook" className="size-[22px]" />
						<IconBox icon="akar-icons:instagram-fill" className="size-[22px]" />
						<IconBox icon="lucide:linkedin" className="size-[22px]" />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
