import CardGift from "@/components/ui/card-article"
import { FlipWords } from "@/components/ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default function RegalosParaPage() {
	return (
		<div className="flex flex-col">
			<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
				<div id="ideas-recientes" className="relative mx-auto flex max-w-7xl flex-col gap-10">
					<div className="flex flex-col justify-start gap-4">
						<h1 className="px-8 text-3xl font-extrabold">
							Encuentra el Regalo para tu <FlipWords words={words} />
						</h1>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						<CardGift
							src="/assets/stock.avif"
							title="Las Mejores Ideas para Sorprender al Novio"
							description=""
							link="/regalos-para/boda/regalos-para-boda-hombre-mejores-ideas"
						/>

						{/* <CardGift
							src="/assets/stock.avif"
							title="Regalos para Boda Hombre: Las Mejores Ideas para Sorprender al Novio"
							description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							link="#"
						/>

						<CardGift
							src="/assets/stock.avif"
							title="Regalos para Boda Hombre: Las Mejores Ideas para Sorprender al Novio"
							description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							link="#"
						/>

						<CardGift
							src="/assets/stock.avif"
							title="Regalos para Boda Hombre: Las Mejores Ideas para Sorprender al Novio"
							description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							link="#"
						/> */}
					</div>
				</div>
			</div>
		</div>
	)
}
