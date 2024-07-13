import Card from "@/components/ui/card"
import { Event } from "@/types/types"

type ItemType = {
	title: string
	value: Event
}

const items: ItemType[] = [
	{
		title: "Cumpleaños",
		value: "anniversary"
	},
	{
		title: "Navidad",
		value: "christmas"
	},
	{
		title: "San Valentín",
		value: "valentine"
	},
	{
		title: "Aniversario",
		value: "anniversary"
	},
	{
		title: "Graduación",
		value: "graduation"
	},
	{
		title: "Amigo invisible",
		value: "other"
	}
]

export default function EventsStep() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<Card>Button</Card>
			<Card>Button</Card>
			<Card>Button</Card>
			<Card>Button</Card>
			<Card>Button</Card>
			<Card>Button</Card>
		</div>
	)
}
