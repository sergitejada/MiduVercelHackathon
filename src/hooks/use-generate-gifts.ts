import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { GiftForm } from "@/types/types"

function generatePrompt(gift: GiftForm) {
	const { genre, ageRange, hobbies, event, relation, moreDetails } = gift

	const promptData = []

	promptData.push(`==${genre}==`)
	promptData.push(`==${ageRange}==`)
	promptData.push(`==${hobbies!.join(",")}==`)
	promptData.push(`==${event}==`)
	promptData.push(`==${relation}==`)
	promptData.push(`==${moreDetails}==`)

	const prompt = promptData.join("\n")

	return prompt
}

function fetchGifts(prompt: string) {
	return fetch("/api/generate-gifts", {
		method: "POST",
		body: JSON.stringify({ prompt }),
		headers: {
			"Content-Type": "application/json"
		}
	})
}

export const useGenerateGifts = () => {
	const setGiftGenerationStatus = useGiftGeneratorFormStore(state => state.setGiftGenerationStatus)
	const setResults = useGiftGeneratorFormStore(state => state.setResults)

	async function generateResults(gift: GiftForm) {
		if (!gift) return

		try {
			setGiftGenerationStatus("generating")

			const prompt = generatePrompt(gift)
			if (!prompt) throw new Error("Error generating prompt")

			const response = await fetchGifts(prompt)
			if (!response) throw new Error("Error fetching gifts")

			const data = await response.json()

			setResults([data])
		} catch (e) {
			console.error(e)
			setGiftGenerationStatus("error")
		}
	}

	return {
		generateResults
	}
}
