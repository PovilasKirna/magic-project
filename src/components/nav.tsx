import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import github icon from fontawesome
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="flex items-center justify-between sm:justify-center flex-wrap backdrop-blur bg-slate/50 p-3 px-10 sticky top-0 z-50  select-none ">
				{/* logo */}
				<motion.div
					className="flex items-center flex-shrink-0 text-white mr-6"
					whileHover={{ scale: 1.05, rotate: 4 }}
				>
					<span className="font-semibold text-xl tracking-tight">Magic</span>
				</motion.div>
				{/* hamburger icon */}
				<motion.div
					className="block sm:hidden"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 1.1 }}
				>
					<button
						id="menu-button"
						className="p-2"
						onClick={() => {
							handleClick();
						}}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</motion.div>
				{/* menu */}
				<div className="hidden sm:flex sm:flex-row">
					<motion.div className="p-2" whileHover={{ scale: 1.2 }}>
						<Link href={"/"}>Home</Link>
					</motion.div>
					<motion.div className="p-2" whileHover={{ scale: 1.2 }}>
						<Link href={"/services"}>Services</Link>
					</motion.div>
					<motion.div className="p-2" whileHover={{ scale: 1.2 }}>
						<Link href={"/about"}>About</Link>
					</motion.div>
					<motion.div className="p-2" whileHover={{ scale: 1.2 }}>
						<Link href={"/github.com"}>
							<FontAwesomeIcon icon={faGithub} />
						</Link>{" "}
					</motion.div>
				</div>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="bg-red-200 w-2/5 h-content text-center sm:hidden sticky top-16 z-50"
						initial={{ opacity: 0, x: "140vw" }}
						animate={{ opacity: 1, x: "60vw" }}
						exit={{ opacity: 0, transition: { duration: 0.5 } }}
					>
						<div className="p-2 text">Item</div>
						<div className="p-2">Item</div>
						<div className="p-2">Item</div>
						<div className="p-2">Item</div>
						<div className="p-2">Item</div>
						<div className="p-2">Item</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
