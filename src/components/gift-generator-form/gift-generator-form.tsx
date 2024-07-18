"use client"

import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import { useGiftGenerator } from "@/hooks/use-gift-generator"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useMemo } from "react"
import AgeStep from "./age-step/age-step"
import EventsStep from "./events-step/events-step"
import FormSteps from "./form-steps-indicator/form-steps-indicator"
import GenreStep from "./genre-step/genre-step"
import HobbiesStep from "./hobbies-step/hobbies-step"
import MoreDetailsStep from "./more-details-step/more-details-step"
import RelationStep from "./relation-step/relation-step"

const stepComponents = {
	1: <GenreStep />,
	2: <RelationStep />,
	3: <AgeStep />,
	4: <EventsStep />,
	5: <HobbiesStep />,
	6: <MoreDetailsStep />
}

export default function GiftGeneratorForm() {
	const step = useGiftGeneratorFormStore(state => state.step)
	const previousStep = useGiftGeneratorFormStore(state => state.previousStep)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	const { hasPrevious, hasNext } = useGiftGenerator()

	const currentStepComponent = useMemo(() => {
		switch (step) {
			case 1:
				return stepComponents[1]
			case 2:
				return stepComponents[2]
			case 3:
				return stepComponents[3]
			case 4:
				return stepComponents[4]
			case 5:
				return stepComponents[5]
			case 6:
				return stepComponents[6]
		}
	}, [step])

	return (
		<Card className="flex h-3/4 w-[800px] flex-col justify-between p-8">
			<header>
				<FormSteps step={step} />
			</header>
			<div className="mt-8 flex flex-1 flex-col gap-4">{currentStepComponent ?? <p>No step</p>}</div>
			<footer className="mt-4 flex justify-between">
				{hasPrevious && <Button onClick={previousStep}>Back</Button>}
			</footer>
			<div className="w-36" />
		</Card>
	)
}
