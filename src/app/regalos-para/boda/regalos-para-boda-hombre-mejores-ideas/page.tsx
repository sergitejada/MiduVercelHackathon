import Image from "next/image"

const slug = "regalos-para-boda-hombre-mejores-ideas"
const title = "Las Mejores Ideas para Sorprender al Novio"

export default function RegalosParaPage() {
	return (
		<div className="mx-auto mt-20 max-w-6xl">
			<h1 className="text-center text-3xl font-bold">{title}</h1>
			<div className="mt-6 flex justify-center">
				<h4 className="w-full max-w-2xl items-center justify-center text-center text-xs font-semibold text-gray-600">
					Elegir el regalo perfecto para el novio en su boda puede ser un desafío. Descubre las mejores ideas y opciones
					para sorprenderlo y hacer que su día especial sea aún más memorable.
				</h4>
			</div>

			<div className="mt-6 flex w-full justify-center">
				<Image
					src="/assets/hombre-boda.jpg"
					alt="Hombre en una boda"
					width={1000}
					height={600}
					className="h-[600px] w-full rounded object-cover"
				/>
			</div>

			<div className="mx-auto mt-10 max-w-4xl">
				<p>
					Elegir el regalo perfecto para una boda puede ser un desafío, especialmente cuando se trata de encontrar algo
					que realmente impresione al novio. Ya sea que busques algo clásico, personalizado, tecnológico o incluso una
					experiencia inolvidable, es importante que el regalo refleje la personalidad y los intereses del hombre que lo
					recibirá. En este artículo, exploraremos una variedad de opciones para asegurarte de que encuentres el regalo
					ideal que haga sentir especial al novio en su gran día.
				</p>
				<h2 className="mt-6 font-bold">Regalos Clásicos para el Novio</h2>
				<p>
					Los regalos clásicos nunca pasan de moda y siempre son una apuesta segura. Estos regalos suelen ser elegantes
					y atemporales, adecuados para un hombre sofisticado.
				</p>
			</div>
		</div>
	)
}
