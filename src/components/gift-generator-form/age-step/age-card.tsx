import Card from "@/components/ui/card"

interface Props {
	age: string
	onSelect: () => void
}

export default function AgeCard({ age, onSelect }: Props) {
	return (
		<Card
			className="flex w-full cursor-pointer flex-col items-center gap-2 rounded-2xl border transition-colors duration-300 hover:bg-orange-100"
			onClick={onSelect}
		>
			<header>
				<h3>{age}</h3>
			</header>
		</Card>
	)
}
