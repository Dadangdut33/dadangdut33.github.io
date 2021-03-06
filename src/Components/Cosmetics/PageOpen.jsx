import { useEffect } from "react";
import { motion } from "framer-motion";
export default function PageOpen() {
	const blackBox = {
		initial: {
			height: "100vh",
			bottom: 0,
		},
		animate: {
			height: 0,
			transition: {
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
				delay: 2,
			},
		},
	};

	useEffect(() => {
		// check url, must not contain any hashtag
		if (window.location.hash) {
			window.location.href = window.location.href.split("#")[0];
		}

		// disable scroll for the whole page
		document.body.style.overflow = "hidden";

		// after 3 seconds enable scroll
		setTimeout(() => {
			document.body.style.overflow = "auto";
		}, 3000);
	}, []);

	return (
		<motion.div className='fixed-bottom pageopen-bg d-flex center justify-content-center w-100 bg-black' initial='initial' animate='animate' variants={blackBox}>
			<h1 className='m-auto text-page-open pb-3'>Welcome :)</h1>
		</motion.div>
	);
}
