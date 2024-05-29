import { Button } from "@/components/ui";

function TestPage() {
	return (
		<div className="flex h-svh w-full items-center justify-center">
			<Button size={{ initial: "medium", lg: "large" }}>Sign In</Button>
		</div>
	);
}

export default TestPage;
