"use client";

import { IconBox, Logo } from "@/components/common";
import { Button, Form } from "@/components/ui";
import { useForm } from "react-hook-form";

function SignInPage() {
	const methods = useForm({
		defaultValues: { email: "", password: "" },
	});

	const { control } = methods;

	return (
		<main className="mx-6 my-14 w-full max-w-[342px] rounded-[16px] border-[1.4px] border-medinfo-light-2 p-6 shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)]">
			<Logo className="max-lg:h-[46px] max-lg:w-[60px]" />

			<h1 className="mx-auto max-w-[186px] text-center text-[24px] font-semibold leading-[32px]">
				Sign in to MedInfo Nigeria
			</h1>

			<Form.Root methods={methods}>
				<Form.Item control={control} name="email">
					<Form.Label>Email</Form.Label>

					<div className="flex items-center justify-between gap-4 rounded-[8px] border-[1.4px] border-medinfo-primary px-4 py-3">
						<span>
							<IconBox icon="mynaui:envelope" className="size-5" />
						</span>

						<Form.Input
							type="email"
							placeholder="Enter email"
							className="border-none p-0 font-medium focus-visible:ring-transparent"
						/>
					</div>
				</Form.Item>

				<Form.Item control={control} name="password">
					<Form.Label>Password</Form.Label>

					<div className="flex items-center justify-between gap-4 rounded-[8px] border-[1.4px] border-medinfo-primary px-4 py-3">
						<span>
							<IconBox icon="mynaui:lock-password" className="size-5" />
						</span>

						<Form.Input
							type="password"
							placeholder="Enter password"
							className="border-none p-0 font-medium focus-visible:ring-transparent"
						/>

						<Button unstyled={true}>
							<IconBox icon="teenyicons:eye-outline" className="size-5" />
						</Button>
					</div>
				</Form.Item>
			</Form.Root>
		</main>
	);
}

export default SignInPage;
