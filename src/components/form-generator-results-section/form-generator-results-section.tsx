"use client"

import { useCleanResults } from "@/hooks/use-clean-results"
import { useEffect, useRef } from "react"
import CardNewGeneration from "../ui/card-new-generation"

export default function FormGeneratorResultsSection() {
	const { status, results } = useCleanResults()

	const formGeneratorResultsRef = useRef<HTMLDetailsElement>(null)

	useEffect(() => {
		if (status === "idle" || status === "success" || status === "error") return
		if (!formGeneratorResultsRef.current) return

		const element = formGeneratorResultsRef.current

		element.scrollIntoView({ behavior: "smooth", block: "center" })
	}, [status, formGeneratorResultsRef])

	if (status === "idle") return null

	return (
		<section ref={formGeneratorResultsRef} id="formGeneratorResults">
			<div className="mb-40 min-h-[50rem] bg-orange-200 p-8 py-24">
				<div className="container mx-auto">
					<h2 className="text-4xl font-semibold">Results</h2>
					{status === "generating" && (
						<div className="mt-8">
							<h2 className="text-center text-4xl">Generating gifts...</h2>
						</div>
					)}
					{status === "error" && <p className="text-center text-xl text-red-600">Error</p>}
					{status === "success" && (
						<>
							<div className="mt-8 flex justify-around gap-4">
								{results?.map((result, index) => (
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
				</div>
			</div>
		</section>
	)
}
