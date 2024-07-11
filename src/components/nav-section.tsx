import { Logo } from "./ui/logo"

export default function NavSection() {
	return (
		<div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
			<Logo alt="Logo" />
			<nav className="flex gap-8 underline">
				<a href="#">Como Funciona</a>
				<a href="#">Ideas Recientes</a>
				<a href="#">Regalos para</a>
			</nav>
		</div>
	)
}
