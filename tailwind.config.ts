import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const tailwindConfig = withTV({
	content: ["./**/*.{ts,tsx,mdx}"],

	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1000px",
			xl: "1280px",
		},

		extend: {
			colors: {
				medinfo: {
					primary: {
						main: "var(--color-primary-main)",
						darker: "var(--color-primary-darker)",
						lighter: "var(--color-primary-lighter)",
						subtle: "var(--color-primary-subtle)",
					},

					secondary: {
						main: "var(--color-secondary-main)",
						darker: "var(--color-secondary-darker)",
						lighter: "var(--color-secondary-lighter)",
						subtle: "var(--color-secondary-subtle)",
					},

					light: {
						"1": "var(--color-light-1)",
						"2": "var(--color-light-2)",
						"3": "var(--color-light-3)",
						"4": "var(--color-light-4)",
					},

					dark: {
						"1": "var(-color-dark-1)",
						"2": "var(-color-dark-2)",
						"3": "var(-color-dark-3)",
						"4": "var(-color-dark-4)",
					},
				},

				shadcn: {
					background: "theme(colors.black)",
					foreground: "hsl(222.2 47.4% 11.2%)",
					popover: "theme(colors.background)",
					primary: "theme(colors.foreground)",
					"primary-foreground": "hsl(210 40% 98%)",
					"popover-foreground": "theme(colors.foreground)",
					accent: "hsl(210 40% 96.1%)",
					"accent-foreground": "theme(colors.foreground)",
					input: "hsl(214.3 31.8% 91.4%)",
					border: "theme(colors.input)",
					ring: "hsl(215 20.2% 65.1%)",
					muted: "theme(colors.accent)",
					"muted-foreground": "hsl(215.4 16.3% 46.9%)",
				},
			},

			fontFamily: {
				roboto: ["var(--font-roboto)"],
				"work-sans": ["var(--font-work-sans)"],
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},

			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},

	plugins: [
		plugin(({ addComponents }) => {
			const scrollNone = {
				".scrollbar-none": {
					"-ms-overflow-style": "none" /* IE and Edge */,
					"scrollbar-width": "none" /* Firefox */,

					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			};

			addComponents(scrollNone);
		}),
	],
}) satisfies Config;

export default tailwindConfig;
