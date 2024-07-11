import Button from "../components/ui/button"
import Card from "../components/ui/card"
import { FlipWords } from "../components/ui/flip-words"

const words = ["Padre", "Esposa", "Amigos", "Familia"]
export default async function HomePage() {
	return (
		<div className="h-[500px] bg-orange-200">
			<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-20">
				<div className="flex h-[40rem] items-center justify-center px-4">
					<div className="mx-auto text-4xl font-bold">
						Sorprende a tu
						<FlipWords words={words} /> <br />
						con el Regalo Ideal
					</div>
				</div>

				{/* <GiftForm /> */}
				<Card>
					<h1 className="text-white>Generador de text-6xl font-bold">AAAAAA</h1>
					<div className="w-36">
						<Button>Test</Button>
					</div>
				</Card>
			</div>
		</div>
	)
}
