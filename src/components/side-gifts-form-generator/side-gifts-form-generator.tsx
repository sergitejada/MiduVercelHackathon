"use client"

import { useGenerateGifts } from "@/hooks/use-generate-gifts"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { AgeRange, Event, Genre, GiftForm, Hobbies, Relation } from "@/types/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Button from "../ui/button"

const genres: { label: string; value: Genre }[] = [
	{ label: "Chico", value: "man" },
	{
		label: "Chica",
		value: "women"
	}
]

const relations: { label: string; value: Relation }[] = [
	{ label: "Pareja", value: "couple" },
	{ label: "Compañera de trabajo", value: "coworker" },
	{ label: "Amiga", value: "friend" },
	{ label: "Abuela", value: "grandfather" },
	{ label: "Nieta", value: "grandson" },
	{ label: "Hija", value: "son" }
]

const events: { label: string; value: Event }[] = [
	{ label: "Cumpleaños", value: "birthday" },
	{ label: "Navidad", value: "christmas" },
	{ label: "San Valentín", value: "valentine" },
	{ label: "Graduación", value: "graduation" }
]

const hobbies: { label: string; value: Hobbies }[] = [
	{ label: "Música", value: "music" },
	{ label: "Deporte", value: "sports" },
	{ label: "Lectura", value: "reading" },
	{ label: "Cocina", value: "cooking" },
	{ label: "Viajar", value: "travel" },
	{ label: "Comer", value: "eat" }
]

const ages: { label: string; value: AgeRange }[] = [
	{ label: "0-12", value: "0-12" },
	{ label: "13-18", value: "13-18" },
	{ label: "19-30", value: "19-30" },
	{ label: "31-50", value: "31-50" },
	{ label: "51-70", value: "51-70" },
	{ label: ">70", value: ">70" }
]

export default function SideGiftsFormGenerator() {
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const clearResults = useGiftGeneratorFormStore(state => state.clearResults)
	const results = useGiftGeneratorFormStore(state => state.results)
	const giftGenerationStatus = useGiftGeneratorFormStore(state => state.giftGenerationStatus)

	const { generateResults } = useGenerateGifts()
	const router = useRouter()

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		const hobbies = formData.get("hobbies") as Hobbies

		const newGift: GiftForm = {
			ageRange: formData.get("ageRange") as AgeRange,
			event: formData.get("events") as Event,
			genre: formData.get("genre") as Genre,
			hobbies: [hobbies] as Hobbies[],
			relation: formData.get("relations") as Relation,
			moreDetails: formData.get("moreDetails") as string
		}

		setGift({
			...newGift
		})

		clearResults()

		await generateResults(newGift)
	}

	useEffect(() => {
		if (giftGenerationStatus === "error") {
			alert("Error generando regalos")
		}

		if (results) {
			router.push("/")
		}
	}, [giftGenerationStatus, results])

	return (
		<aside className="h-fit min-w-[25rem] rounded-md bg-white drop-shadow-lg">
			<header className="rounded-t-md bg-orange-400 p-4">
				<h2 className="text-xl font-semibold text-white">Encuentra el regalo perfecto</h2>
			</header>
			<div className="p-4">
				{giftGenerationStatus === "generating" && <p className="py-4 text-center">Generando regalos...</p>}
				{giftGenerationStatus === "error" && <p className="py-4 text-center">Error generando regalos</p>}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="genre" className="block text-sm font-semibold text-gray-600">
							Para
						</label>
						<select id="genre" name="genre" className="mt-1 w-full rounded-md border p-2">
							{genres.map(({ label, value }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="relations" className="block text-sm font-semibold text-gray-600">
							Qué es
						</label>
						<select id="relations" name="relations" className="mt-1 w-full rounded-md border p-2">
							{relations.map(({ label, value }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="ageRange" className="block text-sm font-semibold text-gray-600">
							Edad
						</label>
						<select id="ageRange" name="ageRange" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							{ages.map(({ label, value }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="events" className="block text-sm font-semibold text-gray-600">
							Evento
						</label>
						<select id="events" name="events" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							{events.map(({ label, value }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="hobbies" className="block text-sm font-semibold text-gray-600">
							Hobbies
						</label>
						<select id="hobbies" name="hobbies" className="mt-1 w-full rounded-md border p-2 focus:outline-none">
							<option value="musica">Música</option>
							<option value="deportes">Deporte</option>
							<option value="lectura">Lectura</option>
							<option value="cocina">Cocina</option>
							<option value="viajar">Viajar</option>
							<option value="comer">Comer</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="moreDetails" className="block text-sm font-semibold text-gray-600">
							Más sobre la persona
						</label>
						<textarea
							id="moreDetails"
							name="moreDetails"
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
