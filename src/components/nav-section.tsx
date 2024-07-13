import Link from "next/link"
import { Logo } from "./ui/logo"

export default function NavSection() {
	return (
		<div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
			<Logo alt="Logo" />
			<nav className="flex gap-8 underline">
				<Link href="#como-funciona">Como Funciona</Link>
				<Link href="#ideas-recientes">Ideas Recientes</Link>
				<Link href="">Regalos para</Link>
			</nav>
		</div>
	)
}
