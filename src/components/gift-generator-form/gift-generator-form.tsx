"use client"

import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import { useGiftGenerator } from "@/hooks/use-gift-generator"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import GenreStep from "./genre-step/genre-step"

export default function GiftGeneratorForm() {
	const step = useGiftGeneratorFormStore(state => state.step)
	const previousStep = useGiftGeneratorFormStore(state => state.previousStep)

	const { hasPrevious } = useGiftGenerator()

	return (
		<Card className="flex min-w-[600px] cursor-pointer flex-col justify-between p-8">
			<header>
				<h1 className="text-white>Generador de text-6xl font-bold">AAAAAA</h1>
			</header>
			<div className="mt-8 grid flex-1 grid-cols-2 gap-4">{step === "genre" ? <GenreStep /> : <p>No step</p>}</div>
			<footer className="flex justify-between">{hasPrevious && <Button onClick={previousStep}>Back</Button>}</footer>
			<div className="w-36" />
		</Card>
	)
}
