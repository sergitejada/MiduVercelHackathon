import GiftGeneratorForm from "@/components/gift-generator-form/gift-generator-form"
import Card from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"
import { FlipWords } from "../components/ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default async function HomePage() {
	return (
		<div className="h-[500px] bg-orange-200">
			<Logo alt="Logo" />
			<div className="flex flex-col gap-48">
				<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
					<div className="mt-28 flex h-[40rem] flex-col justify-start gap-8 px-4">
						<h1 className="text-4xl font-extrabold">
							Encuentra el Regalo Ideal <br />
							para tu <FlipWords words={words} />
						</h1>
						<h2 className="text-sm font-semibold text-gray-700">
							Facilita tu búsqueda con sugerencias personalizadas basadas en inteligencia artificial.
						</h2>
					</div>
					<GiftGeneratorForm />
				</div>

				<div className="relative mx-auto flex flex-col items-center gap-20">
					<h3 className="text-center text-xl font-bold">Como funciona el generador</h3>

					<div className="flex w-2/3 items-center gap-10">
						<span className="text-6xl">1</span>
						<Card className="h-32">
							<h4 className="text-sm font-semibold">Ingresa tus datos</h4>
							<p className="text-gray-700">
								Ingresa tus datos personales y el tipo de regalo que deseas encontrar. Nuestro generador de sugerencias
								personalizará la búsqueda según tus preferencias.
							</p>
						</Card>
					</div>

					<div className="flex w-2/3 items-center gap-10">
						<Card className="h-32">
							<h4 className="text-sm font-semibold">Ingresa tus datos</h4>
							<p className="text-gray-700">
								Ingresa tus datos personales y el tipo de regalo que deseas encontrar. Nuestro generador de sugerencias
								personalizará la búsqueda según tus preferencias.
							</p>
						</Card>
						<span className="text-6xl">2</span>
					</div>

					<div className="flex w-2/3 items-center gap-10">
						<span className="text-6xl">3</span>
						<Card className="h-32">
							<h4 className="text-sm font-semibold">Ingresa tus datos</h4>
							<p className="text-gray-700">
								Ingresa tus datos personales y el tipo de regalo que deseas encontrar. Nuestro generador de sugerencias
								personalizará la búsqueda según tus preferencias.
							</p>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
