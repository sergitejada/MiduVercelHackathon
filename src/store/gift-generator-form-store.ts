import { GiftForm, GiftFormStep } from "@/types/types"
import { create } from "zustand"

interface GiftGeneratorFormStore {
	gift: GiftForm | null
	step: GiftFormStep

	setGift: (gift: GiftForm) => void
	nextStep: () => void
	previousStep: () => void
}

export const useGiftGeneratorFormStore = create<GiftGeneratorFormStore>()((set, get) => ({
	gift: null,
	step: "genre",

	setGift: gift => set({ gift }),
	nextStep: () => {
		const { step } = get()

		if (step === "moreDetails") return
		if (step === "genre") return set({ step: "ageRange" })
		if (step === "ageRange") return set({ step: "event" })
		if (step === "event") return set({ step: "hobbies" })
		if (step === "hobbies") return set({ step: "moreDetails" })
	},
	previousStep: () => {
		const { step } = get()

		if (step === "genre") return
		if (step === "ageRange") return set({ step: "genre" })
		if (step === "event") return set({ step: "ageRange" })
		if (step === "hobbies") return set({ step: "event" })
		if (step === "moreDetails") return set({ step: "hobbies" })
	}
}))
