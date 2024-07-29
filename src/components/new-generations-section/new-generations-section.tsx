"use client"

import CardNewGeneration from "../ui/card-new-generation"

export default function NewGenerationsSection() {
	// const amazonApi = useAmazonApi()
	// console.log(amazonApi)
	return (
		<section id="ideas-recientes" className="relative py-20">
			<div className="container mx-auto flex w-full flex-col gap-20">
				<h2 className="text-3xl font-semibold">Ideas Recientes</h2>
				<div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-4">
					<CardNewGeneration
						name="Basketball Hoop Set"
						description="Adjustable basketball hoop with a sturdy steel frame and shatterproof backboard. Perfect for indoor or outdoor play."
						isFlipped
					/>
					<CardNewGeneration name="test" isFlipped />
					<CardNewGeneration name="test" isFlipped />
					<CardNewGeneration name="test" isFlipped />
				</div>
			</div>
		</section>
	)
}
