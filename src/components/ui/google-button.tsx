import Image from "next/image"

export default function GoogleButton() {
	return (
		<div className="flex items-center justify-center dark:bg-gray-800">
			<button className="flex gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300">
				<Image
					className="h-6 w-6"
					src="/assets/google-logo.svg"
					loading="lazy"
					alt="google logo"
					width={24}
					height={24}
				/>
				<span>Ver en Google</span>
			</button>
		</div>
	)
}
