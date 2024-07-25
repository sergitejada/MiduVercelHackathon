import { GiftForm } from "@/types/types"
import { useState } from "react"

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

export const useGeneratePromptResults = () => {
	const [prompt, setPrompt] = useState<string | null>(null)
	const [results, setResults] = useState<string | null>(null)

	function generateResults() {}

	function generatePrompt(gift: GiftForm) {
		const { genre, ageRange, hobbies, relation, moreDetails } = gift

		const promptData = []

		promptData.push(`==${genre}==`)
		promptData.push(`==${ageRange}==`)
		promptData.push(`==${hobbies!.join(",")}==`)
		promptData.push(`==${moreDetails}==`)
		promptData.push(`==${relation}==`)
		promptData.push(`==${moreDetails}==`)
	}

	return {
		prompt,
		results,
		generatePrompt,
		generateResults
	}
}
