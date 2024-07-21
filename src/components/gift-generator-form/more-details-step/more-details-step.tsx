import Textarea from "@/components/ui/textarea"

export default function MoreDetailsStep() {
	return (
		<div>
			<h2 className="mb-4 text-2xl font-bold">¿Hay algo más que quieras contarnos?</h2>
			<h3 className="mb-6 text-sm font-semibold text-gray-700">
				Escribe aquí cualquier detalle que creas que pueda ayudarnos a encontrar el regalo perfecto.
			</h3>
			<Textarea className="w-full" maxLength={600} rows={8} />
		</div>
	)
}
