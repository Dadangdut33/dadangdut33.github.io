import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
export default function BottomTest() {
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "-270px 0px",
	});

	const contentVariants = {
		hidden: {
			height: "0px",
			transition: {
				duration: 0.6,
			},
		},
		visible: {
			height: "fit-content",
			transition: {
				duration: 0.6,
			},
		},
	};

	const [hoverLink_1, setHoverLink_1] = useState(false);
	const [hoverLink_2, setHoverLink_2] = useState(false);
	const [hoverLink_3, setHoverLink_3] = useState(false);

	const linkFadeVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.3,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<section className='flex-dir-column' id='contact-me-section'>
			<div className='center-horizontal-vertical'>
				<span className='anchor' id='contact-me'></span>
				<h1 className='display-1 text-center'>Contact Me</h1>
				<motion.div ref={contentRef} initial='hidden' animate={contentInView ? "visible" : "hidden"} variants={contentVariants} style={{ overflow: "hidden", position: "absolute" }}>
					<div className='center-horizontal-vertical justify wrap-mid'>
						<p style={{ minWidth: "210px" }}>
							<i class='bi bi-envelope'></i>{" "}
							<a href='mailto:dadang.contact@gmail.com' target={"_blank"} rel='noreferrer' className='no-decoration' onMouseEnter={() => setHoverLink_1(true)} onMouseLeave={() => setHoverLink_1(false)}>
								dadang.contact@gmail.com{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_1 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
						<p>
							<i className='bi bi-github'></i>{" "}
							<a href='https://github.com/Dadangdut33' target={"_blank"} rel='noreferrer' className='no-decoration' onMouseEnter={() => setHoverLink_2(true)} onMouseLeave={() => setHoverLink_2(false)}>
								Dadangdut33{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_2 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
						<p>
							<i className='bi bi-linkedin'></i>{" "}
							<a
								href='https://www.linkedin.com/in/fauzan-farhan-antoro/'
								target={"_blank"}
								rel='noreferrer'
								className='no-decoration'
								onMouseEnter={() => setHoverLink_3(true)}
								onMouseLeave={() => setHoverLink_3(false)}
							>
								Fauzan Farhan Antoro{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_3 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
					</div>
				</motion.div>
			</div>
			<Footer />
		</section>
	);
}
