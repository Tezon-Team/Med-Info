import { useRef } from "react";
import type { CallbackFn } from "../type-helpers/global-type-helpers";
import { useCallbackRef } from "./useCallbackRef";

const useThrottleByFrame = <TParams, TResult>(callbackFn: CallbackFn<TParams, TResult>) => {
	const throttleFrameId = useRef<number | null>(null);

	// prettier-ignore
	const throttledCallback = useCallbackRef((...values: TParams[]) => {
		if (throttleFrameId.current !== null) return;

		throttleFrameId.current = requestAnimationFrame(() => {
			callbackFn(...values);
			throttleFrameId.current = null;
		});

	});

	return throttledCallback;
};

export { useThrottleByFrame };
