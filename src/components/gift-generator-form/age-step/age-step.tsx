import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { AgeRange } from "@/types/types"
import GiftGeneratorFormFooter from "../gift-generator-form-footer"
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
		<>
			<div className="mb-16 flex flex-wrap">
				<div className="flex w-full flex-col items-center gap-4">
					<h2 className="mb-10 text-2xl font-bold">¿Qué edad tiene esa persona?</h2>
					<div className="grid w-full grid-cols-2 gap-4">
						<AgeCard age="0-12" selected={gift?.ageRange === "0-12"} onSelect={() => handleAgeSelected("0-12")} />
						<AgeCard age="13-18" selected={gift?.ageRange === "13-18"} onSelect={() => handleAgeSelected("13-18")} />
						<AgeCard age="19-30" selected={gift?.ageRange === "19-30"} onSelect={() => handleAgeSelected("19-30")} />
						<AgeCard age="31-50" selected={gift?.ageRange === "31-50"} onSelect={() => handleAgeSelected("31-50")} />
						<AgeCard age="51-70" selected={gift?.ageRange === "51-70"} onSelect={() => handleAgeSelected("51-70")} />
						<AgeCard age=">70" selected={gift?.ageRange === ">70"} onSelect={() => handleAgeSelected(">70")} />
					</div>
				</div>
			</div>
			<GiftGeneratorFormFooter />
		</>
	)
}
