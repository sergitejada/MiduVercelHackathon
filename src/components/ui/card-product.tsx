import Image from "next/image"
import AmazonButton from "./amazon-button"
import GoogleButton from "./google-button"

interface Props {
	src: string
	title: string
	description: string
	link: string
}

export default function CardProduct({ src, title, description, link }: Props) {
	return (
		<div className="mt-4 flex gap-8 border p-1">
			<div>
				<Image src={src} alt={""} width={150} height={150} className="h-[150px] w-[150px] rounded object-cover" />
			</div>
			<div className="mt-6 flex flex-col gap-4">
				<h4>{title}</h4>
				<div className="flex flex-row gap-4">
					<GoogleButton />
					<AmazonButton />
					<AmazonButton />
				</div>
			</div>
		</div>
	)
}
