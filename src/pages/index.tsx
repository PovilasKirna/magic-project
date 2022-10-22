export default function Home() {
	function scrollDown(pages: number) {
		if (
			document.getElementById("0").offsetWidth > 0 &&
			document.getElementById("0").offsetHeight > 0
		) {
			document.getElementById("1").scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<>
			<div className="w-screen h-screen" id="0">
				<div className="text-5xl font-bold text-center h-4/5 flex flex-row items-center justify-center">
					Who doesn't like
					<span>&nbsp;magic</span>?
				</div>
				<div
					className="box flex flex-col justify-center items-center h-20"
					onClick={() => {
						scrollDown(1);
					}}
				>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="w-screen h-screen" id="1">
				Page 2
			</div>
		</>
	);
}
