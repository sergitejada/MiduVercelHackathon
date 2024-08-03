"use server"

import { sql } from "@vercel/postgres"

export async function saveGifts(
	formattedParts: { id: string; producto: string; descripcion: string; imageUrl: string }[]
) {
	console.log(formattedParts)
	if (formattedParts.length > 0) {
		console.log("DB INSERT INTO")
		const data = formattedParts.map(part => [part.producto, part.descripcion, part.imageUrl])
		const numColumns = data[0].length

		// Crear placeholders para los valores
		const valuesPlaceholders = data
			.map(
				(_, rowIndex) =>
					`(${Array.from({ length: numColumns }, (_, colIndex) => `$${rowIndex * numColumns + colIndex + 1}`).join(", ")})`
			)
			.join(", ")

		// Aplanar los datos
		const values = data.flat()

		const query = `INSERT INTO "Gifts" ("name", "description", "images") VALUES ${valuesPlaceholders}`

		try {
			await sql.query(query, values)
			console.log("Insert successful")
		} catch (error) {
			console.log(error)
		}
	}
}
