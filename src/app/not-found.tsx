import Link from "next/link"

export default function NotFound() {
	return (
		<div className="bg-orange-200">
			<div className="my-24 flex flex-col gap-8 text-center">
				<h1 className="text-8xl font-semibold">404</h1>
				<p className="text-2xl">Página no encontrada</p>
				<Link href="/">
					<button className="mx-auto rounded-md bg-orange-400 p-2 px-4 text-white">Volver al inicio</button>
				</Link>
			</div>
		</div>
	)
}
