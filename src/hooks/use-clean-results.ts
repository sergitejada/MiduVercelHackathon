import { saveGifts } from "@/actions"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Gift } from "@/types/types"
import { useEffect } from "react"
import { useAmazonApi } from "./use-amazon-api"

export const useCleanResults = () => {
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)
	const results = useGiftGeneratorFormStore(state => state.results)
	const cleanResults = useGiftGeneratorFormStore(state => state.cleanResults)
	const setCleanResults = useGiftGeneratorFormStore(state => state.setCleanResults)
	const setGiftGenerationStatus = useGiftGeneratorFormStore(state => state.setGiftGenerationStatus)

	const { fetchAmazonProduct } = useAmazonApi()

	useEffect(() => {
		if (!results) return

		async function doCleanResults() {
			const joinnedResults = results?.join("") || ""

			// Eliminar los caracteres de nueva línea y dividir la cadena por el delimitador `;`
			let parts = joinnedResults.replace(/\n/g, "").split(";")

			// Filtrar los elementos vacíos resultantes de la división y limpiar los espacios en blanco
			parts = parts.filter(part => part.trim() !== "").map(part => part.trim())

			// Convertir las partes en objetos con 'producto' y 'descripcion'
			try {
				const formattedParts: Gift[] = []
				for (let i = 0; i < parts.length; i++) {
					let [producto, descripcion] = parts[i].split(":").map(part => part.trim())
					const amazonProduct = await fetchAmazonProduct(producto)
					if (producto && descripcion) {
						formattedParts.push({
							id: crypto.randomUUID(),
							name: producto,
							description: descripcion,
							imageUrl: amazonProduct.imageUrl
						})
					}
				}

				const { error } = await saveGifts(formattedParts)
				if (error) {
					// !TODO - Handle error with toast
				}

				setCleanResults(formattedParts)
				setGiftGenerationStatus("success")
			} catch (error) {
				console.error(error)
				setGiftGenerationStatus("error")
			}
		}

		doCleanResults()
	}, [results])

	return {
		status: giftGenerationStatus,
		results: cleanResults
	}
}
