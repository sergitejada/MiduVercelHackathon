import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
	const { prompt } = await req.json()

	try {
		const { text } = await generateText({
			model: openai("gpt-4-turbo"),
			prompt
		})

		console.log(text)

		return text
	} catch (e) {
		console.log(e)
		return new Response(`Error: ${e}`, { status: 400 })
	}
}
