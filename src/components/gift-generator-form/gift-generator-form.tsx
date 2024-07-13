"use client"

import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import { useGiftGenerator } from "@/hooks/use-gift-generator"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import GenreStep from "./genre-step/genre-step"
import FormSteps from "./steps/form-steps"

export default function GiftGeneratorForm() {
	const step = useGiftGeneratorFormStore(state => state.step)
	const previousStep = useGiftGeneratorFormStore(state => state.previousStep)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	const { hasPrevious, hasNext } = useGiftGenerator()

	return (
		<Card className="flex h-3/4 min-w-[600px] flex-col justify-between p-8">
			<header>
				<FormSteps step={step} />
			</header>
			<div className="mt-8 flex flex-1 flex-col gap-4">{step === 1 ? <GenreStep /> : <p>No step</p>}</div>
			<footer className="flex justify-between">
				{hasPrevious && <Button onClick={previousStep}>Back</Button>}
				{hasNext && step !== 1 && <Button onClick={nextStep}>Next</Button>}
			</footer>
			<div className="w-36" />
		</Card>
	)
}
