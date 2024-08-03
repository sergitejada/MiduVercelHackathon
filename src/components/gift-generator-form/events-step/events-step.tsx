"use client"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Event } from "@/types/types"
import GiftGeneratorFormFooter from "../gift-generator-form-footer"
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

	function handleCustomEvent(e: React.MouseEvent<HTMLButtonElement>) {
		if (gift?.event) {
			nextStep()
		}
	}

	let customEventTimeout: NodeJS.Timeout
	function handleInputCustomEventChanged(e: React.ChangeEvent<HTMLInputElement>) {
		clearTimeout(customEventTimeout)

		const value = e.target.value
		if (value.length === 0) {
			setGift({
				...gift,
				event: ""
			})
		} else {
			customEventTimeout = setTimeout(() => {
				setGift({
					...gift,
					event: value
				})
			}, 300)
		}
	}

	const isCustom = gift?.event && !items.some(item => item.value === gift?.event)

	return (
		<>
			<div className="flex w-full flex-col text-center">
				<h2 className="mb-10 text-2xl font-bold">¿Qué evento estás celebrando?</h2>
				<div className="flex flex-col gap-4">
					<div className="grid gap-4 sm:grid-cols-2">
						{items.map(item => (
							<EventCard
								key={item.title}
								title={item.title}
								icon={item.icon}
								selected={gift?.event === item.value}
								onSelect={() => handleEventSelected(item.value)}
							/>
						))}
					</div>
					<div className="col-span-2 my-4 flex w-full items-center gap-4">
						<p>Otro:</p>
						<Input
							className="h-10 w-full"
							placeholder="Boda"
							defaultValue={isCustom ? gift?.event : undefined}
							onChange={handleInputCustomEventChanged}
						/>
					</div>
				</div>
			</div>
			<GiftGeneratorFormFooter>
				<Button disabled={!gift?.event} onClick={handleCustomEvent}>
					Siguiente
				</Button>
			</GiftGeneratorFormFooter>
		</>
	)
}
