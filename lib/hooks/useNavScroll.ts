import { useEffect, useRef, useState } from "react";
import { isBrowser } from "../utils/constants";
import { useConstant } from "./useConstant";

const useNavScroll = (options: IntersectionObserverInit = {}) => {
	const { rootMargin = "10px 0px 0px 0px", ...restOfOptions } = options;

	const headerRef = useRef<HTMLElement>(null);

	const [isScrolled, setIsScrolled] = useState(false);

	const headerObserver = useConstant(
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
		if (!headerRef.current || !headerObserver) return;

		const scrollWatcher = document.createElement("span");
		scrollWatcher.dataset.scrollWatcher = "";

		headerRef.current.before(scrollWatcher);
		headerObserver.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			headerObserver.disconnect();
		};
	}, [headerObserver]);

	return { isScrolled, headerRef };
};

export { useNavScroll };
