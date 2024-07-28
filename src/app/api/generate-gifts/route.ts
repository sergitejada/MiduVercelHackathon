import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
	const { prompt } = await req.json()

	console.log("hi")
	console.log(prompt)

	try {
		const { text } = await generateText({
			model: openai("gpt-3.5-turbo"),
			system:
				"El usuario te proporcionara 7 características te las adjunto a continuación entre =={característica}==, el usuario hará lo mismo\n-Genero-,-Edad-,-Hobby-,-Evento-,-Tipo de persona-,-Presupuesto-,-Descripción-\n\nCon las características proporcionadas recomienda regalos acorde a la persona\n\nLa salida siempre serán 5 recomendaciones ';{articulo}:{descripción};'\nNo añadas ningún texto de introducción al principio de la respuesta, siempre devuelve las recomendaciones directamente\nNo añadas en ningún momento el precio \nLa respuesta siempre será el nombre del articulo y una pequeña descripción máximo 200 caracteres para la descripción\nNo numeres los resultados, no le pongas ningún símbolo en la parte inicial\nNunca le digas al usuario que necesitas mas información\nLa salida siempre será en castellano",
			prompt
		})

		console.log(text)

		return Response.json(text, { status: 200 })
	} catch (e) {
		console.error(e)
		return Response.json(`Error: ${e}`, { status: 400 })
	}
}
