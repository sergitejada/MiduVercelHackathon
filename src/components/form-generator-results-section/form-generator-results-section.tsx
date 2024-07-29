"use client"

import { useCleanResults } from "@/hooks/use-clean-results"
import { useGenerateGifts } from "@/hooks/use-generate-gifts"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useEffect, useRef } from "react"
import Button from "../ui/button"
import CardNewGeneration from "../ui/card-new-generation"

export default function FormGeneratorResultsSection() {
	const gift = useGiftGeneratorFormStore(state => state.gift)

	const { status, results } = useCleanResults()
	const { generateResults } = useGenerateGifts()

	const formGeneratorResultsRef = useRef<HTMLDetailsElement>(null)

	useEffect(() => {
		if (status === "idle" || status === "success" || status === "error") return
		if (!formGeneratorResultsRef.current) return

		const element = formGeneratorResultsRef.current

		element.scrollIntoView({ behavior: "smooth", block: "center" })
	}, [status, formGeneratorResultsRef])

	async function handleGenerateMoreGifts() {
		if (!gift) return

		// !TODO: Maybe send the existing gifts to the server to avoid duplicates
		await generateResults(gift)
	}

	if (status === "idle") return null

	return (
		<section ref={formGeneratorResultsRef} id="formGeneratorResults">
			<div className="mb-40 min-h-[50rem] bg-orange-200 py-24">
				<div className="container mx-auto flex w-full flex-col gap-20">
					<h2 className="text-center text-4xl font-semibold">Results</h2>
					{status === "generating" && <h2 className="text-center text-4xl">Generating gifts...</h2>}
					{status === "error" && <p className="text-center text-4xl text-red-900">Error</p>}
					{status === "success" && (
						<>
							<div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-4">
								{results?.map((result, index) => (
									<CardNewGeneration key={index} name={result.producto} description={result.descripcion} />
								))}
							</div>
							<div className="mx-auto mt-8">
								<Button onClick={handleGenerateMoreGifts}>Generar mas regalos</Button>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	)
}
