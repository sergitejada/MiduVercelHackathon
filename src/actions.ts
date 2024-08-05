"use server"

import { Gift } from "@/types/types"
import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore, revalidatePath } from "next/cache"

export async function getGifts() {
	try {
		noStore()
		const { rows } = await sql<Gift>`SELECT * FROM "Gifts" ORDER BY "createdAt" DESC LIMIT 20;`

		return {
			data: rows
		}
	} catch (error) {
		return {
			error
		}
	}
}

export async function saveGifts(formattedParts: Gift[]) {
	try {
		if (formattedParts.length > 0) {
			const data = formattedParts.map(part => [part.name, part.description, part.imageUrl])
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

			const query = `INSERT INTO "Gifts" ("name", "description", "imageUrl") VALUES ${valuesPlaceholders}`

			await sql.query(query, values)

			revalidatePath("/")

			return {
				data: "Información guardada correctamente"
			}
		}
	} catch (error) {
		console.error(error)
	}

	return {
		error: "No se pudo guardar la información"
	}
}
