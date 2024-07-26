"use client"

import { useGeneratePrompt } from "@/hooks/use-generate-prompt"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import GiftForm from "../gift-form"

export default function FormGeneratorResultsSection() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)
	const prompt = useGiftGeneratorFormStore(state => state.prompt)

	const { PROMPT_CONTEXT } = useGeneratePrompt()

	if (giftGenerationStatus === "idle") return null

	return (
		<section className="container mx-auto mb-40 rounded-[10px] border-4 border-black p-8">
			{giftGenerationStatus === "generating" && (
				<>
					<p className="text-center text-xl">Generating gifts...</p>
					{prompt && <GiftForm value={prompt} />}
				</>
			)}
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
