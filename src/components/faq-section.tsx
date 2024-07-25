import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export default function FaqSection() {
	return (
		<section id="como-funciona" className="relative bg-gradient-to-b from-neutral-100 to-neutral-50 py-32">
			<div className="mx-auto flex flex-col items-center gap-20">
				<h3 className="text-3xl font-semibold">Preguntas frequentes</h3>
				<Accordion type="single" collapsible className="max-w-4xl">
					<AccordionItem value="item-1">
						<AccordionTrigger>¿Como funciona GiftHunter?</AccordionTrigger>
						<AccordionContent>
							GiftHunter utiliza algoritmos impulsados por inteligencia artificial para sugerir opciones de regalos
							personalizadas basadas en las preferencias e intereses de tu destinatario. Simplemente proporciona
							información básica sobre la persona para la que estás comprando, y nuestra ia generará una lista de
							regalos recomendados.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>¿Es segura mi información personal?</AccordionTrigger>
						<AccordionContent>
							Sí, nos tomamos tu privacidad y seguridad muy en serio. Utilizamos protocolos de seguridad y cifrado
							estándar de la industria para proteger tu información personal y garantizar que tu experiencia de compra
							sea segura.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>¿Cuánto tiempo tarda en generarse la lista de recomendaciones?</AccordionTrigger>
						<AccordionContent>
							La lista de recomendaciones se genera casi instantáneamente una vez que has proporcionado la información
							necesaria sobre el destinatario.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger> ¿Puedo usar GiftHunter para diferentes ocasiones?</AccordionTrigger>
						<AccordionContent>
							Sí, GiftHunter está diseñado para ayudarte a encontrar regalos para una variedad de ocasiones, incluyendo
							cumpleaños, aniversarios, bodas, fiestas y más.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger> ¿Qué tipos de regalos puedo esperar encontrar?</AccordionTrigger>
						<AccordionContent>
							Las recomendaciones pueden incluir una amplia gama de regalos, desde productos tecnológicos y gadgets
							hasta experiencias, libros, ropa, artículos de decoración y más, todos seleccionados en base a las
							preferencias del destinatario.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6">
						<AccordionTrigger>¿Hay algún costo por usar GiftHunter?</AccordionTrigger>
						<AccordionContent>El uso básico de GiftHunter es gratuito.</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	)
}
