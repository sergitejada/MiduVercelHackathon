import Image from "next/image"

interface Props {
	alt: string
}

export function Logo({ alt }: Props) {
	return <Image src="/assets/logo" alt={alt} width="64" height="64" />
}
