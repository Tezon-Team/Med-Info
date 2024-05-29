import type { ForwardedRefType } from "@/lib/type-helpers/global-type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: ForwardedRefType<HTMLInputElement>) {
	const { className, ...restOfProps } = props;

	return (
		<input
			ref={ref}
			className={cnMerge(
				"flex w-full rounded-md border border-input px-3 py-2 text-sm file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...restOfProps}
		/>
	);
}

export default forwardRef(Input);
