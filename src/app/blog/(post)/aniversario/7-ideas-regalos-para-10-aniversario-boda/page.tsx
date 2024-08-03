import CardProduct from "@/components/ui/card-product"
import Image from "next/image"

const slug = "7-ideas-regalos-para-10-aniversario-boda"
const title = "7 Ideas de reagalo para el 10º aniversario de boda"

export default function RegalosParaPage() {
	return (
		<div>
			<h1 className="text-3xl font-bold">{title}</h1>

			<div className="mt-6 flex w-full justify-center">
				<Image
					src="/assets/hombre-boda.jpg"
					alt="Hombre en una boda"
					width="800"
					height="800"
					className="aspect-video w-full rounded object-cover"
					unoptimized
					priority
				/>
			</div>
			<div className="mx-auto mt-10 max-w-4xl">
				<p>
					¡Felicidades por tu 10º aniversario! Celebrar una década de amor y compromiso es un logro increíble que merece
					ser conmemorado con un regalo significativo. Aquí te presento algunas ideas de regalos que pueden hacer que
					esta ocasión sea aún más especial:
				</p>
				<h3 className="mt-6 font-semibold">1. Joyería Personalizada</h3>
				<p>
					La joyería siempre es un clásico, pero puedes darle un toque especial con personalización. Considera un collar
					o una pulsera con las iniciales de ambos, una fecha significativa o incluso un mensaje grabado. Otra opción
					encantadora es un anillo de aniversario que complemente el anillo de compromiso o las alianzas de boda.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Joyería Personalizada"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">2. Experiencia de Viaje</h3>
				<p>
					Un viaje sorpresa o una escapada de fin de semana a un lugar especial puede ser una manera maravillosa de
					celebrar. Puedes elegir un destino que siempre hayan querido visitar o regresar al lugar donde pasaron su luna
					de miel. Las experiencias compartidas crean recuerdos duraderos y fortalecen el vínculo.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Experiencia de Viaje"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">3. Álbum de Fotos Personalizado</h3>
				<p>
					Revivir los mejores momentos de su relación con un álbum de fotos personalizado puede ser un regalo muy
					emotivo. Puedes incluir fotos de eventos importantes, vacaciones, y momentos cotidianos que han compartido.
					Agrega pequeñas notas o anécdotas junto a las fotos para darle un toque aún más personal.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Álbum de Fotos Personalizado"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">4. Renovación de Votos</h3>
				<p>
					Organizar una pequeña ceremonia para renovar sus votos matrimoniales puede ser una manera hermosa de reafirmar
					su compromiso y amor mutuo. Puede ser una ceremonia íntima solo para ustedes dos o una celebración con amigos
					y familiares cercanos.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Renovación de Votos"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">5. Obra de Arte Personalizada</h3>
				<p>
					Una pieza de arte que represente su amor y su historia puede ser un regalo único y significativo. Puede ser
					una ilustración de un lugar especial, una pintura de ustedes dos, o incluso una escultura personalizada. El
					arte es una forma hermosa de capturar y celebrar su relación.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Obra de Arte Personalizada"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">6. Cena Romántica en Casa o en un Restaurante Especial</h3>
				<p>
					Si disfrutan de la buena comida, una cena en un restaurante especial o una cena romántica preparada en casa
					puede ser una excelente manera de celebrar. Si optas por la cena en casa, puedes decorar el espacio con velas,
					flores y preparar el plato favorito de tu pareja.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Pluma Estilográfica"} description={""} link={""} />
				<h3 className="mt-6 font-semibold">7. Clases para Parejas</h3>
				<p>
					Tomar una clase juntos puede ser una experiencia divertida y enriquecedora. Pueden elegir algo que les
					interese a ambos, como clases de cocina, baile, arte o incluso un deporte nuevo. Aprender algo nuevo juntos
					puede ser una manera divertida de reconectar y crear nuevos recuerdos.
				</p>
				<CardProduct src={"/assets/royal-oak.jpg"} title={"Clases para Parejas"} description={""} link={""} />
			</div>
		</div>
	)
}
