import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const MAX_DURATION = 30

export async function POST(req: Request) {
	const { messages } = await req.json()

	console.log("hi")

	try {
		const result = await streamText({
			model: openai("gpt-3.5-turbo"),
			messages,
			maxRetries: 0
		})

		const response = result.toAIStreamResponse()

		return response
	} catch (e) {
		console.log(e)
	}

	return null
}
