import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const items = [
	{
		title: "¿Como funciona GiftHunter?",
		content:
			"GiftHunter utiliza algoritmos impulsados por inteligencia artificial para sugerir opciones de regalos personalizadas basadas en las preferencias e intereses de tu destinatario. Simplemente proporciona información básica sobre la persona para la que estás comprando, y nuestra ia generará una lista de regalos recomendados."
	},
	{
		title: "¿Es segura mi información personal?",
		content:
			"Sí, nos tomamos tu privacidad y seguridad muy en serio. Utilizamos protocolos de seguridad y cifrado estándar de la industria para proteger tu información personal y garantizar que tu experiencia de compra sea segura."
	},
	{
		title: "¿Cuánto tiempo tarda en generarse la lista de recomendaciones?",
		content:
			"La lista de recomendaciones se genera casi instantáneamente una vez que has proporcionado la información necesaria sobre el destinatario."
	},
	{
		title: "¿Puedo usar GiftHunter para diferentes ocasiones?",
		content:
			"Sí, GiftHunter está diseñado para ayudarte a encontrar regalos para una variedad de ocasiones, incluyendo cumpleaños, aniversarios, bodas, fiestas y más."
	},
	{
		title: "¿Qué tipos de regalos puedo esperar encontrar?",
		content:
			"Las recomendaciones pueden incluir una amplia gama de regalos, desde productos tecnológicos y gadgets hasta experiencias, libros, ropa, artículos de decoración y más, todos seleccionados en base a las preferencias del destinatario."
	},
	{
		title: "¿Hay algún costo por usar GiftHunter?",
		content: "El uso básico de GiftHunter es gratuito."
	}
]

export default function FaqSection() {
	return (
		<section id="como-funciona" className="relative bg-gradient-to-b from-neutral-100 to-neutral-50 px-8 py-32 lg:px-0">
			<div className="container mx-auto flex flex-col items-center gap-20">
				<h3 className="text-3xl font-semibold">Preguntas frequentes</h3>
				<Accordion type="single" collapsible className="mx-auto lg:w-[40rem]">
					{items.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="text-start text-lg font-bold">{item.title}</AccordionTrigger>
							<AccordionContent className="lg:max-w-[40rem]">{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
