import Image from "next/image"

interface Props {
	alt: string
}

export function Logo({ alt }: Props) {
	return <Image src="/assets/present.svg" alt={alt} width="40" height="40" />
}
