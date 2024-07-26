"use client"

import { useEffect } from "react"

export default function GiftForm({ value }: { value: string }) {
	console.log("value", value)

	useEffect(() => {
		console.log(value)
		fetch("/api/generate-gifts", {
			method: "POST",
			body: JSON.stringify({ prompt: value }),
			headers: {
				"Content-Type": "application/json"
			}
		})
		// formRef.current?.submit()
	}, [value])

	return <div />
}
