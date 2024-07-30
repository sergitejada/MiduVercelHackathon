import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useEffect, useState } from "react"
import { useAmazonApi } from "./use-amazon-api"

export const useCleanResults = () => {
	const [cleanResults, setCleanResults] = useState<
		| {
				id: string
				producto: string
				descripcion: string
				imageUrl: string
		  }[]
		| null
	>(null)

	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)
	const results = useGiftGeneratorFormStore(state => state.results)

	const { fetchAmazonProduct } = useAmazonApi()

	useEffect(() => {
		async function doCleanResults() {
			const joinnedResults = results?.join("") || ""

			// Eliminar los caracteres de nueva línea y dividir la cadena por el delimitador `;`
			let parts = joinnedResults.replace(/\n/g, "").split(";")

			// Filtrar los elementos vacíos resultantes de la división y limpiar los espacios en blanco
			parts = parts.filter(part => part.trim() !== "").map(part => part.trim())

			// Convertir las partes en objetos con 'producto' y 'descripcion'
			const formattedParts = []
			for (let i = 0; i < parts.length; i++) {
				let [producto, descripcion] = parts[i].split(":").map(part => part.trim())
				const amazonProduct = await fetchAmazonProduct(producto)
				if (producto && descripcion) {
					formattedParts.push({
						id: crypto.randomUUID(),
						producto,
						descripcion,
						imageUrl: amazonProduct.imageUrl
					})
				}
			}

			setCleanResults(formattedParts)
		}

		doCleanResults()
	}, [results])

	return {
		status: giftGenerationStatus,
		results: cleanResults
	}
}
