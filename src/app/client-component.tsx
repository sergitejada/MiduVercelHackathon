"use client"

import { useAmazonApi } from "@/hooks/use-amazon-api"

export default function ClientComponent() {
	const {} = useAmazonApi()

	return <div>ClientComponent</div>
}
