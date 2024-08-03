const items = [
	{
		title: "Personaliza Cada Ocasión",
		description:
			"Nuestra IA analiza la información que proporcionas para encontrar el regalo ideal para cualquier evento."
	},
	{
		title: "Ahorra Tiempo y Esfuerzo",
		description: "Olvídate de buscar durante horas. Deja que nuestra tecnología avanzada haga el trabajo por ti."
	},
	{
		title: "Fácil y Rápido de Usar",
		description: "Introduce algunos detalles y nuestra IA se encargará del resto. ¡Así de simple!"
	}
]

export default function InfoSection() {
	return (
		<section className="mx-8 py-12 lg:mx-0">
			<div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{items.map(item => (
					<article key={item.title} className="rounded-lg border bg-white p-6 shadow-md">
						<h2 className="mb-4 text-center text-2xl font-semibold text-orange-500 lg:text-start">{item.title}</h2>
						<p className="text-center text-gray-700 lg:text-start">{item.description}</p>
					</article>
				))}
			</div>
		</section>
	)
}
