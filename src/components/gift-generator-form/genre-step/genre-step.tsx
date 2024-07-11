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
		<>
			<OptionCardItem src="/assets/man.svg" title="Man" onSelect={() => handleGenreSelected("man")} />
			<OptionCardItem src="/assets/woman.svg" title="Women" onSelect={() => handleGenreSelected("women")} />
		</>
	)
}
