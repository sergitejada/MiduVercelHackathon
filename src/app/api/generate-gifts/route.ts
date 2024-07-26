import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
	const { prompt } = await req.json()

	try {
		const { text } = await generateText({
			model: openai("gpt-3.5-turbo"),
			prompt
		})

		return new Response(text, { status: 200 })
	} catch (e) {
		console.error(e)
		return new Response(`Error: ${e}`, { status: 400 })
	}
}
