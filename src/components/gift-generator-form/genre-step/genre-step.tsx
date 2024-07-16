import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Genre } from "@/types/types"
import OptionCardItem from "../option-card-item"

export default function GenreStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	function handleGenreSelected(genre: Genre) {
		setGift({
			...gift,
			genre
		})
		nextStep()
	}

	return (
		<div className="mx-auto flex flex-col gap-8">
			<h2 className="text-center text-2xl font-bold">¿A quién va dirigido tu regalo?</h2>
			<div className="grid grid-cols-2 gap-8">
				{/* <OptionCardItem src="/assets/man.svg" title="Hombre" onSelect={() => handleGenreSelected("man")} /> */}
				<OptionCardItem src="/assets/woman.png" title="Mujer" onSelect={() => handleGenreSelected("women")} />
				{/* <OptionCardItem src="/assets/woman.svg" title="Women" onSelect={() => handleGenreSelected("women")} /> */}
				<OptionCardItem src="/assets/man.png" title="Hombre" onSelect={() => handleGenreSelected("man")} />
			</div>
		</div>
	)
}
