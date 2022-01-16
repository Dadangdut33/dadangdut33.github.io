import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Test() {
	return (
		<div
			className='App'
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>Hello CodeSandbox</h1>
			<Box />
		</div>
	);
}

const css = {
	box: {
		backgroundColor: "linen",
		width: "30vw",
		height: "30vw",
		position: "relative",
	},
	fly: {
		position: "absolute",
		width: "20px",
		height: "20px",
		margin: "-10px",
		backgroundColor: "red",
		borderRadius: 10,
	},
};

function getRelativeCoordinates(event, referenceElement) {
	const position = {
		x: event.pageX,
		y: event.pageY,
	};

	const offset = {
		left: referenceElement.offsetLeft,
		top: referenceElement.offsetTop,
		width: referenceElement.clientWidth,
		height: referenceElement.clientHeight,
	};

	let reference = referenceElement.offsetParent;

	while (reference) {
		offset.left += reference.offsetLeft;
		offset.top += reference.offsetTop;
		reference = reference.offsetParent;
	}

	return {
		x: position.x - offset.left,
		y: position.y - offset.top,
		width: offset.width,
		height: offset.height,
		centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
		centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
	};
}

const Box = () => {
	const [mousePosition, setMousePosition] = useState({});
	const boxRef = useRef();
	const handleMouseMove = (e) => {
		setMousePosition(getRelativeCoordinates(e, boxRef.current));
	};
	return (
		<motion.div
			ref={boxRef}
			style={{ ...css.box, perspective: 600 }}
			onMouseMove={(e) => handleMouseMove(e)}
			animate={{
				rotateX: mousePosition.centerX * 20,
				rotateY: mousePosition.centerY * 20,
			}}
		>
			<motion.div
				style={{ ...css.fly, backgroundColor: "orange" }}
				animate={{
					x: mousePosition.x,
					y: mousePosition.y,
				}}
				transition={{ type: "tween" }}
			/>
		</motion.div>
	);
};
