import Textarea from "@/components/ui/textarea"

export default function MoreDetailsStep() {
	return (
		<div>
			<h2 className="mb-10 text-2xl font-bold">Añade información extra</h2>
			<Textarea className="w-full" rows={8} />
		</div>
	)
}
