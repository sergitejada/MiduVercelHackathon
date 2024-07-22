import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { Relation } from "@/types/types"
import AgeCard from "../age-step/age-card"
import GiftGeneratorFormFooter from "../gift-generator-form-footer"

export default function RelationStep() {
	const gift = useGiftGeneratorFormStore(state => state.gift)
	const setGift = useGiftGeneratorFormStore(state => state.setGift)
	const nextStep = useGiftGeneratorFormStore(state => state.nextStep)

	function handleRelationSelected(relation: Relation) {
		setGift({
			...gift,
			relation
		})
		nextStep()
	}

	return (
		<>
			<div className="flex flex-wrap">
				<div className="flex w-full flex-col items-center gap-4">
					<h2 className="mb-10 text-2xl font-bold">¿Qué relación tienes?</h2>
					<div className="grid w-full grid-cols-2 gap-4">
						<AgeCard
							age="Pareja"
							selected={gift?.relation === "couple"}
							onSelect={() => handleRelationSelected("couple")}
						/>
						<AgeCard
							age="Compañero de trabajo"
							selected={gift?.relation === "coworker"}
							onSelect={() => handleRelationSelected("coworker")}
						/>
						<AgeCard
							age="Amigo"
							selected={gift?.relation === "friend"}
							onSelect={() => handleRelationSelected("friend")}
						/>
						<AgeCard
							age="Abuelo"
							selected={gift?.relation === "grandfather"}
							onSelect={() => handleRelationSelected("grandfather")}
						/>
						<AgeCard
							age="Nieto"
							selected={gift?.relation === "grandson"}
							onSelect={() => handleRelationSelected("grandson")}
						/>
						<AgeCard age="Hijo" selected={gift?.relation === "son"} onSelect={() => handleRelationSelected("son")} />
					</div>
				</div>
			</div>
			<GiftGeneratorFormFooter />
		</>
	)
}
