export default function StepsIndicator() {
	const steps = [1, 2, 3, 4, 5]
	const activeStep = 1 // El paso actual puede ser dinámico

	return (
		<ol className="mb-4 flex w-full items-center justify-center sm:mb-5">
			{steps.map((step, index) => (
				<li key={index} className={`flex items-center ${index !== steps.length - 1 ? "w-full" : ""} text-black`}>
					<div
						className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black ${step === activeStep ? "bg-orange-200" : "bg-white"} drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12`}
					>
						{step}
					</div>
					{index < steps.length - 1 && <div className="h-1 w-full border-4 border-b border-neutral-200" />}
				</li>
			))}
		</ol>
	)
}
