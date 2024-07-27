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
}

export default function CardNewGeneration({ name, description }: Props) {
	const [isFlipped, setIsFlipped] = useState(false)

	function handleFlipCard() {
		setIsFlipped(prevState => !prevState)
	}

	return (
		<article>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<Card
					onClick={handleFlipCard}
					className={cn(
						"flex h-[30rem] cursor-pointer flex-col justify-between rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)]",
						!isFlipped && "transition-transform hover:scale-105"
					)}
				>
					<Image src="/assets/present.svg" alt="Gift" width={350} height={350} className="rounded" />
					<p className="text-center">CLICK PARA REVELAR</p>
				</Card>
				<Card className="flex h-[30rem] flex-col gap-8 transition-none">
					<Image src="/assets/royal-oak.jpg" alt="Image" width={350} height={350} className="rounded" />
					<div className="flex flex-col gap-2">
						<h3 className="font-semibold">{name}</h3>
						<p className="text-xs text-gray-600">{description}</p>
					</div>
					<div className="flex gap-2">
						<GoogleButton onlyLogo={true} />
						<AmazonButton onlyLogo />
					</div>
				</Card>
			</ReactCardFlip>
		</article>
	)
}
