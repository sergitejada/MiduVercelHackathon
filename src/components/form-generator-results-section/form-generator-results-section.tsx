"use client"

import { useCleanResponse } from "@/hooks/use-clean-response"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import CardNewGeneration from "../ui/card-new-generation"

export default function FormGeneratorResultsSection() {
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)
	const results = useGiftGeneratorFormStore(state => state.results)

	const cleanResults = useCleanResponse(results ? results.join("") : "")

	console.log(results)
	console.log(cleanResults)

	if (giftGenerationStatus === "idle") return null

	return (
		<section className="container mx-auto mb-40 rounded-[10px] border-4 border-black p-8">
			{giftGenerationStatus === "generating" && (
				<>
					<p className="text-center text-xl">Generating gifts...</p>
				</>
			)}
			{giftGenerationStatus === "error" && <p className="text-center text-xl text-red-600">Error</p>}
			{giftGenerationStatus === "success" && (
				<>
					<h2 className="text-4xl font-semibold">Results</h2>
					<div className="mt-8 flex justify-around gap-4">
						{cleanResults?.map((result, index) => (
							<div key={index}>
								<CardNewGeneration name={result.producto} description={result.descripcion} />
							</div>
						))}
					</div>
					<div className="mt-8 text-center">
						<button className="rounded-2xl border bg-orange-500 px-2 py-2 text-white hover:bg-orange-600">
							Generar mas regalos
						</button>
					</div>
				</>
			)}
		</section>
	)
}
