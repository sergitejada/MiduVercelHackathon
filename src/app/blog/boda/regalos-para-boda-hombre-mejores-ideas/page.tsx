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
					{/*  */}
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
					<h3 className="mt-6 font-semibold">2. Gemelos Personalizados</h3>
					<p>
						Los gemelos son un accesorio clásico para cualquier traje de boda. Opta por gemelos personalizados con las
						iniciales del novio o la fecha de la boda para darle un toque especial y significativo.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Gemelos Personalizados"} description={""} link={""} />
					<h3 className="mt-6 font-semibold">3. Pluma Estilográfica</h3>
					<p>
						Una pluma estilográfica de alta calidad es un regalo ideal para un hombre que aprecia la escritura y la
						elegancia. Marcas como Montblanc y Parker ofrecen opciones exquisitas que el novio puede usar en momentos
						importantes de su vida.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Pluma Estilográfica"} description={""} link={""} />
					{/*  */}
					<h2 className="mt-6 font-bold">Regalos Tecnológicos para el Novio</h2>
					<p>
						Para el novio que es un apasionado de la tecnología, hay una variedad de regalos innovadores que pueden
						mejorar su vida diaria y proporcionarle horas de entretenimiento.
					</p>
					<h3 className="mt-6 font-semibold">1. Smartwatch</h3>
					<p>
						Un smartwatch combina la funcionalidad de un reloj con las capacidades de un dispositivo inteligente. Marcas
						como Apple, Samsung y Garmin ofrecen opciones que pueden rastrear la actividad física, recibir
						notificaciones y mucho más.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Smartwatch"} description={""} link={""} />

					<h3 className="mt-6 font-semibold">2. Auriculares Inalámbricos</h3>
					<p>
						Los auriculares inalámbricos de alta calidad, como los AirPods de Apple o los Bose QuietComfort, son
						perfectos para el novio que ama la música, los podcasts o simplemente necesita algo para hacer más
						llevaderos los desplazamientos diarios.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Auriculares Inalámbricos"} description={""} link={""} />

					<h3 className="mt-6 font-semibold">3. Altavoz Inteligente</h3>
					<p>
						Un altavoz inteligente como el Amazon Echo o el Google Home puede ser un regalo práctico y divertido. Estos
						dispositivos no solo reproducen música, sino que también pueden controlar otros dispositivos inteligentes en
						el hogar, hacer preguntas y mucho más.
					</p>
					<CardProduct src={"/assets/royal-oak.jpg"} title={"Altavoz Inteligente"} description={""} link={""} />
					{/*  */}
					<h2 className="mt-6 font-bold">Conclusión</h2>
					<p>
						Elegir el regalo perfecto para un hombre en su boda puede parecer una tarea desafiante, pero con un poco de
						reflexión y consideración, es posible encontrar algo que realmente resuene con su personalidad e intereses.
						Ya sea un regalo clásico, personalizado, tecnológico o una experiencia inolvidable, lo más importante es que
						el regalo venga del corazón y refleje el cariño y aprecio que sientes por él. Con las ideas presentadas en
						este artículo, esperamos haberte inspirado a encontrar el regalo perfecto que hará que el novio se sienta
						especial en su gran día.
					</p>
				</div>
			</div>
			<div className="w-96 border">
				<p>Second</p>
			</div>
		</div>
	)
}
