import { useCallback, useLayoutEffect, useRef } from "react";
import type { CallbackFn } from "../type-helpers/global-type-helpers";

const useCallbackRef = <TParams, TResult = unknown>(callbackFn: CallbackFn<TParams, TResult>) => {
	const callbackRef = useRef(callbackFn);

	useLayoutEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	const savedCallback = useCallback((...params: TParams[]) => callbackRef.current(...params), []);

	return savedCallback;
};

export { useCallbackRef };
