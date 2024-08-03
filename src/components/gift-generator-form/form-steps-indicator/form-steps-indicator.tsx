import { GIFT_FORM_STEPS } from "@/consts/consts"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import StepItem from "./step-item"

interface Props {
	step: number
}

export default function FormSteps({ step: currentStep }: Props) {
	const step = useGiftGeneratorFormStore(state => state.step)
	const setStep = useGiftGeneratorFormStore(state => state.setStep)

	function handleClick(step: number) {
		if (step <= currentStep) {
			setStep(step)
		}
	}

	return (
		<ol className="mb-4 flex w-full items-center justify-center sm:mb-5">
			{GIFT_FORM_STEPS.map((step, index) => (
				<StepItem key={step} step={index + 1} currentStep={currentStep} steps={GIFT_FORM_STEPS} onClick={handleClick} />
			))}
		</ol>
	)
}
