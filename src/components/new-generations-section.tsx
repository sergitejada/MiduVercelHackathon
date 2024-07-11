"use client"

import CardGift from "./ui/card-gift"

export default function NewGenerationsSection() {
	return (
		<div className="relative mx-auto flex max-w-7xl flex-col gap-20">
			<h2 className="text-3xl font-semibold">Ideas Recientes</h2>
			<div className="flex flex-wrap gap-8">
				<CardGift />
				<CardGift />
				<CardGift />
				<CardGift />
				<CardGift />
				<CardGift />
				<CardGift />
				<CardGift />
			</div>
		</div>
	)
}
