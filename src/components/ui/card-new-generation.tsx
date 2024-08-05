"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import AmazonButton from "./amazon-button"
import Card from "./card"
import GoogleButton from "./google-button"

interface Props {
	name: string
	description?: string
	img?: string
	isFlipped?: boolean
	key?: string
}

const fallbackImage = "/assets/present.svg"

export default function CardNewGeneration({ name, description, img, isFlipped: initIsFlipped, key }: Props) {
	const [isFlipped, setIsFlipped] = useState(initIsFlipped || false)

	function handleFlipCard() {
		setIsFlipped(prevState => !prevState)
	}

	return (
		<article>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<Card
					onClick={handleFlipCard}
					className={cn(
						"flex h-[28rem] w-full cursor-pointer flex-col justify-between rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)]",
						!isFlipped && "transition-transform hover:scale-105"
					)}
				>
					<Image
						src="/assets/present.svg"
						alt="Gift"
						width="350"
						height="350"
						className="mx-auto aspect-square h-auto w-auto rounded"
						unoptimized
					/>
					<p className="text-center">CLIC PARA REVELAR</p>
				</Card>
				<Card className="flex h-[30rem] w-96 flex-col justify-between gap-8 transition-none lg:w-full lg:max-w-80">
					<div className="flex flex-col gap-8">
						<Image
							src={img ?? fallbackImage}
							alt="Image"
							width="200"
							height="200"
							className="mx-auto aspect-square rounded"
							priority
							unoptimized
						/>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold">{name}</h3>
							<p className="text-xs text-gray-600">{description}</p>
						</div>
					</div>
					<div className="flex justify-center gap-8">
						<GoogleButton onlyLogo url={name} />
						<AmazonButton onlyLogo search={name} />
					</div>
				</Card>
			</ReactCardFlip>
		</article>
	)
}
