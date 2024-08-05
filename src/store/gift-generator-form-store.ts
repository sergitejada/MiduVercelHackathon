import { GIFT_FORM_STEPS } from "@/consts/consts"
import { Gift, GiftForm, GiftGenerationStatus } from "@/types/types"
import { create } from "zustand"

interface State {
	gift: GiftForm | null
	step: number
	giftGenerationStatus: GiftGenerationStatus
	results: string[] | null
	cleanResults: Gift[] | null
}

interface Store extends State {
	setGift: (gift: GiftForm) => void
	nextStep: () => void
	previousStep: () => void
	setStep: (step: number) => void
	setGiftGenerationStatus: (status: GiftGenerationStatus) => void
	setResults: (results: string[]) => void
	setCleanResults: (results: Gift[]) => void
	clearResults: () => void
	resetStore: () => void
}

const initialState: State = {
	gift: null,
	step: 1,
	giftGenerationStatus: "idle",
	results: null,
	cleanResults: null
}

export const useGiftGeneratorFormStore = create<Store>()((set, get) => ({
	...initialState,

	setGift: gift => set({ gift }),
	nextStep: () => {
		const { step } = get()

		const lastStep = GIFT_FORM_STEPS.length
		if (step === lastStep) return

		GIFT_FORM_STEPS.length === step ? set({ step: 1 }) : set({ step: step + 1 })
	},
	previousStep: () => {
		const { step } = get()

		if (step === 1) return

		set({ step: step - 1 })
	},
	setStep: step => set({ step }),
	setGiftGenerationStatus: status => set({ giftGenerationStatus: status }),
	setResults: results => set({ results }),
	setCleanResults: results => set({ cleanResults: results }),
	clearResults: () => set({ results: null, cleanResults: null }),
	resetStore: () => set({ ...initialState })
}))
