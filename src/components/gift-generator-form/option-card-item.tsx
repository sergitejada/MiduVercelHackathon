import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
	title: string
	src: string
	selected?: boolean
	onSelect?: () => void
}

export default function OptionCardItem({ title, src, selected, onSelect }: Props) {
	return (
		<Card
			className={cn(
				"size-60 transition-colors duration-300 hover:cursor-pointer hover:bg-orange-100",
				selected ? "bg-orange-100" : "bg-white"
			)}
			onClick={onSelect}
		>
			<header>
				<h3 className="font-semibold">{title}</h3>
			</header>
			<div className="my-8 flex justify-center">
				<Image src={src} width={120} height={120} alt="man" />
			</div>
		</Card>
	)
}
