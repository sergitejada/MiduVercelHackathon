import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
	title: string
	icon: string
	selected?: boolean
	onSelect?: () => void
}

export default function EventCard({ title, icon, selected, onSelect }: Props) {
	return (
		<Card
			className={cn("min-h-20 cursor-pointer hover:bg-orange-100", selected ? "bg-orange-100" : "bg-white")}
			onClick={() => (onSelect ? onSelect() : null)}
		>
			<div className="flex h-full items-center gap-6 px-2">
				{icon && <Image src={`/assets/${icon}`} width={36} height={36} alt={title} className="h-full max-h-10" />}
				<span className="tracking-wide">{title}</span>
			</div>
		</Card>
	)
}
