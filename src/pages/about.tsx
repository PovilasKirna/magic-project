import { useState } from "react";
import styles from "../styles/about.module.css";

export default function About() {
	const [MousePosition, setMousePosition] = useState({
		left: 0,
	});

	const handleMove = (e: any) => {
		setMousePosition({
			left: e.pageX,
		});

		console.log((e.clientX / window.innerWidth) * 100);
	};

	document.onmousemove = (e) => handleMove(e);

	document.ontouchmove = (e) => handleMove(e.touches[0]);

	return (
		<>
			<div
				id="leftSide"
				className={`${styles.side} ${styles.leftSide}`}
				style={{ width: `${(MousePosition.left / window.innerWidth) * 100}%` }}
			>
				<h2 className={styles.title}>
					Sometimes a simple header is
					<span className={styles.fancy}>better</span>
				</h2>
			</div>
			<div id="rightSide" className={`${styles.side} ${styles.rightSide}`}>
				<h2 className={styles.title}>
					Sometimes a simple header is
					<span className={styles.fancy}>better</span>
				</h2>
			</div>
		</>
	);
}
