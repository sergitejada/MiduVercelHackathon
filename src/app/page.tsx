import FaqSection from "@/components/faq-section"
import GiftGeneratorForm from "@/components/gift-generator-form/gift-generator-form"
import NavSection from "@/components/nav-section"
import NewGenerationsSection from "@/components/new-generations-section"
import { FlipWords } from "../components/ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default async function HomePage() {
	return (
		<div className="h-[500px] bg-orange-200">
			<NavSection />
			<div className="flex flex-col">
				<div className="n relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
					<div className="mt-40 flex h-[40rem] flex-col justify-start gap-8 px-4">
						<h1 className="text-4xl font-extrabold leading-[50px]">
							Encuentra el Regalo Ideal <br />
							para tu <FlipWords words={words} />
						</h1>
						<h2 className="text-sm font-semibold text-gray-700">
							Facilita la búsqueda de regalos con sugerencias personalizadas basadas en inteligencia artificial.
						</h2>
					</div>
					<GiftGeneratorForm />
				</div>
				<NewGenerationsSection />
				<FaqSection />
			</div>
		</div>
	)
}
