import Input from "@/components/ui/input"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Hobbies } from "@/types/types"
import EventCard from "../events-step/event-card"

type ItemType = {
	title: string
	value: Hobbies
	icon: string
}

const items: ItemType[] = [
	{
		title: "Cumpleaños",
		value: "cooking",
		icon: "icon-anniversary.svg"
	},
	{
		title: "Navidad",
		value: "music",
		icon: "icon-candy.svg"
	},
	{
		title: "San Valentín",
		value: "other",
		icon: "icon-heart.svg"
	},
	{
		title: "Graduación",
		value: "reading",
		icon: "icon-graduation.svg"
	}
]

export default function HobbiesStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	function handleEventSelected(hobbies: Hobbies[]) {
		setGift({
			...gift,
			hobbies
		})
		nextStep()
	}

	return (
		<div className="flex w-full flex-col text-center">
			<h2 className="mb-10 text-2xl font-bold">¿Qué hobbies le gustan?</h2>
			<div className="grid grid-cols-2 gap-4">
				{items.map(item => (
					<EventCard
						key={item.title}
						title={item.title}
						icon={item.icon}
						selected={gift?.hobbies?.includes(item.value)}
						onSelect={() => handleEventSelected([item.value])}
					/>
				))}
				<div className="col-span-2 my-4 flex w-full items-center gap-4">
					<p>Otro:</p>
					<Input className="h-10 w-full" placeholder="Play league of legends" />
				</div>
			</div>
		</div>
	)
}
