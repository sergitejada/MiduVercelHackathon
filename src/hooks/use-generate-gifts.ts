import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { GiftForm } from "@/types/types"

const PROMPT_CONTEXT = `
	El usuario te proporcionara 7 características te las adjunto a continuación entre =={característica}==, el usuario hará lo mismo
	-Genero-,-Edad-,-Hobby-,-Evento-,-Tipo de persona-,-Presupuesto-,-Descripción-

	Con las características proporcionadas recomienda regalos acorde a la persona

	La salida siempre serán 5 recomendaciones ';{articulo}:{descripción};'
	No añadas ningún texto de introducción al principio de la respuesta, siempre devuelve las recomendaciones directamente
	No añadas en ningún momento el precio 
	La respuesta siempre será el nombre del articulo y una pequeña descripción máximo 200 caracteres para la descripción
	No numeres los resultados, no le pongas ningún símbolo en la parte inicial
	Nunca le digas al usuario que necesitas mas información
	La salida siempre será en castellano
`

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

			setGiftGenerationStatus("success")
		} catch (e) {
			console.error(e)
			setGiftGenerationStatus("error")
		}
	}

	return {
		generateResults
	}
}
