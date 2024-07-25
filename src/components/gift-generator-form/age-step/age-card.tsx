import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Props {
	title?: string
	age: string
	selected?: boolean
	onSelect: () => void
}

export default function AgeCard({ title, age, selected, onSelect }: Props) {
	return (
		<Card
			className={cn(
				"flex w-full cursor-pointer flex-col items-center gap-2 rounded-2xl border transition-colors duration-300 hover:bg-orange-100",
				selected ? "bg-orange-100" : "bg-white"
			)}
			onClick={onSelect}
		>
			<header>
				<h3>{title || age}</h3>
			</header>
		</Card>
	)
}
