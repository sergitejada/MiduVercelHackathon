import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { AgeRange } from "@/types/types"
import AgeCard from "./age-card"

export default function AgeStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	function handleAgeSelected(age: AgeRange) {
		setGift({
			...gift,
			ageRange: age
		})
		nextStep()
	}

	return (
		<div className="mb-16 flex flex-wrap">
			<div className="flex flex-col items-center gap-4">
				<h2 className="mb-10 text-2xl font-bold">¿Que edad tiene la persona a la que le vas a regalar?</h2>
				<div className="grid w-full grid-cols-2 gap-4">
					<AgeCard age="0-12" onSelect={() => handleAgeSelected("0-12")} />
					<AgeCard age="13-18" onSelect={() => handleAgeSelected("13-18")} />
					<AgeCard age="19-30" onSelect={() => handleAgeSelected("19-30")} />
					<AgeCard age="31-50" onSelect={() => handleAgeSelected("31-50")} />
					<AgeCard age="51-70" onSelect={() => handleAgeSelected("51-70")} />
					<AgeCard age=">70" onSelect={() => handleAgeSelected(">70")} />
				</div>
			</div>
		</div>
	)
}
