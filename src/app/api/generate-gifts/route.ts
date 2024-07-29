import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
// Response.json() is only valid from TypeScript 5.2. If you use a lower TypeScript version, you can use NextResponse.json()
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextResponse } from "next/server"

const CONTEXT =
	"El usuario te proporcionará 7 características entre =={característica}==. Las características son: -Genero-, -Edad-, -Hobby-, -Evento-, -Tipo de persona-, -Presupuesto-, -Descripción-. Con las características proporcionadas, recomienda regalos acorde a la persona. La salida siempre serán 4 recomendaciones en el formato exacto ';{articulo}:{descripción};'. No añadas ningún texto de introducción al principio de la respuesta. Devuelve las recomendaciones directamente. No añadas en ningún momento el precio. La respuesta siempre será el nombre del artículo y una pequeña descripción de máximo 200 caracteres. No numeres los resultados, ni pongas ningún símbolo al inicio. Nunca le digas al usuario que necesitas más información. La salida siempre será en castellano. Las recomendaciones deben terminar siempre con un punto y coma al final de cada frase."

export async function POST(req: Request) {
	const { prompt } = await req.json()

	console.log("hi")
	console.log(prompt)

	try {
		const { text } = await generateText({
			model: openai("gpt-3.5-turbo"),
			system: CONTEXT,
			prompt
		})

		console.log(text)

		return NextResponse.json(text, { status: 200 })
	} catch (e) {
		console.error(e)
		return NextResponse.json(`Error: ${e}`, { status: 400 })
	}
}
