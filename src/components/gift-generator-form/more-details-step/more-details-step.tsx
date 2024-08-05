"use client"

import Button from "@/components/ui/button"
import Textarea from "@/components/ui/textarea"
import { useGenerateGifts } from "@/hooks/use-generate-gifts"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useRef } from "react"
import GiftGeneratorFormFooter from "../gift-generator-form-footer"

export default function MoreDetailsStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const clearResults = useGiftGeneratorFormStore(state => state.clearResults)

	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	const { generateResults } = useGenerateGifts()

	async function handleGenerate() {
		const details = textAreaRef.current?.value

		const newGift = {
			...gift,
			moreDetails: details
		}

		setGift({
			...newGift
		})

		clearResults()

		await generateResults(newGift)
	}

	return (
		<>
			<div>
				<h2 className="mb-4 text-2xl font-bold">¿Hay algo más que quieras contarnos?</h2>
				<h3 className="mb-6 text-sm font-semibold text-gray-700">
					Escribe aquí cualquier detalle que creas que pueda ayudarnos a encontrar el regalo perfecto.
				</h3>
				<Textarea ref={textAreaRef} className="w-full" maxLength={600} rows={8} defaultValue={gift?.moreDetails} />
			</div>
			<GiftGeneratorFormFooter>
				<Button onClick={handleGenerate}>Generate</Button>
			</GiftGeneratorFormFooter>
		</>
	)
}
