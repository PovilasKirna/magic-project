import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	//use a timer to check if user has scrolled
	//if so, close the menu
	//if not, keep it open
	//if user clicks on menu, keep it open
	//if user clicks on menu again, close it
	//if user clicks on a link, close it

	return (
		<>
			{/* define a simple nav sticked to the top of the page*/}
			{/* collapse the nav to a hamburger if scren is a phone*/}
			<nav className="flex items-center justify-between sm:justify-center flex-wrap backdrop-blur bg-slate/50 p-3 px-10 sticky top-0 z-50  select-none  ">
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
					<div className="p-2">Item</div>
					<div className="p-2">Item</div>
					<div className="p-2">Item</div>
					<div className="p-2">Item</div>
					<div className="p-2">Item</div>
					<div className="p-2">Item</div>
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
