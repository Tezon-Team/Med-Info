import { Footer, NavBar } from "./_components";

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default GlobalLayout;
