"use client"

import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"

export default function FormGeneratorResultsSection() {
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)

	if (giftGenerationStatus === "idle") return null

	return (
		<section className="container mx-auto mb-40 rounded-[10px] border-4 border-black p-8">
			{giftGenerationStatus === "generating" && <p className="text-center text-xl">Generating gifts...</p>}
			{giftGenerationStatus === "error" && <p className="text-center text-xl text-red-600">Error</p>}
			{giftGenerationStatus === "success" && (
				<>
					<h2>Results</h2>
					<p>Results will be shown here</p>
				</>
			)}
		</section>
	)
}
