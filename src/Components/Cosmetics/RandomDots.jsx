import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function RandomDots() {
	// random dots appearing on the bg of the screen
	const [dots, setDots] = useState([]);

	useEffect(() => {
		var dotsCount = 140;
		const addDots = () => {
			if (window.innerWidth < 575) {
				dotsCount = 70;
			}

			const newDots = [];
			for (let i = 0; i < dotsCount; i++) {
				newDots.push({
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight,
					radius: Math.random() * 2,
					color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
					initialOpacity: Math.random() * 1 + 0.5,
					duration: Math.random() * 1 + 0.8,
					delay: Math.random() * 2 + 1,
					nextDelay: Math.random() * 2 + 1,
				});
			}
			setDots(newDots);
		};

		addDots();

		// add event listeners for window resizing
		window.addEventListener("resize", addDots);

		return () => {
			window.removeEventListener("resize", addDots);
		};
	}, []);

	return (
		<div className='dots-bg'>
			{dots.map((dot, index) => (
				<motion.span
					key={index}
					className='random-dot'
					style={{
						x: `${dot.x}px`,
						y: `${dot.y}px`,
						backgroundColor: dot.color,
						width: `${dot.radius * 2}px`,
						height: `${dot.radius * 2}px`,
						position: "fixed",
					}}
					initial={{ opacity: dot.initialOpacity }}
					animate={{ opacity: 0 }}
					transition={{ duration: dot.duration, delay: dot.delay, ease: "easeInOut", repeat: Infinity, repeatDelay: dot.nextDelay, repeatType: "mirror" }}
				/>
			))}
		</div>
	);
}
