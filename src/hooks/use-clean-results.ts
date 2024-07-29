import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useMemo } from "react"

export const useCleanResults = () => {
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)
	const results = useGiftGeneratorFormStore(state => state.results)

	const cleanResults = useMemo(() => {
		const joinnedResults = results?.join("") || ""

		// Eliminar los caracteres de nueva línea y dividir la cadena por el delimitador `;`
		let parts = joinnedResults.replace(/\n/g, "").split(";")

		// Filtrar los elementos vacíos resultantes de la división y limpiar los espacios en blanco
		parts = parts.filter(part => part.trim() !== "").map(part => part.trim())

		// Convertir las partes en objetos con 'producto' y 'descripcion'
		const formattedParts = []
		for (let i = 0; i < parts.length; i++) {
			let [producto, descripcion] = parts[i].split(":").map(part => part.trim())
			if (producto && descripcion) {
				formattedParts.push({
					producto,
					descripcion
				})
			}
		}

		return formattedParts
	}, [results])

	return {
		status: giftGenerationStatus,
		results: cleanResults
	}
}
