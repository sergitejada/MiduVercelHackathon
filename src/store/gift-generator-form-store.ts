import { GiftFormSteps } from "@/consts/consts"
import { GiftForm, GiftGenerationStatus } from "@/types/types"
import { create } from "zustand"

interface State {
	gift: GiftForm | null
	step: number
	giftGenerationStatus: GiftGenerationStatus
	results: string[] | null
}

interface Store extends State {
	setGift: (gift: GiftForm) => void
	nextStep: () => void
	previousStep: () => void
	setStep: (step: number) => void
	setGiftGenerationStatus: (status: GiftGenerationStatus) => void
	setResults: (results: string[]) => void
	resetStore: () => void
}

const initialState: State = {
	gift: null,
	step: 1,
	giftGenerationStatus: "idle",
	results: null
}

export const useGiftGeneratorFormStore = create<Store>()((set, get) => ({
	...initialState,

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
	},
	setStep: step => set({ step }),
	setGiftGenerationStatus: status => set({ giftGenerationStatus: status }),
	setResults: results => set({ results }),
	resetStore: () => set({ ...initialState })
}))
