import CardGift from "@/components/ui/card-gift"
import { FlipWords } from "@/components/ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default function RegalosParaPage() {
	return (
		<div className="flex flex-col">
			<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
				<div id="ideas-recientes" className="relative mx-auto flex max-w-7xl flex-col gap-10">
					<div className="flex flex-col justify-start gap-4 px-4">
						<h1 className="text-3xl font-extrabold">
							Encuentra el Regalo para tu <FlipWords words={words} />
						</h1>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						<CardGift />
					</div>
				</div>
			</div>
		</div>
	)
}
