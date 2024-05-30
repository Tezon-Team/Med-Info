import { useToggle } from "@/lib/hooks/useToggle";
import type { ForwardedRefType } from "@/lib/type-helpers/global-type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { IconBox } from "../common";
import Button from "./button";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: ForwardedRefType<HTMLInputElement>) {
	const { className, type, ...restOfProps } = props;

	const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

	return (
		<>
			<input
				ref={ref}
				type={type === "password" && isPasswordVisible ? "text" : type}
				className={cnMerge(
					"flex w-full rounded-md border border-shadcn-input px-3 py-2 text-sm file:border-0 file:bg-transparent placeholder:text-shadcn-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shadcn-ring disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				{...restOfProps}
			/>

			{type === "password" && (
				<Button unstyled={true} onClick={togglePasswordVisibility}>
					<IconBox
						icon={
							isPasswordVisible
								? "material-symbols:visibility-outline-rounded"
								: "material-symbols:visibility-off-outline-rounded"
						}
						className="size-5 lg:size-6"
					/>
				</Button>
			)}
		</>
	);
}

export default forwardRef(Input);
