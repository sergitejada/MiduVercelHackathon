import CardProduct from "@/components/ui/card-product"
import Image from "next/image"

const slug = "regalos-para-boda-hombre-mejores-ideas"
const title = "Las Mejores Ideas para Sorprender al Novio"

export default function RegalosParaPage() {
	return (
		<div className="mx-auto mt-20 flex max-w-7xl flex-row justify-between gap-4">
			<div>
				<h1 className="text-3xl font-bold">{title}</h1>

				<div className="mt-6 flex w-full justify-center">
					<Image
						src="/assets/hombre-boda.jpg"
						alt="Hombre en una boda"
						width={800}
						height={600}
						className="h-[600px] w-full rounded object-cover"
					/>
				</div>

				<div className="mx-auto mt-10 max-w-4xl">
					<p>
						Elegir el regalo perfecto para una boda puede ser un desafío, especialmente cuando se trata de encontrar
						algo que realmente impresione al novio. Ya sea que busques algo clásico, personalizado, tecnológico o
						incluso una experiencia inolvidable, es importante que el regalo refleje la personalidad y los intereses del
						hombre que lo recibirá. En este artículo, exploraremos una variedad de opciones para asegurarte de que
						encuentres el regalo ideal que haga sentir especial al novio en su gran día.
					</p>
					<h2 className="mt-6 font-bold">Regalos Clásicos para el Novio</h2>
					<p>
						Los regalos clásicos nunca pasan de moda y siempre son una apuesta segura. Estos regalos suelen ser
						elegantes y atemporales, adecuados para un hombre sofisticado.
					</p>

					<h3 className="mt-6 font-semibold">1. Reloj de Lujo</h3>
					<p>
						Un reloj de lujo es un símbolo de estilo y sofisticación. Marcas como Rolex, Omega y Tag Heuer ofrecen
						opciones que combinan diseño y funcionalidad. Un reloj no solo es un accesorio elegante, sino también un
						recordatorio diario de un día tan especial.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Reloj de Lujo"} description={""} link={""} />
				</div>
			</div>
			<div className="w-96 border">
				<p>Second</p>
			</div>
		</div>
	)
}
