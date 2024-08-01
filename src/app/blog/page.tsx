import CardArticle from "@/components/ui/card-article"
import { FlipWords } from "@/components/ui/flip-words"

const words = ["Amigo", "Pareja", "Familia"]

export default function RegalosParaPage() {
	return (
		<>
			<div className="flex min-h-screen flex-col">
				<div className="relative mx-auto flex max-w-7xl justify-center gap-10 pt-16">
					<div id="ideas-recientes" className="relative mx-auto flex max-w-7xl flex-col gap-10">
						<div className="flex flex-col justify-start gap-4">
							<h1 className="px-8 text-3xl font-extrabold">
								Encuentra el Regalo para tu <FlipWords words={words} />
							</h1>
						</div>
						<div className="flex flex-wrap justify-center gap-8">
							<CardArticle
								src="/assets/novio_boda.jpeg"
								title="Las Mejores Ideas para Sorprender al Novio"
								description=""
								link="/blog/boda/regalos-para-boda-hombre-mejores-ideas"
							/>
							<CardArticle
								src="/assets/aniversario_boda.jpg"
								title="7 Ideas para el 10 aniversario de boda"
								description=""
								link="/blog/aniversario/7-ideas-regalos-para-10-aniversario-boda"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
