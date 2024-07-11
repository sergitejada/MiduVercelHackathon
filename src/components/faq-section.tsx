import Card from "./ui/card"

export default function FaqSection() {
	return (
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
	)
}
