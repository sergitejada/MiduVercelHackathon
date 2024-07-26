"use client"

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
	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setIsFlipped(prevState => !prevState)
	}

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div
				onClick={handleClick}
				className="flex h-96 min-h-72 cursor-pointer flex-col justify-between rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)] transition-transform hover:scale-105"
			>
				<Image src="/assets/present.svg" alt="" width={350} height={350} className="rounded" />
				<p className="text-center">CLICK PARA REVELAR</p>
			</div>

			<Card className="flex flex-col gap-8">
				<Image src="/assets/royal-oak.jpg" alt="" width={350} height={350} className="rounded" />

				<div className="flex flex-col gap-2">
					<h3 className="font-semibold">{name}</h3>
					<p className="text-xs text-gray-600">{description}</p>
				</div>
				<div className="flex gap-2">
					<GoogleButton only_logo={true} />
					<AmazonButton only_logo />
				</div>
			</Card>
		</ReactCardFlip>
	)
}
