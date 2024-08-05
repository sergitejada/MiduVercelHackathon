import { getGifts } from "@/actions"
import CardNewGeneration from "../ui/card-new-generation"

export default async function NewGenerationsSection() {
	const { data, error } = await getGifts()

	return (
		<section id="ideas-recientes" className="relative py-20">
			<div className="container mx-auto flex w-full flex-col gap-20">
				<h2 className="text-center text-3xl font-semibold">Ideas Recientes</h2>
				{error ? (
					<div className="text-center text-red-500">
						<p>Hubo un error al cargar las ideas recientes</p>
					</div>
				) : (
					<div className="grid justify-center gap-12 md:grid-cols-2 lg:grid-cols-4">
						{data?.map(gift => (
							<CardNewGeneration
								key={gift.id}
								name={gift.name}
								description={gift.description}
								img={gift.imageUrl}
								isFlipped
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}
