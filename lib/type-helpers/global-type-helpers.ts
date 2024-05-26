export type Prettify<TObject> = { [key in keyof TObject]: TObject[key] } & NonNullable<unknown>;

export type PrettyOmit<TObject, K extends keyof TObject> = Prettify<Omit<TObject, K>>;

export type CallbackFn<TParams, TResult = void> = (...params: TParams[]) => TResult;

export type ForwardedRefType<TComponent extends React.ElementType | HTMLElement> =
	TComponent extends React.ElementType
		? React.ForwardedRef<React.ElementRef<TComponent>>
		: React.ForwardedRef<TComponent>;

export type InferProps<TComponent extends React.ElementType | HTMLElement> =
	TComponent extends React.ElementType
		? React.ComponentPropsWithoutRef<TComponent>
		: React.HTMLAttributes<TComponent>;
