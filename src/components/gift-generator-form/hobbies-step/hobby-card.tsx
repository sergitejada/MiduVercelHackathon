import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
	title: string
	icon: string
	selected?: boolean
	onSelect?: () => void
}

export default function HobbyCard({ title, icon, selected, onSelect }: Props) {
	return (
		<Card
			className={cn("min-h-12 cursor-pointer hover:bg-orange-100", selected ? "bg-orange-100" : "bg-white")}
			onClick={() => (onSelect ? onSelect() : null)}
		>
			<div className="flex h-full items-center gap-6 px-2">
				<Card className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 drop-shadow-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-2 w-2 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</Card>
				{icon && <Image src={`/assets/${icon}`} width={36} height={36} alt={title} className="h-full max-h-6" />}
				<span className="tracking-wide">{title}</span>
			</div>
		</Card>
	)
}
