import { create } from "zustand"

interface GiftGeneratorFormStore {
	gift: string
	step: number

	setGift: (gift: string) => void
	setStep: (step: number) => void
}

export const useGiftGeneratorFormStore = create<GiftGeneratorFormStore>()(set => ({
	gift: "",
	step: 0,

	setGift: gift => set({ gift }),
	setStep: step => set({ step })
}))
