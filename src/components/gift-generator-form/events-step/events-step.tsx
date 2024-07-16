"use client"

import Input from "@/components/ui/input"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Event } from "@/types/types"
import EventCard from "./event-card"

type ItemType = {
	title: string
	value: Event
	icon: string
}

const items: ItemType[] = [
	{
		title: "Cumpleaños",
		value: "anniversary",
		icon: "icon-anniversary.svg"
	},
	{
		title: "Navidad",
		value: "christmas",
		icon: "icon-candy.svg"
	},
	{
		title: "San Valentín",
		value: "valentine",
		icon: "icon-heart.svg"
	},
	{
		title: "Graduación",
		value: "graduation",
		icon: "icon-graduation.svg"
	}
]

export default function EventsStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	function handleEventSelected(event: Event) {
		setGift({
			...gift,
			event
		})
		nextStep()
	}

	return (
		<div className="flex w-full flex-col text-center">
			<h2 className="mb-10 text-2xl font-bold">¿Que evento estas celebrando?</h2>
			<div className="grid grid-cols-2 gap-4">
				{items.map(item => (
					<EventCard
						key={item.title}
						title={item.title}
						icon={item.icon}
						onSelect={() => handleEventSelected(item.value)}
					/>
				))}
				<div className="col-span-2 my-4 flex w-full items-center gap-4">
					<p>Otro:</p>
					<Input className="h-10 w-full" placeholder="Boda" />
				</div>
			</div>
		</div>
	)
}
