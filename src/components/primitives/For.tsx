import type { ForwardedRefType } from "@/lib/type-helpers/global-type-helpers";
import type { PolymorphicPropsWithRef } from "@/lib/type-helpers/polymorpic-props-helper";
import { forwardRef } from "react";

type ForProps<TArray extends unknown[]> =
	| {
			each: TArray;
			render: (item: TArray[number], index: number) => React.ReactNode;
			children?: "Hey, Sorry but you've already used the render prop, so the children prop is redundant";
	  }
	| {
			each: TArray;
			children: (item: TArray[number], index: number) => React.ReactNode;
			render?: "Hey, Sorry but you've already used the children prop, so the render prop is redundant";
	  };

function For<TArrayProp extends unknown[]>(props: ForProps<TArrayProp>) {
	const { each, render, children } = props;

	const ReactNodeList = each.map((item, index) => {
		if (typeof children === "function") {
			return children(item, index);
		}

		return render(item, index);
	});

	return ReactNodeList;
}

function ForList<TArray extends unknown[], TElement extends React.ElementType = "ul">(
	props: PolymorphicPropsWithRef<TElement, ForProps<TArray> & { className?: string }>,
	ref: ForwardedRefType<HTMLElement>
) {
	const { each, render, children, as: ListContainer = "ul", className, ...restOfListProps } = props;

	return (
		<ListContainer className={className} {...restOfListProps} ref={ref}>
			<For {...({ each, render, children } as ForProps<TArray>)} />
		</ListContainer>
	);
}

const ForObject = {
	For,
	ForList: forwardRef(ForList) as typeof ForList,
};

export default ForObject;
