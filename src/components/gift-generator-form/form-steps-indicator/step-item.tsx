import { cn } from "@/lib/utils"

interface Props {
	step: number
	currentStep: number
	steps: string[]
	onClick: (step: number) => void
}

export default function StepItem({ step, currentStep, steps, onClick }: Props) {
	return (
		<li key={step.toString()} className={`flex items-center ${step !== steps.length ? "w-full" : ""} text-black`}>
			<div
				className={cn(
					"flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12",
					step === currentStep ? "bg-orange-100" : "bg-white",
					step < currentStep && "bg-orange-300",
					step <= currentStep && "cursor-pointer"
				)}
				onClick={() => (onClick ? onClick(step) : null)}
			>
				{step}
			</div>
			{step < steps.length && (
				<div
					className={cn("h-1 w-full border-4 border-b", {
						"border-orange-300": step < currentStep,
						"border-neutral-200": step > currentStep
					})}
				/>
			)}
		</li>
	)
}
