// hooks/use-clean-response.js

import { useMemo } from "react"

export function useCleanResponse(response: string) {
	return useMemo(() => {
		if (!response || typeof response !== "string") return []

		// Eliminar los caracteres de nueva línea y dividir la cadena por el delimitador `;`
		let parts = response.replace(/\n/g, "").split(";")

		// Filtrar los elementos vacíos resultantes de la división y limpiar los espacios en blanco
		parts = parts.filter(part => part.trim() !== "").map(part => part.trim())

		// Convertir las partes en objetos con 'producto' y 'descripcion'
		let formattedParts = []
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
	}, [response])
}
