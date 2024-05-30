"use client";

import type { ForwardedRefType, Prettify } from "@/lib/type-helpers/global-type-helpers";
import { forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { Slot } from "../common/Slot";

// prettier-ignore
export type ButtonProps = Prettify<{
	/**
	 * Whether the button should be rendered as a child of another element
	 */
	asChild?: boolean;
	unstyled?: boolean;
} & VariantProps<typeof button> & React.ComponentPropsWithoutRef<"button">>

const button = tv(
	{
		base: "rounded-[8px]",
		variants: {
			theme: {
				primary: "bg-medinfo-primary-main text-white",
				outline: "border-2 border-medinfo-primary-main bg-transparent text-medinfo-primary-main",
				"outline-white": "border-2 border-white bg-transparent text-white",
			},
			size: {
				small: "p-[14px] lg:p-5",
				medium: "px-6 py-3 text-base lg:px-8 lg:py-[18px] lg:text-[20px]",
			},
		},
		defaultVariants: {
			theme: "primary",
			size: "medium",
		},
	},
	{
		responsiveVariants: ["md", "lg"],
	}
);

function Button(props: ButtonProps, ref: ForwardedRefType<HTMLButtonElement>) {
	const {
		asChild,
		children,
		unstyled,
		className,
		type = "button",
		theme,
		size,
		...otherValidBtnProps
	} = props;

	const Component = asChild ? Slot : "button";

	return (
		<Component
			ref={ref}
			type={type}
			className={!unstyled ? button({ theme, size, className }) : className}
			{...otherValidBtnProps}
		>
			{children}
		</Component>
	);
}

export default forwardRef(Button);
