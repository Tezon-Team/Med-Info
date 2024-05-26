import type { MetadataRoute } from "next";

const robots = () => {
	const robotsConfig: MetadataRoute.Robots = {
		rules: {
			userAgent: "*",
			allow: "/",
		},
	};

	return robotsConfig;
};

export default robots;
