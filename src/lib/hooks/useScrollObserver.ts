import { useEffect, useRef, useState } from "react";

const useScrollObserver = (options: IntersectionObserverInit = {}) => {
	const { rootMargin = "10px 0px 0px 0px", ...restOfOptions } = options;

	const observedItemRef = useRef<HTMLElement>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const [observer] = useState(
		() =>
			new IntersectionObserver(
				([entry]) => {
					setIsScrolled(!entry?.isIntersecting);
				},
				{ rootMargin, ...restOfOptions }
			)
	);

	useEffect(() => {
		const scrollWatcher = document.createElement("span");
		scrollWatcher.dataset.scrollWatcher = "";

		observedItemRef.current && observedItemRef.current.before(scrollWatcher);

		observer.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			observer.disconnect();
		};
	}, [observer]);

	return { isScrolled, observedItemRef };
};

export default useScrollObserver;
