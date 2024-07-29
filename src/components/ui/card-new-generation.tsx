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
}

export default function CardNewGeneration({ name, description, isFlipped: initIsFlipped }: Props) {
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
					<Image src="/assets/present.svg" alt="Gift" width={350} height={350} className="mx-auto rounded" />
					<p className="text-center">CLICK PARA REVELAR</p>
				</Card>
				<Card className="flex h-[28rem] w-full max-w-80 flex-col justify-between gap-8 transition-none">
					<div className="flex flex-col gap-8">
						<Image src="/assets/royal-oak.jpg" alt="Image" width={350} height={350} className="rounded" />
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold">{name}</h3>
							<p className="text-xs text-gray-600">{description}</p>
						</div>
					</div>
					<div className="flex justify-start gap-2">
						<GoogleButton onlyLogo={true} url={name} />
						<AmazonButton onlyLogo />
					</div>
				</Card>
			</ReactCardFlip>
		</article>
	)
}
