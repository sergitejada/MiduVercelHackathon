"use client"

import Card from "@/components/ui/card"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useEffect, useMemo } from "react"
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
	const resetStore = useGiftGeneratorFormStore(state => state.resetStore)

	useEffect(() => {
		return () => {
			resetStore()
		}
	}, [])

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
		<Card className="m-8 flex h-fit min-h-[38rem] flex-col justify-between p-8 lg:m-0 lg:w-[800px]">
			<header>
				<FormSteps step={step} />
			</header>
			<div className="mt-8 flex flex-1 flex-col justify-between gap-4">{currentStepComponent ?? <p>No step</p>}</div>
		</Card>
	)
}
