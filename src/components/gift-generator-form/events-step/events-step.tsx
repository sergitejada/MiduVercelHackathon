import Card from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Event } from "@/types/types"
import Image from "next/image"

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
	return (
		<div className="flex flex-col">
			<h2 className="mb-10 text-2xl font-bold">¿Que evento estas celebrando?</h2>
			<div className="grid grid-cols-2 gap-4">
				{items.map(item => (
					<Card key={item.title} className="min-h-20 cursor-pointer hover:bg-orange-100">
						<div className="flex h-full items-center gap-6 px-2">
							{item.icon && (
								<Image
									src={`/assets/${item.icon}`}
									width={36}
									height={36}
									alt={item.title}
									className="h-full max-h-10"
								/>
							)}
							<span className="tracking-wide">{item.title}</span>
						</div>
					</Card>
				))}
				<div className="flex w-full items-center gap-4">
					<p>Otro:</p>
					<Input className="h-10 w-full" placeholder="Boda" />
				</div>
			</div>
		</div>
	)
}
