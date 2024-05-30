"use client";

import { IconBox, Logo } from "@/components/common";
import { Button, Form } from "@/components/ui";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignInPage() {
	const methods = useForm({
		defaultValues: { email: "", password: "" },
	});

	const { control } = methods;

	return (
		<main className="mx-6 my-14 w-full max-w-[342px] rounded-[16px] border-[1.4px] border-medinfo-light-2 p-6 shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)]">
			<Logo className="max-lg:h-[46px] max-lg:w-[60px]" />

			<h1 className="text-medinfo-primary-main-darker mx-auto mt-3 max-w-[186px] text-center text-[24px] font-semibold leading-[32px]">
				Sign in to MedInfo Nigeria
			</h1>

			<Form.Root methods={methods} className="mt-8 gap-[14px]">
				<Form.Item control={control} name="email" className="gap-1 font-roboto">
					<Form.Label className="font-medium">Email</Form.Label>

					<div className="flex items-center justify-between gap-4 rounded-[8px] border-[1.4px] border-medinfo-primary-main px-4 py-3">
						<span>
							<IconBox icon="mynaui:envelope" className="size-5" />
						</span>

						<Form.Input
							type="email"
							placeholder="enter email"
							className="border-none p-0 font-medium placeholder:text-medinfo-dark-4 focus-visible:ring-transparent"
						/>
					</div>
				</Form.Item>

				<Form.Item control={control} name="password" className="gap-1 font-roboto">
					<Form.Label className="font-medium">Password</Form.Label>

					<div className="flex items-center justify-between gap-4 rounded-[8px] border-[1.4px] border-medinfo-primary-main px-4 py-3">
						<span>
							<IconBox icon="mynaui:lock-password" className="size-5" />
						</span>

						<Form.Input
							type={"password"}
							placeholder="enter password"
							className="border-none p-0 font-medium placeholder:text-medinfo-dark-4 focus-visible:ring-transparent"
						/>
					</div>

					<Link href="#forgot" className="mt-1 self-end font-work-sans text-medinfo-primary-main">
						Forgot password?
					</Link>
				</Form.Item>

				<article className="flex flex-col items-center gap-[14px]">
					<p className="font-roboto text-medinfo-dark-4">Or</p>

					<div className="flex gap-8">
						<Button size="small" theme="outline" className="rounded-[6px]">
							<IconBox icon="icon-park-outline:google" className="size-5 lg:size-6" />
						</Button>

						<Button size="small" theme="outline" className="rounded-[6px]">
							<IconBox icon="basil:facebook-outline" className="size-5 lg:size-6" />
						</Button>
					</div>

					<Button type="submit">Sign In</Button>

					<div className="space-y-1 text-center">
						<Link href="#doctor" className="text-medinfo-primary-main">
							Sign in as a doctor
						</Link>
						<p>
							Don't have an account?{" "}
							<Link href="/signup" className="text-medinfo-primary-main">
								Sign up
							</Link>
						</p>
					</div>
				</article>
			</Form.Root>
		</main>
	);
}

export default SignInPage;
