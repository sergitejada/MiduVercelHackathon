import { GiftFormSteps } from "@/consts/consts"
import StepItem from "./step-item"

interface Props {
	step: number
}

export default function FormSteps({ step: currentStep }: Props) {
	return (
		<ol className="mb-4 flex w-full items-center justify-center sm:mb-5">
			{GiftFormSteps.map((step, index) => (
				<StepItem key={step} step={index + 1} currentStep={currentStep} steps={GiftFormSteps} />
			))}
		</ol>
	)
}
