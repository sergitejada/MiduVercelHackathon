"use client"

import { useChat } from "@ai-sdk/react"

export default function GiftForm() {
	const { messages, input, handleSubmit, handleInputChange } = useChat()

	return (
		<section className="absolute right-0 top-32 mx-auto flex h-[1000px] w-[700px] flex-col justify-between rounded-lg border bg-white p-4 shadow-xl">
			<div>
				{messages.map(m => (
					<div key={m.id} className="whitespace-pre-wrap">
						{m.role === "user" ? "User: " : "AI: "}
						{m.content}
					</div>
				))}
			</div>

			<form onSubmit={handleSubmit}>
				<input
					className="w-full rounded border border-gray-300 p-2 shadow-md"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
			</form>
		</section>
	)
}
