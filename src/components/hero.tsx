import GiftGeneratorForm from "./gift-generator-form/gift-generator-form"
import { FlipWords } from "./ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default function Hero() {
	return (
		<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
			<div className="mt-40 flex h-[40rem] flex-col justify-start gap-8 px-4">
				<h1 className="text-4xl font-extrabold leading-[50px]">
					Encuentra el Regalo Ideal <br />
					para tu <FlipWords words={words} />
				</h1>
				<h2 className="text-sm font-semibold text-gray-700">
					Comienza a descubrir regalos perfectos hoy mismo con nuestra herramienta impulsada por IA.
				</h2>
			</div>
			<GiftGeneratorForm />
		</div>
	)
}
