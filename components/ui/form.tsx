"use client";

import { createCustomContext, useElementList } from "@/lib/hooks";
import type { ForwardedRefType } from "@/lib/type-helpers/global-type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { forwardRef, useEffect, useId, useMemo, useRef } from "react";
import {
	type Control,
	type FieldValues,
	FormProvider as HookFormProvider,
	type UseFormReturn,
	useFormContext as useHookFormContext,
} from "react-hook-form";
import Input from "./input";

type FormRootProps<TValues extends FieldValues> = React.ComponentPropsWithoutRef<"form"> & {
	methods: UseFormReturn<TValues>;
	children: React.ReactNode;
};

type FormItemProps<TValues extends FieldValues> = {
	// eslint-disable-next-line react/no-unused-prop-types
	control: Control<TValues>; // == Here for type inference of name prop for the time being
	name: keyof TValues;
	children: React.ReactNode;
	className?: string;
};

type FormErrorMessageProps<TValues extends FieldValues> =
	| {
			type: "regular";
			className?: string;
			control: Control<TValues>;
			errorField: keyof TValues;
	  }
	| {
			type: "root";
			className?: string;
			errorField: string;
	  };

type ContextValue = {
	name: string;
	id: string;
};

const [FormItemProvider, useFormItemContext] = createCustomContext<ContextValue>({
	providerName: "FormItemProvider",
	hookName: "useFormItemContext",
});

function FormRoot<TValues extends FieldValues>(props: FormRootProps<TValues>) {
	const { children, methods, ...restOfProps } = props;

	return (
		<HookFormProvider {...methods}>
			<form {...restOfProps}>{children}</form>
		</HookFormProvider>
	);
}

function FormItem<TValues extends FieldValues>(props: FormItemProps<TValues>) {
	const { children, className, name } = props;

	const uniqueId = useId();

	const inputDetails = useMemo(
		() => ({ name: name as string, id: `${String(name)}__${uniqueId}` }),
		[name, uniqueId]
	);

	return (
		<FormItemProvider value={inputDetails}>
			<div className={cnMerge(`flex flex-col`, className)}>{children}</div>
		</FormItemProvider>
	);
}

const FormLabel = ({ children, className }: { children: string; className?: string }) => {
	const { id } = useFormItemContext();

	return (
		<label htmlFor={id} className={cnMerge("text-label", className)}>
			{children}
		</label>
	);
};

const FormInput = (
	props: Omit<React.ComponentPropsWithRef<"input">, "id" | "name"> & { errorClassName?: string },
	ref: ForwardedRefType<HTMLInputElement>
) => {
	const { id, name } = useFormItemContext();
	const { register, formState } = useHookFormContext();

	const { className, errorClassName, ...restOfProps } = props;

	return (
		<Input
			{...(Boolean(name) && register(name))}
			{...(Boolean(ref) && { ref })}
			id={id}
			className={cnMerge(formState.errors[name] && errorClassName, className)}
			{...restOfProps}
		/>
	);
};

function FormErrorMessage<TStepData extends FieldValues>(props: FormErrorMessageProps<TStepData>) {
	const { className, errorField, type } = props;

	const { formState } = useHookFormContext();

	const [ErrorMessageList] = useElementList();

	const paragraphRef = useRef<HTMLParagraphElement>(null);

	const paragraphClasses = "animate-shake pt-[0.3rem] text-[1.1rem] text-error";

	useEffect(() => {
		if (!paragraphRef.current) return;

		if (paragraphRef.current.classList.contains("animate-shake")) return;

		paragraphRef.current.classList.add("animate-shake");
	}, [formState.submitCount]);

	const message =
		type === "root"
			? formState.errors.root?.[errorField]?.message
			: (formState.errors[errorField]?.message as string | undefined);

	if (!message) {
		return null;
	}

	const splitterRegex = /, (?=[A-Z])/;

	if (splitterRegex.test(message)) {
		const messageArray = message.split(splitterRegex);

		return (
			<ErrorMessageList
				each={messageArray}
				render={(messageItem, index) => (
					<p
						className={cnMerge(
							`ml-[1.5rem] list-item ${paragraphClasses}`,
							className,
							index === 0 && "mt-[0.4rem]"
						)}
					>
						*{messageItem}
					</p>
				)}
			/>
		);
	}

	return (
		<p
			ref={paragraphRef}
			className={cnMerge(paragraphClasses, className)}
			onAnimationEnd={() => paragraphRef.current?.classList.remove("animate-shake")}
		>
			*{message}
		</p>
	);
}

const Form = {
	Root: FormRoot,
	Item: FormItem,
	Label: FormLabel,
	ErrorMessage: FormErrorMessage,
	Input: forwardRef(FormInput),
};

export default Form;
