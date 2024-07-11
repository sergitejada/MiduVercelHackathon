import Card from "@/components/ui/card"
import Image from "next/image"

interface Props {
	title: string
	src: string
	onSelect?: () => void
}

export default function OptionCardItem({ title, src, onSelect }: Props) {
	return (
		<Card className="size-60 transition-colors hover:cursor-pointer hover:bg-orange-100" onClick={onSelect}>
			<header>
				<h3 className="font-semibold">{title}</h3>
			</header>
			<div className="my-8 flex justify-center">
				<Image src={src} width={120} height={120} alt="man" />
			</div>
		</Card>
	)
}
