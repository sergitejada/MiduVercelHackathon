import { Key } from "react"
import CardNewGeneration from "../ui/card-new-generation"

export default async function NewGenerationsSection() {
	const response = await fetch("http://localhost:3000/api/db")
	const data = await response.json()

	return (
		<section id="ideas-recientes" className="relative py-20">
			<div className="container mx-auto flex w-full flex-col gap-20">
				<h2 className="text-center text-3xl font-semibold">Ideas Recientes</h2>
				<div className="grid justify-center gap-12 md:grid-cols-2 lg:grid-cols-4">
					{data.map(
						(
							item: { name: string; description: string | undefined; images: string },
							index: Key | null | undefined
						) => (
							<CardNewGeneration
								key={index}
								name={item.name}
								description={item.description}
								img={item.images}
								isFlipped
							/>
						)
					)}
				</div>
			</div>
		</section>
	)
}
