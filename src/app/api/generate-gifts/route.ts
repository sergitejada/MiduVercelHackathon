import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
	const { prompt } = await req.json()

	console.log("hi")
	console.log(prompt)

	try {
		const { text } = await generateText({
			model: openai("gpt-3.5-turbo"),
			prompt
		})

		console.log(text)

		return Response.json(text, { status: 200 })
	} catch (e) {
		console.error(e)
		return Response.json(`Error: ${e}`, { status: 400 })
	}
}
