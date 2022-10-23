import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Nav from "../components/nav";

export default function Home() {
	const ref = useRef<null | HTMLDivElement>(null);
	const page0 = useRef<null | HTMLDivElement>(null);
	const page1 = useRef<null | HTMLDivElement>(null);

	const isInView = useInView(ref);

	const handleScrollClick = () => {
		page1.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<Nav />
			<motion.div className="w-screen h-screen" id="0" ref={page0}>
				<div className="text-5xl font-bold text-center h-4/5 flex flex-row items-center justify-center">
					Who doesn't like magic?
				</div>
				<motion.div
					className="box flex flex-col justify-center items-center h-20"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 1.1 }}
					onClick={handleScrollClick}
				>
					<span></span>
					<span></span>
				</motion.div>
			</motion.div>
			<div
				className="w-screen h-screen flex items-center justify-center"
				id="1"
				ref={page1}
			>
				{!isInView && (
					<motion.div
						className="bg-red-300 rounded border-slate-100 w-1/2 h-1/2"
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							scale: 1.1,
							transition: { duration: 2 },
						}}
						whileHover={{
							scale: 1,
							transition: { duration: 0.2, type: "spring", stiffness: 400 },
						}}
						ref={ref}
					>
						<div
							className="text-5xl font-bold text-center h-4/5 flex flex-row items-center justify-center"
							id="box"
						>
							<span>Scroll</span>
							<span>&nbsp;down</span>
						</div>
					</motion.div>
				)}
			</div>
		</>
	);
}
