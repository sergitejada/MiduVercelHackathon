export default function InfoSection() {
	return (
		<div className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div className="rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-2 text-2xl font-semibold text-orange-500">Personaliza Cada Ocasión</h2>
					<p className="text-gray-700">
						Nuestra IA analiza la información que proporcionas para encontrar el regalo ideal para cualquier evento.
					</p>
				</div>
				<div className="rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-2 text-2xl font-semibold text-orange-500">Ahorra Tiempo y Esfuerzo</h2>
					<p className="text-gray-700">
						Olvídate de buscar durante horas. Deja que nuestra tecnología avanzada haga el trabajo por ti.
					</p>
				</div>
				<div className="rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-2 text-2xl font-semibold text-orange-500">Fácil y Rápido de Usar</h2>
					<p className="text-gray-700">
						Introduce algunos detalles y nuestra IA se encargará del resto. ¡Así de simple!
					</p>
				</div>
			</div>
		</div>
	)
}
