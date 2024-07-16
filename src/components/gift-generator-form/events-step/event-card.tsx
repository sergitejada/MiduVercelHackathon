import Card from "@/components/ui/card"
import Image from "next/image"

interface Props {
	title: string
	icon: string
	onSelect?: () => void
}

export default function EventCard({ title, icon, onSelect }: Props) {
	return (
		<Card className="min-h-20 cursor-pointer hover:bg-orange-100" onClick={() => (onSelect ? onSelect() : null)}>
			<div className="flex h-full items-center gap-6 px-2">
				{icon && <Image src={`/assets/${icon}`} width={36} height={36} alt={title} className="h-full max-h-10" />}
				<span className="tracking-wide">{title}</span>
			</div>
		</Card>
	)
}
