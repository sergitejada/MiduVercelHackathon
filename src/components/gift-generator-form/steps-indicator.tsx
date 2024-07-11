export default function StepsIndicator() {
	return (
		<ol className="mb-4 flex w-full items-center justify-center sm:mb-5">
			<li className="flex w-full items-center text-black after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-orange-200 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12">
					1
				</div>
			</li>
			<li className="flex w-full items-center text-black after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12">
					2
				</div>
			</li>
			<li className="flex w-full items-center text-black after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12">
					3
				</div>
			</li>
			<li className="flex w-full items-center text-black after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12">
					4
				</div>
			</li>
			<li className="flex items-center text-black after:inline-block">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:h-12 lg:w-12">
					5
				</div>
			</li>
		</ol>
	)
}
