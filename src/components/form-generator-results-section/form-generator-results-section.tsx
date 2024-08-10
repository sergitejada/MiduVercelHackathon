"use client"

import { useCleanResults } from "@/hooks/use-clean-results"
import { useGenerateGifts } from "@/hooks/use-generate-gifts"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useEffect, useMemo, useRef } from "react"
import CardNewGeneration from "../ui/card-new-generation"
import Loading from "../ui/loading"

export default function FormGeneratorResultsSection() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const cleanResults = useGiftGeneratorFormStore(state => state.cleanResults)

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

	const isLoading = useMemo(() => status === "generating" && !cleanResults, [status, results])

	if (status === "idle") return null

	return (
		<section ref={formGeneratorResultsRef} id="formGeneratorResults" className="mt-60">
			<div className="mb-40 min-h-[60rem] bg-orange-200 py-24">
				<div className="container mx-auto flex w-full flex-col gap-20">
					<h2 className="text-center text-4xl font-semibold">Resultados</h2>
					{isLoading && (
						<div className="flex flex-col justify-center gap-8">
							<h2 className="mx-auto text-center text-2xl">Generando regalos...</h2>
							<div className="mx-auto">
								<Loading />
							</div>
						</div>
					)}
					{status === "error" && (
						<p className="text-center text-4xl text-red-900">
							Hubo un error al generar los regalos. Por favor, intenta de nuevo.
						</p>
					)}
					{status === "success" && (
						<>
							<div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-4">
								{results?.map((result, index) => (
									<CardNewGeneration
										key={result.id}
										name={result.name}
										description={result.description}
										img={result.imageUrl}
									/>
								))}
							</div>
							{/* <div className="mx-auto mt-8">
								<Button onClick={handleGenerateMoreGifts}>Generar mas regalos</Button>
							</div> */}
						</>
					)}
				</div>
			</div>
		</section>
	)
}
