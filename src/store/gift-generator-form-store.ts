import { GiftFormSteps } from "@/consts/consts"
import { GiftForm } from "@/types/types"
import { create } from "zustand"

interface GiftGeneratorFormStore {
	gift: GiftForm | null
	step: number

	setGift: (gift: GiftForm) => void
	nextStep: () => void
	previousStep: () => void
}

export const useGiftGeneratorFormStore = create<GiftGeneratorFormStore>()((set, get) => ({
	gift: null,
	step: 1,

	setGift: gift => set({ gift }),
	nextStep: () => {
		const { step } = get()

		const lastStep = GiftFormSteps.length
		if (step === lastStep) return

		GiftFormSteps.length === step ? set({ step: 1 }) : set({ step: step + 1 })
	},
	previousStep: () => {
		const { step } = get()

		if (step === 1) return

		set({ step: step - 1 })
	}
}))
