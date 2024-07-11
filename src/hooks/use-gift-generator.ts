import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useMemo } from "react"

export const useGiftGenerator = () => {
	const step = useGiftGeneratorFormStore(state => state.step)

	const hasPrevious = useMemo(() => {
		return step !== "genre"
	}, [step])

	return {
		hasPrevious
	}
}
