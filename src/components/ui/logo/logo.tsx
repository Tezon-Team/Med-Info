import { LOGO_TYPE_LOOKUP } from "./logo-type-lookup";

const Logo = (props: React.SVGProps<SVGSVGElement> & { type?: "header" | "footer" }) => {
	const { type = "header", ...restOfProps } = props;

	const { [type]: LogoType } = LOGO_TYPE_LOOKUP;

	return <LogoType {...restOfProps} />;
};

export default Logo;
