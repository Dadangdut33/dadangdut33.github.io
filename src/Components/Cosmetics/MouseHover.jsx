import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function MouseHover({ isMobile }) {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 252 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	useEffect(() => {
		if (!isMobile) {
			const moveCursor = (e) => {
				cursorX.set(e.clientX - 16);
				cursorY.set(e.clientY - 16);
			};

			window.addEventListener("mousemove", moveCursor);

			return () => {
				window.removeEventListener("mousemove", moveCursor);
			};
		}
	}, [cursorX, cursorY, isMobile]);

	return (
		<motion.div
			className='cursor'
			style={{
				translateX: cursorXSpring,
				translateY: cursorYSpring,
			}}
		/>
	);
}
