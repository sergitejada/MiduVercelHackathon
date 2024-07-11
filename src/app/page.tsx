import GiftGeneratorForm from "@/components/gift-generator-form/gift-generator-form"
import { Logo } from "@/components/ui/logo"
import { FlipWords } from "../components/ui/flip-words"

const words = ["Padre", "Esposa", "Amigos", "Familia"]

export default async function HomePage() {
	return (
		<div className="h-[500px] bg-orange-200">
			<Logo alt="Logo" />
			<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
				<div className="flex h-[40rem] items-center justify-center px-4">
					<div className="mx-auto w-[550px] text-5xl font-semibold">
						Sorprende a tu
						<FlipWords words={words} /> <br />
						con el Regalo Ideal
					</div>
				</div>
				<GiftGeneratorForm />
			</div>
		</div>
	)
}
