import Button from "../ui/button"

export default function SideGiftsFormGenerator() {
	return (
		<aside className="h-fit w-[30rem] rounded-md border bg-white drop-shadow-lg">
			<header className="rounded-t-md bg-gray-100 p-4">
				<h2 className="text-xl font-semibold">Encuentra el regalo perfecto</h2>
			</header>
			<div className="p-4">
				<form>
					<div className="mb-4">
						<label htmlFor="recipient" className="block text-sm font-semibold text-gray-600">
							Para
						</label>
						<select id="recipient" name="recipient" className="mt-1 w-full rounded-md border p-2">
							<option value="1">Hombre</option>
							<option value="2">Mujer</option>
							<option value="3">Niño</option>
							<option value="4">Niña</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="price" className="block text-sm font-semibold text-gray-600">
							Precio
						</label>
						<select id="price" name="price" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							<option value="1">Menos de $50</option>
							<option value="2">$50 - $100</option>
							<option value="3">$100 - $200</option>
							<option value="4">Más de $200</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="occasion" className="block text-sm font-semibold text-gray-600">
							Ocasión
						</label>
						<select id="occasion" name="occasion" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							<option value="1">Aniversario</option>
							<option value="2">Cumpleaños</option>
							<option value="3">Boda</option>
							<option value="4">Graduación</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="interest" className="block text-sm font-semibold text-gray-600">
							Interés
						</label>
						<select id="interest" name="interest" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							<option value="1">Tecnología</option>
							<option value="2">Moda</option>
							<option value="3">Deportes</option>
							<option value="4">Hogar</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="more-about" className="block text-sm font-semibold text-gray-600">
							Más sobre la persona
						</label>
						<textarea
							id="more-about"
							name="more-about"
							rows={3}
							className="mt-1 h-32 max-h-96 min-h-32 w-full rounded-md border p-2 focus:outline-none"
						/>
					</div>
					<div className="flex justify-end">
						<Button>Buscar Regalo</Button>
					</div>
				</form>
			</div>
		</aside>
	)
}
