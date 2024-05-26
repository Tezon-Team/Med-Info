"use client";

import { ChevronDownIcon } from "@/components/icons";
import { Card, IconBox } from "@/components/primitives";
import { Accordion } from "@/components/ui";
import { useDragScroll } from "@/lib/hooks";
import { useElementList } from "@/lib/hooks/useElementList";
import { cnJoin } from "@/lib/utils/cn";
import { feature1, feature2, feature3, hero, tipPlaceHolder } from "@public/assets/images/landing-page";
import Image from "next/image";
import Link from "next/link";

const coreServices = [
	{ imageSrc: feature1 as string, description: "Subspecialists" },
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
		<main className="mx-auto space-y-[5.6rem] px-[2.4rem] py-[5.6rem] max-md:max-w-[40rem] md:space-y-[9.2rem] md:px-[7rem] md:py-[9.2rem] lg:px-[10rem]">
			<section className="md:flex md:flex-row-reverse md:items-center md:gap-[6.7rem]">
				<div>
					<h1 className="text-[clamp(3.2rem,5.2vw,6.8rem)] font-bold leading-[4rem] text-medinfo-primary max-md:text-center md:text-balance md:leading-[7.6rem] [&:hover>span]:text-medinfo-secondary-darker [&>span]:[transition:color_250ms_ease-in-out]">
						Free <span>access</span> to knowledge and an easy chit-chat with the best{" "}
						<span>doctors</span>
					</h1>

					<p className="mt-[1.5rem] md:text-[1.8rem] md:leading-[2.6rem]">
						Lorem ipsum dolor sit amet consectetur. Amet nunc bibendum vitae pretium ultrices
						pulvinar lacus ultrices. A id fermentum aliquet facilisi consequat tortor. Est donec
						tincidunt diam sit. Arcu ut platea ac purus. Tincidunt faucibus tristique interdum
						pharetra cras duis mauris. Viverra a placerat maecenas felis tristique lectus erat.
						Tempus nec vel euismod amet cras.
					</p>

					<button className="mt-[2.4rem] rounded-[8px] bg-medinfo-primary px-[2.4rem] py-[1.2rem] text-white md:px-[3.2rem] md:py-[1.8rem] md:text-[2rem]">
						Join Us
					</button>
				</div>

				<div className="relative ml-[1.9rem] w-max shrink-0 max-md:mt-[calc(4rem+1.9rem)]">
					<span className="absolute bottom-[1.9rem] right-[1.9rem] z-[-1] block size-full rounded-[16px] bg-medinfo-primary md:bottom-[2.8rem] md:right-[2.8rem]" />

					<Image
						className="aspect-[223/273] min-h-[27.3rem] md:aspect-[340/415] md:min-h-[41.5rem]"
						src={hero as string}
						alt=""
						priority={true}
						width={223}
						height={273}
					/>
				</div>
			</section>

			<section>
				<h2 className="text-center text-[2.8rem] font-semibold leading-[3.6rem] text-medinfo-primary md:text-[5.2rem] md:font-bold md:leading-[6rem]">
					Our Core Services
				</h2>

				<CoreServiceList
					className="mt-[2.4rem] flex flex-col items-center gap-[1.6rem] text-center text-[2.2rem] font-medium md:mt-[5.6rem] md:flex-row md:justify-center md:gap-[2.8rem]"
					each={coreServices}
					render={(coreService, index) => (
						<li key={coreService.description}>
							<Image
								className={cnJoin(
									"aspect-[272/292] max-h-[29.2rem] md:aspect-[340/362] md:max-h-[36.2rem]",
									index === 1 && "md:mt-[8rem]"
								)}
								src={coreService.imageSrc}
								alt=""
								width={272}
								height={290}
							/>
							<p className="mt-[1.6rem]">{coreService.description}</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[2.8rem] font-semibold leading-[3.6rem] text-medinfo-primary md:text-[5.2rem] md:font-bold md:leading-[6rem]">
					Why MedInfo Nigeria?
				</h2>

				<FeatureList
					className="mt-[4.8rem] grid grid-cols-2 justify-center gap-x-[2rem] gap-y-[4rem] text-center md:mt-[8.8rem] md:grid-cols-[repeat(4,_minmax(16.1rem,24.8rem))] md:gap-x-[2.8rem]"
					each={features}
					render={(feature) => (
						<li
							key={feature.description}
							className="relative flex flex-col items-center justify-center rounded-[16px] border border-medinfo-primary px-[0.35rem] py-[5.4rem] md:px-[4.7rem] md:py-[6.7rem]"
						>
							<span className="absolute top-[-2.4rem] block size-[4.8rem] rounded-full bg-white p-[1.2rem] text-[2.4rem] [box-shadow:0_4px_4px_hsl(0,0%,0%,0.12)] md:size-[6.4rem] md:text-[4rem]">
								<IconBox icon={feature.icon} />
							</span>

							<p className="md:text-[2rem]">{feature.description}</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[2.8rem] font-semibold leading-[3.6rem] text-medinfo-primary md:text-[5.2rem] md:font-bold md:leading-[6rem]">
					Advantages of Virtual Healthcare
				</h2>

				<AdvantageList
					className="mt-[2.4rem] flex flex-col gap-[2.4rem] md:mt-[5.6rem] md:flex-row md:gap-[2.8rem]"
					each={advantages}
					render={(advantage) => (
						<li key={advantage.title}>
							<span className="block size-[9.2rem] rounded-[16px] bg-medinfo-primary-subtle p-[2.4rem] text-[4.4rem] text-medinfo-primary">
								<IconBox icon={advantage.icon} />
							</span>

							<h3 className="mt-[2rem] text-[2.4rem] font-semibold text-medinfo-primary">
								{advantage.title}
							</h3>

							<p className="mt-[1.2rem]">
								Lorem ipsum dolor sit amet consectetur. Placerat cras id.
							</p>
						</li>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[2.8rem] font-semibold leading-[3.6rem] text-medinfo-primary md:text-[5.2rem] md:font-bold md:leading-[6rem]">
					Did you know?
				</h2>

				<CardList
					{...dragScrollProps}
					className={cnJoin(
						"mt-[2.4rem] gap-[2rem] [align-items:safe_center] md:mt-[5.6rem]",
						dragContainerClasses
					)}
					each={[...Array(4).keys()]}
					render={(item) => (
						<Card
							as="li"
							key={item}
							className={cnJoin(
								"w-[16.1rem] shrink-0 space-y-[1.2rem] rounded-[16px] border-[1.4px] border-medinfo-light-1 pb-[1.2rem] md:w-[27.6rem]",
								dragItemClasses
							)}
						>
							<Card.Header>
								<Image
									className="min-h-[11.7rem] rounded-t-[16px] object-cover md:max-h-[17.6rem]"
									src={tipPlaceHolder as string}
									alt=""
									draggable={false}
									width={161}
									height={117}
								/>
							</Card.Header>

							<Card.Content className="px-[1.2rem]">
								Lorem ipsum dolor sit amet consectetur.
							</Card.Content>

							<Card.Footer className="px-[1.2rem]" asChild={true}>
								<Link href="/" className="flex items-center gap-[1.6rem]">
									Learn More
									<IconBox icon="material-symbols:play-arrow" className="text-[2rem]" />
								</Link>
							</Card.Footer>
						</Card>
					)}
				/>
			</section>

			<section>
				<h2 className="text-center text-[2.8rem] font-semibold leading-[3.6rem] text-medinfo-primary md:text-[5.2rem] md:font-bold md:leading-[6rem]">
					Frequently Asked Questions
				</h2>

				<Accordion.Root type="single" collapsible={true} asChild={true}>
					<FAQList
						className="mt-[2.4rem] w-full space-y-[0.8rem] md:mt-[5.6rem] md:space-y-[1.6rem]"
						each={FAQs}
						render={(FAQ) => (
							<Accordion.Item key={FAQ.question} value={FAQ.answer} asChild={true}>
								<li>
									<Accordion.Trigger
										icon={
											<span className="flex items-center justify-center rounded-full bg-medinfo-primary p-[1rem] md:p-[1.6rem]">
												<ChevronDownIcon className="size-[1.6rem] md:size-[2.4rem]" />
											</span>
										}
										classNames={{
											base: "text-[2.2rem] md:font-semibold md:text-[3.2rem] min-h-[6.8rem] rounded-t-[16px] border-x border-t border-medinfo-primary-darker data-[state=closed]:rounded-b-[16px] data-[state=closed]:border-b py-[1.5rem] px-[2.4rem] md:p-[2.4rem]",
										}}
									>
										{FAQ.question}
									</Accordion.Trigger>

									<Accordion.Content className="rounded-b-[16px] border-x border-b border-medinfo-primary-darker px-[2.4rem] pb-[2.4rem] pt-0">
										<hr className="mb-[1.6rem] h-[2px] bg-medinfo-secondary" />
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
