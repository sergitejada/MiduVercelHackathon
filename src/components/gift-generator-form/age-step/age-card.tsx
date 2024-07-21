import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Props {
	age: string
	selected?: boolean
	onSelect: () => void
}

export default function AgeCard({ age, selected, onSelect }: Props) {
	return (
		<Card
			className={cn(
				"flex w-full cursor-pointer flex-col items-center gap-2 rounded-2xl border transition-colors duration-300 hover:bg-orange-100",
				selected ? "bg-orange-100" : "bg-white"
			)}
			onClick={onSelect}
		>
			<header>
				<h3>{age}</h3>
			</header>
		</Card>
	)
}
