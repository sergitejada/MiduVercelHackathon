import Image from "next/image"
import Link from "next/link"

interface Props {
	onlyLogo?: boolean
	url: string
}

export default function GoogleButton({ onlyLogo = false, url }: Props) {
	return (
		<Link href={`https://www.google.com/search?q=${url}`} target="_blank">
			<button className="flex h-full w-full gap-4 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow">
				<Image
					className="h-6 w-6"
					src="/assets/google-logo.svg"
					loading="lazy"
					alt="google logo"
					width={24}
					height={24}
				/>
				{!onlyLogo && <span>Ver en Google</span>}
			</button>
		</Link>
	)
}
