import Link from "next/link"
import { Logo } from "./ui/logo"

export default function NavSection() {
	return (
		<div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
			<Link href="/">
				<Logo alt="Logo" />
			</Link>
			<nav className="flex gap-8">
				<Link className="hover:underline" href="/#como-funciona">
					Generar Ideas
				</Link>
				<Link className="hover:underline" href="/#como-funciona">
					Como Funciona
				</Link>
				<Link className="hover:underline" href="/#ideas-recientes">
					Ideas Recientes
				</Link>
				<Link className="hover:underline" href="/regalos-para">
					Blog
				</Link>
			</nav>
		</div>
	)
}
