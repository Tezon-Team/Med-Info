import { cnJoin } from "@/lib/utils/cn";
import type { Metadata } from "next";
import { Roboto, Work_Sans } from "next/font/google";
import "../styles/index.css";

type RootLayoutProps = {
	children: React.ReactNode;
};

const workSans = Work_Sans({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-work-sans",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "MedInfo",
	description: "Free access to knowledge and an easy chit-chat with the best doctors",
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={cnJoin(roboto.variable, workSans.variable)}>{children}</body>
		</html>
	);
}

export default RootLayout;
