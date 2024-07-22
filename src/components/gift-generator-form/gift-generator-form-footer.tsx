import { useGiftGeneratorFormStore } from "@/store/gift-generator-form-store"
import { useMemo } from "react"
import Button from "../ui/button"

interface Props {
	children?: React.ReactNode
}

export default function GiftGeneratorFormFooter({ children }: Props) {
	const step = useGiftGeneratorFormStore(state => state.step)
	const previousStep = useGiftGeneratorFormStore(state => state.previousStep)

	const hasPrevious = useMemo(() => {
		return step !== 1
	}, [step])

	return (
		<footer className="flex justify-between">
			{hasPrevious && <Button onClick={previousStep}>Atrás</Button>}
			{children}
		</footer>
	)
}
