"use client";

import { IconBox } from "@/components/common";
import { ChevronDownIcon } from "@/components/icons";
import { Accordion, Button, Card } from "@/components/ui";
import { useDragScroll } from "@/lib/hooks";
import { useElementList } from "@/lib/hooks/useElementList";
import { cnJoin } from "@/lib/utils/cn";
import { feature1, feature2, feature3, hero, tipPlaceHolder } from "@/public/assets/images/landing-page";
import Image from "next/image";
import Link from "next/link";

const coreServices = [
	{ imageSrc: feature1 as string, description: "SubSpecialists" },
	{ imageSrc: feature2 as string, description: "Open source library" },
	{ imageSrc: feature3 as string, description: "Virtual consultancy" },
];

const features = [
	{ icon: "ic:sharp-access-time", description: "Efficient and user-friendly" },
	{ icon: "fluent:access-time-24-regular", description: "Accessible consultations" },
	{ icon: "mynaui:lock-password", description: "Ensured confidentiality" },
	{ icon: "mage:book-text", description: "Open library" },
];

const advantages = [
	{ icon: "mage:book-text", title: "24/7 availability" },
	{ icon: "solar:user-check-rounded-outline", title: "Remote visitation" },
	{ icon: "tabler:calendar-check", title: "Zero appointments" },
];

const FAQs = [
	{
		question: "Question 1",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 2",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 3",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor torto tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 4",
		answer:
			"Lorem ipsum dolor sit ame Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 5",
		answer:
			"Lorem ipsum dolor sit amet consectetur tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
];

function HomePage() {
	const [CoreServiceList] = useElementList();
	const [FeatureList] = useElementList();
	const [AdvantageList] = useElementList();
	const [FAQList] = useElementList();
	const [CardList] = useElementList();

	const { dragScrollProps, dragContainerClasses, dragItemClasses } = useDragScroll<HTMLUListElement>();

	return (
		<main className="mx-auto space-y-[56px] px-6 py-[56px] max-md:max-w-[400px] md:space-y-[92px] md:px-[70px] md:py-[92px] lg:px-[100px]">
			<section className="md:flex md:flex-row-reverse md:items-center md:gap-[67px]">
				<div>
					<h1 className="text-[clamp(32px,5.2vw,68px)] font-bold leading-10 text-medinfo-primary max-md:text-center md:text-balance md:leading-[76px] [&:hover>span]:text-medinfo-secondary-darker [&>span]:[transition:color_250ms_ease-in-out]">
						Free <span>access</span> to knowledge and an easy chit-chat with the best{" "}
						<span>doctors</span>
					</h1>

					<p className="mt-[15px] md:text-[18px] md:leading-[26px]">
						Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices
						pulvinar lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec
						tincidunt diam sit. Arcu ut platea ac purus. Tincidunt faucibus tristique interdum
						pharetra cras duis mauris. Viverra a placerat maecenas felis tristique lectus erat.
						Tempus nec vel euismod amet cras.
					</p>

					<Button size={{ lg: "large" }} className="mt-6">
						Join Us
					</Button>
				</div>

				<div className="relative ml-[19px] w-max shrink-0 max-md:mt-[calc(40px_+_19px)]">
					<span className="absolute bottom-[19px] right-[19px] z-[-1] block size-full rounded-[16px] bg-medinfo-primary md:bottom-[28px] md:right-[28px]" />

					<Image
						className="aspect-[223/273] min-h-[273px] md:aspect-[340/415] md:min-h-[415px]"
						src={hero as string}
						alt=""
						priority={true}
						width={223}
						height={273}
					/>
				</div>
			</section>

			<section>
				<h2 className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary md:text-[52px] md:font-bold md:leading-[60px]">
					Our Core Services
				</h2>

				<CoreServiceList
					className="mt-6 flex flex-col items-center gap-4 text-center text-[22px] font-medium md:mt-[56px] md:flex-row md:justify-center md:gap-[28px]"
					each={coreServices}
					render={(coreService, index) => (
						<li key={coreService.description}>
							<Image
								className={cnJoin(
									"aspect-[272/292] max-h-[292px] md:aspect-[340/362] md:max-h-[362px]",
									index === 1 && "md:mt-[80px]"
								)}
								src={coreService.imageSrc}
								alt=""
								width={272}
								height={292}
							/>
							<p className="mt-4">{coreService.description}</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary md:text-[52px] md:font-bold md:leading-[60px]">
					Why MedInfo Nigeria?
				</h2>

				<FeatureList
					className="mt-12 grid grid-cols-2 justify-center gap-x-5 gap-y-10 text-center md:mt-[88px] md:grid-cols-[repeat(4,_minmax(161px,248px))] md:gap-x-[28px]"
					each={features}
					render={(feature) => (
						<li
							key={feature.description}
							className="relative flex flex-col items-center justify-center rounded-[16px] border border-medinfo-primary px-[3.5px] py-[54px] md:px-[47px] md:py-[67px]"
						>
							<span className="md:text-10 absolute top-[-24px] block size-12 rounded-full bg-white p-3 text-[24px] [box-shadow:0_4px_4px_hsl(0,0%,0%,0.12)] md:size-[64px]">
								<IconBox icon={feature.icon} />
							</span>

							<p className="md:text-[20px]">{feature.description}</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary md:text-[52px] md:font-bold md:leading-[60px]">
					Advantages of Virtual Healthcare
				</h2>

				<AdvantageList
					className="mt-6 flex flex-col gap-6 md:mt-[56px] md:flex-row md:gap-[28px]"
					each={advantages}
					render={(advantage) => (
						<li key={advantage.title}>
							<span className="block size-[92px] rounded-[16px] bg-medinfo-primary-subtle p-6 text-[44px] text-medinfo-primary">
								<IconBox icon={advantage.icon} />
							</span>

							<h3 className="mt-5 text-[24px] font-semibold text-medinfo-primary">
								{advantage.title}
							</h3>

							<p className="mt-3">Lorem ipsum dolor sit amet consectetur. Placerat cras id.</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary md:text-[52px] md:font-bold md:leading-[60px]">
					Did you know?
				</h2>

				<CardList
					{...dragScrollProps}
					className={cnJoin(
						"mt-6 gap-5 [align-items:safe_center] md:mt-[56px]",
						dragContainerClasses
					)}
					each={[...Array(4).keys()]}
					render={(item) => (
						<Card
							as="li"
							key={item}
							className={cnJoin(
								"w-[161px] shrink-0 space-y-3 rounded-[16px] border-[1.4px] border-medinfo-light-1 pb-3 md:w-[276px]",
								dragItemClasses
							)}
						>
							<Card.Header>
								<Image
									className="min-h-[117px] rounded-t-[16px] object-cover md:max-h-[176px]"
									src={tipPlaceHolder as string}
									alt=""
									draggable={false}
									width={161}
									height={117}
								/>
							</Card.Header>

							<Card.Content className="px-3">Lorem ipsum dolor sit amet consectetur.</Card.Content>

							<Card.Footer className="px-3" asChild={true}>
								<Link href="/" className="flex items-center gap-4">
									Learn More
									<IconBox icon="material-symbols:play-arrow" className="text-[20px]" />
								</Link>
							</Card.Footer>
						</Card>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[28px] font-semibold leading-9 text-medinfo-primary md:text-[52px] md:font-bold md:leading-[60px]">
					Frequently Asked Questions
				</h2>

				<Accordion.Root type="single" collapsible={true} asChild={true}>
					<FAQList
						className="mt-6 w-full space-y-2 md:mt-[56px] md:space-y-4"
						each={FAQs}
						render={(FAQ) => (
							<Accordion.Item key={FAQ.question} value={FAQ.answer} asChild={true}>
								<li>
									<Accordion.Trigger
										icon={
											<span className="flex items-center justify-center rounded-full bg-medinfo-primary p-[10px] md:p-4">
												<ChevronDownIcon className="size-4 md:size-6" />
											</span>
										}
										classNames={{
											base: "text-[22px] md:font-semibold md:text-[32px] min-h-[68px] rounded-t-[16px] border-x border-t border-medinfo-primary-darker data-[state=closed]:rounded-b-[16px] data-[state=closed]:border-b py-[15px] px-6 md:p-6",
										}}
									>
										{FAQ.question}
									</Accordion.Trigger>

									<Accordion.Content className="rounded-b-[16px] border-x border-b border-medinfo-primary-darker px-6 pb-6 pt-0">
										<hr className="mb-4 h-[2px] bg-medinfo-secondary" />
										{FAQ.answer}
									</Accordion.Content>
								</li>
							</Accordion.Item>
						)}
					/>
				</Accordion.Root>
			</section>
		</main>
	);
}

export default HomePage;
