"use client";

import type { ForwardedRefType, InferProps } from "@/lib/type-helpers/global-type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef, isValidElement } from "react";
import { IconBox } from "../primitives";

function AccordionItem(
	props: InferProps<typeof AccordionPrimitive.Item>,
	ref: ForwardedRefType<typeof AccordionPrimitive.Item>
) {
	const { className, ...restOfProps } = props;

	return <AccordionPrimitive.Item ref={ref} className={className} {...restOfProps} />;
}

function AccordionTrigger(
	props: Omit<InferProps<typeof AccordionPrimitive.Trigger>, "className"> & {
		icon?: string | React.JSX.Element;
		classNames?: { base?: string; icon?: string };
	},
	ref: ForwardedRefType<typeof AccordionPrimitive.Trigger>
) {
	const { classNames, children, icon, ...restOfProps } = props;

	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cnMerge(
					"flex flex-1 items-center justify-between py-[16px] text-[14px] font-medium transition-all [&[data-state=open]>svg]:rotate-180",
					classNames?.base
				)}
				{...restOfProps}
			>
				{children}

				{isValidElement(icon) && icon}

				{!isValidElement(icon) && (
					<IconBox
						icon={(icon as string) ?? "radix-icons:chevron-down"}
						className={cnMerge(
							"size-[16px] shrink-0 transition-transform duration-200",
							classNames?.icon
						)}
					/>
				)}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent(
	props: InferProps<typeof AccordionPrimitive.Content>,
	ref: ForwardedRefType<typeof AccordionPrimitive.Content>
) {
	const { className, children, ...restOfProps } = props;

	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cnMerge(
				"overflow-hidden py-[16px] text-[14px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
				className
			)}
			{...restOfProps}
		>
			{children}
		</AccordionPrimitive.Content>
	);
}

const Accordion = {
	Root: AccordionPrimitive.Root,
	Item: forwardRef(AccordionItem),
	Trigger: forwardRef(AccordionTrigger),
	Content: forwardRef(AccordionContent),
};

export default Accordion;
