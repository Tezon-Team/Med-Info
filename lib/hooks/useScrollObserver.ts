import { useEffect, useRef, useState } from "react";
import { isBrowser } from "../utils/constants";
import { useConstant } from "./useConstant";

const useScrollObserver = (options: IntersectionObserverInit = {}) => {
	const { rootMargin = "10px 0px 0px 0px", ...restOfOptions } = options;

	const observedItemRef = useRef<HTMLElement>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const observer = useConstant(
		() =>
			isBrowser &&
			new IntersectionObserver(
				([entry]) => {
					if (!entry) return;
					setIsScrolled(!entry.isIntersecting);
				},
				{ rootMargin, ...restOfOptions }
			)
	);

	useEffect(() => {
		if (!observedItemRef.current || !observer) return;

		const scrollWatcher = document.createElement("span");
		scrollWatcher.dataset.scrollWatcher = "";

		observedItemRef.current.before(scrollWatcher);

		observer.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			observer.disconnect();
		};
	}, [observer]);

	return { isScrolled, observedItemRef };
};

export default useScrollObserver;
