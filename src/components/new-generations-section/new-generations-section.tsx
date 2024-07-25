"use client"

import { useAmazonApi } from "@/hooks/use-amazon-api"
import CardGift from "../ui/card-article"

export default function NewGenerationsSection() {
	const amazonApi = useAmazonApi()
	console.log(amazonApi)
	return (
		<section id="ideas-recientes" className="relative py-20">
			<div className="container mx-auto flex w-full flex-col gap-20">
				<h2 className="text-3xl font-semibold">Ideas Recientes</h2>
				<div className="grid grid-cols-4 gap-12">
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
					<CardGift title="Home" link="/" description="a" src="/assets/royal-oak.jpg" />
				</div>
			</div>
		</section>
	)
}
