import Link from "next/link"
import { Logo } from "./ui/logo"

export default function NavSection() {
	return (
		<div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
			<Link href="/" className="flex items-center gap-2">
				<Logo alt="Logo" />
				<span className="text-xl font-bold">GIFTHUNTER</span>
			</Link>

			<nav className="flex items-center gap-8">
				<Link className="hover:underline" href="/#ideas-recientes">
					Ideas Recientes
				</Link>
				<Link className="hover:underline" href="/blog">
					Blog
				</Link>
				<Link className="rounded-xl border-2 border-black bg-white px-1.5 py-1 hover:bg-orange-50" href="/">
					Generar Ideas
				</Link>
			</nav>
		</div>
	)
}
