import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Hobbies } from "@/types/types"
import { useMemo, useRef, useState } from "react"
import GiftGeneratorFormFooter from "../gift-generator-form-footer"
import HobbyCard from "./hobby-card"
import HobbyChip from "./hobby-chip"

type ItemType = {
	title: string
	value: Hobbies
	icon: string
	iconStyles?: string
}

const items: ItemType[] = [
	{
		title: "Música",
		value: "music",
		icon: "icon-music.svg"
	},
	{
		title: "Deporte",
		value: "sports",
		icon: "icon-sports.svg",
		iconStyles: "rotate-180"
	},
	{
		title: "Lectura",
		value: "reading",
		icon: "icon-reading.svg"
	},
	{
		title: "Cocina",
		value: "cooking",
		icon: "icon-cooking.svg"
	},
	{
		title: "Viajar",
		value: "travel",
		icon: "icon-travel.svg"
	},
	{
		title: "Comer",
		value: "eat",
		icon: "icon-eat.svg"
	}
]

export default function HobbiesStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	const [hobbies, setHobbies] = useState<Hobbies[] | string[]>(gift?.hobbies || [])
	const [customHobby, setCustomHobby] = useState<string | null>(null)

	const customHobbyInputRef = useRef<HTMLInputElement>(null)

	function handleEventSelected(hobby: Hobbies) {
		if (hobbies.includes(hobby)) {
			setHobbies(prevState => prevState.filter(item => item !== hobby))
		} else {
			setHobbies(prevState => [...prevState, hobby])
		}
	}

	function handleNextStep() {
		if (hobbies && hobbies.length > 0) {
			setGift({
				...gift,
				hobbies
			})
			nextStep()
		}
	}

	function handleAddCustomHobby(e: React.MouseEvent<HTMLButtonElement>) {
		if (!customHobbyInputRef.current) return
		if (!customHobby) return

		setHobbies(prevState => [...prevState, customHobby])
		setCustomHobby(null)
		customHobbyInputRef.current.value = ""
	}

	function handleOnDeleteChip(hobby: string) {
		setHobbies(prevState => prevState.filter(item => item !== hobby))
	}

	let customHobbyTimeout: NodeJS.Timeout
	function handleInputCustomHobbyChanged(e: React.ChangeEvent<HTMLInputElement>) {
		clearTimeout(customHobbyTimeout)

		const value = e.target.value
		if (value.length === 0) {
			setCustomHobby(null)
		} else {
			customHobbyTimeout = setTimeout(() => {
				setCustomHobby(value)
			}, 300)
		}
	}

	const customHobbies = useMemo(
		() => hobbies?.filter(hobby => !items.map(item => item.value.toString()).includes(hobby)),
		[hobbies]
	)

	return (
		<>
			<div className="flex w-full flex-col text-center">
				<h2 className="mb-10 text-2xl font-bold">¿Qué hobbies le gustan?</h2>
				{customHobbies && customHobbies.length > 0 && (
					<div className="mb-4 flex w-full flex-wrap justify-start gap-4 rounded-lg p-2">
						{customHobbies?.map((hobby, index) => (
							<HobbyChip key={hobby + index} text={hobby} onDelete={() => handleOnDeleteChip(hobby)} />
						))}
					</div>
				)}
				<div className="grid grid-cols-2 gap-4">
					{items.map(item => (
						<HobbyCard
							key={item.title}
							title={item.title}
							icon={item.icon}
							iconStyles={item.iconStyles}
							selected={hobbies.includes(item.value)}
							onSelect={() => handleEventSelected(item.value)}
						/>
					))}
					<div className="col-span-2 my-4 flex flex-col gap-4">
						<div className="col-span-2 flex w-full items-center gap-4">
							<p>Otro:</p>
							<Input
								ref={customHobbyInputRef}
								className="h-10 w-full"
								placeholder="Videojuegos"
								onChange={handleInputCustomHobbyChanged}
							/>
							<Button className="py-1.5" disabled={!customHobby} onClick={handleAddCustomHobby}>
								Añadir
							</Button>
						</div>
					</div>
				</div>
			</div>
			<GiftGeneratorFormFooter>
				<Button disabled={hobbies.length === 0} onClick={handleNextStep}>
					Siguiente
				</Button>
			</GiftGeneratorFormFooter>
		</>
	)
}
