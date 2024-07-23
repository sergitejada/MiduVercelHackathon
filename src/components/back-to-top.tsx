"use client"

export default function BackToTop() {
	function handleBackToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	return (
		<div>
			<button
				className="fixed bottom-8 right-8 rounded-full border-4 border-black bg-white p-4 text-black drop-shadow-[3px_4px_0_rgba(0,0,0,1)]"
				onClick={handleBackToTop}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" />
				</svg>
			</button>
		</div>
	)
}
